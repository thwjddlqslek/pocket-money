import React from "react";
import * as m from "../styles/modalStyle";

interface WelcomeModalProps {
  show: boolean;
  onClose: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <m.WelModalOverlay onClick={onClose}>
      <m.WelModalContent onClick={(e) => e.stopPropagation()}>
        <m.WelModalHeader>
          <h2>환영해요👋</h2>
          <m.CloseButton onClick={onClose}>✕</m.CloseButton>
        </m.WelModalHeader>
        <m.WelModalBody>
          <p>수입/지출 내역을 추가해보세요!</p>
          <p>회원가입/로그인 후 보관해보세요.</p>
        </m.WelModalBody>
        <m.WelModalFooter></m.WelModalFooter>
      </m.WelModalContent>
    </m.WelModalOverlay>
  );
};

export default WelcomeModal;
