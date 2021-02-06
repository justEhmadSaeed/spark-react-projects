import React from "react"
import "./Profile.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Education from "./Education"
import Introduction from "./Introduction"
import Contact from "./Contact"
import ProfessionalExperience from "./ProfessionalExperience"

const Profile = () => {
	return (
		<Router>
			<div id="container">
				<header>
					<div className="quoteoftheday">Profile</div>
					<div className="name">{"<Ehmad./>"}</div>
				</header>

				<article>
					<div className="quote">
						<h1>
							Eat: <br />
							Sleep: <br />
							Code: <br />
							Repeat;
						</h1>
					</div>

					<div className="quoteby">
						<h4>Ehmad Saeed</h4>
					</div>
				</article>

				<footer>
					<div className="skills">
						<h6>Menu</h6>
						<ul>
							<li>
								<Link to="/">Introduction</Link>
							</li>
							<li>
								<Link to="/education">Education</Link>
							</li>
							<li>
								<Link to="/professional">Professional Experience</Link>
							</li>
							<li>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</div>
					<Switch>
						<Route exact path="/">
							<Introduction />
						</Route>
						<Route exact path="/education">
							<Education />
						</Route>
						<Route exact path="/professional">
							<ProfessionalExperience />
						</Route>
						<Route exact path="/contact">
							<Contact />
						</Route>
					</Switch>
				</footer>
			</div>
		</Router>
	)
}

export default Profile
