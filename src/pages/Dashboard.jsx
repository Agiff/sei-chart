import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsTable from '../components/NewsTable';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [graph, setGraph] = useState([]);
  const [startDate, setStartDate] = useState('2022-12-12');
  const [endDate, setEndDate] = useState('2023-02-04');

  useEffect(() => {
    axios.get('http://127.0.0.1:4200/api/v1/news/graph/2022-12-12/2023-02-24/*')
      .then(res => {
        setGraph(res.data);
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    let url = `http://127.0.0.1:4200/api/v1/news`;
    if (startDate && endDate) {
      url += `/${startDate}/${endDate}/*`;
    } else {
      url += '/*';
    }
    axios.get(url)
      .then(res => {
        setData(res.data.data);
      })
      .catch(err => console.log(err))
  }, [startDate, endDate])

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    console.log(e.target.value);
  }

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
    console.log(e.target.value);
  }
  
  return (
    <div>
      <div className='mb-10'>
        <h1 className='text-3xl font-bold'>Dashboard</h1>
        <hr />
      </div>
      <div className='mb-5'>
        <label htmlFor='startDate' className='mr-2'>Start Date:</label>
        <input type='date' id='startDate' value={startDate} onChange={handleStartDateChange} className='border rounded-md p-1' />
        <label htmlFor='endDate' className='ml-4 mr-2'>End Date:</label>
        <input type='date' id='endDate' value={endDate} onChange={handleEndDateChange} className='border rounded-md p-1' />
      </div>
      <div>
        <NewsTable data={data} itemsPerPage={10}/>
      </div>
    </div>
  )
}

export default Dashboard
