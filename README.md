# Recipe Finder App

Create a recipe finder app where users can search for recipes based on ingredients they have on hand or a specific keyword (e.g., "chicken" or "pasta").

Display the search results as a list of recipe cards with images, titles, and a list of ingredients.

Users can click on a recipe to view detailed instructions. handling user input, managing state, rendering lists of items, and calling an API to fetch recipe data.

You can clone a starter codebase from this repository: [https://github.com/Junoburger/recipe_finder](https://github.com/Junoburger/recipe_finder)

API documentation can found at: [https://developer.edamam.com/edamam-docs-recipe-api](https://developer.edamam.com/edamam-docs-recipe-api)

user: juno.burger@bynder.com

pw: **\*See shared document\***

API_KEY = '\*_See shared document_\*'  
APP_ID = '\*\*See shared document\*\*'

API_ENDPOINT = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient}&app_id=${APP_ID}&app_key=${API_KEY}&random=true&field=label&field=source&field=url&field=ingredientLines&field=ingredients&field=calories&field=totalTime&field=mealType&field=image`

<br/>

**App flow and requirements**

1. It has a searchbar with a button.

![image](https://res.craft.do/user/full/a25b8977-def0-15a5-a4d2-4efb268c4dd6/DA2D26C6-DF19-446F-B7B4-A5EB5D9CC349_2/MyBVnzxCdnq7PHsxVglmskJKdlN8J5cnNf4ODIynxMUz/1st.png)

2. Typing in a query and pressing the ‘search’ button, results in a list of recipes that meet the following criteria:

-   An image of the meal
-   Title (label)
-   A list of ingredients

![image](https://res.craft.do/user/full/a25b8977-def0-15a5-a4d2-4efb268c4dd6/500F0B2C-ADD6-4988-A5A4-09B9A1977802_2/bKEtDpAvFrypZ9zIa2rs0Xu5Qk2s5ROz8QR0bECmm3oz/2nd.png)

The search-term that the user entered in the input can be used in the API call.

See query parameter in API URL: `[q=${ingredient](https://api.edamam.com/api/recipes/v2?type=public&q=${INGREDIENT}&app_id=${APP_ID}&app_key=${API_KEY}&imageSize=SMALL&random=true&field=label&field=source&field=url&field=ingredientLines&field=ingredients&field=calories&field=totalTime&field=mealType)}` → where `ingredient` is the search-term coming from the input.

1. Clicking on a recipe shows the details of that recipe

![image](https://res.craft.do/user/full/a25b8977-def0-15a5-a4d2-4efb268c4dd6/3EDA36F2-8411-4481-B075-AD680795F32D_2/G6GENgA72KiqTqfcek2Dd30fipEq6UCdgm7IDsI59c0z/3rd.png)

4. Clicking the “close” button brings the user back to the search results overview

![image](https://res.craft.do/user/full/a25b8977-def0-15a5-a4d2-4efb268c4dd6/1E6DCA1F-126F-4A8B-A6BE-766750D54D9C_2/g2EHrGEGayd7cOsnBi1ujODYw4cnCCB2jOwYEWLmFzQz/5th.png)

![image](https://res.craft.do/user/full/a25b8977-def0-15a5-a4d2-4efb268c4dd6/E0EAA172-80B3-4043-84AA-3B355A68ACCA_2/HagZlggQDeUQKFkxK7MmvuVBgEYf0n2ynD9yaOyDpf4z/6th.png)

**Testing**

![image](https://res.craft.do/user/full/a25b8977-def0-15a5-a4d2-4efb268c4dd6/22805F14-5E44-48F2-AAB4-1D5F3FDA5C49_2/cgbJcay8zUxzKxvySFbmSZELJxuUPhyXFb4ZjlOQ5Z0z/wireframe%202.png)

So given the above described flow.

Write a test for each scenario.
