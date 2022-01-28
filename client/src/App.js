import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import Main from "./components/Main";
import ShowOne from './components/ShowOne';
import Update from './components/Update';

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
      <Route exact path="/products/update/:id">
        <Update />
      </Route>
      <Route exact path="/">
        <Main />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
