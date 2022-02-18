import { createContext, useContext, useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { WithChildren } from '../with-children-type';

export const WHITE = '#ffffff';
export const CC_BLUE = '#009FBF';
export const OFF_WHITE = '#fcfcff';
export const PRIMARY = '#343A40';
export const SECONDARY = '#212529';

const lightTheme: DefaultTheme = {
    isDarkTheme: false,
    background: {
        color: WHITE,
        on: SECONDARY
    },
    surface: {
        color: '#eeeeee',
        on: SECONDARY,
        variant: '#dbe4e8',
        onVariant: '#40484b',
        inverse: '#2f3032',
        onInverse: '#f0f0f3'
    },
    primary: {
        color: CC_BLUE,
        on: WHITE
    },
    secondary: {
        color: CC_BLUE,
        on: WHITE
    },
    error: {
        color: '#ba1b1b',
        on: WHITE
    },
    outline: '#70797c',
};

const darkTheme: DefaultTheme = {
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
        color: CC_BLUE,
        on: WHITE
    },
    secondary: {
        color: CC_BLUE,
        on: WHITE
    },
    error: {
        color: '#ffb4a9',
        on: '#680003'
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

    console.log(theme === 'dark' ? darkTheme : lightTheme)

    return (
        <ThemeContext.Provider value={{ setTheme, theme }}>
            <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider >
    );
};
