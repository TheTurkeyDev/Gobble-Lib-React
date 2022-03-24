import styled, { ThemeProps } from 'styled-components';
import { BaseTheme } from '../theme/turkeydev-theme';
import { Body1Css, Subtitle1Css } from '../typography';

export const Table = styled.table`
    background: ${({ theme }: ThemeProps<BaseTheme>) => theme.surface.color};
    color: ${({ theme }: ThemeProps<BaseTheme>) => theme.surface.on};
    width: 100%;
    height: 100%;

    & th {
        border-top: 1px solid ${({ theme }: ThemeProps<BaseTheme>) => theme.surface.on};
        border-bottom: 2px solid ${({ theme }: ThemeProps<BaseTheme>) => theme.surface.on};
        padding: 8px;
    }

    & td {
        border-top: 1px solid ${({ theme }: ThemeProps<BaseTheme>) => theme.surface.on};
        padding: 8px;
    }
`;

export const TH = styled.th`
    ${Subtitle1Css}
    font-weight: 600;
`;

export const TD = styled.td`
    ${Body1Css}
`;