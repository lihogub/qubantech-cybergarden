import Header from '../components/Header'
import Meta from '../components/Meta'
import {format} from "date-fns";
import * as React from "react";
// import {DefaultMonthlyEventItem, MonthlyBody, MonthlyCalendar, MonthlyNav} from "@zach.codes/react-calendar";

const Test = () => {
  // page content
  const pageTitle = 'TEST PAGE'
  const pageDescription = 'SAS'

  return (
    <div>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />

        {/*<MonthlyCalendar currentMonth={1} onCurrentMonthChange={()=>{}}>*/}
        {/*    <MonthlyNav />*/}
        {/*    <MonthlyBody  children={'a'} events={()=>{}}/>*/}
        {/*</MonthlyCalendar>*/}

    </div>
  )
}

export default Test


