import React from "react";
import "./App.css";

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state={
			activeTasks: [
				{
					"task": "walk dog",
					"completed": false
				}
			],
			completedTasks: []
		}
		this.submitTask = this.submitTask.bind(this);
	}

	submitTask(e){
		const task = {
			"task": document.getElementById("task-input").value,
			"completed": false
		}
		this.setState(state => {
			const activeTasks = state.activeTasks.concat(task);

			return {
				activeTasks
			};
		});
		
	};

	render() {
		const {activeTasks, completedTasks} = this.state;
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
					<ul className="task-view">
					{activeTasks.length > 0 ? 
						activeTasks.map((task, key) => (
							<li key={key}>
								<input type="checkbox" name={task.task} />
								{task.task}
								</li>
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
