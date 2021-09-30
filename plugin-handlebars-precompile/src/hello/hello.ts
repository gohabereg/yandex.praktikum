import './hello.pcss';
import * as Handlebars from 'handlebars/runtime';
import template from './hello.hbs';

Handlebars.registerPartial('hello', template);
