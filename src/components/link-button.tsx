import { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontWeight } from '../constants/font-weight';
import { Body1, Body1Css } from '../typography/typography';
import { TextHoverCss } from '../styling/text-hover-styling';

export const StyledLinkButton = styled(Link)`
    ${Body1Css}
    text-decoration: none;
    color: ${({ theme }): string => theme.secondary.color};
    font-weight: ${FontWeight.MEDIUM};

    ${TextHoverCss}
    &:hover {
        color: ${({ theme }): string => theme.secondary.color};
    }
`;

export const DisabledLinkButton = styled(Body1)`
    text-decoration: none;
    background-color:${({ theme }) => theme.outline};
    font-weight: ${FontWeight.MEDIUM};
    cursor: not-allowed;
`;

type LinkButtonProps = LinkProps & {
    readonly disabled?: boolean
}

export const LinkButton = ({ disabled, to, ...props }: LinkButtonProps): JSX.Element => (
    disabled ?
        <DisabledLinkButton {...props} /> :
        <StyledLinkButton to={to} {...props} />
);
