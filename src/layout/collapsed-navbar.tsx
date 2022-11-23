import { useState } from 'react';
import styled, { ThemeProps } from 'styled-components';
import { BaseTheme } from '../theme';
import { WithChildren } from '../with-children-type';

const CollapsedNavbarWrapper = styled.div`
    position: relative;
`;

type BarFlyoutProps = {
    readonly shown: boolean
}

const BarFlyout = styled.div`
    width: max-content;
    display: grid;
    gap: 8px;
    position: absolute;
    top: 100%;
    // This is so scuffed, but idk what html/ css wizardry I have to do to be able to push this off screen 100% width, but still look good with "width: max-content"
    left: ${({ shown }: BarFlyoutProps) => shown ? '-12px' : '-500px'};
    z-index: 999;
    background-color: ${({ theme }: ThemeProps<BaseTheme>) => theme.navbar.color};
    color: ${({ theme }: ThemeProps<BaseTheme>) => theme.navbar.on};
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
                <i className={icon} onClick={() => setExpanded(old => !old)} />
            </div>
            <BarFlyout shown={expanded}>
                {children}
            </BarFlyout>
        </CollapsedNavbarWrapper>
    );
};