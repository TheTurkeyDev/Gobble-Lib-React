import { ReactNode } from 'react';
import { DualOptionModal } from './dual-option-modal';

type ConfirmationModalProps = {
    readonly show: boolean
    readonly requestClose?: () => void
    readonly text: ReactNode
    readonly yesText: string
    readonly onYesClick: () => void
    readonly noText: string
    readonly onNoClick: () => void
}

export const ConfirmationModal = ({ show, requestClose, text, yesText, onYesClick, noText, onNoClick }: ConfirmationModalProps) => {
    return (
        <DualOptionModal show={show} requestClose={requestClose} primaryText={yesText} onPrimaryClick={onYesClick} secondaryText={noText} onSecondaryClick={onNoClick}>
            {text}
        </DualOptionModal >
    );
};