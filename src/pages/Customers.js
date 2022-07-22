import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids'

import { customersGrid } from '../data/dummy'
import { customers } from '../data/order'

import { Header } from '../layout'

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title= "Customers" />
      <GridComponent
        id="gridcomp"
        dataSource={ customers }
        allowPaging
        allowSorting
        toolbar={['Search']}
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
  )
}

export default Customers