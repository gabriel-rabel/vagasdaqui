import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-primary-button text-background">
      <div className="footer-content gap-5">
        <p className="company-name">Developed by Gabriel Rabel ©{currentYear}</p>
        <Link to={`/Termos`}>
          <p>Termos e Condições</p>
        </Link>
      </div>
    </footer>
  );
}