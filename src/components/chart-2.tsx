import React, {useEffect, useRef} from 'react';
import * as echarts from "echarts";
import {createEchartsOptions} from "../shared/create-echarts-options";
import {baseEchartOptions} from "../shared/base-echart-options";
import {px} from "../shared/px";


export const Chart2 = () => {
  const divRef = useRef(null)
  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine: {show: false},
        axisLabel: {show: false},
      },
      yAxis: {
        axisTick: {show: false},
        type:'category',
        data: ['城关区公安局','七里河区公安局','西固区公安局','安宁区公安局','红古区公安局','永登县安局','皋兰县公安局','榆中县公安局','新区公安局'],
        axisLabel: {
          formatter(val){
            return val.replace('公安局','\n公安局')
          }
        }
      },
      series: [
        {
          name: '2011年',
          type: 'bar',
          data: [2,5,4,7,8,9,3,1,6],
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
          name: '2012年',
          type: 'bar',
          data: [8,1,6,2,3,4,5,7,9],
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
    }));
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