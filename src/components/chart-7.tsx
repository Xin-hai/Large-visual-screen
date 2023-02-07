import React, {useEffect, useRef} from 'react';
import * as echarts from "echarts";
import {createEchartsOptions} from "../shared/create-echarts-options";
import {px} from "../shared/px";

export const Chart7 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions(
       {
        color: ['#8d70f8','#33a4fa'],
         xAxis: {show: false},
         yAxis: {show: false},
        legend: {show: false},
        series: [
          {
            name: '性别',
            type: 'pie',
            radius: ['75%', '90%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderColor: '#0f113a',
              borderWidth: px(4)
            },
            label: {
              show: true,
              position: 'inside',
              textStyle: {color:'white', fontSize: px(20)},
              formatter(options) {
                return options.value * 100 +'%'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 0.25, name: '女' },
              { value: 0.75, name: '男' },


            ]
          }
        ]
      }
    ))
},[])

  return (
    <div className="年龄段-图1">
      <div className="chart">
        <div className="main" ref={divRef}/>
        <div className="text">性别</div>
      </div>
      <div className="legend">
        <span className="male"/>男
        <span className="female"/>女
      </div>
    </div>
  )
}