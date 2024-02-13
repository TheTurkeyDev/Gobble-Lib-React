import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Body1, ConfirmationModal } from '..';

export default {
    title: 'GobbleLib/Modal',
    component: ConfirmationModal,
} as ComponentMeta<typeof ConfirmationModal>;

const Template: ComponentStory<typeof ConfirmationModal> = args => {
    return (
        <ConfirmationModal
            show={args.show}
            text='This is a semi complex test with multiple lints ans stuff'
            yesText={args.yesText}
            yesLoading={args.yesLoading}
            onYesClick={() => alert(`${args.yesText} clicked!`)}
            noText={args.noText}
            noLoading={args.noLoading}
            onNoClick={() =>  alert(`${args.noText} clicked!`)} />
    );
};

export const confirmationModal = Template.bind({});

confirmationModal.args = {
    show: true,
    yesText: 'Yes',
    noText: 'No',
    yesLoading: false,
    noLoading: false,
};

