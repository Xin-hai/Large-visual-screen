import {px} from "./px";

export const baseEchartOptions = {
    textStyle:{
    fontSize: px(12),
    color: '#79839e'
  },
  title: {show:false},
  legend: {show:false},
  grid: {
    x: px(20),
    y: px(20),
    X2: px(20),
    y2: px(20),
    containLabel: true
  },
}