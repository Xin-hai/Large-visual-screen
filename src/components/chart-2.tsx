import React, {useEffect, useRef} from 'react';
import * as echarts from "echarts";
import {createEchartsOptions} from "../shared/create-echarts-options";



export const Chart2 = () => {
  const divRef = useRef(null)
  const myChart = useRef(null)
  const data = [
    {name: '城关区公安局', 2012: 2,2013:3},
    {name: '七里河区公安局', 2012: 2,2013:3},
    {name: '西固区公安局', 2012: 2,2013:3},
    {name: '安宁区公安局', 2012: 2,2013:3},
    {name: '红古区公安局', 2012: 2,2013:3},
    {name: '永登县安局', 2012: 2,2013:3},
    {name: '皋兰县公安局', 2012: 2,2013:3},
    {name: '榆中县公安局', 2012: 2,2013:3},
    {name: '新区公安局', 2012: 2,2013:3},
  ];

  useEffect(() => {
    setInterval(() => {
      const newData = [
        {name: '城关区公安局', 2012: 2, 2013: 3},
        {name: '七里河区公安局', 2012: 2, 2013: Math.random() * 10},
        {name: '西固区公安局', 2012: 2, 2013: Math.random() * 10},
        {name: '安宁区公安局', 2012: 2, 2013: Math.random() * 10},
        {name: '红古区公安局', 2012: 2, 2013: Math.random() * 10},
        {name: '永登县安局', 2012: 2, 2013: Math.random() * 10},
        {name: '皋兰县公安局', 2012: 2, 2013: Math.random() * 10},
        {name: '榆中县公安局', 2012: 2, 2013: Math.random() * 10},
        {name: '新区公安局', 2012: 2, 2013: Math.random() * 10},
      ]
      x(newData);
    },1000);
  }, []);
  const x = (data) => {
    myChart.current.setOption(createEchartsOptions({
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine: {show: false},
        axisLabel: {show: false},
      },
      yAxis: {
        axisTick: {show: false},
        type:'category',
        data: data.map(i => i.name),
        axisLabel: {
          formatter(val){
            return val.replace('公安局','\n公安局')
          }
        }
      },

      series: [
        {
          name: '2012年',
          type: 'bar',
          data: data.map(i => i[2012]),
          itemStyle:{
            normal: {
              color: new echarts.graphic.LinearGradient(0,0,1,0, [{
                offset:0,
                color: '#2034f9'
              }, {
                offset: 1,
                color: '#04a1ff'
              }
              ]),
            }
          },
        },
        {
          name: '2013年',
          type: 'bar',
          data: data.map(i => i[2013]),
          itemStyle:{
            normal: {
              color: new echarts.graphic.LinearGradient(0,0,1,0, [{
                offset:0,
                color: '#b92ae8'
              }, {
                offset: 1,
                color: '#6773e7'
              }
              ]),
            }
          },
        }
      ]
    }))
  }

  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  },[])



  return(
    <div className="bordered 破获排名">
      <h2>案件破获排名</h2>
      <div ref={divRef} className="chart"/>
      <div className="legend">
        <span className="first"/>破案排名1
        <span className="second"/>破案排名2
      </div>
    </div>
  )
}