import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Chart, registerables } from 'chart.js';

interface IChartProps {
  labels: string[];
  data: number[];
}

export default component$<IChartProps>((props) => {
  const myChart  = useSignal<HTMLCanvasElement>();
  useVisibleTask$(() => {
    
    if (myChart?.value) {
      Chart.register(...registerables);
      new Chart(myChart.value, {
        type: 'line',
        data: {
            labels: props.labels,
            datasets: [{
              label: 'My First Dataset',
              data: props.data,
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  });

  return (
    <div>
      <canvas ref={myChart} id="myChart"></canvas>
    </div>
  );
});