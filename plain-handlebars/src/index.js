import './helpers/hello';
import Handlebars from 'handlebars/dist/handlebars';
import template from './index.tmpl';
import './hello';

document.addEventListener('DOMContentLoaded', () => {
  const compiled = Handlebars.compile(template);

  document.body.innerHTML = compiled({ firstname: 'John', lastname: 'Doe' });;
});
