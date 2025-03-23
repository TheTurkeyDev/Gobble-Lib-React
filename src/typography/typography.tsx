import styled, { css } from 'styled-components';
import { device, FontWeight } from '../constants';

const typographyBase = css`
  margin: 0;
  color: ${({ theme }) => theme.surface.on};
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const Headline1 = styled.h1`
  ${typographyBase}
  font-weight: ${FontWeight.LIGHT};
  letter-spacing: -1.5%;
  font-size: 3.5rem;
  line-height: 4rem;

  @media ${device.mobileL} {
    font-size: 4.5rem;
    line-height: 5rem;
  }

  @media ${device.tablet} {
    font-size: 5rem;
    line-height: 5.5rem;
  }

  @media ${device.laptopL} {
    font-size: 6rem;
    line-height: 6.25rem;
  }
`;

export const Headline2 = styled.h2`
  ${typographyBase}
  font-weight: ${FontWeight.LIGHT};
  letter-spacing: -0.5%;
  font-size: 2.75rem;
  line-height: 3.25rem;

  @media ${device.mobileL} {
    font-size: 3.25rem;
    line-height: 3.75rem;
  }

  @media ${device.tablet} {
    font-size: 3.5rem;
    line-height: 4rem;
  }

  @media ${device.laptopL} {
    font-size: 3.75rem;
    line-height: 4.25rem;
  }
`;

export const Headline3 = styled.h3`
  ${typographyBase}
  font-weight: ${FontWeight.NORMAL};
  letter-spacing: 0;
  font-size: 2.25rem;
  line-height: 2.75rem;

  @media ${device.mobileL} {
    font-size: 2.75rem;
    line-height: 3.25rem;
  }

  @media ${device.tablet} {
    font-size: 3rem;
    line-height: 3.5rem;
  }
`;

export const Headline4 = styled.h4`
  ${typographyBase}
  font-weight: ${FontWeight.NORMAL};
  letter-spacing: .25%;
  font-size: 1.75rem;
  line-height: 2.25rem;

  @media ${device.mobileL} {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  @media ${device.tablet} {
    font-size: 2.125rem;
    line-height: 2.625rem;
  }

  @media ${device.laptopL} {
    font-size: 2.25rem;
    line-height: 2.75rem;
  }
`;

export const Headline5 = styled.h5`
  ${typographyBase}
  font-weight: ${FontWeight.NORMAL};
  letter-spacing: 0;
  font-size: 1.375rem;
  line-height: 1.875rem;

  @media ${device.mobileL} {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

export const Headline6Css = css`
  ${typographyBase}
  font-weight: ${FontWeight.MEDIUM};
  letter-spacing: 0.15%;
  font-size: 1.125rem;
  line-height: 1.5rem;

  @media ${device.mobileL} {
    font-size: 1.25rem;
    line-height: 1.625rem;
  }
`;

export const Headline6 = styled.h6`
  ${Headline6Css}
`;

export const Subtitle1Css = css`
  ${typographyBase}
  font-weight: ${FontWeight.NORMAL};
  letter-spacing: 0.15%;
  font-size: 0.9375rem;
  line-height: 1.375rem;

  @media ${device.mobileL} {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

export const Subtitle1 = styled.h6`
  ${Subtitle1Css}
`;

export const Subtitle2 = styled.h6`
  ${typographyBase}
  font-weight: ${FontWeight.MEDIUM};
  letter-spacing: 0.1%;
  font-size: 0.8125rem;
  line-height: 1.125rem;

  @media ${device.mobileL} {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`;

export const Body1Css = css`
  ${typographyBase}
  font-weight: ${FontWeight.NORMAL};
  letter-spacing: 0.5%;
  font-size: 0.9375rem;
  line-height: 1.375rem;

  @media ${device.mobileL} {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

export const Body1 = styled.span`
  ${Body1Css}
`;

export const Body2 = styled.span`
  ${typographyBase}
  font-weight: ${FontWeight.NORMAL};
  letter-spacing: 0.25%;
  font-size: 0.8125rem;
  line-height: 1.125rem;

  @media ${device.mobileL} {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`;

export const Caption = styled.span`
  ${typographyBase}
  font-weight: ${FontWeight.NORMAL};
  letter-spacing: 0.4%;
  font-size: 0.6875rem;
  line-height:0.9375rem;

  @media ${device.mobileL} {
    font-size: 0.75rem;
    line-height: 1rem;
  }
`;

export const ButtonTextCss = css`
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${FontWeight.MEDIUM};
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 1.25%;
  text-transform: uppercase;
`;

export const ButtonText = styled.span`
  ${ButtonTextCss}
`;

export const Overline = styled.span`
  ${typographyBase}
  font-weight: ${FontWeight.NORMAL};
  font-size: 0.625rem;
  line-height: 0.875rem;
  letter-spacing: 0.5%;
`;
