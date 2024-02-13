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
    readonly primaryLoading?: boolean
    readonly onPrimaryClick: () => void
    readonly secondaryText: string
    readonly secondaryLoading?: boolean
    readonly onSecondaryClick: () => void
}

export const DualOptionModal = ({ show, requestClose, children, primaryText, primaryLoading, onPrimaryClick, secondaryText, secondaryLoading, onSecondaryClick }: DualOptionModalProps) => {

    const isPrimLoading = primaryLoading ?? false;
    const isSecLoading = secondaryLoading ?? false;
    return <Modal show={show} requestClose={requestClose}>
        <ContentWrapper>
            {children}
            <ButtonsWrapper>
                <OutlinedButton onClick={onSecondaryClick} loading={isSecLoading} disabled={isPrimLoading || isSecLoading}>{secondaryText}</OutlinedButton>
                <ContainedButton onClick={onPrimaryClick} loading={isPrimLoading} disabled={isPrimLoading || isSecLoading}>{primaryText}</ContainedButton>
            </ButtonsWrapper>
        </ContentWrapper>
    </Modal>;
};