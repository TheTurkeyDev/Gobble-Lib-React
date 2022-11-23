import { Link } from 'react-router-dom';
import styled, { ThemeProps } from 'styled-components';
import { Opacity } from '../constants';
import { device } from '../constants/device-sizes';
import { BaseTheme } from '../theme';
import { Headline6Css } from '../typography/typography';
import { WithChildren } from '../with-children-type';

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
    color: ${({ theme }: ThemeProps<BaseTheme>) => theme.primary.on};
    text-decoration: none;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    white-space: nowrap;

    &:hover {
        color: ${({ theme }: ThemeProps<BaseTheme>) => theme.primary.on};
        opacity: ${Opacity.HOVER_NORMAL};
        text-decoration: none;
    }
`;

export const CenterContent = styled.div`
    display: flex;
    flex-flow: row;
    flex-grow: 1;
    align-items: center;
    gap: 16px;
`;

const CenterContentDesktop = styled(CenterContent)`
    display: none;
    @media ${device.tablet} {
        display: flex;
    }
`;

const CenterContentNone = styled.div`
    display: flex;
    flex-flow: row;
    flex-grow: 1;
    @media ${device.tablet} {
        display: none;
    }
`;

export const CollapsibleCenterContent = ({ children }: WithChildren) => (
    <>
        <CenterContentDesktop>
            {children}
        </CenterContentDesktop>
        <CenterContentNone />
    </>
);