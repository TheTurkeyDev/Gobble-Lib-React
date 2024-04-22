import { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../components';
import { device } from '../constants/device-sizes';
import { WithChildren } from '../with-children-type';

const CollapsedNavbarWrapper = styled.div`
    position: relative;
    display: block;

    @media ${device.tablet} {
        display: none;
    }
`;

type BarFlyoutProps = {
    readonly $shown: boolean
}

const BarFlyout = styled.div<BarFlyoutProps>`
    width: max-content;
    display: grid;
    gap: 8px;
    position: absolute;
    top: 100%;
    // This is so scuffed, but idk what html/ css wizardry I have to do to be able to push this off screen 100% width, but still look good with "width: max-content"
    left: ${({ $shown }) => $shown ? '-12px' : '-500px'};
    z-index: 999;
    background-color: ${({ theme }) => theme.navbar.color};
    color: ${({ theme }) => theme.navbar.on};
    padding: 16px;
    transition: all 0.5s ease;
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
            <BarFlyout $shown={expanded}>
                {children}
            </BarFlyout>
        </CollapsedNavbarWrapper>
    );
};