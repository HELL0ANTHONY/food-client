import React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { startResquest } from "../../redux/action-creators";

import Card from "../../components/card/Card";

const Home = () => {
  const dispatch = useDispatch();
  const { recipes } = useTypedSelector(state => state.recipe);
  React.useEffect(() => {
    dispatch(startResquest());
  }, [dispatch]);

  console.log("recipes values:", recipes);

  return (
    <>
      <Card />
    </>
  );
};
export default Home;
