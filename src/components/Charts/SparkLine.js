import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'

const SparkLine = ({id, data, type, height, width, color, currentColor}) => {
  return (
    <SparklineComponent
      id={id}
      height= {height}
      width= {width}
      lineWidth = {1}
      valueType= "Numeric"
      fill= {color}
      border= {{ color: currentColor, width: 2 }}
      dataSource= {data}
      xName = "x"
      yName= "y"
      type= {type}
      tooltipSettings= {{
        visible: true,
        format: `${data.x} : data ${data.yval}`,
        trackLineSettings: {
          visible: true
        }
      }}
    >
      <Inject services= {[SparklineTooltip]} />
    </SparklineComponent>
  )
}

export default SparkLine