import React from 'react'
import { Pie } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

const ChartPie = ({ratings}) => {
    console.log(ratings);
    const count = []
    const title = []
    ratings.map((e) => count.push(e.count))
    ratings.map((e) => title.push(e.title))

    console.log(count);
    const labels = title
    const datasets = [
        {
            data: count,
            backgroundColor: ["#003f5c", "#58508d", "#bc5090", "#ff6361"]
        }
    ]
    return (
        <Pie
            options={{
                width: "200",
                height: "200"
            }}
            data={{
                labels: labels,
                datasets: datasets
            }}
        />
    )
}

export default ChartPie