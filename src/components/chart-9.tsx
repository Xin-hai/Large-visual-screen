import React, {useEffect, useRef} from 'react';
import * as echarts from "echarts";
import {px} from "../shared/px";
import {createEchartsOptions} from "../shared/create-echarts-options";

export const Chart9 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      color: '#f7a110',
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [0, 8, 18, 28, 38, 48, 58, 68, 78],
        splitLine: {show: true, lineStyle: {color: '#073E78'}},
        axisTick: {show: false},
        axisLine: {show: false},
      },
      yAxis: {
        type: 'value',
        splitLine: {lineStyle: {color: '#073E78'}},
        axisLabel: {
          formatter(val) {
            return val * 100 + '%';
          }
        }
      },
      series: [{
        name: '各年龄段',
        type: 'line',
        data: [0.00,0.06,0.12,0.16,0.13,0.11,0.09,0.07,0.03],
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: {width: px(2)},
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#f7a110'
          }, {
            offset: 1,
            color: '#1b1d50'
          }]),
        }
      }]
    }));
  }, []);

  return (
    <div className="年龄段-图3">
      <h4>犯罪年龄趋势图</h4>
      <div ref={divRef} className={"chart"}>

      </div>
    </div>
  )
}