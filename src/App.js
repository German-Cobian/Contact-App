import './App.css';
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <h2>Welcome to React-Redux Contact Book</h2>
    </div>
  );
}

export default App;
