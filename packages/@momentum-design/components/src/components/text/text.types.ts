export type FontType = 'body' | 'heading' | 'headline';
export type FontSize = 'small' | 'midsize' | 'large' | 'xlarge';
export type FontWeight = 'light' | 'regular' | 'medium' | 'bold';
export type FontDecoration = 'underline';

export type FontObject = {
    type: FontType,
    size: FontSize,
    weight: FontWeight,
    decoration?: FontDecoration
}
