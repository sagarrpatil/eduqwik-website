import Home from "./pages/Home";
import { BrowserRouter, Link, Route , Redirect, Switch} from 'react-router-dom';
import Login from "./pages/Login";

function App() {
  return  <>
      <BrowserRouter>
          <Switch>
                <Route exact path="/" component={Home} /> 
                <Route exact path="/login" component={Login} /> 
                <Redirect from="/" to="/" />
          </Switch>
      </BrowserRouter>
   </>
}

export default App;
