import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MapPinIcon } from "@heroicons/react/24/outline";

export default function JobsList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      const response = await axios.get("https://webdev103.cyclic.app/empregos");

      setJobs(response.data);
    }
    fetchJobs();
  }, []);
  console.log(jobs);

  return (
    <div>
      <div>
        <p>Filtrar:</p>
      </div>
      <div className="text-white font-bold text-lg border-none bg-accent m-10 -mb-9">
        <h1>VAGAS ANUNCIADAS</h1>
      </div>
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-1 m-10">
        {jobs.map((job) => {
          return (
            <Link
                  to={`/Vagas/${job._id}`}
                  
                >
            <div
              key={job._id}
              className="flex flex-col bg-white border shadow-sm rounded p-4 md:p-2 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
            >
              <h3 className="text-lg font-bold text-primary-button dark:text-white uppercase">
                {job.title}
              </h3>
              <p className="text-xs font-medium uppercase text-secondary-button dark:text-gray-500">
                {job.company}
              </p>
              <div className="flex justify-between">
                
                  <a className="text-sm font-medium hover:text-blue-700">Ver vaga</a>

                <p className="flex">
                  <MapPinIcon className="h-6 w-6" />
                  {job.city}
                </p>
              </div>
            </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
