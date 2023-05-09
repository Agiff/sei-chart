import React, { useEffect } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud"; 

const WordTag = ({ data, title, id }) => {

  useEffect(() => {
    am4core.useTheme(am4themes_animated);

    let chart = am4core.create(id, am4plugins_wordCloud.WordCloud);
    let series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());

    let words = data?.map((d) => d.key).join(' ');

    series.accuracy = 4;
    series.step = 15;
    series.rotationThreshold = 0.7;
    series.maxCount = 200;
    series.minWordLength = 2;
    series.labels.template.tooltipText = "{word}: {value}";
    series.fontFamily = "Courier New";
    series.maxFontSize = am4core.percent(30);

    series.text = words;
  }, [data])
  
  return (
    <div className='card bg-[#EEEEEE] py-5 px-10'>
      <h1 className='font-bold'>{title}</h1>
      <div id={id} style={{ width: "100%", height: "30rem" }}></div>
    </div>
  )
}

export default WordTag
