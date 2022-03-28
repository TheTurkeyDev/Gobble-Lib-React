import { Body1 } from '../typography/typography';
import { DualOptionModal } from './dual-option-modal';

type ConfirmationModalProps = {
    readonly show: boolean
    readonly requestClose?: () => void
    readonly text: string
    readonly yesText: string
    readonly onYesClick: () => void
    readonly noText: string
    readonly onNoClick: () => void
}

export const ConfirmationModal = ({ show, requestClose, text, yesText, onYesClick, noText, onNoClick }: ConfirmationModalProps) => {
    return (
        <DualOptionModal show={show} requestClose={requestClose} primaryText={yesText} onPrimaryClick={onYesClick} secondaryText={noText} onSecondaryClick={onNoClick}>
            <Body1>{text}</Body1>
        </DualOptionModal >
    );
};