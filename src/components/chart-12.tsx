import React, {useEffect, useRef} from 'react';
import * as echarts from "echarts";
import {px} from "../shared/px";
import {createEchartsOptions} from "../shared/create-echarts-options";

export const Chart12 = () => {
  const divRef = useRef(null);
  const colors = ['#856bed','#f46064','#f38e1c','#1cdb7c','#33a4fa']
  const data = [
    {value: 0.08, name: '东岗路'},
    {value: 0.06, name: '段家滩'},
    {value: 0.11, name: '雁北'},
    {value: 0.09, name: '五泉山'},
    {value: 0.12, name: '中山路'},
    {value: 0.06, name: '庆阳路'},
    {value: 0.08, name: '武都路'},
    {value: 0.08, name: '酒泉路'},
    {value: 0.08, name: '天水路'},
  ];
  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions(
      {
        color: colors,
        xAxis: {show: false},
        yAxis: {show: false},
        legend: {
          orient: 'vertical',
          left: 'left',
          top: 'center',
          textStyle: {color:'white'},
          grid:{x:0,x2: 0,y: 0,y2: 0, containLabel: true},
          itemWidth:px(10),
          itemHeight: px(10),
          formatter(name) {
            const value = data.find(i => i.name === name)?.value *100+ '%';
            // tsconfig.jison中引入"lib": ["ES2015"]，解决.find
            return name + ' ' +value;
          }
        },

        series: [
          {
            type: 'pie',
            center: ['60%', '50%'],
            radius: '80%',
            label: {show: false,},
            labelLine: {show: false},
            data: data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0,0,0,0.5)'
              }
            }
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
    </div>
  )
}