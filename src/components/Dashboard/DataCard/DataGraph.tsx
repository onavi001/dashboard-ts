
import { DataItem, DataYear } from './SampleData';
import { IgrLegendModule, IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrLegend, IgrCategoryChart } from 'igniteui-react-charts';
import { useState } from 'react';

const mods: any[] = [
    IgrLegendModule,
    IgrCategoryChartModule
];
mods.forEach((m) => m.register());

type Props = {}

export default function DataGraph({}: Props) {
    let data = new DataYear();
    let [legend,setLegend] = useState<IgrLegend|undefined>(undefined);
    let legendRef = (r: IgrLegend) => {
        setLegend(r) 
    }
    let [chart,setCharts] = useState<IgrCategoryChart|undefined>(undefined);
    let chartRef=(r: IgrCategoryChart)=>{
      setCharts(r)
    }
    return (
        <div style={{minHeight:'100px',height:'5%'}}>
            <div className="container sample">
                <div className="legend-title">
                    Renewable Electricity Generated
                </div>
                <div className="container fill">
                    <IgrCategoryChart
                        chartType="Area"
                        yAxisLabelLeftMargin="0"
                        yAxisTitleLeftMargin="0"
                        //yAxisTitle="TWh"
                        dataSource={data}
                        //brushes="rgba(140, 231, 217, 1) rgba(238, 88, 121, 1) rgba(115, 86, 86, 1)"
                        //outlines="rgba(140, 231, 217, 1) rgba(238, 88, 121, 1) rgba(115, 86, 86, 1)"
                        legend={legend}
                        isHorizontalZoomEnabled="false"
                        isVerticalZoomEnabled="false"
                        //thickness="2"
                        //markerBrushes="white"
                        //markerOutlines="rgba(140, 231, 217, 1) rgba(238, 88, 121, 1) rgba(115, 86, 86, 1)"
                        //toolTipType="Category"
                        ref={chartRef}
                    ></IgrCategoryChart>
                </div>
            </div>
        </div>
    )
}