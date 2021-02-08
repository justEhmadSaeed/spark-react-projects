import React from "react"
import ReactFC from "react-fusioncharts"
import FusionCharts from "fusioncharts"
import Widgets from "fusioncharts/fusioncharts.widgets"
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion"
ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme)

const colorRange = {
	color: [
		{
			minValue: "0",
			maxValue: "100",
			code: "#f8bd19",
		},
		{
			minValue: "100",
			maxValue: "200",
			code: "#6baa01",
		},
		{
			minValue: "200",
			maxValue: "300",
			code: "#8288C0",
		},
		{
			minValue: "300",
			maxValue: "300",
			code: "#e44a00",
		},
	],
}

const WidgetGuage = ({ title, value }) => {
	const dials = {
		dial: [
			{
				value: value,
			},
		],
	}
	const chartConfigs = {
		type: "angulargauge", // The chart type
		width: "90%", // Width of the chart
		height: "300", // Height of the chart
		dataFormat: "json", // Data type
		dataSource: {
			chart: {
				caption: title,
				bgColor: "#1F335A",
				lowerLimit: "0",
				upperLimit: "400",
				theme: "fusion",
			},
			colorRange: colorRange,
			dials: dials,
		},
	}
	return (
		<div className="widgetWrap">
			<div className="widgetTitle">{title}</div>
			<div className="widgetValue">
				<ReactFC {...chartConfigs} />
			</div>
		</div>
	)
}

export default WidgetGuage
