import { forwardRef } from 'react';
import styled from 'styled-components';
import { Opacity } from '../constants/opacity';
import { Subtitle1Css } from '../typography/typography';
import { Label } from './label';

const StyledTextArea = styled.textarea`
    ${Subtitle1Css}
    background-color: ${({ theme }) => theme.inputs.color};
    color:  ${({ theme }) => theme.inputs.onVariant};
    padding: 0 12px 0 16px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.inputs.outlineLowered};
    display: grid;
    grid-template-columns: auto 1fr auto;
    transition: background-color 0.2s;

    &:hover&:not(:focus-within) {
        opacity: ${Opacity.HOVER_MEDIUM};
    }

    &:not(placeholder-shown){
        color: ${({ theme }) => theme.inputs.on};
    }

    &:required, &:invalid {
        box-shadow: none;
    }

    &:disabled {
        background: ${({ theme }) => theme.inputs.colorDisabled};
        color: ${({ theme }) => theme.inputs.onDisabled};
        cursor: not-allowed;
    }
`;

type TextAreaProps = React.InputHTMLAttributes<HTMLTextAreaElement> & {
    readonly label?: string
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ id, label, ...props }: TextAreaProps, ref: React.Ref<HTMLTextAreaElement>) => {
    return (
        <>
            {label && <Label htmlFor={id}>{label}</Label>}
            <StyledTextArea aria-label={`${id}-input`} id={id} ref={ref} {...props} />
        </>
    );
});