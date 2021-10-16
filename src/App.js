import './App.css';
import Investor from "./components/Investor"
import Waitlist from "./components/Waitlist"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return ( 
  <Router>
    <div>
      <Switch>
        <Route exact path="/waitlist">
          <Waitlist />
        </Route>
        <Route exact path="/">
          {/* <div className="container-fluid"> */}
           <Investor/>
          {/* </div> */}
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
