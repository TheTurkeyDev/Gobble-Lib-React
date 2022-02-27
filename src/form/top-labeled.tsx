import styled from 'styled-components';
import { Subtitle2 } from '../typography';
import { WithChildren } from '../with-children-type';

const Wrapper = styled.div`
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
`;

type TopLabeledProps = WithChildren & {
    readonly label: string
}

export const TopLabeled = ({ children, label }: TopLabeledProps) => (
    <Wrapper>
        <Subtitle2>{label}</Subtitle2>
        {children}
    </Wrapper>
);