import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import BottomArrow from "../public/BottomArrow.png";
import Image from "next/image";

const BarChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "end",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 500,
        ticks: {
          stepSize: 100,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div
      id="mainGraphContainer"
      className="p-5 rounded-[20px] h-[370px] bg-white w-[95%] mb-auto"
    >
      <div className=" max-w-[99%] h-[300px] m-auto mb-3">
        <div className="flex justify-between items-center">
          <div className="flex-[7]">
            <h3 className="font-bold text-2xl">Activities</h3>
            <div className="flex-[1] flex justify-start gap-2 items-center">
              <p>May - June 2021</p>
              <Image src={BottomArrow} width={8} height={5} alt="Arrow" />
            </div>
          </div>
        </div>
        <Bar
          datasetIdKey="id"
          data={{
            labels: ["", "Week 1", "Week 2", "Week 3", "Week 4", ""],
            datasets: [
              {
                id: 1,
                label: "User",
                data: [0, 480, 420, 200, 380, 0],
                backgroundColor: "#98D89E",
                borderRadius: 3,
              },
              {
                id: 2,
                label: "Guest",
                data: [0, 390, 370, 300, 320, 0],
                backgroundColor: "#EE8484",
                borderRadius: 3,
              },
            ],
          }}
          options={options}
        />
      </div>
    </div>
  );
};

export default BarChart;
