
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {NotificationContainer} from 'react-notifications';

import Routes from "./pages";

function App() {
  return (
    <>
      <Router>
          <Routes />
      </Router>
      <NotificationContainer/>
    </>
  );
}

export default App;
