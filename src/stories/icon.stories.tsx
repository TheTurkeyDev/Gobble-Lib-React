import { Meta, StoryObj } from '@storybook/react-vite';
import styled from 'styled-components';
import { Icon } from '../components/icon';

export default {
    title: 'GobbleLib/Component/Icon',
    component: Icon,
} as Meta<typeof Icon>;

const IconsWrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto 1fr;
    gap: 8px;
`;

const BigIcon = styled(Icon)`
    font-size: 32px;
`;

export const Template: StoryObj<typeof Icon> = {
    args: {
        className: 'fa-solid fa-circle-user',
    },
    render: args => <IconsWrapper>
        <Icon className={args.className} />
        <BigIcon className={args.className} />
    </IconsWrapper>
};

