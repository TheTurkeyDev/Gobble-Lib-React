import styled, { ThemeProps } from 'styled-components';
import { BaseTheme } from '../theme';
import { Subtitle1Css } from '../typography';

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
`;

const InputContainer = styled.div`
    background-color: ${({ theme }: ThemeProps<BaseTheme>) => theme.inputs.color};
    color:  ${({ theme }: ThemeProps<BaseTheme>) => theme.inputs.onVariant};
    padding: 0 12px 0 16px;
    border-radius: 4px;
    border: 1px solid #00000040;
    height: 36px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    transition: background-color 0.2s;

    &:focus-within {
        color:  ${({ theme }: ThemeProps<BaseTheme>) => theme.inputs.on};
    }

    &:hover&:not(:focus-within) {
        background-color: ${({ theme }: ThemeProps<BaseTheme>) => theme.inputs.color}a8;
    }
`;

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
}

export const Input = ({ id, ...props }: InputProps) => {
    return (
        <InputContainer>
            <Icon />
            <StyledInput type='input' aria-label={`${id}-input`} id={id} {...props} />
            <Icon />
        </InputContainer>
    );
};