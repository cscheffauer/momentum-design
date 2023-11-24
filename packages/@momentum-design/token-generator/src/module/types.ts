export type ColorType = {
    name: string;
    value: string;
    isDynamic?: boolean;
    isGradient?: boolean;
    startValue?: string;
    endValue?: string;
    originalGradientValue?: string;
};

export type TokenSchema = {
    dynamicTokens: Array<ColorType>;
}
