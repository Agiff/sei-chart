import React, { useEffect } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

const Maps = ({ id }) => {
  useEffect(() => {
    am4core.useTheme(am4themes_animated);
    
    let chart = am4core.create(id, am4maps.MapChart);

    chart.geodata = am4geodata_worldLow;

    chart.projection = new am4maps.projections.Miller();

    let worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
    worldSeries.exclude = ["AQ"];
    worldSeries.useGeodata = true;

    let polygonTemplate = worldSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = chart.colors.getIndex(0);
    polygonTemplate.nonScalingStroke = true;

    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#367B25");

    let usaSeries = chart.series.push(new am4maps.MapPolygonSeries());
    usaSeries.geodata = am4geodata_usaLow;

    let usPolygonTemplate = usaSeries.mapPolygons.template;
    usPolygonTemplate.tooltipText = "{name}";
    usPolygonTemplate.fill = chart.colors.getIndex(1);
    usPolygonTemplate.nonScalingStroke = true;
  }, [])
  

  return (
    <div className='card bg-[#EEEEEE] py-5 px-10'>
      <div id={id} style={{ width: "100%", height: "30rem" }}></div>
    </div>
  )
}

export default Maps
