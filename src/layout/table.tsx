import styled, { ThemeProps } from 'styled-components';
import { BaseTheme } from '../theme/turkeydev-theme';
import { Body1Css, Subtitle1Css } from '../typography/typography';

export const Table = styled.table`
    width: 100%;
    height: 100%;
    border-spacing: 0;

    & th {
        border-bottom: 2px solid ${({ theme }: ThemeProps<BaseTheme>) => theme.surface.on};
        padding: 8px;
    }

    & tr {
        border-top: 1px solid ${({ theme }: ThemeProps<BaseTheme>) => theme.surface.on};
    }

    & td {
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