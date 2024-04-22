import { useState } from 'react';
import styled from 'styled-components';
import { Subtitle1 } from '../typography';
import { WithChildren } from '../with-children-type';

const AccordionWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
`;

const AccordionHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 8px;
    background-color: ${({ theme }) => theme.surface.color};
    border: 3px solid ${({ theme }) => theme.surface.color};
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: 8px;
    align-items: center;
    &:hover {
        cursor: pointer;
    }
`;

const AccordionContent = styled.div`
    border: 3px solid ${({ theme }) => theme.surface.color};
    display: grid;
    grid-template-columns: 1fr;
    padding: 8px;
`;

type AccordionProps = WithChildren & React.InputHTMLAttributes<HTMLDivElement> & {
    readonly header: string
    readonly defaultShow?: boolean
}

export const Accordion = ({ children, header, defaultShow = false, ...props }: AccordionProps) => {
    const [collapsed, setCollapsed] = useState(!defaultShow);

    return (
        <AccordionWrapper {...props}>
            <AccordionHeader onClick={() => setCollapsed(!collapsed)}>
                <Subtitle1>{header}</Subtitle1>
                <Subtitle1>{collapsed ? '+' : '-'}</Subtitle1>
            </AccordionHeader>
            {
                !collapsed && (
                    <AccordionContent>
                        {children}
                    </AccordionContent>
                )
            }
        </AccordionWrapper>
    );
};
