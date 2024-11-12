import React, { useState } from 'react';
import '../../../assets/styles/botoesP.css';

const BotoesP = () => {
  const [ativo, setAtivo] = useState("EMPRESA");

  const troca = (novoAtivo) => {
    setAtivo(novoAtivo);
  };

  return (
    <div className="botoesPrincipais">
      <div className="arrumarBotoes">
        <div className="botaoContainer">
          <div
            className={`botaoAnimado ${ativo === "EMPRESA" ? "posEmpresa" : "posFornecedor"}`}
          />
          <button
            onClick={() => troca("EMPRESA")}
            className={`botao ${ativo === "EMPRESA" ? "ativo" : ""}`}
          >
            Empresa
          </button>
          <button
            onClick={() => troca("FORNECEDOR")}
            className={`botao ${ativo === "FORNECEDOR" ? "ativo" : ""}`}
          >
            Fornecedor
          </button>
        </div>
      </div>
    </div>
  )
}

export default BotoesP;