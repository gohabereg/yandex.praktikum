import registerComponent from './utils/registerComponent';
import Router from './utils/Router';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import Block from './utils/Block';
import ProfilePage from './pages/profile';
import AuthController from './controllers/AuthController';

const components = require('./components/**/index.ts') as {[key: string]: { default: typeof Block }};

Object.values(components).forEach((component) => {
  registerComponent(component.default);
})

AuthController.fetchUser()
  .then(() => {
    const router = new Router();

    router
      .use('/', HomePage)
      .use('/login', LoginPage)
      .use('/signup', SignupPage)
      .use('/profile', ProfilePage)
      .start();
  });
