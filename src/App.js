import { Route } from "react-router";
import { Switch } from 'react-router-dom'
import { ROUTES } from "./constants/common";
import { StockPage } from "./pages/stock";
import { HomePage } from "./pages/home";

function App() {
  return (
    <Switch>
      <Route path={`${ROUTES.stock}/:symbol`} component={StockPage} />
      <Route path={ROUTES.home} component={HomePage} />
    </Switch>
  );
}

export default App;
