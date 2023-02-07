import React, {useEffect, useRef} from 'react';
import * as echarts from "echarts";
import {px} from "../shared/px";
import {createEchartsOptions} from "../shared/create-echarts-options";

export const Chart10 = () => {
  const divRef = useRef(null)
  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({

      xAxis: {
        data: ['入室抢劫', '当街盗窃', '团伙诈骗', '刑事案件', '民事案件'],
        axisTick: {show:false},
        axisLine: {
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {

          formatter(val){
            if(val.length > 2){
              const array = val.split('');
              array.splice(2,0,'\n');
              return array.join('')
            }else{  return val;}
          }
        },
      },

      yAxis: {
        splitLine: {show: false},
        axisLine: {
          show: true,
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          fontSize: px(12)
        }
      },
      series: [
        {
          type: 'bar',
          data: [15, 12, 38, 10, 28],
          color : new echarts.graphic.LinearGradient(0,0,0,1,[{
            offset : 0,
            color: '#1e34fa'
          }, {
            offset: 1,
            color: '#0a97f8'
          }])
        }
      ]
    }))
  },[])

  return (


      <div ref={divRef} className="chart">

      </div>

  )
}