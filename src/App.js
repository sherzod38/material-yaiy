import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from './containers/Header'

import Home from './pages/Home'

import './assets/styles/app.scss'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
