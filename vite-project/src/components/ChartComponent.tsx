import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import * as m from "../styles/mainStyle";
import { memo, useContext, useMemo } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { darkTheme, lightTheme } from "../styles/theme";

interface ChartComponentProps {
  incomeData: number[];
  spendData: number[];
  selectedYear: number;
}

const ChartComponent: React.FC<ChartComponentProps> = ({
  incomeData,
  spendData,
  selectedYear,
}) => {
  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = useMemo<ChartOptions<"bar">>(
    () => ({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
          labels: {
            color: theme.text,
            font: {
              family: "Moneygraphy-Pixel",
              size: 16,
            },
          },
        },
        title: {
          display: true,
          text: `${selectedYear}년 한 눈에 알아보기`,
          font: {
            family: "Moneygraphy-Pixel",
            size: 24,
            weight: 400,
          },
          color: theme.text,
        },
      },
      layout: {
        padding: 14,
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: theme.text,
            font: {
              family: "Moneygraphy-Pixel",
              size: 15,
            },
          },
        },
        y: {
          grid: {
            display: true,
            color: "rgba(224, 229, 253, 0.7)",
          },
          ticks: {
            color: theme.text,
            font: {
              family: "Moneygraphy-Pixel",
              size: 15,
            },
          },
        },
      },
    }),
    [selectedYear, theme]
  );

  const data = useMemo(() => {
    const labels = [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ];

    return {
      labels,
      datasets: [
        {
          label: "수입",
          data: incomeData,
          backgroundColor: theme.chartIn,
          borderColor: theme.income,
          borderWidth: 1.5,
          borderRadius: 6,
          color: "white",
        },
        {
          label: "지출",
          data: spendData,
          backgroundColor: theme.chartSp,
          borderColor: theme.spend,
          borderWidth: 1.5,
          borderRadius: 6,
        },
      ],
    };
  }, [incomeData, spendData]);
  console.log("incomeData:", incomeData);

  return (
    <m.ChartContainer>
      <div className="contentWrap">
        <div className="contentInner">
          <Bar options={options} data={data} />
        </div>
      </div>
    </m.ChartContainer>
  );
};

export default memo(ChartComponent);
