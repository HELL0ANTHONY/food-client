import { Recipe } from "../../interfaces/Recipe.interface";
import Card from "../../components/card/Card";

const Home = ({ recipes }: { recipes: Recipe[] }) => (
  <>
    {recipes &&
      recipes.map((props: Recipe) => <Card key={props._id} {...props} />)}
  </>
);

export default Home;
