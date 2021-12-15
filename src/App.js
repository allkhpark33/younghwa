import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import ExplorePage from "./pages/ExplorePage";
import Library from "./components/Library";
import Search from "./components/Serach";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movie/:movieId" element={<DetailPage />}></Route>
          <Route path="/explore" element={<ExplorePage />}></Route>
          <Route path="/library" element={<Library />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
