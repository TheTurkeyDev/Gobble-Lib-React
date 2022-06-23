import { forwardRef } from 'react';
import styled, { ThemeProps } from 'styled-components';
import { Opacity } from '../constants/opacity';
import { BaseTheme, GLThemeProps } from '../theme';
import { Subtitle1Css } from '../typography/typography';
import { Label } from './label';

const Icon = styled.div`
`;

const StyledInput = styled.input`
    ${Subtitle1Css}
    background: transparent;
    color: inherit;
    outline: 0;
    border: 0;
    height: 100%;

    &:required, &:invalid {
        box-shadow: none;
    }

    &:not(placeholder-shown){
        color: ${({ theme }: ThemeProps<BaseTheme>) => theme.inputs.on};
    }

    &:disabled {
        color: ${({ theme }: ThemeProps<BaseTheme>) => theme.inputs.onDisabled};
        cursor: not-allowed;
    }

    &:read-only {
        color: ${({ theme }: ThemeProps<BaseTheme>) => theme.inputs.onDisabled};
    }
`;

type InputContainerProps = {
    readonly disabled: boolean
    readonly readOnly: boolean
};

const InputContainer = styled.div<InputContainerProps>`
    background-color: ${({ theme, disabled, readOnly }: GLThemeProps<InputContainerProps>) => disabled || readOnly ? theme.inputs.colorDisabled : theme.inputs.color};
    color:  ${({ theme, disabled, readOnly }: GLThemeProps<InputContainerProps>) => disabled || readOnly ? theme.inputs.onDisabled : theme.inputs.onVariant};
    padding: 0 12px 0 16px;
    border-radius: 4px;
    border: 1px solid ${({ theme }: ThemeProps<BaseTheme>) => theme.inputs.outlineLowered};
    height: 36px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    transition: background-color 0.2s;
    cursor:  ${({ disabled, readOnly }: GLThemeProps<InputContainerProps>) => disabled || readOnly ? 'not-allowed' : ''};

    &:focus-within {
        color:  ${({ theme }: ThemeProps<BaseTheme>) => theme.inputs.on};
    }

    &:hover&:not(:focus-within) {
        opacity: ${Opacity.HOVER_MEDIUM};
    }
`;

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    readonly label?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ id, label, ...props }: InputProps, ref: React.Ref<HTMLInputElement>) => {
    return (
        <>
            {label && <Label htmlFor={id}>{label}</Label>}
            <InputContainer disabled={props.disabled ?? false} readOnly={props.readOnly ?? false}>
                <Icon />
                <StyledInput aria-label={`${id}-input`} id={id} ref={ref} {...props} />
                <Icon />
            </InputContainer>
        </>
    );
});