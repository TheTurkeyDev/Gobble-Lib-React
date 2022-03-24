import { createRef } from 'react';
import styled, { ThemeProps } from 'styled-components';
import { useClickOutside } from '../custom-hooks/use-click-outside';
import { BaseTheme } from '../theme/turkeydev-theme';
import { WithChildren } from '../with-children-type';

export const BackgroundWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    display: grid;
    justify-content: center;
    align-content: center;
`;

export const ModalContent = styled.div`
    background: ${({ theme }: ThemeProps<BaseTheme>) => theme.background.color};
    color: ${({ theme }: ThemeProps<BaseTheme>) => theme.background.on};
    box-shadow: -2rem 2rem 2rem rgba(0,0,0, 0.2);
    filter: blur(0);
    border-radius: 15px;
    padding: 16px;
    max-width: 75%;
    margin-inline: auto;
`;

type ModalProps = WithChildren & {
    readonly show: boolean
    readonly requestClose?: () => void
}

export const Modal = ({ show, requestClose, children }: ModalProps) => {
    const ref = createRef<HTMLDivElement>();
    useClickOutside(ref, () => !!requestClose && requestClose());
    return show ? (
        <BackgroundWrapper>
            <ModalContent ref={ref}>
                {children}
            </ModalContent>
        </BackgroundWrapper>
    ) : <></>;
};

export const ModalNoBG = ({ children, show }: ModalProps) => {
    return show ? (
        <BackgroundWrapper>
            {children}
        </BackgroundWrapper>
    ) : <></>;
};