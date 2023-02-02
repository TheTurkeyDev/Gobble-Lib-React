import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled, { ThemeProps } from 'styled-components';
import { TextButton } from '../components/button';
import { Dropdown, DropdownContent } from '../components/dropdown';
import { Icon } from '../components/icon';
import { NavText } from '../components/nav-link';
import { Opacity } from '../constants/opacity';
import { CollapsedNavbar } from '../layout/collapsed-navbar';
import { CollapsibleCenterContent, NavBar } from '../layout/navbar';
import { TextHoverCss } from '../styling/text-hover-styling';
import { BaseTheme } from '../theme/turkeydev-theme';
import { Body1, Headline6Css } from '../typography/typography';

const LoginButtonWrapper = styled(Body1)`
    ${TextHoverCss}
`;

const SiteName = styled(NavText)`
    ${Headline6Css}
    color: ${({ theme }: ThemeProps<BaseTheme>) => theme.primary.on};
    text-decoration: none;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    white-space: nowrap;

    &:hover {
        color: ${({ theme }: ThemeProps<BaseTheme>) => theme.primary.on};
        opacity: ${Opacity.HOVER_NORMAL};
        text-decoration: none;
    }
`;

export default {
    title: 'GobbleLib/Layout',
    component: NavBar,
} as ComponentMeta<typeof NavBar>;

const links = [
    { title: 'Twitch', link: 'https://trky.dev/twitch' },
    { title: 'YouTube', link: 'https://trky.dev/youtube' },
    { title: 'Discord', link: 'https://discord.gg/DkexpJj' },
    { title: 'Github', link: 'https://trky.dev/github' },
    { title: 'LudumDare', link: 'https://ldjam.com' },
];

const Template: ComponentStory<typeof NavBar> = args => {
    return (<NavBar>
        <CollapsedNavbar icon='fa-solid fa-bars'>
            <NavText>Home</NavText>
            <NavText>Projects</NavText>
            <NavText>Blog</NavText>
            <NavText>Support Me</NavText>
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
    </NavBar>);
};

export const navbar = Template.bind({});

navbar.args = {};