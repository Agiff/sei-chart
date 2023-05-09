import React from 'react'
import DonutChart from '../components/DonutChart'

const ChartPage = () => {
  return (
    <div style={{ minHeight: '90vh' }}>
      <div className='flex justify-between'>
        <DonutChart value={'top_person'} title={'TOP PERSON'} id={'top_person'} />
        <DonutChart value={'top_organisasi'} title={'TOP ORGANIZATION'} id={'top_organisasi'} />
        <DonutChart value={'top_location'} title={'TOP LOCATION'} id={'top_location'} />
      </div>
    </div>
  )
}

export default ChartPage
