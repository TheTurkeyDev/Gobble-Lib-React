import { forwardRef } from 'react';
import styled, { keyframes } from 'styled-components';
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
    border: 3px solid ${({ variant, theme }) => variant === 'contained' ? theme.primary.on : theme.secondary.color};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: ${Rotation} 1s linear infinite;
`;

type ButtonCSS = {
    readonly variant: ButtonVariants
}

const ButtonWrapper = styled.button<ButtonCSS>`
    position: relative;
    align-items: center;
    width: fit-content;
    min-width: 60px;
    border-radius: 5px;
    padding: 8px 16px;
    background: ${({ variant, theme }) => variant === 'contained' ? theme.primary.color : 'transparent'};
    color: ${({ variant, theme }) => variant === 'contained' ? theme.primary.on : theme.secondary.color};
    border: ${({ variant, theme }) => variant === 'outlined' ? `1px solid ${theme.secondary.color}` : 'none'};

    ${TextHoverCss}

    &:disabled {
        background: ${({ variant, theme }) => variant === 'contained' ? theme.inputs.colorDisabled : 'transparent'};
        color: ${({ theme }) => theme.inputs.onDisabled};
        border: ${({ variant, theme }) => variant === 'outlined' ? `1px solid ${theme.inputs.colorDisabled}` : 'none'};
        cursor: not-allowed;
    }
`;

type ButtonContentProps = {
    readonly hasGap: boolean
}

const ButtonContent = styled.div<ButtonContentProps>`
    display: flex;
    gap: ${({ hasGap }) => hasGap ? '8px' : 0};
    align-content: center;
    align-items: center;
    justify-content: center;
`;

const ButtonLoading = styled.div`
    position: absolute;
    z-index: 1;
    width: calc(100% - 32px);
    margin: auto;
`;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    readonly variant: ButtonVariants
    readonly icon?: string
    readonly loading?: boolean
    readonly selected?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant, icon, loading, children, ...props }: ButtonProps, ref: React.Ref<HTMLButtonElement>) => (
    <ButtonWrapper ref={ref} variant={variant} {...props}>
        {

            loading &&
            <ButtonLoading>
                <SimpleLoadingSpinner variant={variant} />
            </ButtonLoading>
        }
        <ButtonContent hasGap={!!icon && !!children} style={{ opacity: loading ? 0 : 100 }} >
            <i className={icon} />
            <ButtonText>
                {children}
            </ButtonText>
        </ButtonContent>
    </ButtonWrapper >
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