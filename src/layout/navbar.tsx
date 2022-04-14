import { Link } from 'react-router-dom';
import styled, { css, ThemeProps } from 'styled-components';
import { Opacity } from '../constants';
import { TextHoverCss } from '../styling';
import { BaseTheme, WHITE, BLACK } from '../theme';
import { Headline6Css, Subtitle1, Subtitle1Css } from '../typography/typography';

export const NavBar = styled.nav`
    background-color: ${({ theme }: ThemeProps<BaseTheme>) => theme.navbar.color};
    color: ${({ theme }: ThemeProps<BaseTheme>) => theme.navbar.on};
    padding: 8px 12px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 32px;
    align-items: center;
    transition: background-color 0.2s, color 0.2s;
`;

export const SiteName = styled(Link)`
    ${Headline6Css}
    color: ${({ theme }: ThemeProps<BaseTheme>) => theme.isDarkTheme ? WHITE : BLACK};
    text-decoration: none;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    white-space: nowrap;

    ${TextHoverCss}
`;

export const CenterContent = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
    gap: 16px;
`;

type NavLinkProps = {
    readonly link: string
    readonly children?: JSX.Element | readonly JSX.Element[] | string
}

export const NavLink = ({ link, children }: NavLinkProps) => {
    return link.startsWith('http') ?
        <NavLinkA href={link} target='_blank' rel='noopener noreferrer'>{children} </NavLinkA> :
        <NavLinkLink to={link} > {children} </NavLinkLink>;
};

const NavLinkCss = css`
    ${Subtitle1Css}
    padding: 0;
    color: ${({ theme }: ThemeProps<BaseTheme>) => theme.navbar.on};
    text-decoration: none;

    &:hover {
        opacity: ${Opacity.HOVER_MEDIUM};
        text-decoration: none;
    }
`;

const NavLinkLink = styled(Link)`
    ${NavLinkCss}
`;

const NavLinkA = styled.a`
    ${NavLinkCss}
`;

export const NavText = styled(Subtitle1)`
    ${NavLinkCss}
`;