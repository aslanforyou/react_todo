import React, {Component} from "react";
import Header from "./components/Header/Header.Component";
import Footer from "./components/Footer/Footer.Component";
import './ToDoPage.css';
import Input from "./components/Input/Input.Component";
import ToDoItem from "./components/ToDoItem/ToDoItem.Component";

class ToDoPage extends Component {

  constructor(props) {
    super(props);
    this.clearTasks = this.clearTasks.bind(this);
    this.markAllTasks = this.markAllTasks.bind(this);
    this.markTask = this.markTask.bind(this);
    this.addTask = this.addTask.bind(this);

    this.state = {
      tasks: [
        {title: 'task1', checked: false},
        {title: 'task2'}
        ],
      taskLeft: 2,
    };
  }

  addTask(taskTitle) {
    const tasks = this.state.tasks;
    tasks.push({title: taskTitle});
    this.setState({tasks});
  }

  clearTasks() {
    console.log('DEBUGG clear');
  }

  markAllTasks() {
    console.log('DEBUGG mark All');
    const unchecked = this.state.tasks.filter(task => !task.checked);
    const allChecked = unchecked.length > 0;
    const tasks = this.state.tasks.map(task => {
      task.checked = allChecked;
      return task;
    });
    this.setState({tasks, taskLeft: allChecked ? 0 : this.state.tasks.length});
  }

  markTask(updTask) {
    const tasks = this.state.tasks.map(task => {
      if (task.title === updTask.title) {
        task = updTask;
      }
      return task;
    });

    const taskLeft = tasks.filter(task => !task.checked).length;
    this.setState({tasks, taskLeft});
  }

  render() {

    return (
      <div>
        <Header title='My todo list'/>
        <div className="container">
          <Input addTask={this.addTask}/>
          {
            this.state.tasks.map((task, i) => {
              return <ToDoItem key={i} task={task} markTask={this.markTask}/>
            })
          }
          <Footer
            clearTasks={this.clearTasks}
            markTasks={this.markAllTasks}
            tasksLeft={this.state.taskLeft}
          />
        </div>
      </div>
    )
  }
}

export default ToDoPage;
