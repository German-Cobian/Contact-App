import './App.css';
import { ToastContainer } from 'react-toastify';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddContact from './components/AddContact';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch >
        
        <Route exact path="/" component={() => <Home/>} />
      
        <Route path="/add">
         <AddContact />
        </Route>
        
        <Route path="/edit/:id">
          <h1>I am edit component</h1>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
