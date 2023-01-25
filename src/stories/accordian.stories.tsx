import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Accordion } from '../layout/accordion';

export default {
    title: 'GobbleLib/Layout/Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args}>Content</Accordion>;

export const accordion = Template.bind({});

accordion.args = {
    header: 'Accordion header',
    defaultShow: true
};

