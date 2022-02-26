import { createContext, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { WithChildren } from '../with-children-type';
import { BaseTheme } from './turkeydev-theme';

export const WHITE = '#ffffff';
export const BLACK = '#000000';
export const CC_BLUE_DARK = '#00687D';
export const CC_BLUE = '#009FBF';
export const OFF_WHITE = '#d8d8d8';
export const PRIMARY = '#343A40';
export const SECONDARY = '#212529';

const lightTheme: BaseTheme = {
    isDarkTheme: false,
    background: {
        color: '#e3e3e3',
        on: SECONDARY
    },
    surface: {
        color: '#cdcdd3',
        on: SECONDARY,
        variant: '#dbe4e8',
        onVariant: '#40484b',
        inverse: '#2f3032',
        onInverse: '#f0f0f3'
    },
    primary: {
        color: CC_BLUE,
        on: SECONDARY
    },
    secondary: {
        color: CC_BLUE,
        on: SECONDARY
    },
    error: {
        color: '#ffb4a9',
        on: '#680003'
    },
    outline: '#70797c',
};

const darkTheme: BaseTheme = {
    isDarkTheme: true,
    background: {
        color: SECONDARY,
        on: OFF_WHITE
    },
    surface: {
        color: PRIMARY,
        on: OFF_WHITE,
        variant: '#40484b',
        onVariant: '#bfc8cc',
        inverse: OFF_WHITE,
        onInverse: SECONDARY
    },
    primary: {
        color: CC_BLUE_DARK,
        on: WHITE
    },
    secondary: {
        color: CC_BLUE_DARK,
        on: WHITE
    },
    error: {
        color: '#ba1b1b',
        on: WHITE
    },
    outline: '#899295',
};

type ThemeContextType = {
    readonly setTheme: (newTheme: string) => void
    readonly theme: string
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useThemeContext = () => {
    const theme = useContext(ThemeContext);
    if (!theme)
        throw new Error('Theme Context is undefined! Must be used from within a Theme Context Provider!');
    return theme;
};


const darkModeKey = 'darkMode';

export const ThemeContextProvider = ({ children }: WithChildren) => {
    const darkModeLocalStorage = localStorage.getItem(darkModeKey) ?? (window.matchMedia?.('(prefers-color-scheme:dark)')?.matches ? 'dark' : 'light');
    const [theme, setCurrentTheme] = useState<string>(darkModeLocalStorage);

    const setTheme = (newTheme: string) => {
        localStorage.setItem(darkModeKey, newTheme);
        setCurrentTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ setTheme, theme }}>
            <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider >
    );
};
