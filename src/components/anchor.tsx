import styled, { ThemeProps } from 'styled-components';
import { FontWeight } from '../constants/font-weight';
import { BaseTheme } from '../theme/turkeydev-theme';

export const StyledAnchor = styled.a`
    text-decoration: none;
    color: ${({ theme }: ThemeProps<BaseTheme>): string => theme.primary.color};
    font-weight: ${FontWeight.MEDIUM};

    :hover {
        opacity: 92%;
    }
`;

export const DisabledAnchor = styled.span`
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
