import "./App.css";

function App() {
	return (
		<div className="app-container">
			<div className="title-section">
				<h2>#toDoList</h2>
			</div>
			<div className="task-section">
				<input type="text" placeholder="Enter a Task" id="task-input" />
				<button id="task-btn">Add</button>
			</div>
			<div className="task-list">

			</div>
		</div>
	);
}

export default App;
