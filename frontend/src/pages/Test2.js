import Header from '../components/Header'
import Meta from '../components/Meta'
import React from "react";
import { LineChart, LineChartProps } from "@opd/g2plot-react";

const config: LineChartProps = {
    padding: "auto",
    autoFit: true,
    data: [
        { year: "1991", value: 3 },
        { year: "1992", value: 4 },
        { year: "1993", value: 3.5 },
        { year: "1994", value: 5 },
        { year: "1995", value: 4.9 },
        { year: "1996", value: 6 },
        { year: "1997", value: 7 },
        { year: "1998", value: 9 },
        { year: "1999", value: 13 }
    ],
    xField: "year",
    yField: "value",
    smooth: true,
    meta: {
        year: {
            alias: "年份"
        },
        value: {
            alias: "人数(亿)"
        }
    }
};

const data1 = [
    {
        date: "2018/8/1",
        type: "download",
        value: 4623
    },
    {
        date: "2018/8/1",
        type: "register",
        value: 2208
    },
    {
        date: "2018/8/1",
        type: "bill",
        value: 182
    },
    {
        date: "2018/8/2",
        type: "download",
        value: 6145
    },
    {
        date: "2018/8/2",
        type: "register",
        value: 2016
    },
    {
        date: "2018/8/2",
        type: "bill",
        value: 257
    },
    {
        date: "2018/8/3",
        type: "download",
        value: 508
    },
    {
        date: "2018/8/3",
        type: "register",
        value: 2916
    },
    {
        date: "2018/8/3",
        type: "bill",
        value: 289
    },
    {
        date: "2018/8/4",
        type: "download",
        value: 6268
    },
    {
        date: "2018/8/4",
        type: "register",
        value: 4512
    },
    {
        date: "2018/8/4",
        type: "bill",
        value: 428
    },
    {
        date: "2018/8/5",
        type: "download",
        value: 6411
    },
    {
        date: "2018/8/5",
        type: "register",
        value: 8281
    },
    {
        date: "2018/8/5",
        type: "bill",
        value: 619
    },
    {
        date: "2018/8/6",
        type: "download",
        value: 1890
    },
    {
        date: "2018/8/6",
        type: "register",
        value: 2008
    },
    {
        date: "2018/8/6",
        type: "bill",
        value: 87
    },
    {
        date: "2018/8/7",
        type: "download",
        value: 4251
    },
    {
        date: "2018/8/7",
        type: "register",
        value: 1963
    },
    {
        date: "2018/8/7",
        type: "bill",
        value: 706
    },
    {
        date: "2018/8/8",
        type: "download",
        value: 2978
    },
    {
        date: "2018/8/8",
        type: "register",
        value: 2367
    },
    {
        date: "2018/8/8",
        type: "bill",
        value: 387
    },
    {
        date: "2018/8/9",
        type: "download",
        value: 3880
    },
    {
        date: "2018/8/9",
        type: "register",
        value: 2956
    },
    {
        date: "2018/8/9",
        type: "bill",
        value: 488
    },
    {
        date: "2018/8/10",
        type: "download",
        value: 3606
    },
    {
        date: "2018/8/10",
        type: "register",
        value: 678
    },
    {
        date: "2018/8/10",
        type: "bill",
        value: 507
    },
    {
        date: "2018/8/11",
        type: "download",
        value: 4311
    },
    {
        date: "2018/8/11",
        type: "register",
        value: 3188
    },
    {
        date: "2018/8/11",
        type: "bill",
        value: 548
    },
    {
        date: "2018/8/12",
        type: "download",
        value: 4116
    },
    {
        date: "2018/8/12",
        type: "register",
        value: 3491
    },
    {
        date: "2018/8/12",
        type: "bill",
        value: 456
    },
    {
        date: "2018/8/13",
        type: "download",
        value: 6419
    },
    {
        date: "2018/8/13",
        type: "register",
        value: 2852
    },
    {
        date: "2018/8/13",
        type: "bill",
        value: 689
    },
    {
        date: "2018/8/14",
        type: "download",
        value: 1643
    },
    {
        date: "2018/8/14",
        type: "register",
        value: 4788
    },
    {
        date: "2018/8/14",
        type: "bill",
        value: 280
    },
    {
        date: "2018/8/15",
        type: "download",
        value: 445
    },
    {
        date: "2018/8/15",
        type: "register",
        value: 4319
    },
    {
        date: "2018/8/15",
        type: "bill",
        value: 176
    }
];

const Test2 = () => {
  // page content
  const pageTitle = 'TEST PAGE'
  const pageDescription = 'SAS'

  return (
    <div>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />

        <section>
            <h2>LineChart Example</h2>
            <LineChart {...config} />
        </section>

    </div>
  )
}

export default Test2


