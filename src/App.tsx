import HomeView from "./components/homeView";
import ConsentForm from "./components/consentForm";
import Header from "./components/header";

//Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomeView} />
          <Route path="/consent" exact component={ConsentForm} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
