import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Inject } from '@syncfusion/ej2-react-grids'

import { employeesGrid, employeesData } from '../data/dummy'

import { Header } from '../layout'

const Employees = () => {
  return employeesData?  (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title= "Employees" />
      <GridComponent
        id="gridcomp"
        dataSource={ employeesData }
        allowPaging
        allowSorting
        toolbar={['Search']}
        editSettings={{
          allowEditing: true
        }}
        width='auto'
      >
        <ColumnsDirective
        >
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={ index } {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[ Page, Search ]} />
      </GridComponent>
    </div>
  ) : (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <p className='text-3xl text-gray-500 font-bold'>Loading...</p>
    </div>
  )
}

export default Employees