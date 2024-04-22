import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import { Button } from '../components/button';

export default {
    title: 'GobbleLib/Component/Button',
    component: Button,
} as Meta<typeof Button>;

const ButtonsWrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto 1fr;
    gap: 8px;
`;

export const Template: StoryObj<typeof Button> = {
    args: {
        variant: 'contained',
        loading: false,
        selected: false,
        icon: 'fa-solid fa-check',
        disabled: false
    },
    render: args => <ButtonsWrapper>
        <Button {...args}>Button</Button>
        <Button {...args}></Button>
        <Button {...args} icon='fa-solid fa-x'></Button>
    </ButtonsWrapper>
};

