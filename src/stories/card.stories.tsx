import { Meta, StoryObj } from '@storybook/react';
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
} as Meta<typeof Card>;

export const Template: StoryObj<typeof Card> = {
    render: () => (
        <Card>
            <CardHeader>
                <Headline4>Header</Headline4>
            </CardHeader>
            <CardContent>
                <Body1>Card content goes here!</Body1>
            </CardContent>
        </Card>
    )
};
