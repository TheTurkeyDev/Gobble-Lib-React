import styled, { css, ThemeProps } from 'styled-components';
import { BaseTheme } from './theme/turkeydev-theme';

const typographyBase = css`
  margin: 0;
  color: ${({ theme }: ThemeProps<BaseTheme>) => theme.surface.on};
  font-family: Ubuntu;
`;

export const Headline1 = styled.h1`
  ${typographyBase}
  font-weight: 300;
  font-size: 96px;
  line-height: 100px;
  letter-spacing: -1.5%;
`;

export const Headline2 = styled.h2`
  ${typographyBase}
  font-weight: 300;
  font-size: 60px;
  line-height: 68px;
  letter-spacing: -0.5%;
`;

export const Headline3 = styled.h3`
  ${typographyBase}
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: 0;
`;

export const Headline4 = styled.h4`
  ${typographyBase}
  font-weight: 400;
  font-size: 34px;
  line-height: 42px;
  letter-spacing: .25%;
`;

export const Headline5 = styled.h5`
  ${typographyBase}
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0;
`;


export const Headline6 = styled.h6`
  ${typographyBase}
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.15%;
`;

export const Subtitle1Css = css`
  ${typographyBase}
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15%;
`;

export const Subtitle1 = styled.h6`
  ${Subtitle1Css}
`;

export const Subtitle2 = styled.h6`
  ${typographyBase}
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1%;
`;

export const Body1 = styled.span`
  ${typographyBase}
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5%;
`;

export const Body2 = styled.span`
  ${typographyBase}
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25%;
`;

export const Caption = styled.span`
  ${typographyBase}
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4%;
`;

export const ButtonText = styled.span`
  margin: 0;
  font-family: Ubuntu;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1.25%;
  text-transform: uppercase;
`;

export const Overline = styled.span`
  ${typographyBase}
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 0.5%;
`;
