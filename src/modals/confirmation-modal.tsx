import { ReactNode } from 'react';
import { DualOptionModal } from './dual-option-modal';

type ConfirmationModalProps = {
    readonly show: boolean
    readonly requestClose?: () => void
    readonly text: ReactNode
    readonly yesText: string
    readonly yesLoading?: boolean
    readonly onYesClick: () => void
    readonly noText: string
    readonly noLoading?: boolean
    readonly onNoClick: () => void
}

export const ConfirmationModal = ({ show, requestClose, text, yesText, yesLoading, onYesClick, noText, noLoading, onNoClick }: ConfirmationModalProps) => {
    return (
        <DualOptionModal
            show={show}
            requestClose={requestClose}
            primaryText={yesText}
            primaryLoading={yesLoading}
            onPrimaryClick={onYesClick}
            secondaryText={noText}
            secondaryLoading={noLoading}
            onSecondaryClick={onNoClick}
        >
            {text}
        </DualOptionModal >
    );
};