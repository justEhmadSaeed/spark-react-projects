import React from "react"
import ReactFC from "react-fusioncharts"
import FusionCharts from "fusioncharts"
import Chart from "fusioncharts/fusioncharts.charts"
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion"
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme)

const WidgetDoughnut = ({ title, data }) => {
	const chartConfigs = {
		type: "doughnut2d", // The chart type
		width: "100%", // Width of the chart
		height: "125", // Height of the chart
		dataFormat: "json", // Data type
		dataSource: {
			chart: {
				bgColor: "#2a2a2a",
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

export default WidgetDoughnut
