import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);

  function handleCategories(category) {
    setCategories(CATEGORIES);
    updateTasks(category);
  }
  function updateTasks(category) {
    if (category === "All") {
      setTasks(TASKS);
    } else {
      const filteredTasks = TASKS.filter(task => task.category === category);
      setTasks(filteredTasks);
    }
  }
  function handleForm(taskArray){
    setTasks([...tasks, taskArray]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
       selectCategory={handleCategories}
       categories={categories}
       />
      <NewTaskForm onTaskFormSubmit={handleForm} categories={categories}/>
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
