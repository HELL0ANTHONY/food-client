import { Link } from "react-router-dom";
import desserts from "../../img/landing-img.jpg";
import { Container, Image } from "./LandingStyles";

// TODO: cambiar el hover del link por un "active" en los estilos;
const Landing = () => (
  <Container>
    <Image src={desserts} alt="desserts" />
    <Link to="/home">Start</Link>
  </Container>
);

export default Landing;
