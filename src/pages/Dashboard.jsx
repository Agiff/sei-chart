import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsTable from '../components/NewsTable';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [graph, setGraph] = useState([]);
  const [startDate, setStartDate] = useState('2022-12-12');
  const [endDate, setEndDate] = useState('2023-02-04');
  const [searchInput, setSearchInput] = useState('*');

  useEffect(() => {
    axios.get('http://127.0.0.1:4200/api/v1/news/graph/2022-12-12/2023-02-24/*')
      .then(res => {
        setGraph(res.data);
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    axios.get(`http://127.0.0.1:4200/api/v1/news/${startDate}/${endDate}/${searchInput}`)
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

  const handleSearchByKeyword = (e) => {
    e.preventDefault();
    axios.get(`http://127.0.0.1:4200/api/v1/news/${startDate}/${endDate}/${searchInput}`)
      .then(res => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch(err => console.log(err))
  }  
  
  return (
    <div>
      <div className='mb-10'>
        <h1 className='text-3xl font-bold'>Dashboard</h1>
        <hr />
      </div>
      <div className='flex justify-between'>
        <div className='mb-5 w-full'>
          <label htmlFor='startDate' className='mr-2'>Start Date:</label>
          <input type="date" id='startDate' value={startDate} onChange={handleStartDateChange} className="input input-bordered w-1/5 max-w-xs" />
          <label htmlFor='endDate' className='ml-4 mr-2'>End Date:</label>
          <input type="date" id='endDate' value={endDate} onChange={handleEndDateChange} className="input input-bordered w-1/5 max-w-xs" />
        </div>
        <form className="form-control" onSubmit={handleSearchByKeyword}>
          <div className="input-group">
            <input type="text" placeholder="Search…" onChange={(e) => setSearchInput(e.target.value)} className="input input-bordered" />
            <button className="btn btn-square">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>
        </form>
      </div>
      <div>
        <NewsTable data={data} itemsPerPage={10}/>
      </div>
    </div>
  )
}

export default Dashboard
