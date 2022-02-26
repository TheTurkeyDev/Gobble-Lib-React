import { Link } from 'react-router-dom';
import styled, { ThemeProps } from 'styled-components';
import { BaseTheme, WHITE, BLACK } from '../theme';

export const NavBar = styled.nav`
    background-color: ${({ theme }: ThemeProps<BaseTheme>) => theme.surface.color};
    color: ${({ theme }: ThemeProps<BaseTheme>) => theme.surface.on};
    padding: 8px 12px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 32px;
    align-items: center;
`;

export const SiteName = styled(Link)`
    color: ${({ theme }: ThemeProps<BaseTheme>) => theme.isDarkTheme ? WHITE : BLACK};
    text-decoration: none;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;

    &:hover {
        color: ${({ theme }: ThemeProps<BaseTheme>) => `${theme.isDarkTheme ? WHITE : BLACK}c`};
        text-decoration: none;
    }
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

const NavLinkLink = styled(Link)`
    padding: 0;
    color: ${({ theme }: ThemeProps<BaseTheme>) => theme.surface.on};
    text-decoration: none;

    &:hover {
        color: ${({ theme }: ThemeProps<BaseTheme>) => `${theme.surface.on}aa`};
        text-decoration: none;
    }
`;

const NavLinkA = styled.a`
    padding: 0;
    color: ${({ theme }: ThemeProps<BaseTheme>) => theme.surface.on};
    text-decoration: none;

    &:hover {
        color: ${({ theme }: ThemeProps<BaseTheme>) => `${theme.surface.on}aa`};
        text-decoration: none;
    }
`;