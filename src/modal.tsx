import styled from 'styled-components';
import { WithChildren } from './with-children-type';

export const BackgroundWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 999;
    display: grid;
    justify-content: center;
    align-content: center;
`;

export const ModalContent = styled.div`
    background: ${({ theme }) => theme.surface.color};
    color: ${({ theme }) => theme.surface.on};
    box-shadow: -2rem 2rem 2rem rgba(0,0,0, 0.2);
    filter: blur(0);
    border-radius: 15px;
    padding: 16px;
`;

type ModalProps = WithChildren & {
    readonly show: boolean
}

export const Modal = ({ show, children }: ModalProps) => {
    return show ? (
        <BackgroundWrapper>
            <ModalContent>
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