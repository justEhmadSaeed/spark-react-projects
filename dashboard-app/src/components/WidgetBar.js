import React from "react"
import ReactFC from "react-fusioncharts"
import FusionCharts from "fusioncharts"
import Chart from "fusioncharts/fusioncharts.charts"
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion"
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme)

const WidgetBar = ({ title, data }) => {
	const chartConfigs = {
		type: "bar2d", // The chart type
		width: "90%", // Width of the chart
		height: "300", // Height of the chart
		dataFormat: "json", // Data type
		dataSource: {
			chart: {
				bgColor: "#1F335A",
				theme: "fusion", //Set the theme for your chart
			},
			data: data,
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

export default WidgetBar
