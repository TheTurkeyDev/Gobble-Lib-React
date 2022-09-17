import { useState } from 'react';
import styled, { ThemeProps } from 'styled-components';
import { BaseTheme } from '../theme';
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
    background-color: ${({ theme }: ThemeProps<BaseTheme>) => theme.surface.color};
    border: 3px solid ${({ theme }: ThemeProps<BaseTheme>) => theme.surface.color};
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: 8px;
    align-items: center;
`;

const AccordionContent = styled.div`
    border: 3px solid ${({ theme }: ThemeProps<BaseTheme>) => theme.surface.color};
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 8px;
    align-items: center;
    padding: 8px;
`;

const CollapseText = styled(Subtitle1)`
    &:hover {
        cursor: pointer;
    }
`;

type AccordionProps = WithChildren & React.InputHTMLAttributes<HTMLDivElement> & {
    readonly header: string
    readonly defaultShow?: boolean
}

export const Accordion = ({ children, header, defaultShow = false, ...props }: AccordionProps) => {
    const [collapsed, setCollapsed] = useState(!defaultShow);

    return (
        <AccordionWrapper {...props}>
            <AccordionHeader>
                <Subtitle1>{header}</Subtitle1>
                <CollapseText onClick={() => setCollapsed(!collapsed)}>{collapsed ? '+' : '-'}</CollapseText>
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
