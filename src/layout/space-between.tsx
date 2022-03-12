import styled from 'styled-components';
import { WithChildren } from '../with-children-type';

const SpaceBetweenWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
`;

export const SpaceBetween = ({ children }: WithChildren) => (
    <SpaceBetweenWrapper>
        {children}
    </SpaceBetweenWrapper>
);