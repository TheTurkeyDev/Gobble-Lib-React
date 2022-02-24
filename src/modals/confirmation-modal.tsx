import { ContainedButton } from '../components/button';
import { Modal } from './base-modal';

type ConfirmationModalProps = {
    readonly show: boolean
    readonly text: string
    readonly options: readonly {
        readonly text: string
        readonly callback: () => void
    }[]
}

export const ConfirmationModal = ({ show, text, options }: ConfirmationModalProps) => {
    return (
        <Modal show={show}>
            <>
                <span>{text}</span>
                <div>
                    {
                        options.map((option, index) => {
                            return (
                                <ContainedButton key={index} onClick={() => option.callback()}>
                                    {option.text}
                                </ContainedButton>
                            );
                        })
                    }
                </div>
            </>
        </Modal >
    );
};