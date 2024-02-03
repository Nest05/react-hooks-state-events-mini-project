import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [detail, setDetail] = useState("");
  const [category, setCategory] = useState("Code")

  function handleSubmit(e){
    e.preventDefault();
    const newItem = {
      id: uuid(),
      text: detail,
      category: category,
    };
    onTaskFormSubmit(newItem);
    setDetail('');
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
        type="text" 
        name="text" 
        value={detail} 
        onChange={e => setDetail(e.target.value)}
        />
      </label>
      <label>
        Category
        <select 
        name="category"
        value={category}
        onChange={e => setCategory(e.target.value)}
        >
          {categories.filter(category => category !== 'All').map(category => 
          (
            <option
              key={uuid()}
              value={category}
            >
              {category}
            </option>
      ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
