import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Opacity } from '../constants';
import { Subtitle1, Subtitle1Css } from '../typography';
import { JSX } from 'react';

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
        color: ${({ theme }) => theme.navbar.on};
        text-decoration: none;

        &:hover {
            color: ${({ theme }) => theme.navbar.on};
        opacity: ${Opacity.HOVER_NORMAL};
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