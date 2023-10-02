import type { FontObject } from './text.types';

export const joinAndFilter = (obj: FontObject) =>
  [obj.type, obj.size, obj.weight, obj.decoration].filter((item) => item).join('-');
