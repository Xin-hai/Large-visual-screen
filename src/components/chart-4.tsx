import React, {useEffect, useRef} from 'react';
import * as echarts from "echarts";
import {px} from "../shared/px";
import {createEchartsOptions} from "../shared/create-echarts-options";

export const Chart4 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    {name:'0',2012:0.08},
    {name:'2',2012:0.09},
    {name:'4',2012:0.11},
    {name:'6',2012:0.06},
    {name:'8',2012:0.09},
    {name:'10',2012:0.10},
    {name:'12',2012:0.06},
    {name:'14',2012:0.07},
    {name:'16',2012:0.04},
    {name:'18',2012:0.09},
    {name:'20',2012:0.08},
    {name:'22',2012:0.07},
    {name:'24',2012:0.06},
  ];
  useEffect(() => {
    setInterval(() => {
    const newData = [
      {name:'0',2012:Math.random()},
      {name:'2',2012:0.09},
      {name:'4',2012:Math.random()},
      {name:'6',2012:0.06},
      {name:'8',2012:Math.random()},
      {name:'10',2012:Math.random()},
      {name:'12',2012:0.06},
      {name:'14',2012:Math.random()},
      {name:'16',2012:0.04},
      {name:'18',2012:0.09},
      {name:'20',2012:Math.random()},
      {name:'22',2012:0.07},
      {name:'24',2012:Math.random()},
    ];
   x(newData) ;
    },1000);
  },[])
  const x = (data) => {
    myChart.current.setOption(createEchartsOptions({
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: data.map(i => i.name),
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
          name: '盗窃',
          type: 'line',
          data: data.map(i => i[2012]),
          symbol: 'circle',
          symbolSize: px(12),
          lineStyle: {width: px(2)},
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#414a9d'
            }, {
              offset: 1,
              color: '#1b1d52'
            }]),
          }
        }]
      }
    ))
  }
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  },[])

  return (
    <div className="bordered 案发时段">
      <h2>案发时段分析</h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};