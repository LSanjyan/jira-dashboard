import React, { useState } from 'react'
import CardFilter from './CardFilter';
import './card.css';
    
function Cards({card}) {
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter => {
        setFilter(filter);
    };
  return (
    <div className='col-xxl-4 col-md-6'>
        <div className='card info-card sales-card'>
            <CardFilter filterChange={handleFilterChange} />
            <div className='card-body'>
                <h5 className='card-title'>
                    {card.name} <span>{filter}</span>
                </h5>
                <div className='d-flex align-items-center'>
                    <div className='card-icon rounded-circle d-flex align-items-center justify-content-center'>
                        <i className={card.icon}></i>
                    </div>
                    <div className='ps-3'>
    <h6>
        {Math.abs(card.percentage * 100)} %
    </h6>
</div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards;