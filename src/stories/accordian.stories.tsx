import { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '../layout/accordion';
import { Subtitle1 } from '../typography';
import { OutlinedButton } from '../components';

export default {
    title: 'GobbleLib/Layout/Accordion',
    component: Accordion,
} as Meta<typeof Accordion>;

export const Template: StoryObj<typeof Accordion> = {
    args: {
        header: 'Accordion header',
        defaultShow: true
    },
    render: args => <>
        <Accordion {...args}>Content</Accordion>
        <Accordion headerContent={
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Subtitle1>Test</Subtitle1>
                <OutlinedButton onClick={e => { e.stopPropagation() }}>Button</OutlinedButton>
            </div>
        }>Content</Accordion>
    </>
};
