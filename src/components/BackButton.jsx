import React from 'react';
import { useNavigate } from "react-router-dom";
import { BackwardIcon } from '@heroicons/react/20/solid';
export default function BackButton() {
    
const BackButton = () => {
  const history = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <button onClick={handleGoBack}>
      <BackwardIcon/> teste
    </button>
  );
};
}


//Continuar aqui, dia 24/06/23 não funciona ainda.
