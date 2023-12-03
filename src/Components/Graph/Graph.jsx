import React, { useState } from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import DropDown from './Dropdown';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import TableChartIcon from '@mui/icons-material/TableChart';
import GraphData from '../GraphData/GraphData';


const Graph = () => {
    const [changeGraph, setChangeGraph] = useState("Doughnut");


    const handleGraph = () => {
        setChangeGraph('Doughnut')
    }

    const handleTable = () => {
        setChangeGraph('Table');
    }

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <div className='doughnut_main'>
                {changeGraph === 'Doughnut' ? <Doughnut data={data} /> : <GraphData />}
            </div>
            <div className='table_icon_parent'>
                <div className='table_icons_main'>
                    <AnalyticsIcon onClick={handleGraph} style={{ cursor: 'pointer' }} />
                    <TableChartIcon onClick={handleTable} style={{ cursor: 'pointer' }} />
                </div>
            </div>
        </div>
    )
}

export default Graph