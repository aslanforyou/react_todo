import React from 'react';
import './App.css';
import ToDoPage from "./components/ToDoPage/ToDoPage.component";
import { library } from "@fortawesome/fontawesome-svg-core";
import {faCheck, faTrashAlt} from "@fortawesome/free-solid-svg-icons";

library.add(faCheck, faTrashAlt);


function App() {
  return (
    <div className="App">
      <ToDoPage/>
    </div>
  );
}

export default App;
