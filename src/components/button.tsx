import { forwardRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { GLThemeProps } from '../theme/turkeydev-theme';
import { TextHoverCss } from '../styling/text-hover-styling';
import { ButtonText } from '../typography/typography';

type ButtonVariants = 'contained' | 'outlined' | 'text'

const Rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

type SpinnerProps = {
    readonly variant: ButtonVariants
}

const SimpleLoadingSpinner = styled.span<SpinnerProps>`
    min-width: 16px;
    min-height: 16px;
    border: 3px solid ${({ variant, theme }: GLThemeProps<SpinnerProps>) => variant === 'contained' ? theme.primary.on : theme.secondary.color};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: ${Rotation} 1s linear infinite;
`;

type ButtonCSS = {
    readonly hasIcon: boolean
    readonly variant: ButtonVariants
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
    readonly variant: ButtonVariants
    readonly icon?: string
    readonly loading?: boolean
    readonly selected?: boolean
}

//TODO: Remove bare div's
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant, icon, loading, children, ...props }: ButtonProps, ref: React.Ref<HTMLButtonElement>) => (
    <ButtonWrapper ref={ref} variant={variant} hasIcon={!!icon} {...props}>
        {
            loading ?
                <SimpleLoadingSpinner variant={variant} />
                :
                <>
                    <div>
                        {icon}
                    </div>
                    <ButtonText>
                        {children}
                    </ButtonText>
                </>
        }

    </ButtonWrapper>
));


type ButtonVariantProps = Omit<ButtonProps, 'variant'>

export const ContainedButton = (props: ButtonVariantProps) => (
    <Button variant='contained' {...props} />
);

export const OutlinedButton = (props: ButtonVariantProps) => (
    <Button variant='outlined' {...props} />
);

export const TextButton = (props: ButtonVariantProps) => (
    <Button variant='text'{...props} />
);