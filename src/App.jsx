import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CurriculumPage from "./pages/CurriculumPage";
import JobsPage from "./pages/JobsPage";
import JobCadPage from "./pages/JobCadPage";
import ContactPage from "./pages/ContactPage";
import LogInPage from "./pages/LogInPage";
import JobDetail from "./pages/JobDetail";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Terms from "./pages/Terms";

function App() {
  return (
    <div>
      <NavBar />
      <div className="shadow-md min-h-screen"id="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Vagas" element={<JobsPage />} />
          <Route path="/Curriculos" element={<CurriculumPage />} />
          <Route path="/CadastrarVaga" element={<JobCadPage />} />
          <Route path="/Contato" element={<ContactPage />} />
          <Route path="/Login" element={<LogInPage />} />
          <Route path="/Vagas/:id" element={<JobDetail />} />
          <Route path="/Termos" element={<Terms />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
