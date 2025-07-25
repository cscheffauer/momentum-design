import { css } from 'lit';

import { hostFitContentStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    :host {
      --mdc-avatar-default-background-color: var(--mds-color-theme-avatar-default);
      --mdc-avatar-default-foreground-color: var(--mds-color-theme-common-text-primary-normal);
      --mdc-avatar-loading-indicator-background-color: var(--mds-color-theme-common-text-primary-disabled);
      --mdc-avatar-loading-indicator-foreground-color: var(--mdc-avatar-default-foreground-color);
      --mdc-avatar-loading-overlay-background-color: var(--mds-color-theme-common-overlays-secondary-normal);
    }
    :host([size='124'])::part(content) {
      width: 7.75rem;
      height: 7.75rem;
    }
    :host([size='88'])::part(content) {
      width: 5.5rem;
      height: 5.5rem;
    }
    :host([size='72'])::part(content) {
      width: 4.5rem;
      height: 4.5rem;
    }
    :host([size='64'])::part(content) {
      width: 4rem;
      height: 4rem;
    }
    :host([size='48'])::part(content) {
      width: 3rem;
      height: 3rem;
    }
    :host([size='32'])::part(content) {
      width: 2rem;
      height: 2rem;
    }
    :host([size='24'])::part(content) {
      width: 1.5rem;
      height: 1.5rem;
    }
    :host([size='124'])::part(loader) {
      transform: scale(1.5);
    }
    :host([size='88'])::part(loader) {
      transform: scale(1.2);
    }
    :host([size='72'])::part(loader),
    :host([size='64'])::part(loader) {
      transform: scale(0.8);
    }
    :host([size='48'])::part(loader) {
      transform: scale(0.6);
    }
    :host([size='32'])::part(loader) {
      transform: scale(0.4);
    }
    :host([size='24'])::part(loader) {
      transform: scale(0.3);
    }
    :host::part(content) {
      width: 2rem;
      height: 2rem;
      background-color: var(--mdc-avatar-default-background-color);
      color: var(--mdc-avatar-default-foreground-color);
      border-radius: 100vh;
      position: relative;
      display: grid;
      place-items: center;
    }
    :host::part(photo) {
      border-radius: 100vh;
      height: 100%;
      width: 100%;
      object-fit: cover;
      overflow: hidden;
    }
    :host::part(presence) {
      position: absolute;
      bottom: 0;
      right: 0;
    }
    :host::part(loading-wrapper) {
      position: absolute;
      border-radius: 100vh;
      width: 100%;
      height: 100%;
      background-color: var(--mdc-avatar-loading-overlay-background-color);
      display: grid;
      place-items: center;
    }
    :host::part(loader) {
      position: absolute;
      width: 1rem;
      transform: scale(0.4);
      aspect-ratio: 1;
      border-radius: 100vh;
      animation: loading-key 1s infinite linear alternate;
    }
    @keyframes loading-key {
      0% {
        box-shadow:
          1.25rem 0 var(--mdc-avatar-loading-indicator-foreground-color),
          -1.25rem 0 var(--mdc-avatar-loading-indicator-background-color);
        background: var(--mdc-avatar-loading-indicator-foreground-color);
      }
      33% {
        box-shadow:
          1.25rem 0 var(--mdc-avatar-loading-indicator-foreground-color),
          -1.25rem 0 var(--mdc-avatar-loading-indicator-background-color);
        background: var(--mdc-avatar-loading-indicator-background-color);
      }
      66% {
        box-shadow:
          1.25rem 0 var(--mdc-avatar-loading-indicator-background-color),
          -1.25rem 0 var(--mdc-avatar-loading-indicator-foreground-color);
        background: var(--mdc-avatar-loading-indicator-background-color);
      }
      100% {
        box-shadow:
          1.25rem 0 var(--mdc-avatar-loading-indicator-background-color),
          -1.25rem 0 var(--mdc-avatar-loading-indicator-foreground-color);
        background: var(--mdc-avatar-loading-indicator-foreground-color);
      }
    }

    /* High Contrast Mode */
    @media (forced-colors: active) {
      :host::part(content) {
        outline: 0.125rem solid;
      }
    }
  `,
];

export default styles;
