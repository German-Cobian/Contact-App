import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'; // Added in this feature
import { createStore } from 'redux'; // Added in this feature
import contactReducer from './redux/reducers/contactReducer'; // Added in this feature
import { composeWithDevTools } from 'redux-devtools-extension'; // Added in this feature


const store = createStore(contactReducer, composeWithDevTools()) // Added in this feature

// Provider added in this feature

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
