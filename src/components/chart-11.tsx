import React, {useEffect, useRef} from 'react';
import * as echarts from "echarts";
import {px} from "../shared/px";
import {createEchartsOptions} from "../shared/create-echarts-options";

export const Chart11 = () => {
  const divRef = useRef(null);
  const colors = ['#856bed','#f46064','#f38e1c','#1cdb7c']
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
            startAngle: -20,
            name: '类型',
            type: 'pie',
            radius: ['25%', '90%'],
            avoidLabelOverlap: false,
            itemStyle: {
              shadowBlur: px(200),
              shadowColor: 'rgba(0,0,0,0.5)'
            },
            label: {
              show: true,
              position: 'outside',
              textStyle: {color:'white', fontSize: px(20)},
              distanceToLabelLine:0,
              formatter(options) {
                return (options.value * 100).toFixed(0) +'%'
                // 取整，加百分号
              }
            },
            labelLine: {
              show: true,
              length: 0
            },
            roseType: 'area',
            data: [
              { value: 0.18, name: '刑事案件' },
              { value: 0.32, name: '民事案件' },
              { value: 0.28, name: '经济案件' },
              { value: 0.22, name: '其他案件' },
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
      </div>
      <div className="legend">
        <span style = {{background: colors[0]}} />刑事
        <span style = {{background: colors[1]}} />民事
        <span style = {{background: colors[2]}} />经济
        <span style = {{background: colors[3]}} />其他
      </div>
    </div>
  )
}