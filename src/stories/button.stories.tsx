import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components/button';

export default {
    title: 'GobbleLib/Component/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>;

export const button = Template.bind({});

button.args = {
    variant: 'contained',
    loading: false,
    selected: false,
};

