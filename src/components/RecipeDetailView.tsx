type Props = {
    recipeDetails: any;
    closeDetailView: any;
};

export function RecipeDetailView({ recipeDetails, closeDetailView }: Props) {
    return (
        <div>
            <div onClick={closeDetailView}>X</div>
            <img src={recipeDetails.image} />
            <ul>
                {recipeDetails.ingredientLines.map((line, index) => (
                    <li key={index}>{line}</li>
                ))}
            </ul>
        </div>
    );
}
