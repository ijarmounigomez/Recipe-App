import { useState } from 'react';

import { Header, SearchBar } from './RecipesStyles';
import RecipeCard from './RecipeCard';
import { Recipe } from '../types';
import { RecipeDetailView } from './RecipeDetailView';

const Recipes = () => {
	const [results, setResults] = useState([]);
	const [query, setQuery] = useState('');
	const [recipeDetails, setRecipeDetails] = useState<Recipe | undefined>();
	const [showRecipeDetailView, setShowRecipeDetailView] = useState(false);

	const getRecipes = async () => {
		try {
			const api = await fetch(
				`https://api.edamam.com/search?q=${query}&app_id=${import.meta.env.VITE_APP_ID
				}&app_key=${import.meta.env.VITE_APP_KEY}`,
			);

			const data = await api.json();
			setResults(data.hits);
		} catch (e) {
			console.error(e, 'something went wrong, we could not load the resource :(');
			return e;
		}
	};

	const handleShowCardDetails = (recipe: Recipe) => {
		setRecipeDetails(recipe);
		setShowRecipeDetailView(true);
	};

	const closeDetailView = () => {
		setRecipeDetails(undefined);
		setShowRecipeDetailView(false);
	}

	return (
		<>
			{showRecipeDetailView ? (
				<RecipeDetailView recipeDetails={recipeDetails} closeDetailView={closeDetailView} />
			) : (
				<>
					<Header>
						<SearchBar>
							<input
								type="text"
								value={query}
								onChange={(e) => setQuery(e.target.value)}
								placeholder="Which ingredients do you have?"
							/>
							<button onClick={getRecipes}>Search</button>
						</SearchBar>
					</Header>

					{results.length ? (
						results.map((result, index) => {
							return (
								<div
									onClick={() => handleShowCardDetails(result.recipe)}
									key={`${result.recipe.label}${index}`}
								>
									<RecipeCard recipe={result.recipe} />
								</div>
							);
						})
					) : (
						<h2>Here are all the recipes you can make!</h2>
					)}
				</>
			)}
		</>
	);
};

export default Recipes;
