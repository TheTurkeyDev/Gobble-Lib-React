import styled, { ThemedStyledProps } from 'styled-components';
import { BaseTheme } from '../theme/turkeydev-theme';

type HorizontalRuleProps = {
    readonly color?: string
}

export const HorizontalRule = styled.hr<HorizontalRuleProps>`
    border-top: 3px solid ${({ color, theme }: ThemedStyledProps<HorizontalRuleProps, BaseTheme>) => color ?? theme.surface.on};
    width: 100%;
`;
