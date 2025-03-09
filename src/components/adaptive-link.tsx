import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const IntLink = styled(Link)`
    color: #00B4D8;
`;

export const ExtLink = styled.a`
    color: #00B4D8;
`;

type AdaptiveLinkProps ={
    readonly link: string;
    readonly children: string | JSX.Element | readonly JSX.Element[];
    readonly style: React.CSSProperties | undefined;
};

export const AdaptiveLink = ({ link, children, style }: AdaptiveLinkProps) => link.startsWith('http') ?
    <ExtLink href={link} target='_blank' rel='noopener noreferrer' style={style}>{children}</ExtLink> :
    <IntLink to={link} style={style}>{children}</IntLink>;
