import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import styles from "./Graph.module.css"
const Graph = () => {
    const labels = ["Jan", 'Feb', 'Mar', 'April', 'May', 'June', 'July']
    const chartData = {
        labels: labels,
        datasets: [{
            label: 'Revenue in rupees',
            data: [65, 59, 80, 81, 56, 55, 40],
            //   fill: false,
            //   borderColor: 'rgb(75, 192, 192)',
            //   tension: 0.1
        }]
    };
    return <div className={styles.graphContainer}><Line
        data={chartData}
        options={{
            interaction: {
                mode: 'nearest',
                // axis: 'x',
                intersect: false
                },
            plugins: {
                title: {
                    display: true,
                    text: "Revenue Gained between Jan-July"
                },
                legend: {
                    display: false
                }
            }, 
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    grid: {
                        display: false
                    }
                }
            },
            responsive: true,
        }}
        // style={{width:"100%"}}
    />
    </div>
}
export default Graph