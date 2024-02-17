import { AddDrinkTitle } from './AddDrinkTitle';

export const RecipePreparation = () => {
  return (
    <>
      <AddDrinkTitle text="Recipe Preparation" />
      <textarea
        name="instructions"
        id=""
        cols="30"
        rows="10"
        placeholder="Enter the recipe"
        required
      ></textarea>
    </>
  );
};
