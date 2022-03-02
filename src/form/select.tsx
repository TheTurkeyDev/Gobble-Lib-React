import React from 'react';
import styled, { ThemeProps } from 'styled-components';
import { BaseTheme } from '../theme/turkeydev-theme';

const SelectWrapper = styled.select`
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
        background-color: ${({ theme }: ThemeProps<BaseTheme>) => theme.inputs.color}a8;
    }
`;

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {

}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    (
        {
            value,
            style,
            className,
            disabled,
            ...props
        }: SelectProps,
        ref: React.Ref<HTMLSelectElement>,
    ): JSX.Element => (
        <SelectWrapper
            value={value}
            {...props}
            ref={ref}
        />
    ),
);