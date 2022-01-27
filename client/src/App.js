import logo from './logo.svg';
import './App.css';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import Main from "./components/Main";
import ShowOne from './components/ShowOne';

function App() {
  return (
    <div className="App">
      <h1 class="mb-3">Product Manager</h1>
      <div class="mb-3">
        <Link to="/"><button class="btn btn-primary">Home</button></Link>
      </div>
    
    <Switch>
      <Route exact path="/products/:id">
        <ShowOne />
      </Route>
      <Route path="/">
        <Main />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
