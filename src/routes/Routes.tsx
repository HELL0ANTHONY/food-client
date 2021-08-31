import { Switch, Route } from "react-router-dom";
import Details from "./details/Details";
import Form from "./form/Form";
import HomeContainer from "./home/HomeContainer";
import Landing from "./landing/Landing";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={HomeContainer} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/details" component={Details} />
      </Switch>
    </>
  );
};

export default Routes;
