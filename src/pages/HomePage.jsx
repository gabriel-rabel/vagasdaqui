import { useState } from "react";
import banner from "../assets/banner1.png";
import { Link } from "react-router-dom";



export default function HomePage() {
  return (
    <div>

      <div className="flex justify-center mx-auto">
        <img src={banner} />
      </div>
      <div className="flex flex-col m-10 gap-5">
      <h2 className="text-xl font-semi-bold">Bem-vindo ao Portal de Empregos de Navegantes e Região!</h2>
      <p>
        Conectando empresas e profissionais talentosos em nossa região, nosso
        portal oferece uma ampla gama de vagas de emprego. Desde estágios até
        cargos de alta gerência, temos oportunidades para todos os níveis de
        experiência. Simplificamos o processo de busca e oferta de empregos,
        tornando mais fácil para as empresas cadastrar suas vagas e para os
        profissionais encontrarem oportunidades que correspondam às suas
        habilidades e interesses. Junte-se a nós e faça parte dessa comunidade
        de sucesso!
      </p>
      </div>
      <div className="flex flex-col ml-20 mr-20 sm:grid sm:grid-cols-2 place-items-stretch ">
        <Link to={`/Vagas`}><div className="text-xl border-none rounded shadow-sm p-5 m-8 text-white gap-4 bg-primary-button ">
          ÚLTIMAS VAGAS
        </div></Link>
        <Link to={`/Curriculos`}>
        <div className="text-xl border-none rounded shadow-sm p-5 m-8 text-white gap-4 bg-primary-button">CURRICULOS</div>
        </Link>
      </div>
    </div>
  );
}
