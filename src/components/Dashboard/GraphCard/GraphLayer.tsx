import { useEffect, useState } from 'react';
import { DataYear,DataMoth,DataToday } from "./SampleData";
import {
  IgrLegendModule,
  IgrDataChartCoreModule,
  IgrDataChartCategoryModule,
  IgrDataChartCategoryCoreModule,
  IgrDataChartInteractivityModule,
  IgrDataChartStackedModule,
  IgrStackedFragmentSeriesModule,
} from "igniteui-react-charts";
import {
  IgrLegend,
  IgrDataChart,
  IgrCategoryXAxis,
  IgrNumericYAxis,
  IgrStackedColumnSeries,
  IgrStackedFragmentSeries
} from "igniteui-react-charts";

const mods: any[] = [
  IgrLegendModule,
  IgrDataChartCoreModule,
  IgrDataChartCategoryModule,
  IgrDataChartCategoryCoreModule,
  IgrDataChartInteractivityModule,
  IgrDataChartStackedModule,
  IgrStackedFragmentSeriesModule
];
mods.forEach((m) => m.register());
export interface IGraphLayerProps {
    type:string
}
export default function GraphLayer ({type}: IGraphLayerProps) {
  
  const [data,setData] = useState<any>(new DataYear())
  useEffect(() => {
    switch (type) {
      case 'Today':
        setData(new DataToday());
      break;
      case 'This Month':
        setData(new DataMoth());
      break;
      case 'This Year':
        setData(new DataYear());
      break;
    
      default:
        break;
    }
  }, [type])
  
  let [legend,setLegend] = useState<IgrLegend|undefined>(undefined);
  let legendRef = (r: IgrLegend) => {
    setLegend(r) 
  }
  let [chart,setCharts] = useState<IgrDataChart|undefined>(undefined);
  let chartRef=(r: IgrDataChart)=>{
    setCharts(r)
  }
  
  return (
    <div style={{minHeight:'500px',height:'100%'}}>
      <div className="container sample">
        <div className="container fill">
          <IgrDataChart
            legend={legend} 
            isHorizontalZoomEnabled="false" 
            isVerticalZoomEnabled="false" 
            ref={chartRef}
          >
            <IgrCategoryXAxis
              dataSource={data}
              gap="0.75"
              label="time"
              name="xAxis"
            ></IgrCategoryXAxis>
            <IgrNumericYAxis
              minimumValue="0"
              maximumValue="140"
              interval="20"
              titleLeftMargin="10"
              labelFormat="{0} m"
              name="yAxis"
            ></IgrNumericYAxis>
            <IgrStackedColumnSeries
              xAxisName="xAxis"
              yAxisName="yAxis"
              dataSource={data}
              showDefaultTooltip="false"
              name="StackedColumnSeries"
            >
              <IgrStackedFragmentSeries
                title="Investment"
                name="s1"
                valueMemberPath="investment"
              ></IgrStackedFragmentSeries>
              <IgrStackedFragmentSeries
                title="Loss"
                name="s2"
                valueMemberPath="loss"
              ></IgrStackedFragmentSeries>
              <IgrStackedFragmentSeries
                title="Profit"
                name="s3"
                valueMemberPath="profit"
              ></IgrStackedFragmentSeries>
              <IgrStackedFragmentSeries
                title="Maintenance"
                name="s4"
                valueMemberPath="maintenance"
              ></IgrStackedFragmentSeries>
            </IgrStackedColumnSeries>
          </IgrDataChart>
        </div>
        <div className="legend">
          <IgrLegend orientation="Horizontal" ref={legendRef}></IgrLegend>
        </div>
      </div>
    </div>
  );
}
