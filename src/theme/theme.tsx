import { createContext, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { WithChildren } from '../with-children-type';
import { BaseTheme } from './turkeydev-theme';

export const WHITE = '#ffffff';
export const BLACK = '#000000';
export const CC_BLUE_DARK = '#00687D';
export const CC_BLUE = '#009FBF';
export const OFF_WHITE = '#d8d8d8';
export const GRAY_BLUISH = '#343A40';
export const DARK_GRAY_BLUISH = '#212529';
export const LIGHT_GRAY_BLUISH = '#c7cace';

export const defaultLightTheme: BaseTheme = {
    isDarkTheme: false,
    background: {
        color: '#e3e3e3',
        on: DARK_GRAY_BLUISH
    },
    surface: {
        color: '#cdcdd3',
        on: DARK_GRAY_BLUISH,
    },
    inputs: {
        color: LIGHT_GRAY_BLUISH,
        colorDisabled: OFF_WHITE,
        outlineRaised: '#05050540',
        outlineLowered: '#00000099',
        on: DARK_GRAY_BLUISH,
        onVariant: '#899295',
    },
    primary: {
        color: CC_BLUE,
        on: DARK_GRAY_BLUISH
    },
    error: {
        color: '#ffb4a9',
        on: '#680003'
    },
};

export const defaultDarkTheme: BaseTheme = {
    isDarkTheme: true,
    background: {
        color: DARK_GRAY_BLUISH,
        on: OFF_WHITE
    },
    surface: {
        color: GRAY_BLUISH,
        on: OFF_WHITE,
    },
    inputs: {
        color: GRAY_BLUISH,
        colorDisabled: '#61696C',
        outlineRaised: '#ffffff65',
        outlineLowered: '#00000099',
        on: WHITE,
        onVariant: '#899295',
    },
    primary: {
        color: CC_BLUE_DARK,
        on: WHITE
    },
    error: {
        color: '#ba1b1b',
        on: WHITE
    }
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

type ThemeContextProviderProps = WithChildren & {
    readonly themes?: readonly { readonly name: string, readonly theme: BaseTheme }[]
}

const defaultThemes = ['dark', 'light'];

export const ThemeContextProvider = ({ children, themes }: ThemeContextProviderProps) => {
    const darkModeLocalStorage = localStorage.getItem(darkModeKey) ?? (window.matchMedia?.('(prefers-color-scheme:dark)')?.matches ? 'dark' : 'light');
    const [theme, setCurrentTheme] = useState<string>(darkModeLocalStorage);

    const setTheme = (newTheme: string) => {
        localStorage.setItem(darkModeKey, newTheme);
        setCurrentTheme(newTheme);
    };

    const darkThemeToUse = themes?.find(t => t.name === 'dark')?.theme ?? defaultDarkTheme;
    const lightThemeToUse = themes?.find(t => t.name === 'light')?.theme ?? defaultLightTheme;
    const themeMap = [...(themes?.filter(t => !defaultThemes.includes(t.name)) ?? []), { name: 'dark', theme: darkThemeToUse }, { name: 'light', theme: lightThemeToUse }];

    return (
        <ThemeContext.Provider value={{ setTheme, theme }}>
            <ThemeProvider theme={themeMap.find(t => t.name === theme)?.theme ?? defaultDarkTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider >
    );
};
