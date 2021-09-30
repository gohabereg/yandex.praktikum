import Block from '../../utils/Block';

export class HomePage extends Block {
  componentDidMount() {
    if (this.props.user) {
      this.props.router.go('/profile')
    }
  }

  render() {
    // language=hbs
    return `<div>
        Welcome!<br />
    
        {{{Link text="Login" to="/login"}}}
        {{{Link text="Sign Up" to="/signup"}}}
    </div>`;
  }
}
