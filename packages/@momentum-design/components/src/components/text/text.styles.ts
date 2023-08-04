import { css } from 'lit';

const styles = css`
:host {
  display: inline;
}

:host([role="paragraph"]) {
  display: block;
}

:host([aria-level="1"][role="heading"]) {}
:host([aria-level="2"][role="heading"]) {}
:host([aria-level="3"][role="heading"]) {}
:host([aria-level="4"][role="heading"]) {}
:host([aria-level="5"][role="heading"]) {}
:host([aria-level="6"][role="heading"]) {}
`;

export default styles;
