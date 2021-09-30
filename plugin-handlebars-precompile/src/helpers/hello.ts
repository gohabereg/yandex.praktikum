import * as Handlebars from 'handlebars/runtime';

Handlebars.registerHelper('hello', (firstname, lastname) => {
  return `Hello, ${firstname} ${lastname}`;
})
