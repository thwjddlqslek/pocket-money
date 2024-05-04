import React from "react";
import * as m from "../styles/mainStyle";

//메인 컨테이너 불필요 예상


const Main: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({length: 3}, (_, index) => currentYear - index);
  const months = Array.from({ length: 12 }, (_, index) => index + 1);

    return (
      <m.MainContainer>
        <m.PocketContainer>
          <div>
          <select>
          {years.map(year => (
            <option key={year} value={year}>{year} 년</option>
          ))}
        </select>
        <select>
          {months.map(month => (
            <option key={month} value={month}>{month} 월</option>
          ))}
        </select>
        <p>의 수입과 지출 내역</p>
        </div>
        <m.TotalContainer>
          <div>수입 : <m.ColorText color="#01A361">500,000 원</m.ColorText></div>
          <div>지출 : <m.ColorText color="#E12939">281,000 원</m.ColorText></div>
        </m.TotalContainer>
        <m.ReportContainer>
          <div>
            <m.OneReport>test</m.OneReport>
            <m.OneReport>test</m.OneReport>
            <m.OneReport>test</m.OneReport>
          </div>
          <div>
          <m.OneReport>test</m.OneReport>
          <m.OneReport>test</m.OneReport>
          <m.OneReport>test</m.OneReport>
          <m.OneReport>test</m.OneReport>
          <m.OneReport>test</m.OneReport>
          <m.OneReport>test</m.OneReport>
          <m.OneReport>test</m.OneReport>
          <m.OneReport>test</m.OneReport>
          </div>
        </m.ReportContainer>
        </m.PocketContainer>
      </m.MainContainer>
    );
  };

export default Main;