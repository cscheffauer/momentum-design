import { html, nothing } from 'lit';
import type InputChip from './input-chip.component';

interface RemoveButtonProperties {
  ariaLabel: string;
  focusListener: EventListener;
  tabbable?: boolean;
}

function handleRemoveClick(this: InputChip, event: Event) {
  if (this.disabled) {
    return;
  }

  event.stopPropagation();
  const preventDefault = !this.dispatchEvent(new Event('remove', { cancelable: true }));
  if (preventDefault) {
    return;
  }

  this.remove();
}

export function renderRemoveButton({ ariaLabel, focusListener, tabbable = false }: RemoveButtonProperties) {
  return html`
    <button
      class="trailing action"
      aria-label=${ariaLabel}
      tabindex=${!tabbable ? -1 : nothing}
      @click=${handleRemoveClick}
      @focus=${focusListener}
    >
      <mdc-focus-ring part="trailing-focus-ring"></mdc-focus-ring>
      <svg class="trailing icon" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="m17.06 16 8.47-8.47a.751.751 0 0 0-.242-1.224.75.75 0 0 0-.819.163L16 14.94 7.53 6.47A.75.75 0 1 0 6.47 
          7.53L14.94 16l-8.47 8.47a.75.75 0 0 0 1.06 1.06L16 17.06l8.47 8.47a.75.75 0 1 0 1.06-1.06L17.06 16Z"
        />
      </svg>
      <span class="touch"></span>
    </button>
  `;
}
