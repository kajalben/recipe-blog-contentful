import image from "../image/falafal.jpg";

const RecipeDetail = () => {
  return (
    <>
      <div className="recipe-container">
        <img className="recipe-image" src={image} alt="image" />
        <div className="recipe-name">
          <h3>Recipe Name</h3>
          <p>
            Teriyaki Chicken is one of the most delicious ways of preparing
            chicken for lunch or dinner with a very quick and easy method
          </p>
        </div>

        <div className="recipe-content recipe-ingredients">
          <h3>Ingredients</h3>
          <p>
            <strong>Makes about 2-3 servings</strong>
            <br />
            1 pound (500g) boneless skinless chicken breast or thighs, cut into
            bite size pieces
            <br />
            salt and freshly ground black pepper
            <br />
            1 tbsp (15ml) vegetable oil
            <br />
            <strong>Teriyaki Sauce</strong>
            <br />
            1/4 cup (60ml) low-sodium soy sauce
            <br />
            1/4 cup (50g) light brown sugar
            <br />
            3 tbsp (45ml) rice vinegar
            <br />
            1 tsp (3g) sesame oil
            <br />
            1 tbsp (15g) grated ginger
            <br />
            3 cloves garlic, minced
            <br />
            1/2 tbsp (4g) cornstarch mixed with 1 tbsp (15ml) water
            <br />
            <strong>For topping</strong> <br />
            Toasted sesame seeds
          </p>
        </div>
        <div className="recipe-content recipe-direction">
          <h3>Directions</h3>
          <p>
            Cut chicken in bite size pieces, about 1 inch (3cm) pieces. Season
            with salt and freshly ground black pepper.In a medium bowl whisk
            together the teriyaki sauce ingredients, soy sauce with sugar, rice
            vinegar, sesame oil, ginger, garlic and cornstarch. Set aside until
            ready to use.In a large skillet, heat oil over medium-high heat. Add
            chicken pieces and fry until nicely golden on the sides, for about 8
            minutes.Pour the sauce over the chicken and cook for about 3-4
            minutes more and the sauce thickens and chicken is cooked
            through.Serve teriyaki chicken with your favorite side dish and
            veggies.Top chicken with toasted sesame seeds before serving. Enjoy!
          </p>
        </div>
      </div>
    </>
  );
};

export default RecipeDetail;
