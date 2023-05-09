import React, { useEffect, useState } from 'react'
import DonutChart from '../components/DonutChart'
import axios from 'axios';
import BarChart from '../components/BarChart';
import WordTag from '../components/WordTag';
import Maps from '../components/Maps';

const ChartPage = () => {
  const [dataGraph, setDataGraph] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:4200/api/v1/news/graph/2022-12-12/2023-02-24/*`)
      .then(res => {
        setDataGraph(res.data);
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <div style={{ minHeight: '90vh', paddingBottom: '5rem' }}>
      <div className='flex justify-between'>
        <DonutChart data={dataGraph?.aggregations?.top_person?.buckets} title={'TOP PERSON'} id={'top_person'} />
        <DonutChart data={dataGraph?.aggregations?.top_organisasi?.buckets} title={'TOP ORGANIZATION'} id={'top_organisasi'} />
        <DonutChart data={dataGraph?.aggregations?.top_location?.buckets} title={'TOP LOCATION'} id={'top_location'} />
      </div>
      <div className='mt-10'>
        <BarChart data={dataGraph?.aggregations?.time_series?.buckets?.slice(0, 10)} title={'BAR CHART'} id={'time_series'} />
      </div>
      <div className='mt-10'>
        <WordTag data={dataGraph?.word_tag} title={'WORD TAG'} id={'word_tag'} />
      </div>
      <div className='mt-10'>
        <Maps id={'maps'} />
      </div>
    </div>
  )
}

export default ChartPage
