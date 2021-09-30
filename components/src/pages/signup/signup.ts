import Block from '../../utils/Block';
import AuthController from '../../controllers/AuthController';
import Router from '../../utils/Router';

export class SignupPage extends Block {
  protected getStateFromProps() {
    this.state = {
      onSignUp: async () => {
        const data: any = {};

        Object.entries(this.refs as {[key: string]: HTMLInputElement}).forEach(([key, input]) => {
          data[key] = input.value;
        });

        await AuthController.signup(data);
      },
    };
  }

  componentDidMount() {
    if (this.props.user.profile) {
      this.props.router.go('/profile')
    }
  }
  componentDidUpdate() {
    if (this.props.user.profile) {
      this.props.router.go('/profile')
    }

    return true;
  }

  render() {
    // language=hbs
    return `
        <div>
            Please, signup!<br>

            {{{Input placeholder="First name" ref="first_name"}}}<br/>
            {{{Input placeholder="Second name" ref="second_name"}}}<br/>
            {{{Input placeholder="Login" ref="login"}}}<br/>
            {{{Input placeholder="Email" type="email" ref="email"}}}<br/>
            {{{Input placeholder="Phone" type="tel" ref="phone"}}}<br/>
            {{{Input placeholder="Password" type="password" ref="password"}}}<br/>
            {{#if user.error }}
                <span style="color: red">{{user.error.reason}}</span><br/>
            {{/if}}
            {{{Button text="Sign Up" onClick=onSignUp}}} {{{Link text="Login" to="/login"}}}
        </div>`;
  }
}
