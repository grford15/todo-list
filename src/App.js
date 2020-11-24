import React from "react";
import store from 'store';
import "./App.css";

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state={
			tasks: []
		}
		this.submitTask = this.submitTask.bind(this);
	}

	submitTask(){
		store.set('task0', 'take the dog a walk');
		store.set('task1', 'do some coding')
	}

	render() {
		return (
			<div className="app-container">
				<div className="title-section">
					<h2>#toDoList</h2>
				</div>
				<div className="task-section">
					<input type="text" placeholder="Enter a Task" id="task-input" />
					<button id="task-btn" onClick={this.submitTask}>Add</button>
				</div>
				<div className="task-list"></div>
			</div>
		);
	}
}

export default App;
