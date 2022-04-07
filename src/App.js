import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { renderRoutesHome } from "./routes";
import PageNotFound from "./containers/PageNotFound";
import Loader from "./containers/UserPages/components/Loader/Loader";
import "./containers/UserPages/style_base.css";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Switch>
          {renderRoutesHome()}
          {/* Page Not Found */}
          <Route path="" component={PageNotFound}></Route>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
