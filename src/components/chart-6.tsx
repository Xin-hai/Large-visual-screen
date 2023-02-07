import React, {useEffect, useRef} from 'react';
import * as echarts from "echarts";
import {createEchartsOptions} from "../shared/create-echarts-options";
import china from '../geo/china.json'

export const Chart6 = () =>{
  const divRef = useRef(null);
  const colors = {'青海省': '#bb31f7','甘肃省': '#15b8fd','四川省': '#06e1ee'}
  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    // @ts-ignore
    echarts.registerMap('CN', china);
    myChart.setOption(createEchartsOptions({
      xAxis: {show: false},
      yAxis: {show: false},
      series: [
        {
          type: 'map',
          mapType: 'CN',
          data: [{name: '甘肃省', value: 1}],
          label: {show: false, color: 'white'},
          itemStyle: {
            areaColor: '#010d3d',
            color: colors['甘肃省'],
            borderColor: '#01A7F7',
            emphasis: {
              label: {color: 'white'},
              areaColor: '#5470C6'

            }
          }
        },
        {
          type: 'map',
          mapType: 'CN',
          data: [{name: '四川省', value: 100}],
          itemStyle: {
            areaColor: '#010d3d',
            color: colors['四川省'],
            borderColor: 'yellow',
            emphasis: {
              label: {color: 'white'},
              areaColor: '#5470C6'

            }
          }
        },
        {
          type: 'map',
          mapType: 'CN',
          data: [{name: '青海省', value: 100}],
          itemStyle: {
            areaColor: '#010d3d',
            color: colors['青海省'],
            borderColor: '#01a7f7',
            emphasis: {
              label: {color: 'white'},
              areaColor: '#5470C6'
            }
          }
        }

      ]
    }))
  },[])

  return (
    <div className="bordered 籍贯">
      <h2>
        全市犯罪人员籍贯分布地
      </h2>
      <div className="wrapper">
        <div ref={divRef} className="chart"/>
        <div className="legend bordered">
          <span className="icon" style={{background: colors['甘肃省']}}/>天寒籍
          <span className="icon" style={{background: colors['四川省']}}/>紫川籍
          <span className="icon" style={{background: colors['青海省']}}/>流沙籍
      </div>
      <div className="notes">
        该地图仅显示中国部分区域，特此注明。
      </div>
    </div>
    </div>
  )
}