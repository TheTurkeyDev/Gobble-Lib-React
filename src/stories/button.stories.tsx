import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button as Btn } from '../components/button';

export default {
    title: 'GobbleLib/Button',
    component: Btn,
} as ComponentMeta<typeof Btn>;

const Template: ComponentStory<typeof Btn> = (args) => <Btn {...args}>Button</Btn>;

export const Button = Template.bind({});

Button.args = {
    variant: 'contained',
    loading: false,
    selected: false,
};

