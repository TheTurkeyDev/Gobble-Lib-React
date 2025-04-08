import { styled } from 'styled-components';
import { Body1 } from '../../typography';

const Wrapper = styled.div`
    padding: 8px 20px;
    width: calc(100% - 40px);
    text-align: center;
`;

const Anchor = styled.a`
    text-decoration: none;
    width: max-content;
`;

const Text = styled(Body1)`
    font-weight: 700;
    line-height: 1;
    text-transform: uppercase;
`;

type CollapsedNavLinkProps = {
    readonly text: string
    readonly to: string
}

export const CollapsedNavLink = ({ text, to }: CollapsedNavLinkProps) => {
    return (
        <Anchor href={to}>
            <Wrapper>
                <Text>{text}</Text>
            </Wrapper>
        </Anchor>
    );
};