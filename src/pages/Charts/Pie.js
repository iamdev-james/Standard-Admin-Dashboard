import React from 'react'

import { Header } from '../../layout'

import { pieChartData } from '../../data/dummy'

import { Pie as PieChart } from '../../components'

const Pie = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Charts" title="Project Cost Breakdown" />
      <div className=" w-full">
        <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
      </div>
    </div>
  );
}

export default Pie;
