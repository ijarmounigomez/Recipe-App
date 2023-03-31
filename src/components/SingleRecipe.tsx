import styled from 'styled-components';

function SingleRecipe({recipes}) {
    
    return (
        <>                    
            <Recipe>
                <Title>
                    <h2>{recipes.recipe.label}</h2>
                    <img className="image" src={recipes.recipe.image} alt=""/>   
                </Title>
                <Text>
                    {recipes.recipe.ingredients.map(ingredient => (
                        <ul>
                            <li key={ingredient.label}>{ingredient.text}</li>
                        </ul>
                    ))}
                </Text>
            </Recipe>
        </>
    )
}

const Recipe = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
    margin: 4rem auto;
    width: 50%;
    /* {border: 3px solid green;} */
    img {
        border-radius: 50%;  
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

export default SingleRecipe