import React from "react"

const WidgetText = ({ title, value, description }) => {
	return (
		<div className="widgetWrap">
			<div className="widgetTitle">{title}</div>
			<div className="widgetValue">
				<div className="value">{value}</div>
				<div className="description">{description}</div>
			</div>
		</div>
	)
}

export default WidgetText
