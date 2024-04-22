import styled, { css } from 'styled-components';
import { FontWeight } from '../constants';

const typographyBase = css`
  margin: 0;
  color: ${({ theme }) => theme.surface.on};
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const Headline1 = styled.h1`
  ${typographyBase}
  font-weight: ${FontWeight.LIGHT};
  font-size: 96px;
  line-height: 100px;
  letter-spacing: -1.5%;
`;

export const Headline2 = styled.h2`
  ${typographyBase}
  font-weight: ${FontWeight.LIGHT};
  font-size: 60px;
  line-height: 68px;
  letter-spacing: -0.5%;
`;

export const Headline3 = styled.h3`
  ${typographyBase}
  font-weight: ${FontWeight.NORMAL};
  font-size: 48px;
  line-height: 56px;
  letter-spacing: 0;
`;

export const Headline4 = styled.h4`
  ${typographyBase}
  font-weight: ${FontWeight.NORMAL};
  font-size: 34px;
  line-height: 42px;
  letter-spacing: .25%;
`;

export const Headline5 = styled.h5`
  ${typographyBase}
  font-weight: ${FontWeight.NORMAL};
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0;
`;

export const Headline6Css = css`
  ${typographyBase}
  font-weight: ${FontWeight.MEDIUM};
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.15%;
`;
export const Headline6 = styled.h6`
  ${Headline6Css}
`;

export const Subtitle1Css = css`
  ${typographyBase}
  font-weight: ${FontWeight.NORMAL};
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15%;
`;

export const Subtitle1 = styled.h6`
  ${Subtitle1Css}
`;

export const Subtitle2 = styled.h6`
  ${typographyBase}
  font-weight: ${FontWeight.MEDIUM};
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1%;
`;

export const Body1Css = css`
  ${typographyBase}
  font-weight: ${FontWeight.NORMAL};
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5%;
`;

export const Body1 = styled.span`
  ${Body1Css}
`;

export const Body2 = styled.span`
  ${typographyBase}
  font-weight: ${FontWeight.NORMAL};
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25%;
`;

export const Caption = styled.span`
  ${typographyBase}
  font-weight: ${FontWeight.NORMAL};
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4%;
`;

export const ButtonTextCss = css`
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${FontWeight.MEDIUM};
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1.25%;
  text-transform: uppercase;
`;
export const ButtonText = styled.span`
  ${ButtonTextCss}
`;

export const Overline = styled.span`
  ${typographyBase}
  font-weight: ${FontWeight.NORMAL};
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 0.5%;
`;
