import Block from '../../utils/Block';

interface InputProps {
  onChange?: () => void;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  value?: string;
}

export class Input extends Block {
  constructor({onChange = () => {}, type = 'text', placeholder, value}: InputProps) {
    super({type, placeholder, value, events: {input: onChange}});
  }

  protected render(): string {
    // language=hbs
    return `<input type="{{type}}" placeholder="{{placeholder}}" value="{{value}}">`
  }
}
