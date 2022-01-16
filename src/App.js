import './App.css';
import { ToastContainer } from 'react-toastify';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch >
        <Route exact path="/" component={() => <Home/>} />
      </Switch>
    </div>
  );
}

export default App;
