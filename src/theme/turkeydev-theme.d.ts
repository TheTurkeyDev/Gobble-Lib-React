import 'styled-components';


declare module 'styled-components' {
  export type DefaultTheme = {
    readonly isDarkTheme: boolean,
    readonly background: {
      readonly color: string,
      readonly on: string
    },
    readonly surface: {
      readonly color: string,
      readonly on: string,
      readonly variant: string,
      readonly onVariant: string,
      readonly inverse: string,
      readonly onInverse: string
    },
    readonly primary: {
      readonly color: string,
      readonly on: string
    },
    readonly secondary: {
      readonly color: string,
      readonly on: string
    },
    readonly error: {
      readonly color: string,
      readonly on: string
    },
    readonly outline: string,
  }
}