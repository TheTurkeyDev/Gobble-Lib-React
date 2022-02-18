import styled from 'styled-components';
import { Caption } from '../typography';

const HelperTextWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 48px auto;
    color: ${({ theme }) => theme.primary.on};
`;

const Label = styled.label`
    color: ${({ theme }) => theme.primary.on};
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

    &::placeholder {
        color: transparent;
    }

    &:placeholder-shown ~ ${Label} {
        cursor: text;
        top: 20px;
        font-size: 16px;
        transition: font-size 0.2s;
        transition: top 0.2s;
    }

    &:not(placeholder-shown) ~ ${Label}, &:focus ~ ${Label} {
        cursor: text;
        top: 5px;
        font-size: 12px;
        transition: font-size 0.2s;
        transition: top 0.2s;
    }
    
    &:focus ~ ${Label} {
        color: ${({ theme }) => theme.primary.color};
    }

    &:required, &:invalid {
        box-shadow: none;
    }
`;

const InputContainer = styled.div`
    background: ${({ theme }) => theme.surface.on}0A;
    padding: 0 12px 0 16px;
    border-bottom: 2px solid ${({ theme }) => theme.outline};
    height: 48px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    transition: border-color 0.2s;

    &:focus-within {
        border-bottom: 2px solid ${({ theme }) => theme.primary.color};
    }
`;

type InputProps = {
    readonly name: string
    readonly label: string
    readonly helperText?: string
    readonly value: string
    readonly onChange: (value: string) => void
}

export const Input = ({ name, label, helperText, value, onChange, ...props }: InputProps) => {
    return (
        <HelperTextWrapper>
            <InputContainer>
                <Icon />
                <InputWrapper>
                    <StyledInput type='input' aria-label={`${name}-input`} placeholder={label} name={name} id={name} value={value} onChange={e => onChange(e.target.value)} {...props} />
                    <Label htmlFor={name}>{label}</Label>
                </InputWrapper>
                <Icon />
            </InputContainer>
            <Caption>{helperText}</Caption>
        </HelperTextWrapper>
    );
};