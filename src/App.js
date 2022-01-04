import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Add } from "./components/Add";
import { Header } from "./components/Header";
import { Watched } from "./components/Watched";
import { Watchlist } from "./components/Watchlist";
import { GlobalProvider } from "./context/GlobalStateContext";

import "./App.css";
import "./lib/font-awesome/css/all.min.css";


function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Watchlist />} />

          <Route path="/watched" element={<Watched />} />

          <Route path="/add" element={<Add />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
