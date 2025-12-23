import { useState, createContext, useContext, JSX } from 'react';
import styled, { keyframes } from 'styled-components';
import { WithChildren } from '../with-children-type';

const FadeIn = keyframes`
    from {
        bottom: 0;
        opacity: 0;
    }
    to {
        bottom: 30px;
        opacity: 1;
    }
`;

const FadeOut = keyframes`
    from {
        bottom: 30px;
        opacity: 1;
    }
    to {
        bottom: 0;
        opacity: 0;
    }
`;

const ToastContainer = styled.div`
    position: fixed;
    bottom: 30px;
    z-index: 5;
    height: min-height;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    justify-items: center;
    pointer-events: none;
`;

const ToastWrapper = styled.div`
    min-width: 320px;
    width: fit-content;
    color: #fff;
    text-align: center;
    border-radius: 25px;
    padding: 16px;
    box-shadow: 7px 7px 25px black;
    background: ${({ theme }) => theme.surface.color};
    animation: ${FadeIn} 0.5s, ${FadeOut} 0.5s 4.6s;
`;

type ToastContextType = {
    readonly pushToast: (component: JSX.Element) => void
}

const ToastContext = createContext<ToastContextType | null>(null);

export const useToast = () => {
    const toast = useContext(ToastContext);
    if (!toast)
        // eslint-disable-next-line functional/no-throw-statements
        throw new Error('Toast is undefined! Must be used from within a Toast Provider!');
    return toast;
};

type ToastType = {
    readonly id: string
    readonly component: JSX.Element
    readonly visibility: boolean
}

type ToastProps = WithChildren & {
    readonly maxShown?: number
}

export const Toast = ({ children, maxShown = 5 }: ToastProps) => {
    const [toasts, setToasts] = useState<readonly ToastType[]>([]);

    const pushToast = (component: JSX.Element) => {
        const id = '_' + Math.random().toString(36).substring(2, 11);
        setToasts(toasts => [...toasts, { id: id, component, visibility: true }]);
        setTimeout(() => {
            setToasts(toasts => [...toasts.filter(toast => toast.id !== id)]);
        }, 5000);
    };

    return (
        <ToastContext.Provider value={{ pushToast }}>
            <ToastContainer>
                {toasts.slice(0, maxShown).map(toast =>
                    <ToastWrapper key={toast.id}>
                        {toast.component}
                    </ToastWrapper>
                )}
            </ToastContainer>
            {children}
        </ToastContext.Provider >
    );
};