import { forwardRef, JSX } from 'react';
import styled from 'styled-components';
import { Opacity } from '../constants/opacity';
import { Subtitle1Css } from '../typography/typography';
import { Label } from './label';

const StyledInput = styled.input`
    ${Subtitle1Css}
    background: transparent;
    color: inherit;
    outline: 0;
    border: 0;
    padding: 0;
    height: 100%;

    &:required, &:invalid {
        box-shadow: none;
    }

    &:not(placeholder-shown){
        color: ${({ theme }) => theme.inputs.on};
    }

    &:disabled {
        color: ${({ theme }) => theme.inputs.onDisabled};
        cursor: not-allowed;
    }

    &:read-only {
        color: ${({ theme }) => theme.inputs.onDisabled};
    }
`;

type InputContainerProps = {
    readonly disabled: boolean
    readonly readOnly: boolean
};

const InputContainer = styled.div<InputContainerProps>`
    background-color: ${({ theme, disabled, readOnly }) => disabled || readOnly ? theme.inputs.colorDisabled : theme.inputs.color};
    color:  ${({ theme, disabled, readOnly }) => disabled || readOnly ? theme.inputs.onDisabled : theme.inputs.onVariant};
    padding: 0 12px 0 16px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.inputs.outlineLowered};
    height: 36px;
    display: grid;
    transition: background-color 0.2s;
    cursor:  ${({ disabled }) => disabled ? 'not-allowed' : ''};

    &:focus-within {
        color:  ${({ theme }) => theme.inputs.on};
    }

    &:hover&:not(:focus-within) {
        opacity: ${Opacity.HOVER_MEDIUM};
    }
`;

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    readonly label?: string
    readonly prefixContent?: JSX.Element
    readonly postfixContent?: JSX.Element
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ id, label, prefixContent, postfixContent, ...props }: InputProps, ref: React.Ref<HTMLInputElement>) => {
    return (
        <>
            {label && <Label htmlFor={id}>{label}</Label>}
            <InputContainer disabled={props.disabled ?? false} readOnly={props.readOnly ?? false} style={{ gridTemplateColumns: `${prefixContent ? 'auto ' : ' '}1fr ${postfixContent ? 'auto' : ''}` }}>
                {prefixContent}
                <StyledInput aria-label={`${id}-input`} id={id} ref={ref} {...props} />
                {postfixContent}
            </InputContainer>
        </>
    );
});