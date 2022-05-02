import * as React from "react";
import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
};

export default App;
