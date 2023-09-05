const element = document.querySelector('.icon');
const bolds = document.querySelectorAll('b');
const italics = document.querySelectorAll('i');
const underline = document.querySelectorAll('u');
const strikethrough = document.querySelectorAll('s');
const marked = document.querySelectorAll('mark');
const links = document.querySelectorAll('a');
const h1 = document.querySelector('h1');

element.addEventListener('click', () => {
  const randomColor = getRandomColor();
  element.style.color = randomColor;

  bolds.forEach(bold => {
    bold.style.color = randomColor;
  });

  italics.forEach(italic => {
    italic.style.color = randomColor;
  });

  underline.forEach(underline => {
    underline.style.color = randomColor;
  });

  strikethrough.forEach(strikethrough => {
    strikethrough.style.color = randomColor;
  });

  marked.forEach(marked => {
    marked.style.backgroundColor = randomColor;
  });

  links.forEach(link => {
    link.style.color = randomColor;
  });

  h1.style.color = randomColor;
});

document.addEventListener('DOMContentLoaded', () => {
    const randomColor = getRandomColor();

    element.style.color = randomColor;

    bolds.forEach(bold => {
        bold.style.color = randomColor;
    });

    italics.forEach(italic => {
        italic.style.color = randomColor;
    });

    underline.forEach(underline => {
        underline.style.color = randomColor;
    });

    strikethrough.forEach(strikethrough => {
        strikethrough.style.color = randomColor;
    });

    marked.forEach(marked => {
        marked.style.backgroundColor = randomColor;
    });

    links.forEach(link => {
        link.style.color = randomColor;
    });

    h1.style.color = randomColor;
  });

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}