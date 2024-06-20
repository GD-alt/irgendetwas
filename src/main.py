from sanic import response
from sanic import Sanic
from sanic.request import Request

from jinja2 import Environment, PackageLoader, select_autoescape
from pathlib import Path

import gemini

from yaml import safe_load
from traceback import format_exc
from random import choice
import re
import json

from urllib.parse import unquote as unescape


app = Sanic(__name__)

icons = safe_load(Path('templates/icons.yaml').read_text())['icons']

env = Environment(
    loader=PackageLoader('main', 'templates')
)


def classify(text: str) -> tuple:
    """Classifies the text as HTML, JSON or plain and outputs MIME type."""
    if not text:
        return 'text/plain', '404 Not Found'

    text = text.strip('```').strip('\n').strip()

    if text.startswith('html') or text.startswith('json'):
        text = text[4:].strip('```').strip('\n').strip()

    try:
        json.loads(text)
        return 'application/json', text
    except json.JSONDecodeError:
        if re.match(r'<[^>]+>', text):
            return 'text/html', text
        else:
            return 'text/plain', text


def split_to_title(text: str) -> str:
    """Splits the text into a page title."""
    if text[-1] == '/':
        text = text[:-1]

    return ' '.join([part.capitalize() for part in text.split('/')[-1].split('-')])


@app.route('/')
async def index(_: Request):
    data = Path('templates/index.html').read_text('utf-8')
    return response.html(data)


@app.route('/assets/<filename>')
async def assets(_: Request, filename: str):
    if not filename:
        return response.text('404 Not Found', status=404)

    if filename.endswith('.css'):
        return response.text(Path('templates/' + filename).read_text(), content_type='text/css')
    elif filename.endswith('.js'):
        return response.text(Path('templates/' + filename).read_text(), content_type='text/javascript')
    else:
        return response.text('403 Forbidden', status=403)


@app.route('/<thing:path>', methods=['get'])
async def thing_gen(_: Request, thing: str):
    if thing == 'favicon.ico':
        return response.text('404 Not Found', status=404)

    thing = unescape(thing)

    template = env.get_template('jinja/page.html')

    try:
        r = await gemini.generate_response(thing)
    except Exception:
        return response.text(str(format_exc()), status=500)

    rtype, data = classify(r)

    if rtype == 'application/json':
        return response.json(json.loads(data))
    elif rtype == 'text/plain':
        return response.text(data)

    return response.html(template.render(
        theme=split_to_title(thing),
        content=data,
        icon=choice(icons),
    ))


if __name__ == '__main__':
    app.run(host='localhost', port=8000, debug=True)
