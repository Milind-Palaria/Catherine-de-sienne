"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);



const DoughnutChart = ({ accounts }: DoughnutChartProps) => {

  const accountNames = accounts.map((a) => a.name);
  const balances = accounts.map((a) => a.currentBalance)

  const data = {
    datasets: [
      {
        label: 'Banks',
        data: balances,
        backgroundColor: ['rgba(0, 255, 255, 0.7)', 'rgba(0, 229, 229, 0.7)', 'rgba(0, 204, 204, 0.7)'] ,
        hoverBackgroundColor: ['rgba(0, 255, 255, 0.99)', 'rgba(0, 229, 229, 0.99)', 'rgba(0, 204, 204, 0.99)'],
        hoverBorderColor:'rgba(0,0,0,0.4)',
      }
    ],
    labels: accountNames,
  }

  return <Doughnut 
    data={data} 
    options={{
      animation: {
        delay: 6500, // Delay before the animation starts (in milliseconds)
        duration: 1000, // Duration of the animation (in milliseconds)
        easing: 'easeInOutQuad', // Easing function to use
      },

      cutout: '50%',
      plugins: {
        legend: {
          display: false
        }
      }
    }}
  />
}

export default DoughnutChart