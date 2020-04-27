import React from "react";
import{BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
  return <>
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        Home //can have different components creating different pages
      </Route>
      <Route path="/about">
        About Us
      </Route>

    </Switch>
  </BrowserRouter>
  </>;
}

export default App;
