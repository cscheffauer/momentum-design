import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'md-button',
  styleUrl: 'button.css',
  shadow: true,
})
export class Button {
  /**
   * The first name
   */
  @Prop() first: string = 'first';

  /**
   * The middle name
   */
  @Prop() middle: string = 'middle';

  /**
   * The last name
   */
  @Prop() last: string = 'last';

  render() {
    return <hbr-button>Hello, World! I'm</hbr-button>;
  }
}
