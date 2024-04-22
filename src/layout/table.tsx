import styled from 'styled-components';
import { Body1Css, Subtitle1Css } from '../typography/typography';

export type TableProps = React.TableHTMLAttributes<HTMLTableElement> & {
    readonly tableColumns?: string
}

export const Table = styled.table<TableProps>`
    width: 100%;
    height: 100%;
    display: ${({ tableColumns }) => !!tableColumns ? 'grid' : 'table'};
    grid-template-columns: ${({ tableColumns }) => tableColumns};
    border-spacing: 0;

    & thead {
        display: ${({ tableColumns }) => !!tableColumns ? 'contents' : ''};
    }

    & tbody {
        display: ${({ tableColumns }) => !!tableColumns ? 'contents' : ''};
    }

    & th {
        border-bottom: 2px solid ${({ theme }) => theme.surface.on};
        padding: 8px;
    }

    & tr {
        border-top: 1px solid ${({ theme }) => theme.surface.on};
        display: ${({ tableColumns }) => !!tableColumns ? 'contents' : ''};
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