import utils from '../../utils/tag-name';
import { FontObject } from './text.types';

const TAG_NAME = utils.constructTagName('text');

const DEFAULTS = {
  TYPE: 'body' as const,
  SIZE: 'small' as const,
  WEIGHT: 'regular' as const,
};

const BODY: Array<FontObject> = [
  {
    type: 'body',
    size: 'small',
    weight: 'regular',
  },
  {
    type: 'body',
    size: 'small',
    weight: 'medium',
  },
  {
    type: 'body',
    size: 'small',
    weight: 'bold',
  },
  {
    type: 'body',
    size: 'midsize',
    weight: 'regular',
  },
  {
    type: 'body',
    size: 'midsize',
    weight: 'medium',
  },
  {
    type: 'body',
    size: 'midsize',
    weight: 'bold',
  },
  {
    type: 'body',
    size: 'large',
    weight: 'regular',
  },
  {
    type: 'body',
    size: 'large',
    weight: 'medium',
  },
  {
    type: 'body',
    size: 'large',
    weight: 'bold',
  },
];

const HEADING: Array<FontObject> = [
  {
    type: 'heading',
    size: 'small',
    weight: 'regular',
  },
  {
    type: 'heading',
    size: 'small',
    weight: 'medium',
  },
  {
    type: 'heading',
    size: 'small',
    weight: 'bold',
  },
  {
    type: 'heading',
    size: 'midsize',
    weight: 'regular',
  },
  {
    type: 'heading',
    size: 'midsize',
    weight: 'medium',
  },
  {
    type: 'heading',
    size: 'midsize',
    weight: 'bold',
  },
  {
    type: 'heading',
    size: 'large',
    weight: 'regular',
  },
  {
    type: 'heading',
    size: 'large',
    weight: 'medium',
  },
  {
    type: 'heading',
    size: 'large',
    weight: 'bold',
  },
  {
    type: 'heading',
    size: 'xlarge',
    weight: 'regular',
  },
  {
    type: 'heading',
    size: 'xlarge',
    weight: 'medium',
  },
  {
    type: 'heading',
    size: 'xlarge',
    weight: 'bold',
  },
];

const HEADLINE: Array<FontObject> = [
  {
    type: 'headline',
    size: 'small',
    weight: 'light',
  },
  {
    type: 'headline',
    size: 'small',
    weight: 'regular',
  },
];

const UNDERLINE: Array<FontObject> = [
  {
    type: 'body',
    size: 'small',
    weight: 'regular',
    decoration: 'underline',
  },
  {
    type: 'body',
    size: 'small',
    weight: 'medium',
    decoration: 'underline',
  },
  {
    type: 'body',
    size: 'midsize',
    weight: 'regular',
    decoration: 'underline',
  },
  {
    type: 'body',
    size: 'midsize',
    weight: 'medium',
    decoration: 'underline',
  },
  {
    type: 'body',
    size: 'large',
    weight: 'regular',
    decoration: 'underline',
  },
  {
    type: 'body',
    size: 'large',
    weight: 'medium',
    decoration: 'underline',
  },
];

const VALUES: Array<FontObject> = [...BODY, ...HEADING, ...HEADLINE, ...UNDERLINE];

export { TAG_NAME, DEFAULTS, VALUES };
