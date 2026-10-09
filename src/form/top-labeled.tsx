import styled from 'styled-components';
import { Subtitle2Css } from '../typography/typography';
import { WithChildren } from '../with-children-type';

const Wrapper = styled.div`
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
`;

const StyledLabel = styled.label`
    ${Subtitle2Css}
`;

type TopLabeledProps = WithChildren & {
    readonly label: string
    readonly htmlFor?: string
}

export const TopLabeled = ({ children, label, htmlFor }: TopLabeledProps) => (
    <Wrapper>
        <StyledLabel htmlFor={htmlFor}>{label}</StyledLabel>
        {children}
    </Wrapper>
);