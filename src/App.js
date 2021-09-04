import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Character from "./components/Character";
import Episode from "./components/Episode";
import Location from "./components/Location";
import Home from "./pages/Home";

const App = () => {
   return (
      <Router>
         <Switch>
            <Route path={`character/:id`} component={Character} />
            <Route path={`episode/:id`} component={Episode} />
            <Route path={`character/:id`} component={Location} />
            <Route exact path={`/`} component={Home} />
         </Switch>
      </Router>
   );
};

export default App;
