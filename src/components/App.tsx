import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Nav from "./Nav/Nav";

type Props = {};

const App: React.FC<Props> = () => (
  <div className="App">
    <Router>
      <Header />
      <Nav />
      <Main />
    </Router>
  </div>
);

export default App;
