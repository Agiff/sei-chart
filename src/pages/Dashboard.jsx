import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsTable from '../components/NewsTable';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [graph, setGraph] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:4200/api/v1/news/graph/2022-12-12/2023-02-24/*')
      .then(res => {
        setGraph(res.data);
      })
      .catch(err => console.log(err))
    axios.get('http://127.0.0.1:4200/api/v1/news/2022-12-12/2023-02-24/*')
      .then(res => {
        setData(res.data.data);
      })
      .catch(err => console.log(err))
  }, [])
  
  return (
    <div>
      <div className='mb-10'>
        <h1 className='text-3xl font-bold'>Dashboard</h1>
        <hr />
      </div>
      <div>
        <NewsTable data={data} itemsPerPage={10}/>
      </div>
    </div>
  )
}

export default Dashboard
