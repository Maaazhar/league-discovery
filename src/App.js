import react  from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import RouteNotFound from "./components/RouteNotFound/RouteNotFound";
import LeagueDetails from "./components/LeagueDetails/LeagueDetails";
import Header from "./components/Header/Header";

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/home"> <Header/> <Home/> </Route>
        <Route path="/leagues/:idLeague"> <Header/> <LeagueDetails/> </Route>
        <Route exact path="/"> <Header/> <Home/> </Route>
        <Route path="*"> <RouteNotFound/> </Route>
      </Switch>
    </Router>
  );
}

export default App;
