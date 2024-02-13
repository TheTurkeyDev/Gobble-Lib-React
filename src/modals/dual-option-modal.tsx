import styled from 'styled-components';
import { ContainedButton, OutlinedButton } from '../components/button';
import { WithChildren } from '../with-children-type';
import { Modal } from './base-modal';

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const ButtonsWrapper = styled.div`
    display: grid;
    gap: 8px;
    grid-template-columns: 1fr auto;
    justify-items: right;
`;

type DualOptionModalProps = WithChildren & {
    readonly show: boolean
    readonly requestClose?: () => void
    readonly primaryText: string
    readonly onPrimaryClick: () => void
    readonly secondaryText: string
    readonly onSecondaryClick: () => void
}

export const DualOptionModal = ({ show, requestClose, children, primaryText, onPrimaryClick, secondaryText, onSecondaryClick }: DualOptionModalProps) => {

    return <Modal show={show} requestClose={requestClose}>
        <ContentWrapper>
            {children}
            <ButtonsWrapper>
                <OutlinedButton onClick={onSecondaryClick}>{secondaryText}</OutlinedButton>
                <ContainedButton onClick={onPrimaryClick}>{primaryText}</ContainedButton>
            </ButtonsWrapper>
        </ContentWrapper>
    </Modal>;
};