import { useEffect, useState } from "react";
import styled from 'styled-components';

import SingleRecipe from './SingleRecipe';

const Recipes = () => {
    // keeps track of the recipes UI part
    const [recipes, setRecipes] = useState([]);
    // keeps track of the searched word and the query
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const [isToggled, setIsToggled] = useState(false);

    // makes the getRecipe call and changes on query's command
    useEffect(() => {
        getRecipes();   
    }, [query]);


    const getRecipes = async () => {
        try {
        // makes api call
        const api = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${import.meta.env.VITE_APP_ID}&app_key=${import.meta.env.VITE_APP_KEY}`
        );
        // saves json data in a variable
        const data = await api.json();
        setRecipes(data.hits);
        //console.log(data.hits);
        }
        catch (e) { 
            console.error(e, 'something went wrong, we could not load the resource :(');
            return e;
        }
    };

    const getToggle = ({recipe}) => {
        if(recipe.onclick) {
            setIsToggled(true);
        }
    }

    // stores searched value by user in "e" and sets query to the value in input
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

  return (
    <>
        <Header>
            <SearchBar>
                <form onSubmit={getSearch} data-test-id="form-display">
                    <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder='Which ingredients do you have?'/>
                    <button type="submit">Search</button>
                </form>
            </SearchBar> 
            <h2>Here are all the recipes you can make!</h2>
        </Header>
            {recipes?.map(recipe => {
                    return (
                        <SingleRecipe recipes={recipe} />
                    )
            })}
    </>
  )
}

const Header = styled.div`
    margin: 5rem 0 0 0;
    h2 {
        margin-top: 5rem;
        text-align: center;
    }
`;

const SearchBar = styled.div`
    form {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    input{
        border-radius: 6px;
        border: 2px solid green;
        padding: 1rem;
        width: 40%;
    }
    input:focus {
        outline: none;
    }
    button {
        background-color: green;
        border: none;
        color: white;
        padding: 1rem 2rem;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        border-radius: 6px;
    }
`;

const Title = styled.div`
    align-items: center;
    text-align: center;
    padding: 1rem;
`;

const Text = styled.div`
    ul {
        list-style-type: none;
        line-height: 1;
        padding: 0;
    }
    padding: 1rem;
`;

export default Recipes;