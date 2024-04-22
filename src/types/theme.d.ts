import { BaseTheme } from '../theme/turkeydev-theme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface DefaultTheme extends BaseTheme { }
}