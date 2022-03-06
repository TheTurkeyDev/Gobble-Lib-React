import { ContainedButton } from '../components/button';
import { Body1 } from '../typography';
import { WithChildren } from '../with-children-type';
import { Modal } from './base-modal';

type ConfirmationModalProps = {
    readonly show: boolean
    readonly text: string
    readonly yesText: string
    readonly onYesClick: () => void
    readonly noText: string
    readonly onNoClick: () => void
}

export const ConfirmationModal = ({ show, text, yesText, onYesClick, noText, onNoClick }: ConfirmationModalProps) => {
    return (
        <Modal show={show}>
            <Body1>{text}</Body1>
            <div>
                <ContainedButton onClick={onNoClick}>
                    {noText}
                </ContainedButton>
                <ContainedButton onClick={onYesClick}>
                    {yesText}
                </ContainedButton>
            </div>
        </Modal >
    );
};