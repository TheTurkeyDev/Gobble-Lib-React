import styled, { ThemeProps } from 'styled-components';
import { BaseTheme } from '../theme/turkeydev-theme';
import { Caption } from '../typography';

const HelperTextWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    gap: 4px;
    color: ${({ theme }: ThemeProps<BaseTheme>) => theme.primary.on};
`;

const Label = styled.label`
    color: ${({ theme }: ThemeProps<BaseTheme>) => theme.surface.on};
    position: absolute;
    font-size: 16px;
`;

const Icon = styled.div`
`;

const InputWrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
`;

const StyledInput = styled.input`
    background: transparent;
    color: inherit;
    outline: 0;
    border: 0;
    height: 32px;
    align-self: end;
    font-size: 16px;
    padding-bottom: 4px;

    &:not(:focus)&::placeholder {
        color: transparent;
    }

    &:placeholder-shown ~ ${Label} {
        cursor: text;
        top: 15px;
        font-size: 16px;
        transition: top 0.2s, font-size 0.2s;
    }

    &:not(placeholder-shown) ~ ${Label}, &:focus ~ ${Label} {
        cursor: text;
        top: 5px;
        font-size: 12px;
        transition: top 0.2s, font-size 0.2s;
    }
    
    &:focus ~ ${Label} {
        color: ${({ theme }: ThemeProps<BaseTheme>) => theme.primary.color};
        transition: color 0.2s;
    }

    &:required, &:invalid {
        box-shadow: none;
    }
`;

const InputContainer = styled.div`
    background: ${({ theme }: ThemeProps<BaseTheme>) => theme.surface.on}1A;
    padding: 0 12px 0 16px;
    border-radius: 4px 4px 0 0;
    border-bottom: 2px solid ${({ theme }: ThemeProps<BaseTheme>) => theme.inputs.onVariant};
    height: 56px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    transition: border-color 0.2s;

    &:focus-within {
        border-bottom: 2px solid ${({ theme }: ThemeProps<BaseTheme>) => theme.primary.color};
    }

    &:hover&:not(:focus-within) {
        background: ${({ theme }: ThemeProps<BaseTheme>) => theme.surface.on}2A;
    }
`;

const HelperText = styled(Caption)`
    padding-left: 16px;
`;

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    readonly label?: string
    readonly helperText?: string
}

export const Input = ({ id, label, helperText, ...props }: InputProps) => {
    return (
        <HelperTextWrapper>
            <InputContainer>
                <Icon />
                <InputWrapper>
                    <StyledInput type='input' aria-label={`${id}-input`} id={id} {...props} />
                    <Label htmlFor={id}>{label}</Label>
                </InputWrapper>
                <Icon />
            </InputContainer>
            <HelperText>{helperText}</HelperText>
        </HelperTextWrapper>
    );
};