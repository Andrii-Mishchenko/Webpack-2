import menuTemplate from '/src/templates/menu.hbs';

const menuData = {
  title: 'Eat it createElement, templates rule!',
  items: ['Handlebars', 'LoDash', 'Pug', 'EJS', 'lit-html'],
};

const markup = menuTemplate(menuData);
console.log(markup())

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'an', 'ausome', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());