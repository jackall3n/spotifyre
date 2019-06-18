import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import {GlobalStyles} from "./components/global-styles/global-styles";
import {Routes} from "./routes";

const container = document.getElementById("app-container");

const App = () => (
    <>
        <GlobalStyles/>
        <Router>
            <Routes/>
        </Router>
    </>
);

ReactDOM.render(
    <App/>,
    container
);
