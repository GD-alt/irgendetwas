const element = document.querySelector('.icon');
const bolds = document.querySelectorAll('b');
const italics = document.querySelectorAll('i');
const underline = document.querySelectorAll('u');
const strikethrough = document.querySelectorAll('s');
const marked = document.querySelectorAll('mark');
const links = document.querySelectorAll('a');
const h1 = document.querySelector('h1');
const buttons = document.querySelectorAll('button');
const tableHeaders = document.querySelectorAll('th');

var randomColor = getRandomColor();

element.addEventListener('click', () => {
  randomColor = getRandomColor();
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

  tableHeaders.forEach(tableHeader => {
    tableHeader.style.backgroundColor = randomColor;
    tableHeader.style.color = '#0d0d0d';
    tableHeader.style.border = '1px solid ' + randomColor;
  });

  h1.style.color = randomColor;
});

buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = randomColor;
    button.style.color = '#0d0d0d';
    button.style.border = '1px solid ' + randomColor;
  });

  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#0d0d0d';
    button.style.color = '#e1e1e1';
    button.style.border = '1px solid #e1e1e1';
  });
});

document.addEventListener('DOMContentLoaded', () => {
    randomColor = getRandomColor();

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

    tableHeaders.forEach(tableHeader => {
      tableHeader.style.backgroundColor = randomColor;
      tableHeader.style.color = '#0d0d0d';
      tableHeader.style.border = '1px solid ' + randomColor;
    });

    h1.style.color = randomColor;
  });

window.addEventListener('scroll', function() {
  var scrolled = window.scrollY > 0;
  var element = document.querySelector('.header');
  if (scrolled) {
    element.classList.add('shadow-header');
  } else {
    element.classList.remove('shadow-header');
  }
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}