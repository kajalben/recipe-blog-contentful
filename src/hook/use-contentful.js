import React, { useState, useEffect } from "react";

const useContentful = () => {
  const [categoy, setCategory] = useState();
  const [brackfast, setBreackfast] = useState();
  const [salad, setSalad] = useState();
  const [errors, setErrors] = useState();
  const { REACT_APP_SPACE_ID, REACT_APP_ACCESS_TOKEN } = process.env;
  console.log(REACT_APP_SPACE_ID);

  const query = `
query{
    categoryCollection{
      items{
        sys{
          id
        }
        recipeName
      }
    }
    breakfastRecipesCollection{
        items{
            sys{
                id
              }
        image{
          url
        }
        name
       description
        items
        direction
      }
    }
    saladRecipesCollection{
      items{
          sys{
              id
            }
      image{
        url
      }
      name
     description
      items
      direction
    }
}
}`;

  // https://graphql.contentful.com/content/v1/spaces/1g6suo7uvjo8/explore?access_token=sGG6xod2VcVmD6JIWXXKheqME47G4ViKmTD6lNCZpLo
  useEffect(() => {
    fetch(
        `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}?access_token=${REACT_APP_ACCESS_TOKEN}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        }
      )
      .then((response) => response.json())
      .then(({data, errors}) => {
        if(errors) setErrors(errors);
        if(data){
          setCategory(data.categoryCollection.items);
          setBreackfast(data.breakfastRecipesCollection.items);
          setSalad(data.saladRecipesCollection.items);
        }
      })
      .catch((e) => {
        setErrors([e]);
      });
  }, []);

  return { categoy, errors, brackfast, salad };
};

export default useContentful;
