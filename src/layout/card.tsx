import styled, { ThemeProps } from 'styled-components';
import { Elevation } from '../constants';
import { BaseTheme } from '../theme';

export const Card = styled.div`
    background: ${({ theme }: ThemeProps<BaseTheme>) => theme.surface.color};
    border-radius: 8px;
    padding: 0 0 32px 0;
    display: grid;
    grid-auto-rows: auto;
    gap: 16px;
    box-shadow: ${Elevation.lowest};
`;

export const CardHeader = styled.div`
    margin: 16px 16px 0 16px;
`;

export const CardContent = styled.div`
    margin: 0 32px;
`;