import styled from 'styled-components';
import { WithChildren } from '../with-children-type';
import { Modal } from './base-modal';

const CenterContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;

type CenteredModalProps = WithChildren & {
    readonly show: boolean
    readonly requestClose: () => void
}

export const CenteredModal = ({ show, requestClose, children }: CenteredModalProps) => {
    return (
        <Modal show={show} requestClose={requestClose}>
            <CenterContent>
                {children}
            </CenterContent>
        </Modal>
    );
};