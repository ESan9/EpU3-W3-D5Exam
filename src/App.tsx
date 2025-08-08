import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { HomePage } from "./components/HomePage";
import { ArticleDetail } from "./components/ArticleDetailPage";

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/article/:id" element={<ArticleDetail />} />
    </Routes>
  </Router>
);

export default App;
