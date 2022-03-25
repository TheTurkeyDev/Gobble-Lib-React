import styled from 'styled-components';

type InputsWrapperProps = {
    readonly fullWidth?: boolean
}

export const InputsWrapper = styled.div<InputsWrapperProps>`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 16px;
    align-items: center;
    width: ${({ fullWidth }) => fullWidth ? '100%' : 'fit-content'};
`;