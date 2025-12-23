import { Meta, StoryObj } from '@storybook/react-vite';
import { ConfirmationModal } from '..';

export default {
    title: 'GobbleLib/Modal',
    component: ConfirmationModal,
} as Meta<typeof ConfirmationModal>;

export const Template: StoryObj<typeof ConfirmationModal> = {
    args: {
        show: true,
        yesText: 'Yes',
        noText: 'No',
        yesLoading: false,
        noLoading: false,
    },
    render: args => (
        <ConfirmationModal
            show={args.show}
            text='This is a semi complex test with multiple lints ans stuff'
            yesText={args.yesText}
            yesLoading={args.yesLoading}
            onYesClick={() => alert(`${args.yesText} clicked!`)}
            noText={args.noText}
            noLoading={args.noLoading}
            onNoClick={() => alert(`${args.noText} clicked!`)} />
    )
};