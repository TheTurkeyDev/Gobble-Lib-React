import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextToast, useToast } from '..';

import { ContainedButton } from '../components/button';

export default {
    title: 'GobbleLib/Toast',
    component: TextToast,
} as ComponentMeta<typeof TextToast>;

const Template: ComponentStory<typeof TextToast> = (args) => {
    const { pushToast } = useToast();
    return (
        <ContainedButton onClick={() => pushToast(<TextToast text={args.text} />)}>
            Show Toast
        </ContainedButton>
    );
};

export const Toast = Template.bind({});

Toast.args = {
    text: 'Text',
};

