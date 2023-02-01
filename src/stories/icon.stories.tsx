import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import { Button } from '../components/button';
import { Icon } from '../components/icon';

export default {
    title: 'GobbleLib/Component/Icon',
    component: Icon,
} as ComponentMeta<typeof Icon>;

const IconsWrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto 1fr;
    gap: 8px;
`;

const BigIcon = styled(Icon)`
    font-size: 32px;
`;

const Template: ComponentStory<typeof Icon> = (args) => <IconsWrapper>
    <Icon className={args.className} />
    <BigIcon className={args.className} />
</IconsWrapper>;

export const icon = Template.bind({});

icon.args = {
    className: 'fa-solid fa-circle-user',
};

