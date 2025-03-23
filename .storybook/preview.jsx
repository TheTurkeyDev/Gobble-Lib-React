import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { defaultLightTheme, defaultDarkTheme } from "../src/theme/theme"
import { Toast } from "../src/toast/toast-context"
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import './css/fontawesome-all.min.css'
import { BrowserRouter } from 'react-router-dom';

const customViewports = {
  mobileSmall: {
    name: 'Mobile Small',
    styles: {
      width: '320px',
      height: '832px',
    },
  },
  mobileMedium: {
    name: 'Mobile Medium',
    styles: {
      width: '375px',
      height: '832px',
    },
  },
  mobileLarge: {
    name: 'Mobile Large',
    styles: {
      width: '425px',
      height: '832px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '832px',
    },
  },
  laptop: {
    name: 'Laptop',
    styles: {
      width: '1024px',
      height: '832px',
    },
  },
  laptopLarge: {
    name: 'Laptop Large',
    styles: {
      width: '1440px',
      height: '832px',
    },
  },
  fourK: {
    name: '4K',
    styles: {
      width: '2560px',
      height: '1188px',
    },
  },
};

export const parameters = {
  actions: {},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      ...customViewports,
      ...INITIAL_VIEWPORTS,
    },
    defaultViewport: 'ipad',
  },
}

export const globalTypes = {
  containerSize: {
    //...
  },
  theme: {
    name: 'Theme',
    description: 'Global theme',
    defaultValue: 'light',
    toolbar: {
      icon: 'lightning',
      items: ['dark', 'light'],
      showName: true,
    },
  },
};

const GlobalStyles = createGlobalStyle`
    html, body, #root {
        height: 100vh;
        overflow: hidden;
    }

    body {
        background: ${({ theme }) => theme.background.color};
        color: ${({ theme }) => theme.background.on};
        transition: .25s;
        padding: 0 !important;
    }
`;

export const decorators = [
  (Story, context) => {

    const theme = context.globals.theme === 'light' ? defaultLightTheme : defaultDarkTheme;

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Toast>
          <BrowserRouter>
            <Story />
          </BrowserRouter>
        </Toast>
      </ThemeProvider>
    );
  },
];