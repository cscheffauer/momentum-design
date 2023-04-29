/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable max-len */
import { TAG_NAME } from '../constants';

// make ReturnType a String Literal to make it usable in the HTMLElementTagNameMap per component
// using Template Literal Types: https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
type ReturnType<ComponentName extends string> = `${typeof TAG_NAME.PREFIX}${typeof TAG_NAME.DIVIDER}${ComponentName}`;

const constructTagName = <ComponentName extends string>(componentName: ComponentName): ReturnType<ComponentName> =>
    [TAG_NAME.PREFIX, componentName].join(TAG_NAME.DIVIDER) as ReturnType<ComponentName>;

export { constructTagName };
