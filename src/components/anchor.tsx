import styled, { ThemeProps } from 'styled-components';
import { FontWeight } from '../constants/font-weight';
import { BaseTheme } from '../theme/turkeydev-theme';
import { Body1, Body1Css } from '../typography';
import { TextHoverCss } from '../styling/text-hover-styling';

export const StyledAnchor = styled.a`
    ${Body1Css}
    text-decoration: none;
    color: ${({ theme }: ThemeProps<BaseTheme>): string => theme.secondary.color};
    font-weight: ${FontWeight.MEDIUM};

    ${TextHoverCss}
`;

export const DisabledAnchor = styled(Body1)`
  text-decoration: none;
  background-color:${({ theme }) => theme.outline};
  font-weight: ${FontWeight.MEDIUM};
  cursor: not-allowed;
`;

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    readonly openInNewTab?: boolean
    readonly disabled?: boolean
}

export const Anchor = ({ disabled, href, openInNewTab = false, ...props }: AnchorProps): JSX.Element => (
    disabled ?
        <DisabledAnchor {...props} /> :
        <StyledAnchor href={href} {...props} {...(openInNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : { target: '', rel: '' })} />
);
