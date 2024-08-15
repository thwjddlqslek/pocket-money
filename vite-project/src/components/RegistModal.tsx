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
  onAddSpend: (report: {
    date: string;
    content: string;
    amount: number;
  }) => void;
  modalColor: string;
  modalTitle: string;
  isSpendBttClicked: boolean;
}

const RegistModal: React.FC<ModalProps> = ({
  show,
  onClose,
  onAddIncome,
  onAddSpend,
  modalColor,
  modalTitle,
  isSpendBttClicked,
}) => {
  // 수입 modal
  const [incomeDate, setIncomeDate] = useState("");
  const [incomeContent, setIncomeContent] = useState("");
  const [incomeAmount, setIncomeAmount] = useState<number | null>(null);

  // 지출 modal
  const [spendDate, setSpendDate] = useState("");
  const [spendContent, setSpendContent] = useState("");
  const [spendAmount, setSpendAmount] = useState<number | null>(null);

  if (!show) return null;

  const handleSubmit = () => {
    if (!isSpendBttClicked) {
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
    } else {
      if (spendDate && spendContent && spendAmount !== null) {
        onAddSpend({
          date: spendDate,
          content: spendContent,
          amount: spendAmount,
        });
        setSpendContent("");
        setSpendAmount(null);
        setSpendDate("");
      }
    }
  };

  const handleCloseModal = () => {
    onClose();
    setIncomeContent("");
    setIncomeAmount(null);
    setSpendContent("");
    setSpendAmount(null);
  };

  const handleIncomeAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amountInputValue = e.target.value;

    if (/^\d*$/.test(amountInputValue) && amountInputValue.length <= 9) {
      setIncomeAmount(
        amountInputValue === "" ? null : Number(amountInputValue)
      );
    }
  };

  const handleSpendAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amountInputValue = e.target.value;

    if (/^\d*$/.test(amountInputValue) && amountInputValue.length <= 9) {
      setSpendAmount(amountInputValue === "" ? null : Number(amountInputValue));
    }
  };
  return (
    <m.ModalContainer>
      <m.ModalContent $modalColor={modalColor}>
        <div>
          <button onClick={handleCloseModal}>X</button>
          <h1>{modalTitle} 내역 작성하기</h1>
          <div className="form-grid">
            <label>날짜</label>
            <h2>
              {!isSpendBttClicked ? (
                <>
                  <SmallDateSelector
                    modalColor={modalColor}
                    selectedDate={setIncomeDate}
                  />
                </>
              ) : (
                <>
                  <SmallDateSelector
                    modalColor={modalColor}
                    selectedDate={setSpendDate}
                  />
                </>
              )}
            </h2>
          </div>
          <div className="form-grid">
            <label>내용</label>
            <h2>
              {!isSpendBttClicked ? (
                <>
                  <input
                    value={incomeContent}
                    maxLength={30}
                    onChange={(e) => setIncomeContent(e.target.value)}
                    placeholder="수입 내용 30자 이하로 작성해주세요!"
                  />
                </>
              ) : (
                <>
                  <input
                    value={spendContent}
                    maxLength={30}
                    onChange={(e) => setSpendContent(e.target.value)}
                    placeholder="지출 내용 30자 이하로 작성해주세요!"
                  />
                </>
              )}
            </h2>
          </div>
          <div className="form-grid">
            <label>금액</label>
            <h2>
              {!isSpendBttClicked ? (
                <>
                  <input
                    value={incomeAmount ?? ""}
                    maxLength={9}
                    onChange={handleIncomeAmountChange}
                    placeholder="수입 금액을 입력해주세요!"
                    type="number"
                  />
                </>
              ) : (
                <>
                  <input
                    value={spendAmount ?? ""}
                    maxLength={9}
                    onChange={handleSpendAmountChange}
                    placeholder="지출 금액을 입력해주세요!"
                    type="number"
                  />
                </>
              )}
            </h2>
          </div>
        </div>
        <m.RegistButton $modalColor={modalColor} onClick={handleSubmit}>
          등록하기
        </m.RegistButton>
      </m.ModalContent>
    </m.ModalContainer>
  );
};

export default RegistModal;
