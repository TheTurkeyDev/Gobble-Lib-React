import { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../../components';
import { device } from '../../constants/device-sizes';
import { WithChildren } from '../../with-children-type';

const CollapsedNavbarWrapper = styled.div`
    position: relative;
    display: block;
    height: 32px;
    align-content: center;

    @media ${device.tablet} {
        display: none;
    }
`;

const BarFlyout = styled.div`
    width: max-content;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 32px;
    left: -12px;
    width: 100vw;
    height: calc(100vh - 55px);
    z-index: 999;
    background-color: ${({ theme }) => theme.navbar.color};
    color: ${({ theme }) => theme.navbar.on};
`;

type CollapsedNavbarProps = WithChildren & {
    readonly icon: string
}

export const CollapsedNavbar = ({ children, icon }: CollapsedNavbarProps) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <CollapsedNavbarWrapper>
            <div>
                <Icon className={icon} onClick={() => setExpanded(old => !old)} />
            </div>
            <BarFlyout style={{ display: expanded ? 'flex' : 'none' }}>
                {children}
            </BarFlyout>
        </CollapsedNavbarWrapper>
    );
};