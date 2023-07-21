import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { MapPinIcon } from "@heroicons/react/24/outline";

export default function JobDetail() {
  const params = useParams();

  const [job, setJob] = useState([]);
  console.log(job);

  useEffect(() => {
    async function fetch() {
      const response = await axios.get(
        `https://webdev103.cyclic.app/empregos/${params.id}`
      );

      setJob(response.data);
      console.log(job);
    }
    fetch();
  }, [params.id]);
  console.log(job);

  return (
    <div>
      <h2>{job.title}</h2>
      <p>Empresa: {job.company}</p>
      <div>
        <MapPinIcon className="h-6 w-6"/> <span>{job.city}</span>
      </div>
      <p>Descrição da Vaga: {job.description}</p>
      <p>
        Email: {job.email} | Telefone: {job.phone}
      </p>
    </div>
  );
}
