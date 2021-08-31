import { Main, Header, Image, Footer } from "./CardStyles";
import { Recipe } from "../../interfaces/Recipe.interface";

const Card = ({ name, types, image }: Recipe) => (
  <Main>
    <Header>
      <h3>{name}</h3>
    </Header>
    <Image>
      <img src={image} alt={image} />
    </Image>
    <Footer>
      <h3>Types</h3>
      <div>
        {types.map((type: string, index: number) => (
          <span key={`${type}-${index}`}>{type}</span>
        ))}
      </div>
    </Footer>
  </Main>
);

export default Card;
