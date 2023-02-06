import {baseEchartOptions} from "./base-echart-options";
import {px} from "./px";

export const createEchartsOptions = (options) => {
  const result = {
    ...baseEchartOptions,
    ...options,
  };
  if(!(options?.xAxis?.axisLabel?.fontSize)) {
    result.xAxis = result.xAxis || {};
    result.xAxis.axisLabel = result.xAxis.axisLabel || {};
    result.xAxis.axisLabel.fontSize = px(12);
  }
  if(!(options?.yAxis?.axisLabel?.fontSize)) {
    result.yAxis = result.yAxis || {};
    result.yAxis.axisLabel = result.yAxis.axisLabel || {};
    result.yAxis.axisLabel.fontSize = px(12);
    // 开始遇到问题，将yAxis不小心写为xAxis，导致Chart2和Chart3图形显示永不成功，经过4个小时查错，最终找到。
  }
  return result;
}