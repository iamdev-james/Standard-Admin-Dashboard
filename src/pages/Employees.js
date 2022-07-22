import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids' 
import { ordersGrid, ordersData } from '../data/dummy'
// contextMenuItems,

// Helper header for each page
import { Header } from '../layout'

const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Employees" />
      <GridComponent
        id="gridcomp"
        dataSource={ ordersData }
        allowPaging
        allowSorting
      >
        <ColumnsDirective
        >
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={ index } {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[ Resize, Sort, Filter, Page, ExcelExport, PdfExport, ContextMenu, Edit ]} />
      </GridComponent>
    </div>
  )
}

export default Employees