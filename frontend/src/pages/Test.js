import Header from '../components/Header'
import Meta from '../components/Meta'
import * as React from "react";
import {MonthlyBody, MonthlyCalendar, MonthlyNav} from "@zach.codes/react-calendar";
import '@zach.codes/react-calendar/dist/calendar-tailwind.css';

const Test = () => {
  // page content
  const pageTitle = 'TEST PAGE'
  const pageDescription = 'SAS'

  return (
    <div>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />

        <MonthlyCalendar
            currentMonth={new Date("2021-04-30T21:00:00.000Z")}
            onCurrentMonthChange={function noRefCheck(){}}
        >
            <MonthlyNav />
            <MonthlyBody
                events={[
                    {
                        date: new Date('2021-05-28T14:08:20.868Z'),
                        title: 'Call John'
                    },
                    {
                        date: new Date('2021-05-28T15:08:20.868Z'),
                        title: 'Call John'
                    },
                    {
                        date: new Date('2021-05-28T16:08:20.868Z'),
                        title: 'Meeting with Bob'
                    }
                ]}
                renderDay={function noRefCheck(){}}
            />
        </MonthlyCalendar>

    </div>
  )
}

export default Test


