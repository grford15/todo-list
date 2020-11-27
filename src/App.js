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
				},
				{
					"task": "drink water",
					"completed": false
				}
			],
			completedTasks: []
		}
		this.submitTask = this.submitTask.bind(this);
		this.completeTask = this.completeTask.bind(this);
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

	completeTask(e) {
		const currentTask = this.state.activeTasks.find(task => task.task === e.target.name);

		const updatedTasks = this.state.activeTasks.map(item => {
			if(item.task === currentTask.task) {
				return {...item, completed: !item.completed};
			}
			return item;
		});
		this.setState({activeTasks: updatedTasks});
	}

	render() {
		const {activeTasks} = this.state;
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
								<input type="checkbox" name={task.task} onChange={this.completeTask}/>
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
