import { Meta, StoryObj } from '@storybook/react';
import {  Body1, Body2, Caption, Headline1, Headline2, Headline3, Headline4, Headline5, Subtitle1, Subtitle2 } from '..';

export default {
    title: 'GobbleLib/Typography',
} as Meta;

export const Template: StoryObj = {
    render: args => {
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Headline1>Headline 1</Headline1>
                <Headline2>Headline 2</Headline2>
                <Headline3>Headline 3</Headline3>
                <Headline4>Headline 4</Headline4>
                <Headline5>Headline 5</Headline5>
                <Subtitle1>Subtitle 1</Subtitle1>
                <Subtitle2>Subtitle 2</Subtitle2>
                <Body1>Body 1</Body1>
                <Body2>Body 2</Body2>
                <Caption>Caption</Caption>
            </div>
        );
    },
};

