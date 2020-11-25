import React from "react";
import store from 'store';
import "./App.css";

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state={
			tasks: [
				"walk dog",
				"do some coding"
			]
		}
		this.submitTask = this.submitTask.bind(this);
	}

	submitTask(e){
		const task = document.getElementById("task-input").value;
		this.setState(state => {
			const tasks = state.tasks.concat(task);

			return {
				tasks
			};
		});
		
	};

	render() {
		const {tasks} = this.state;
		return (
			<div className="app-container">
				<div className="title-section">
					<h2>#toDoList</h2>
				</div>
				<div className="task-section">
					<input type="text" placeholder="Enter a Task" id="task-input" />
					<button id="task-btn" onClick={this.submitTask}>Add</button>
				</div>
				<div className="task-list">
					<ul>
					{tasks.length > 0 ? 
						tasks.map((task, key) => (
							<li key={key}>{task}</li>
						))
						: null
					} 
					</ul>
				</div>
			</div>
		);
	}
}

export default App;
