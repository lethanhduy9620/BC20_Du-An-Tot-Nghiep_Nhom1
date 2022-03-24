import { BrowserRouter, Route, Switch } from "react-router-dom";
import { renderRoutesHome } from "./routes";
import PageNotFound from "./containers/PageNotFound";
import SelectDemo from "./demo";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        {renderRoutesHome()}
        {/* Page Not Found */}
        <Route path="" component={PageNotFound}></Route>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
