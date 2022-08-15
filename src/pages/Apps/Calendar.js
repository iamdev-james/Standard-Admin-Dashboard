import React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';

import { scheduleData } from '../../data/dummy';
import { Header } from '../../layout';

const Calender = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="App" title="Calender" />
    <ScheduleComponent
      height="650px"
      eventSettings={{ dataSource: scheduleData }}
      selectedDate={new Date(2022, 7, 10)}
    >
      <Inject services={[Day, Week, WorkWeek, Agenda, Resize, DragAndDrop, Month]} />
    </ScheduleComponent>
  </div>
);

export default Calender;
