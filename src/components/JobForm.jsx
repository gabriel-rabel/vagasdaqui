import "./JobForm.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function JobForm() {
    const navigate = useNavigate();
  const [jobForm, setJobForm] = useState({
    company: "",
    title: "",
    city: "",
    description: "",
    email: "",
    phone: "",
  });

  function handleChange(e) {
    setJobForm({ ...jobForm, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://webdev103.cyclic.app/empregos",
        jobForm
      );
      navigate("/")
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit} className="cardForm">
        <label>Nome da empresa contratante:</label>
        <input
          type="text"
          value={jobForm.company}
          name="company"
          onChange={handleChange}
        />
        <br />
        <label>Título da Vaga:</label>
        <input
          type="text"
          value={jobForm.title}
          name="title"
          onChange={handleChange}
        />
        <br />
        <label>Cidade:</label>
        <input
          type="text"
          value={jobForm.city}
          name="city"
          onChange={handleChange}
        />
        <br />
        <label>Descrição completa da vaga:</label>
        <textarea
          value={jobForm.description}
          name="description"
          onChange={handleChange}
          rows="6"
        ></textarea>
        <label>E-mail:</label>
        <input
          type="text"
          value={jobForm.email}
          name="email"
          onChange={handleChange}
        />
        <label>Telefone:</label>
        <input
          type="text"
          value={jobForm.phone}
          name="phone"
          onChange={handleChange}
        />
        <button className="primary-button flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit">Cadastrar Vaga</button>
      </form>
    </div>
  );
}