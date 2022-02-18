import styled from 'styled-components';
import { ButtonText } from './typography';
import { WithChildren } from './with-children-type';

type ButtonCSS = {
    readonly hasIcon: boolean
    readonly variant: string
}

const ButtonWrapper = styled.button<ButtonCSS>`
  align-items: center;
  width: fit-content;
  border-radius: 5px;
  display: grid;
  grid-template-columns: auto auto;
  gap: ${({ hasIcon }) => hasIcon ? '8px' : 0};
  padding: 8px 16px;
  background: ${({ variant, theme }) => variant === 'contained' ? theme.primary.color : 'transparent'};
  color: ${({ variant, theme }) => variant === 'contained' ? theme.primary.on : theme.primary.color};
  border: ${({ variant, theme }) => variant === 'outlined' ? `1px solid ${theme.primary.color}` : 'none'};

  &:hover {
    opacity: 92%;
    text-decoration: none;
    cursor: pointer;
  }

  &:disabled {
    background-color:${({ theme }) => theme.outline};
    cursor: not-allowed;
  }
`;

type ButtonProps = WithChildren & {
    readonly variant: string
    readonly icon?: string
    readonly onClick: () => void
}

//TODO: Remove bare div's
export const Button = ({ variant, icon, onClick, children }: ButtonProps) => (
    <ButtonWrapper variant={variant} hasIcon={!!icon} onClick={onClick}>
        <div>
            {icon}
        </div>
        <ButtonText>
            {children}
        </ButtonText>
    </ButtonWrapper>
);


type ButtonvariantProps = WithChildren & {
    readonly icon?: string
    readonly onClick: () => void
}

export const ContainedButton = ({ icon, onClick, children }: ButtonvariantProps) => (
    <Button variant='contained' icon={icon} onClick={onClick} children={children} />
);

export const OutlinedButton = ({ icon, onClick, children }: ButtonvariantProps) => (
    <Button variant='outlined' icon={icon} onClick={onClick} children={children} />
);

export const TextButton = ({ icon, onClick, children }: ButtonvariantProps) => (
    <Button variant='text' icon={icon} onClick={onClick} children={children} />
);