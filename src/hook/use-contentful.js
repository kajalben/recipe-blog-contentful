import React, { useState, useEffect } from "react";

const useContentful = () => {
  const [categoy, setCategory] = useState();
  const [breakfast, setBreackfast] = useState();
  const [appetizer, setAppetizer] = useState();
  const [salad, setSalad] = useState();
  const [errors, setErrors] = useState();
  const { REACT_APP_SPACE_ID, REACT_APP_ACCESS_TOKEN } = process.env;

    const query = `
  query{ 
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
          category
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
        category
      }
  }
  appetizerRecipeCollection{
    items{
    	sys{id}
      name
      image{url}
      description
      items
      direction
      category
    }
  }
  }`;

//   const query = `
//   {
//     salad: appetizerRecipeCollection(where: {category: "salad"}) {
//       items {
//         sys {
//           id
//         }
//         image {
//           url
//         }
//         name
//         description
//         items
//         direction
//         category
//       }
//     }
//     appetizer: appetizerRecipeCollection(where: {category: "appetizer"}) {
//       items {
//         sys {
//           id
//         }
//         image {
//           url
//         }
//         name
//         description
//         items
//         direction
//         category
//       }
//     }
//   }
  
// `;

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
      .then(({ data, errors }) => {
        if (errors) setErrors(errors);
        if (data) {
          setBreackfast(data.breakfastRecipesCollection.items);
          setSalad(data.saladRecipesCollection.items);
          setAppetizer(data.appetizerRecipeCollection.items);
          // setSalad(data.salad.items);
        }
      })
      .catch((e) => {
        setErrors([e]);
      });
  }, []);

  return { breakfast, salad, appetizer, errors };
};

export default useContentful;


//  GraphQL Where query with AND
// query{
//   {
//     appetizerRecipeCollection(where :{
//       AND : [
//         {category : "salad"},
//         {name : "Parmesan Crisps with Marinara Sauce"}
//       ]
//     }
//     ) {
//       items {
//         sys {
//           id
//         }
//         image {
//           url
//         }
//         name
//         description
//         items
//         direction
//         category
//       }
//     }
//   }
// }
