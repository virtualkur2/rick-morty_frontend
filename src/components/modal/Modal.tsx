import type { PropsWithChildren } from "react";
import { CloseButton, ModalContent, ModalOverlay, ModalTitle } from "./Modal.styles";

export interface ModalProps extends PropsWithChildren {
    onClose(): void;
    title?: string;
}

const Modal = ({children, title, onClose}: ModalProps) => {
    if(!children) {
        return null;
    }
    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>&times;</CloseButton>
                <ModalTitle>{title ?? 'Modal'}</ModalTitle>
                {children}
            </ModalContent>
        </ModalOverlay>
    );
}

export default Modal;
