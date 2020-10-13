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
    this.deleteTask = this.deleteTask.bind(this);
    this.setFilter = this.setFilter.bind(this);

    this.state = {
      tasks: [
        {title: 'task1', checked: false, ind: new Date().getTime()},
        {title: 'task2', ind: new Date().getTime() + 1}
        ],
      taskLeft: 2,
      filter: 'all'
    };
  }

  addTask(taskTitle) {
    if (taskTitle.toString().trim().length === 0) {
      return;
    }
    const tasks = this.state.tasks;
    tasks.push({title: taskTitle, ind: new Date().getTime()});
    this.setState({tasks, taskLeft: this.state.taskLeft + 1});
  }

  clearTasks() {
    const tasks = this.state.tasks.filter(task => !task.checked);
    this.setState({tasks, taskLeft: tasks.length});
  }

  markAllTasks() {
    const unchecked = this.state.tasks.filter(task => !task.checked);
    const allChecked = unchecked.length > 0;
    const tasks = this.state.tasks.map(task => {
      task.checked = allChecked;
      return task;
    });
    this.setState({tasks, taskLeft: allChecked ? 0 : this.state.tasks.length});
  }

  markTask(updTask) {
    const tasks = this.state.tasks.map((task) => {
      if (task.ind === updTask.ind) {
        task = updTask;
      }
      return task;
    });

    const taskLeft = tasks.filter(task => !task.checked).length;
    this.setState({tasks, taskLeft});
  }

  deleteTask(delTask) {
    const tasks = this.state.tasks.filter((task) => {
      if (task.ind !== delTask.ind) {
        return task;
      }
      return false;
    });

    const taskLeft = tasks.filter(task => !task.checked).length;
    this.setState({tasks, taskLeft});
  }

  setFilter(filter) {
    this.setState({filter});
  }


  render() {
    let tasks = [];
    const getTasks = () => {
        tasks = this.state.tasks.filter(task => {
          if (this.state.filter === 'all') {
            return task;
          }
          if (this.state.filter === 'todo' && !task.checked) {
            return task;
          }
          if (this.state.filter === 'completed' && task.checked) {
            return task;
          }
          return false;
        });
        return tasks;
    };

    return (
      <div>
        <Header title='My todo list'/>
        <div className="container">
          <Input addTask={this.addTask}/>
          {
            getTasks().map((task, i) => {
              return <ToDoItem key={i} task={task} markTask={this.markTask} deleteTask={this.deleteTask}/>
            })
          }
          <Footer
            clearTasks={this.clearTasks}
            markTasks={this.markAllTasks}
            tasksLeft={this.state.taskLeft}
            clearFlag={this.state.taskLeft < this.state.tasks.length}
            setFilter={this.setFilter}
            filter={this.state.filter}
          />
        </div>
      </div>
    )
  }
}

export default ToDoPage;
