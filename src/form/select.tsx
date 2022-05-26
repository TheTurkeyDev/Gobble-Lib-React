import React from 'react';
import styled, { ThemeProps } from 'styled-components';
import { Opacity } from '../constants/opacity';
import { BaseTheme } from '../theme/turkeydev-theme';
import { Subtitle1Css } from '../typography/typography';
import { Label } from './label';

const SelectWrapper = styled.select`
    ${Subtitle1Css}
    background-color: ${({ theme }: ThemeProps<BaseTheme>) => theme.inputs.color};
    color:  ${({ theme }: ThemeProps<BaseTheme>) => theme.inputs.on};
    padding: 0 12px 0 16px;
    border-radius: 4px;
    border: 1px solid ${({ theme }: ThemeProps<BaseTheme>) => theme.inputs.outlineLowered};
    height: 36px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    transition: background-color 0.2s;

    &:hover&:not(:focus-within) {
        opacity: ${Opacity.HOVER_MEDIUM};
    }

    &:disabled {
        background: ${({ theme }: ThemeProps<BaseTheme>) => theme.inputs.colorDisabled};
        color: ${({ theme }: ThemeProps<BaseTheme>) => theme.inputs.onDisabled};
        cursor: not-allowed;
    }
`;

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
    readonly label?: string
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    (
        {
            id,
            value,
            style,
            className,
            disabled,
            onChange,
            label,
            ...props
        }: SelectProps,
        ref: React.Ref<HTMLSelectElement>,
    ): JSX.Element => (
        <>
            {label && <Label htmlFor={id}>{label}</Label>}
            <SelectWrapper
                value={value}
                onChange={onChange}
                {...props}
                ref={ref}
            />
        </>
    ),
);

export const Option = styled.option`
    ${Subtitle1Css}
`;