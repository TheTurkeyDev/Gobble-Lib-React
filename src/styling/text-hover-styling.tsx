import { css } from 'styled-components';
import { Opacity } from '../constants/opacity';

export const TextHoverCss = css`
    &:hover {
        opacity: ${Opacity.HOVER_NORMAL};
        text-decoration: none;
        cursor: pointer;
    }
`;