import Block from '../../utils/Block';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export class Button extends Block {
  constructor({text, onClick}: ButtonProps) {
    // Создаём враппер дом-элемент button
    super({text, events: {click: onClick}});
  }

  protected render(): string {
    // language=hbs
    return `<button type="button">{{text}}</button>`
  }
}
