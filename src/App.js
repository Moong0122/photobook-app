import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import "./App.css";
import ModeProvider from "./components/ModeProvider/ModeProvider.component";

function App() {
  return (
    <HashRouter>
      <ModeProvider>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
      </ModeProvider>
    </HashRouter>
  );
}

export default App;
