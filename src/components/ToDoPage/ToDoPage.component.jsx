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
    this.markTasks = this.markTasks.bind(this);

    this.state = {
      tasks: [{title: 'task1'}, {title: 'task2'}]
    };
  }

  clearTasks() {
    console.log('DEBUGG clear');
  }

  markTasks() {
    console.log('DEBUGG mark');
  }

  render() {

    return (
      <div>
        <Header title='My todo list'/>
        <div className="container">
          <Input/>
          {
            this.state.tasks.map((task) => {
              return <ToDoItem task={task}/>
            })
          }
          <Footer clearTasks={this.clearTasks} markTasks={this.markTasks}/>
        </div>
      </div>
    )
  }
}

export default ToDoPage;
