import React, { useEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

const DonutChart = ({ data, title, id }) => {

  useEffect(() => {
    am4core.useTheme(am4themes_animated);
    let chart = am4core.create(id, am4charts.PieChart);
    chart.data = data;

    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "doc_count";
    pieSeries.dataFields.category = "key";
    pieSeries.innerRadius = am4core.percent(50);
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;

    let rgm = new am4core.RadialGradientModifier();
    rgm.brightnesses.push(-0.8, -0.8, -0.5, 0, - 0.5);
    pieSeries.slices.template.fillModifier = rgm;
    pieSeries.slices.template.strokeModifier = rgm;
    pieSeries.slices.template.strokeOpacity = 0.4;
    pieSeries.slices.template.strokeWidth = 0;

    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
  }, [data]);

  return (
    <div className='card bg-[#EEEEEE] py-5 px-10'>
      <h1 className='font-bold'>{title}</h1>
      <div id={id} style={{ width: "23rem", height: "30rem" }}></div>
    </div>
  )
}

export default DonutChart;
