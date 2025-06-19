import type { FC } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Line, Pie } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const lineData = {
  labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Valor del Portafolio (COP)',
      data: [1000000, 1200000, 1100000, 1500000, 1400000, 1600000],
      borderColor: 'rgb(37,99,235)',
      backgroundColor: 'rgba(37,99,235,0.5)',
    },
  ],
};

const pieData = {
  labels: ['BTC', 'ETH', 'USDT'],
  datasets: [
    {
      data: [60, 25, 15],
      backgroundColor: [
        'rgb(234,179,8)',
        'rgb(59,130,246)',
        'rgb(34,197,94)',
      ],
    },
  ],
};

const Dashboard: FC = () => {
  return (
    <div className="p-4 space-y-8">
      <h2 className="text-xl font-bold">Dashboard</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Line data={lineData} />
        </div>
        <div>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
