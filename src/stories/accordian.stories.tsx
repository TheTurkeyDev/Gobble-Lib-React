import { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '../layout/accordion';

export default {
    title: 'GobbleLib/Layout/Accordion',
    component: Accordion,
} as Meta<typeof Accordion>;

export const Template: StoryObj<typeof Accordion> = {
    args: {
        header: 'Accordion header',
        defaultShow: true
    },
    render: args => <Accordion {...args}>Content</Accordion>
};
