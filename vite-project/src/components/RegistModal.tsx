import { useState } from "react";
import * as m from "../styles/modalStyle";
import { SmallDateSelector } from "./SmallDateSelector";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  onAddIncome: (report: {
    date: string;
    content: string;
    amount: number;
  }) => void;
}

const RegistModal: React.FC<ModalProps> = ({ show, onClose, onAddIncome }) => {
  const [incomeDate, setIncomeDate] = useState("");
  const [incomeContent, setIncomeContent] = useState("");
  const [incomeAmount, setIncomeAmount] = useState<number | null>(null);

  if (!show) return null;

  const handleSubmit = () => {
    if (incomeDate && incomeContent && incomeAmount !== null) {
      onAddIncome({
        date: incomeDate,
        content: incomeContent,
        amount: incomeAmount,
      });
      setIncomeContent("");
      setIncomeAmount(null);
      setIncomeDate("");
    }
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amountInputValue = e.target.value;

    if (/^\d*$/.test(amountInputValue) && amountInputValue.length <= 9) {
      setIncomeAmount(
        amountInputValue === "" ? null : Number(amountInputValue)
      );
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
            <h2>
              <SmallDateSelector selectedDate={setIncomeDate} />
            </h2>
          </div>
          <div className="form-grid">
            <label>내용</label>
            <h2>
              <input
                value={incomeContent}
                maxLength={30}
                onChange={(e) => setIncomeContent(e.target.value)}
                placeholder="30자 이하로 작성해주세요!"
              />
            </h2>
          </div>
          <div className="form-grid">
            <label>금액</label>
            <h2>
              <input
                value={incomeAmount ?? ""}
                maxLength={9}
                onChange={handleAmountChange}
                placeholder="수입 금액을 입력해주세요!"
                type="number"
              />
            </h2>
          </div>
        </div>
        <m.RegistButton onClick={handleSubmit}>등록하기</m.RegistButton>
      </m.ModalContent>
    </m.ModalContainer>
  );
};

export default RegistModal;
