import styled from 'styled-components';

type HorizontalRuleProps = {
    readonly $color?: string
}

export const HorizontalRule = styled.hr<HorizontalRuleProps>`
    border-top: 3px solid ${({ $color, theme }) => $color ?? theme.surface.on};
    border-right: 0;
    border-left: 0;
    width: 100%;
`;
