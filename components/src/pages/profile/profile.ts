import Block from '../../utils/Block';
import AuthController from '../../controllers/AuthController';

export class ProfilePage extends Block {
  protected getStateFromProps() {
    this.state = {
      onLogout: () => {
        AuthController.logout();
      },
    }
  }

  componentDidMount() {
    if (!this.props.user) {
      this.props.router.go('/');
    }
  }

  componentDidUpdate() {
    if (!this.props.user) {
      this.props.router.go('/');
    }

    return true;
  }

  render() {
    // language=hbs
    return `<div>
        Hi, {{ user.first_name }}!<br />
        
        Your info: <br />
        
        Email: {{ user.email }}<br />
        Login: {{ user.login }}<br />
    
        {{{Button text="Logout" onClick=onLogout}}}
    </div>`;
  }
}
