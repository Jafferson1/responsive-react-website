import { Route, Switch } from "react-router-dom";
import Wrapper from "./layout/Wrapper";
import Main from "./layout/Main";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Wrapper Component={Main} />} />
    </Switch>
  );
};

export default App;
