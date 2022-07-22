import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids'

import { useStateContext } from '../contexts/ContextProvider'

import { customersGrid } from '../data/dummy'

import { Header } from '../layout'

const Customers = () => {
  const { customersData } = useStateContext()

  return customersData?  (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title= "Customers" />
      <GridComponent
        id="gridcomp"
        dataSource={ customersData }
        allowPaging
        allowSorting
        toolbar={['Delete', 'Search']}
        editSettings={{
          allowDeleting: true,
          allowEditing: true
        }}
        width='auto'
      >
        <ColumnsDirective
        >
          {customersGrid.map((item, index) => (
            <ColumnDirective key={ index } {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[ Sort, Filter, Page, Edit, Toolbar, Selection ]} />
      </GridComponent>
    </div>
  ) : (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <p className='text-3xl text-gray-500 font-bold'>Loading...</p>
    </div>
  )
}

export default Customers