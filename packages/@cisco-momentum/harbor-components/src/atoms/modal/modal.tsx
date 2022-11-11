/* eslint-disable no-return-assign */
/* eslint-disable class-methods-use-this */
import { Component, Prop, h, Method } from '@stencil/core';
import type { Modal as HbrModal } from '@harbor/elements/dist/types/components/modal/modal';

@Component({
  tag: 'md-modal',
  styleUrl: 'modal.css',
  shadow: true,
})
export class Modal {
  /** Indicates whether or not the modal is open. You can use this in lieu of the show/hide methods. */
  @Prop({ mutable: true, reflect: true }) open = false;

  /**
   * The middle name
   */
  @Prop() middle: string = 'middle';

  /**
   * The last name
   */
  @Prop() last: string = 'last';

  /**
   * Modal element
   */
   @Prop() modal: HbrModal | undefined;

   /** Shows the modal */
   @Method()
   async show() {
     this.modal?.show();
   }

    /** Hide the modal */
    @Method()
   async hide() {
     this.modal?.hide();
   }

    handleOverlayDismiss(event: any) {
      event.preventDefault();
    }

    render() {
      return <hbr-modal
        ref={(el: any) => (this.modal = el)}
        open={this.open}
        onHbr-overlay-dismiss={this.handleOverlayDismiss}
        no-header>
            Hello, World! I'm
      </hbr-modal>;
    }
}
