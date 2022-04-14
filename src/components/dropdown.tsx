import { Link } from 'react-router-dom';
import styled, { ThemeProps } from 'styled-components';
import { Elevation } from '../constants';
import { BaseTheme } from '../theme';
import { Subtitle1Css } from '../typography';
import { TextHoverCss } from '../styling/text-hover-styling';

type DropdownContentProps = {
    readonly sideAnchor?: string
}
export const DropdownContent = styled.div<DropdownContentProps>`
    position: absolute;
    display: none;
    grid-template-columns : 1fr;
    gap: 8px;
    white-space: nowrap;
    background: ${({ theme }: ThemeProps<BaseTheme>) => theme.surface.color};
    z-index: 2;
    padding: 8px 16px;
    box-shadow: ${Elevation.low};
    left: ${({ sideAnchor }) => sideAnchor === 'left' ? 0 : ''};
    right: ${({ sideAnchor }) => sideAnchor === 'right' ? 0 : ''};
    
    & > * {
        color: ${({ theme }: ThemeProps<BaseTheme>) => theme.surface.on};
        text-decoration: none;

        &:hover {
            color: ${({ theme }: ThemeProps<BaseTheme>) => `${theme.surface.on}aa`};
            text-decoration: none;
        }
    }
`;

export const Dropdown = styled.div`
    position: relative;
    &:hover ${DropdownContent} {
        display: grid;
    }

    &:hover { 
        cursor: pointer;
    }
`;

export const DropdownLinkItem = styled(Link)`
    ${Subtitle1Css}
    ${TextHoverCss}
`;