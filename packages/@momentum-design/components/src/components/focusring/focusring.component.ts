import { FocusRing as MaterialFocusRing } from '@material/web/focus/internal/focus-ring';
import styles from './focusring.styles';

/**
 * FocusRing component, which has to be mounted inside of a interactable component, which
 * has `position: relative` defined.
 *
 * The FocusRing extends the MaterialFocusRing and overrides its styles to match Momentum;
 *
 * @tag mdc-focusring
 * @tagname mdc-focusring
 */
class FocusRing extends MaterialFocusRing {
  public static override styles = styles;
}

export default FocusRing;
