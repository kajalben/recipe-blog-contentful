import React from "react";
import RecipeDisplay from "./RecipeDisplay";

export default function Category({ categoy, brackfast, salad }) {
  return (
    <>
      <div className="category-container">
        {categoy.map((cat) => {
          return (
            <div key={cat.sys.id} className="category-content">
              <h3>{cat.recipeName}</h3>
              {cat.recipeName == "Breakfast Recipes" && (
                <RecipeDisplay recipes={brackfast} />
              )}
              {cat.recipeName == "Salad Recipes" && (
                <RecipeDisplay recipes={salad} />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
