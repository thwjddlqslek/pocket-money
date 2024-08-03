import { useState } from "react";
import * as m from "../styles/modalStyle";
import { SmallDateSelector } from "./SmallDateSelector";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  onAddIncome: (report: { content: string; amount: number }) => void;
}

const RegistModal: React.FC<ModalProps> = ({ show, onClose, onAddIncome }) => {
  //const [incomeDate, setIncomeDate] = useState("");
  const [incomeContent, setIncomeContent] = useState("");
  const [incomeAmount, setIncomeAmount] = useState<number | "">("");
  if (!show) return null;

  const handleSubmit = () => {
    if (incomeContent && incomeAmount) {
      onAddIncome({
        content: incomeContent,
        amount: incomeAmount,
      });
      setIncomeContent("");
      setIncomeAmount("");
    }
  };
  return (
    <m.ModalContainer>
      <m.ModalContent>
        <div>
          <button onClick={onClose}>X</button>
          <h1>수입 내역 작성하기</h1>
          <div className="form-grid">
            <label>날짜</label>
            <p>
              <SmallDateSelector />
            </p>
          </div>
          <div className="form-grid">
            <label>내용</label>
            <p>
              <input
                value={incomeContent}
                onChange={(e) => setIncomeContent(e.target.value)}
                placeholder="수입 내용을 작성해주세요!"
              />
            </p>
          </div>
          <div className="form-grid">
            <label>금액</label>
            <p>
              <input
                value={incomeAmount}
                onChange={(e) => setIncomeAmount(Number(e.target.value))}
                placeholder="수입 금액을 입력해주세요!"
                type="number"
              />
            </p>
          </div>
        </div>
        <m.RegistButton onClick={handleSubmit}>등록하기</m.RegistButton>
      </m.ModalContent>
    </m.ModalContainer>
  );
};

export default RegistModal;
