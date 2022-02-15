import './App.css'
import Header from './Header'
import FirstTask from './task1/FirstTask'
import SecondTask from './task2/SecondTask'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className="content">
          <Switch>
            <Route path="/task1" component={FirstTask}/>
            <Route path="/task2" component={SecondTask}/>
            <Route path="/"><Redirect to="/task1"/></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
