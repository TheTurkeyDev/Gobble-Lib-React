import { css } from 'styled-components';
import { HoverOpacity } from '../constants/opacity';

export const TextHoverCss = css`
    :hover {
        opacity: ${HoverOpacity};
        text-decoration: none;
        cursor: pointer;
    }
`;