import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as m from "../styles/mainStyle";
import { updateSpendReport } from "../store/spendSlice";
import { AppDispatch } from "../store";

interface SpendReportProps {
  id: number;
  date: string;
  content: string;
  amount: number;
  onDelete: () => void;
}

const SpendReport: React.FC<SpendReportProps> = ({
  id,
  date,
  content,
  amount,
  onDelete,
}) => {
  const formateAmout = amount.toLocaleString();
  const modifyedDate = date.slice(2);
  const dispatch: AppDispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);
  const [editedAmount, setEditedAmount] = useState(amount);
  const handleUpdateIncome = async () => {
    try {
      await dispatch(
        updateSpendReport({
          id,
          date,
          content: editedContent,
          amount: editedAmount,
        })
      ).unwrap();
      setIsEditing(false);
      console.log("[성공] 지출 내역 1건 수정 완료");
    } catch (err) {
      console.error("[실패] 지출 내역 1건 수정 불가", err);
    }
  };

  return (
    <m.OneReport>
      <div className="icon-box">
        <button id="update" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "close" : "edit"}
        </button>
        {isEditing ? (
          <>
            <button id="save" onClick={handleUpdateIncome}>
              save
            </button>
          </>
        ) : (
          <>
            <button id="delete" onClick={onDelete}>
              del
            </button>
          </>
        )}
      </div>
      <div>
        <p id="date">{modifyedDate}</p>
        {isEditing ? (
          <>
            <input
              id="input-content"
              type="text"
              value={editedContent}
              maxLength={30}
              onChange={(e) => setEditedContent(e.target.value)}
            />
            <input
              id="input-amount"
              type="number"
              max={999999999}
              value={editedAmount}
              onChange={(e) => setEditedAmount(Number(e.target.value))}
            />
          </>
        ) : (
          <>
            <p id="content">{content}</p>
            <p id="amount">{formateAmout}</p>
          </>
        )}
      </div>
    </m.OneReport>
  );
};

export default SpendReport;
