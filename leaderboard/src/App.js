import "./App.css"
import Student from "./components/Student"

function App() {
	return (
		<div className="App">
			<h1 className="heading">Leadersboard</h1>
			<Student name="Ehmad" university="UET Lahore" score={335} />
			<Student name="Saeed" university="UET Taxila" score={360} />
			<Student name="Khurrum" university="NUST" score={350} />
			<Student name="Shahzaib" university="UOL" score={345} />
		</div>
	)
}

export default App
