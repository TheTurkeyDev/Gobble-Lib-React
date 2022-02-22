import { useState, createContext, useContext } from 'react';
import styled, { keyframes, ThemeProps } from 'styled-components';
import { BaseTheme } from '../theme';
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

const ToastWrapper = styled.div`
    min-width: 320px;
    margin-left: -160px;
    color: #fff;
    text-align: center;
    border-radius: 25px;
    padding: 16px;
    position: fixed;
    z-index: 5;
    left: 50%;
    bottom: 30px;
    box-shadow: 7px 7px 25px black;
    background: ${({ theme }: ThemeProps<BaseTheme>) => theme.surface.color};
    animation: ${FadeIn} 0.5s, ${FadeOut} 0.5s 4.5s;
`;

type ToastContextType = {
    readonly pushToast: (component: JSX.Element) => void
}

const ToastContext = createContext<ToastContextType | null>(null);

export const useToast = () => {
    const toast = useContext(ToastContext);
    if (!toast)
        throw new Error('Toast is undefined! Must be used from within a Toast Provider!');
    return toast;
};

type ToastType = {
    readonly id: string
    readonly component: JSX.Element
    readonly visibility: boolean
}

export const Toast = ({ children }: WithChildren) => {
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
            {toasts.map(toast =>
                <ToastWrapper key={toast.id}>
                    {toast.component}
                </ToastWrapper>
            )}
            {children}
        </ToastContext.Provider >
    );
};