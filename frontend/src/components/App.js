import React, { Component, Fragment } from "react";
import { createRoot } from 'react-dom/client';
import Header from './layout/Header'
import DashBoard from "./todo/DashBoard";

class App extends Component {
  render() {
    return (
        <Fragment>
            <Header/>
            <DashBoard/>
        </Fragment>
    );
  }
}

const root = createRoot(document.getElementById("app"));
root.render(<App />);
