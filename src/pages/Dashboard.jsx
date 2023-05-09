import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [graph, setGraph] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:4200/api/v1/news/2022-12-12/2023-02-24/*')
      .then(res => {
        setData(res.data.data);
      })
      .catch(err => console.log(err))
  }, [])
  
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

export default Dashboard
