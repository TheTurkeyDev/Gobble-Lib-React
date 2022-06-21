import { forwardRef } from 'react';
import styled, { ThemeProps } from 'styled-components';
import { BaseTheme, GLThemeProps } from '../theme/turkeydev-theme';
import { TextHoverCss } from '../styling/text-hover-styling';
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
  color: ${({ variant, theme }: GLThemeProps<ButtonCSS>) => variant === 'contained' ? theme.primary.on : theme.secondary.color};
  border: ${({ variant, theme }: GLThemeProps<ButtonCSS>) => variant === 'outlined' ? `1px solid ${theme.secondary.color}` : 'none'};

  ${TextHoverCss}

  &:disabled {
    background: ${({ variant, theme }: GLThemeProps<ButtonCSS>) => variant === 'contained' ? theme.inputs.colorDisabled : 'transparent'};
    color: ${({ theme }: GLThemeProps<ButtonCSS>) => theme.inputs.onDisabled};
    border: ${({ theme }: GLThemeProps<ButtonCSS>) => `1px solid ${theme.inputs.colorDisabled}`};
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