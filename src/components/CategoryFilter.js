import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function CategoryFilter({ categories, selectCategory }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  function handleClick(category) {
    setSelectedCategory(prevSelectedCategory => {
      if (prevSelectedCategory === category) {
        return "";
      } else {
        return category;
      }
    });
    selectCategory(category);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => (
        <button
          key={uuid()}
          onClick={() => handleClick(category)}
          className={selectedCategory === category ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;