import React from 'react';
import {Provider} from 'react-redux'
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import LayoutContainer from "./Pages/LayoutContainer";
import 'antd/dist/antd.css'
import './App.css';


function App() {
  return (
      <Provider store={store}>
          <Router>
              <LayoutContainer />
          </Router>
      </Provider>
  );
}

export default App;
