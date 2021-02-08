import React, { Component } from "react"
import "./dashboard.css"
import { Col, Row, Container } from "react-bootstrap"
import WidgetText from "./WidgetText"
import WidgetBar from "./WidgetBar"
import WidgetPie from "./WidgetPie"
import Dropdown from "react-dropdown"
import "react-dropdown/style.css"
import WidgetGuage from "./WidgetGuage"
import WidgetDoughnut from "./WidgetDoughnut"

const config = {
	apiKey: "AIzaSyDMu-Vw30ykPPmFT3cXeunzKEi4EahzglI",
	spreadsheetId: "1vcDPrMexD8bxNwwzK9IxF8wch6Hfezq2eooJACDiqgg",
}
const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`

class Dashboard extends Component {
	constructor() {
		super()
		this.state = {
			items: [],
			dropdownOptions: [],
			selectedValue: 0,
			organicSource: 0,
			directSource: 0,
			referralSource: 0,
			pageViews: 0,
			users: 0,
			newUsers: 0,
			sourceArr: [],
			usersArr: [],
			bounceRate: 0,
			sessionArr: [],
		}
	}
	getData = (arg) => {
		const arr = this.state.items

		let organicSource = 0
		let directSource = 0
		let referralSource = 0
		let pageViews = 0
		let users = 0
		let newUsers = 0
		let sourceArr = []
		let usersArr = []
		let bounceRate = 0
		let sessionArr = []

		arr.forEach((item) => {
			if (arg === item["month"]) {
				organicSource = item.organic_source
				directSource = item.direct_source
				referralSource = item.referral_source
				pageViews = item.page_views
				users = item.users
				newUsers = item.new_users
				bounceRate = item.bounce_rate
				sourceArr.push(
					{
						label: "Organic Source",
						value: item.organic_source,
					},
					{
						label: "Direct Source",
						value: item.direct_source,
					},
					{
						label: "Referral Source",
						value: item.referral_source,
					}
				)
				usersArr.push(
					{
						label: "Users",
						value: item.users,
					},
					{
						label: "New Users",
						value: item.new_users,
					}
				)
				sessionArr.push(
					{
						label: "Number of Sessions",
						value: item.number_of_sessions_per_users,
					},
					{
						label: "Page Per Session",
						value: item.page_per_session,
					}
				)
			}
		})

		this.setState(
			{
				organicSource,
				directSource,
				referralSource,
				pageViews,
				users,
				newUsers,
				sourceArr,
				usersArr,
				bounceRate,
				sessionArr,
			},
			() => {
				console.log(this.state.organicSource)
			}
		)
	}

	updateDashobard = (event) => {
		this.getData(event.value)
		this.setState({ selectedValue: event.value })
	}
	componentDidMount() {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				let batchRowValues = data.valueRanges[0].values

				const rows = []

				for (let i = 1; i < batchRowValues.length; i++) {
					let rowObject = {}
					for (let j = 0; j < batchRowValues[i].length; j++) {
						rowObject[batchRowValues[0][j]] = batchRowValues[i][j]
					}
					rows.push(rowObject)
				}

				// dropdown options
				let dropdownOptions = []

				for (let i = 0; i < rows.length; i++) {
					dropdownOptions.push(rows[i].month)
				}

				dropdownOptions = Array.from(new Set(dropdownOptions)).reverse()
				this.setState(
					{
						items: rows,
						dropdownOptions: dropdownOptions,
						selectedValue: "Jan 2018",
					},
					() => this.getData("Jan 2018")
				)
			})
	}
	render() {
		return (
			<div>
				<Container fluid>
					<Row className="TopHeader">
						<Col>
							<h1>Dashboard</h1>
						</Col>
						<Col>
							<Dropdown
								options={this.state.dropdownOptions}
								onChange={this.updateDashobard}
								value={this.state.selectedValue}
								placeholder="Select an option"
							/>
						</Col>
					</Row>
				</Container>
				<Container className="mainDashboard">
					<Row>
						<Col>
							<WidgetText
								title="Organic Source"
								description="Organic Source Stats"
								value={this.state.organicSource}
							/>
						</Col>
						<Col>
							<WidgetText
								title="Direct Source"
								description="Direct Source Stats"
								value={this.state.directSource}
							/>
						</Col>
						<Col>
							<WidgetText
								title="Referral Source"
								description="Referral Source Stats"
								value={this.state.referralSource}
							/>
						</Col>
						<Col>
							<WidgetText
								title="Page Views"
								description="Page View Stats"
								value={this.state.pageViews}
							/>
						</Col>
					</Row>
					<Row>
						<Col>
							<WidgetPie title="Users Comparison" data={this.state.usersArr} />
						</Col>
						<Col>
							<WidgetGuage title="Bounce Rate" value={this.state.bounceRate} />
						</Col>
					</Row>
					<Row>
						<Col>
							<WidgetDoughnut
								title="Session Comparison"
								data={this.state.sessionArr}
							/>
						</Col>
						<Col>
							<WidgetBar
								title="Source Comparison"
								data={this.state.sourceArr}
							/>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}

export default Dashboard
