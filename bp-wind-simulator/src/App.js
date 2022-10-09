import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Historical from "./pages/Historical";
import Control from "./pages/Control";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Main>
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/historical" component={Historical} />
          <Route exact path="/control" component={Control} />
          <Redirect from="*" to="/dashboard" />
        </Main>
      </Switch>
    </div>
  );
}

export default App;
