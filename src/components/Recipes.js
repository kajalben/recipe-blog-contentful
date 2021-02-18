import { useParams } from "react-router-dom";
const Recipes = ({ breakfast, salad, appetizer }) => {
  const { category } = useParams();

  const displayRecipes = (recipes) => {
    return recipes.map((recipes) => {
      <div key={recipes.sys.id}>
        <p>recipes.name</p>
        <p>recipes.direction</p>
      </div>;
    });
  };
  return (
    <>
      {category === "breackfast" && displayRecipes(breakfast)}
      {category === "salad" && displayRecipes(salad)}
      {category === "appetizer" && displayRecipes(appetizer)}
    </>
  );
};

export default Recipes;
