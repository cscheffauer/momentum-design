import type { ValueOf } from '../../utils/types';
import { THEME_NAMES } from './constants';

export type Theme = ValueOf<typeof THEME_NAMES>;
