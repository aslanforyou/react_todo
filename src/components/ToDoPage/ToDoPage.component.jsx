import React, {Component} from "react";
import Header from "./components/Header/Header.Component";
import Footer from "./components/Footer/Footer.Component";
import './ToDoPage.css';
import Input from "./components/Input/Input.Component";

class ToDoPage extends Component {
  render() {
    return (
      <div>
        <Header title='My todo list'/>
        <div className="container">
          <Input/>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default ToDoPage;
