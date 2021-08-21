import { Main, Header, Image, Footer, URL } from "./CardStyles";

const types: Array<{ name: string }> = [
  { name: "typeOne" },
  { name: "typeTwo" },
  { name: "typeThree" }
];

const Card = () => (
  <Main>
    <Header>
      <h3>Food Name</h3>
    </Header>
    <Image>
      <img src={URL} alt={"wolf"} />
    </Image>
    <Footer>
      <h3>Types</h3>
      <div>
        {types
          ? types.map(({ name }: { name: string }, id) => (
              <span key={id}>{name}</span>
            ))
          : "No types"}
      </div>
    </Footer>
  </Main>
);

export default Card;
