import Handlebars from 'handlebars/dist/handlebars';

Handlebars.registerHelper('hello', (firstname, lastname) => {
  return `Hello, ${firstname} ${lastname}`;
})
