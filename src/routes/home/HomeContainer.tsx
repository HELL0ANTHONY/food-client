import React from "react";

import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { startResquest as requestOfRecipes } from "../../redux/action-creators";

import { Recipe } from "../../interfaces/Recipe.interface";

import Home from "./Home";

const HomeContainer = () => {
  const dispatch = useDispatch();
  const { recipes }: { recipes: Recipe[] } = useTypedSelector(
    state => state.recipe
  );

  React.useEffect(() => {
    dispatch(requestOfRecipes());
  }, [dispatch]);

  return (
    <>
      <Home recipes={recipes} />
    </>
  );
};

export default HomeContainer;
