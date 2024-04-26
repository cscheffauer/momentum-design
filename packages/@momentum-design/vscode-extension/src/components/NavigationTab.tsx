import { FC, CSSProperties } from 'react';
import classnames from 'classnames';
import { FocusRing, Text, ButtonSimple } from '@momentum-ui/react-collaboration';
import './NavigationTab.css';
import { AriaButtonProps } from '@react-types/button';

export interface Props extends AriaButtonProps {
    className?: string;
    id?: string;
    style?: CSSProperties;
    size?: number;
    label?: string;
    children?: React.ReactNode;
    active?: boolean;
}

export type NavTabSize = 200;


const NavigationTab: FC<Props> = (props: Props) => {
    const { label, className, id, style, active, children, ...otherProps } = props;

    const labelComponent =
        label ? (
            <Text className="navigationTabLabel" type="subheader-secondary">
                {label}
            </Text>
        ) : null;

    return (
        <FocusRing>
            <ButtonSimple
                className={classnames("navigationTabButton", className)}
                data-active={active}
                data-size={200}
                id={id}
                style={style}
                {...otherProps}
            >
                {children}
                {labelComponent}
            </ButtonSimple>
        </FocusRing>
    );
};

export default NavigationTab;