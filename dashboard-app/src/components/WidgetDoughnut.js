import React from "react"
import ReactFC from "react-fusioncharts"
import FusionCharts from "fusioncharts"
import Chart from "fusioncharts/fusioncharts.charts"
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion"
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme)

const WidgetDoughnut = ({ title, data }) => {
	const chartConfigs = {
		type: "doughnut2d", // The chart type
		width: "90%", // Width of the chart
		height: "300", // Height of the chart
		dataFormat: "json", // Data type
		dataSource: {
			chart: {
				caption: title, //Set the chart caption
				theme: "fusion", //Set the theme for your chart
				bgColor: "#1F335A",
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

export default WidgetDoughnut
