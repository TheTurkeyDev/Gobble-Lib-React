import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { defaultLightTheme, defaultDarkTheme } from "../src/theme/theme"
import { Toast } from "../src/toast/toast-context"

import '!style-loader!css-loader!./css/fontawesome-all.min.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
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
    }
`;

export const decorators = [
  (Story, context) => {

    const theme = context.globals.theme === 'light' ? defaultLightTheme : defaultDarkTheme;

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Toast>
          <Story />
        </Toast>
      </ThemeProvider>
    );
  },
];