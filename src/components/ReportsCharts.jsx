import React, {useState} from 'react';
import Chart from 'react-apexcharts'

function ReportsCharts() {
    const [data, setData ] = useState({
        series: [
            {
                name: 'Sales',
                data: [31, 40, 50, 45, 34, 45, 57]
            },
            {
                name: 'Revenue',
                data: [11, 20, 34, 45, 54, 55, 57]
            },
            {
                name: 'Customers',
                data: [21, 32, 40, 45, 34, 25, 57]
            },
        ],
        options: {
            chart: {
                height: 350,
                type: 'area',
                toolbar: {
                    show: false,
                },
            },
            markers: {
                size: 4,
            },
            colors: ['#4154f1', '#2eca6a', '#ff771d'],
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.3,
                    opacityTo: 0.4,
                    stops: [0, 90, 100]
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            xaxic: {
                type: 'datetime',
                categories: [
                    '2024-11-11T00:00:00.000Z',
                    '2024-11-11T01:30:00.000Z',
                    '2024-11-11T02:30:00.000Z',
                    '2024-11-11T03:30:00.000Z',
                    '2024-11-11T04:30:00.000Z',
                    '2024-11-11T05:30:00.000Z',
                    '2024-11-11T06:30:00.000Z',
                ],
            },
            tooltip: {
                x:{
                format: 'dd/MM/yy HH:mm'
            },
        },

    },
});

  return (
   <Chart 
     options={data.options}
     series={data.series}
     type={data.options.chart.type}
     height={data.options.chart.height} />
  )
}

export default ReportsCharts;