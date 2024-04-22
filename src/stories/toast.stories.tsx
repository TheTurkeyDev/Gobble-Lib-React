import { Meta, StoryObj } from '@storybook/react';
import { TextToast, useToast } from '..';

import { ContainedButton } from '../components/button';

export default {
    title: 'GobbleLib/Toast',
    component: TextToast,
} as Meta<typeof TextToast>;

export const Template: StoryObj<typeof TextToast> = {
    args: {
        text: 'Text',
    },
    render: args => {
        const { pushToast } = useToast();
        return (
            <ContainedButton onClick={() => pushToast(<TextToast text={args.text} />)}>
                Show Toast
            </ContainedButton>
        );
    },
};

