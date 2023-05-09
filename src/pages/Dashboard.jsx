import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col justify-center items-center' style={{ minHeight: '90vh' }}>
      <div className='mb-10'>
        <h1 className='font-bold text-3xl'>Welcome to Sei-Chart</h1>
      </div>
      <div className='flex gap-10'>
        <button className="btn" onClick={() => navigate('/table')}>Table Page</button>
        <button className="btn">Chart Page</button>
      </div>
    </div>
  )
}

export default Dashboard
