import React, { useState } from 'react'
import CardFilter from './CardFilter';
import ReportsCharts from './ReportsCharts';

function Reports() {
    const [filter, setFilter ] = useState('Today');
    const handleFilterChange = filter => {
        setFilter(filter);
    };
  return (
    <div className="card">
        <CardFilter filterChange={handleFilterChange} />
       <div className='card-body'>
        <h5 className='card-title'>
            Reports <span>/{filter}</span>
            </h5>
            <ReportsCharts />
            </div> 
    </div>
  )
}

export default Reports;