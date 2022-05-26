import { ThemedStyledProps } from 'styled-components';

export type BaseTheme = {
  readonly fontFamily: string,
  readonly background: {
    readonly color: string,
    readonly on: string
  },
  readonly navbar: {
    readonly color: string,
    readonly on: string
  },
  readonly surface: {
    readonly color: string,
    readonly on: string
  },
  readonly inputs: {
    readonly color: string,
    readonly colorDisabled: string,
    readonly outlineRaised: string,
    readonly outlineLowered: string,
    readonly on: string,
    readonly onVariant: string,
    readonly onDisabled: string,
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
  }
}

export type GLThemeProps<P> = ThemedStyledProps<P, BaseTheme>;