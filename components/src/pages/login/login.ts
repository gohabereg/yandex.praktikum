import Block from '../../utils/Block';
import AuthController from '../../controllers/AuthController';

export class LoginPage extends Block {
  protected getStateFromProps() {
    this.state = {
      onLogin: async () => {
        const loginData = {
          login: (this.refs.login as HTMLInputElement).value,
          password: (this.refs.password  as HTMLInputElement).value
        };

        await AuthController.login(loginData);
      }
    }
  }

  componentDidMount() {
    if (this.props.user.profile) {
      this.props.router.go('/profile')
    }
  }

  render() {
    // language=hbs
    return `<div>
        Please, login!<br>
    
        {{{Input placeholder="Login" type="text" ref="login"}}}<br />
        {{{Input placeholder="Password" type="password" ref="password"}}}<br />
        {{#if user.error }}
            <span style="color: red">{{user.error.reason}}</span><br/>
        {{/if}}
        {{{Button text="Login" onClick=onLogin}}} {{{Link text="SignUp" to="/signup"}}}
    </div>`;
  }
}
