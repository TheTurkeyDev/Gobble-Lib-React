import { forwardRef } from 'react';
import styled from 'styled-components';
import { GLThemeProps } from '../theme/turkeydev-theme';
import { ButtonText } from '../typography/typography';

type ButtonCSS = {
    readonly hasIcon: boolean
    readonly variant: 'contained' | 'outlined' | 'text'
    readonly disabled?: boolean
}

const ButtonWrapper = styled.button<ButtonCSS>`
  align-items: center;
  width: fit-content;
  border-radius: 5px;
  display: grid;
  grid-template-columns: auto auto;
  gap: ${({ hasIcon }) => hasIcon ? '8px' : 0};
  padding: 8px 16px;
  background: ${({ variant, theme }: GLThemeProps<ButtonCSS>) => variant === 'contained' ? theme.primary.color : 'transparent'};
  color: ${({ variant, theme }: GLThemeProps<ButtonCSS>) => variant === 'contained' ? theme.primary.on : theme.primary.color};
  border: ${({ variant, theme }: GLThemeProps<ButtonCSS>) => variant === 'outlined' ? `1px solid ${theme.primary.color}` : 'none'};

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

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    readonly variant: 'contained' | 'outlined' | 'text'
    readonly icon?: string
    readonly selected?: boolean
}

//TODO: Remove bare div's
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant, icon, children, ...props }: ButtonProps, ref: React.Ref<HTMLButtonElement>) => (
    <ButtonWrapper ref={ref} variant={variant} hasIcon={!!icon} {...props}>
        <div>
            {icon}
        </div>
        <ButtonText>
            {children}
        </ButtonText>
    </ButtonWrapper>
));


type ButtonvariantProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    readonly icon?: string
    readonly selected?: boolean
}

export const ContainedButton = (props: ButtonvariantProps) => (
    <Button variant='contained' {...props} />
);

export const OutlinedButton = (props: ButtonvariantProps) => (
    <Button variant='outlined' {...props} />
);

export const TextButton = (props: ButtonvariantProps) => (
    <Button variant='text'{...props} />
);