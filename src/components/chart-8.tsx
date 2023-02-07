import React, {useEffect, useRef} from 'react';
import * as echarts from "echarts";
import {createEchartsOptions} from "../shared/create-echarts-options";
import {px} from "../shared/px";

export const Chart8 = () => {
  const divRef = useRef(null);
  const colors = ['#856bed','#f46064','#f38e1c','#1cdb7c','#33a4fa']
  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions(
      {
        color: colors,
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
                return (options.value * 100).toFixed(0) +'%'
                // 取整，加百分号
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 0.19, name: '10-20' },
              { value: 0.23, name: '20-30' },
              { value: 0.26, name: '30-40' },
              { value: 0.18, name: '40-50' },
              { value: 0.14, name: '50-60' },
            ]
          }
        ]
      }
    ))
  },[])

  return (
    <div className="年龄段-图2">
      <div className="chart">
        <div className="main" ref={divRef}/>
        <div className="text">年龄段</div>
      </div>
      <div className="legend">
        <span style = {{background: colors[0]}} />10-20
        <span style = {{background: colors[1]}} />20-30
        <span style = {{background: colors[2]}} />30-40
        <span style = {{background: colors[3]}} />40-50
        <span style = {{background: colors[4]}} />50-60
      </div>
    </div>
  )
}