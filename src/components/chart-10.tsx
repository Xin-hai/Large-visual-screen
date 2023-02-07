import React, {useEffect, useRef} from 'react';
import * as echarts from "echarts";
import {px} from "../shared/px";
import {createEchartsOptions} from "../shared/create-echarts-options";

export const Chart10 = () => {
  const divRef = useRef(null)
  const myChart = useRef(null);
  const data = [
    {name:'入室抢劫', 2012: 4 },
    {name:'当街盗窃', 2012: 4 },
    {name:'入室抢劫', 2012: 4 },
    {name:'团伙诈骗', 2012: 4 },
    {name:'民事案件', 2012: 4 },
  ];
  useEffect(() => {
    setInterval(()=> {
     const  newData = [
        {name:'入室抢劫', 2012: Math.random()*10},
        {name:'当街盗窃', 2012: Math.random()*10 },
        {name:'入室抢劫', 2012: Math.random()*10 },
        {name:'团伙诈骗', 2012: Math.random()*10 },
        {name:'民事案件', 2012: Math.random()*10 },
      ]
      x(newData);
    }, 1000)
  },[])
  const x = (data) => {
    myChart.current.setOption(createEchartsOptions({
      xAxis: {
        data: data.map(i => i.name),
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
          data: data.map(i => i[2012]),
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
  }

  useEffect(()=>{
    myChart.current = echarts.init(divRef.current)
    x(data);
  },[])


  return (


      <div ref={divRef} className="chart">

      </div>

  )
}