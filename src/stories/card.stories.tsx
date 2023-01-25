import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card, CardContent, CardHeader } from '../layout/card';
import { Body1, Headline4 } from '../typography';

const disable = {
    table: {
        disable: true,
    },
};
export default {
    title: 'GobbleLib/Layout/Card',
    component: Card,
    argTypes: {
        ref: disable,
        theme: disable,
        as: disable,
        forwardedAs: disable,
    }
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = () => (
    <Card>
        <CardHeader>
            <Headline4>Header</Headline4>
        </CardHeader>
        <CardContent>
            <Body1>Card content goes here!</Body1>
        </CardContent>
    </Card>
);

export const card = Template.bind({});


