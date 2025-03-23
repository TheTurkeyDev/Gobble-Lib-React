import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import { TextButton } from '../components/button';
import { Dropdown, DropdownContent } from '../components/dropdown';
import { Icon } from '../components/icon';
import { NavText } from '../components/nav-link';
import { Opacity } from '../constants/opacity';
import { CollapsedNavbar } from '../layout/navbar/collapsed-navbar';
import { CollapsibleCenterContent, NavBar } from '../layout/navbar/navbar';
import { TextHoverCss } from '../styling/text-hover-styling';
import { Body1, Headline6Css } from '../typography/typography';
import { CollapsedNavLink } from '../layout';

const PageWrapper = styled.div`
    width: 100%;
`;

const LoginButtonWrapper = styled(Body1)`
    ${TextHoverCss}
`;

const SiteName = styled(NavText)`
    ${Headline6Css}
    color: ${({ theme }) => theme.primary.on};
    text-decoration: none;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    white-space: nowrap;

    &:hover {
        color: ${({ theme }) => theme.primary.on};
        opacity: ${Opacity.HOVER_NORMAL};
        text-decoration: none;
    }
`;

export default {
    title: 'GobbleLib/Layout/Navbar',
    component: NavBar,
} as Meta<typeof NavBar>;

const links = [
    { title: 'Twitch', link: 'https://trky.dev/twitch' },
    { title: 'YouTube', link: 'https://trky.dev/youtube' },
    { title: 'Discord', link: 'https://discord.gg/DkexpJj' },
    { title: 'Github', link: 'https://trky.dev/github' },
    { title: 'LudumDare', link: 'https://ldjam.com' },
];

export const Template: StoryObj<typeof NavBar> = {
    args: {},
    render: () => (
        <PageWrapper>
            <NavBar>
                <CollapsedNavbar icon='fa-solid fa-bars'>
                    <CollapsedNavLink text='Home' to=''/>
                    <CollapsedNavLink text='Projects' to=''/>
                    <CollapsedNavLink text='Blog' to=''/>
                    <CollapsedNavLink text='Support Me' to=''/>
                </CollapsedNavbar>
                <SiteName>
                    GobbleLib
                </SiteName>
                <CollapsibleCenterContent>
                    <NavText>Home</NavText>
                    <NavText>Projects</NavText>
                    <NavText>Blog</NavText>
                    <NavText>Support Me</NavText>
                    <Dropdown>
                        <NavText> Other Links</NavText>
                        <DropdownContent>
                            {
                                links.map(link => <NavText key={link.title}>{link.title}</NavText>)
                            }
                        </DropdownContent>
                    </Dropdown>
                </CollapsibleCenterContent>
                <Dropdown>
                    <Icon className='fa-solid fa-circle-user' style={{ fontSize: '32px' }} />
                    <DropdownContent sideAnchor='right'>
                        <LoginButtonWrapper>
                            Login
                        </LoginButtonWrapper>
                        <TextButton>Light Theme</TextButton>
                    </DropdownContent>
                </Dropdown>
            </NavBar>
        </PageWrapper>
    ),
};