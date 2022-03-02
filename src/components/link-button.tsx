import { Link } from 'react-router-dom';
import styled, { ThemeProps } from 'styled-components';
import { BaseTheme, GLThemeProps } from '../theme/turkeydev-theme';
import { ButtonText, ButtonTextCss } from '../typography';

export const LinkButton = styled(Link)`
    ${ButtonTextCss}
    padding: 8px 16px;
    color: ${({ theme }: ThemeProps<BaseTheme>) => theme.primary.color};

    &:hover {
        text-decoration: none;
        cursor: pointer;
    }

    &:disabled {
        color:${({ theme }) => theme.outline};
        cursor: not-allowed;
    }
`;