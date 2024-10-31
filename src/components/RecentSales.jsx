import React,{useState, useEffect} from 'react';
import './recentSales.css'
import RecentSalesTables from './RecentSalesTables';
import CardFilter from './CardFilter';

function RecentSales() {
    const [items, setItems] = useState([]);
        const [filter, setFilter] = useState('Today');
const handleFilterChange = filter => {
    setFilter(filter);
};

const fetchData = () => {
    fetch('http://localhost:4000/recentsales')
    .then(res => res.json())
    .then(data => {
        setItems(data)
    });
    
};
useEffect(() => {
    fetchData();
}, []);
    
    return (
        <div className='card recent-sales overflow-auto'>
            <CardFilter filterChange={handleFilterChange} />
            <div className='card-body'>
                <h5 className='card-title'>
                    Recent Sales <span>{filter}</span>
                </h5>
                <RecentSalesTables items={items} />

            </div>
        </div>
   
  )
}

export default RecentSales;