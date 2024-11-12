import React, { useState } from "react";
import "../../assets/styles/partners.css";

const Partners = () => {
  const [ativo, setAtivo] = useState("EMPRESA");

  const dados = {
    EMPRESA: [
      { id: 1, nome: "Empresa A", descricao: "Descrição da Empresa A", img: "imagem1.png" },
      { id: 2, nome: "Empresa B", descricao: "Descrição da Empresa B", img: "imagem2.png" },
      { id: 3, nome: "Empresa C", descricao: "Descrição da Empresa C", img: "imagem3.png" },
    ],
    FORNECEDOR: [
      { id: 1, nome: "Fornecedor A", descricao: "Descrição do Fornecedor A", img: "fornecedor1.png" },
      { id: 2, nome: "Fornecedor B", descricao: "Descrição do Fornecedor B", img: "fornecedor2.png" },
      { id: 3, nome: "Fornecedor C", descricao: "Descrição do Fornecedor C", img: "fornecedor3.png" },
    ],
  };

  const troca = (novoAtivo) => {
    setAtivo(novoAtivo);
  };

  return (
    <div className="body overflow-hidden">
      <div className="paginaParceiros">
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

        <div className="buscarEmpresa">
          <form role="search">
            <input
              type="search"
              placeholder={`Buscar ${ativo === 'EMPRESA' ? 'Empresas' : 'Fornecedores'}...`}
              id="buscarEmpresa"
              name="buscarEmpresa"
              aria-label="Search"
            />
            <label htmlFor="buscarEmpresa">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
              >
                <g clipPath="url(#clip0_8_9)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30.0503 31.7597C26.8611 34.5503 22.6872 36.2416 18.1208 36.2416C8.11208 36.2416 0 28.1295 0 18.1208C0 8.11208 8.11208 0 18.1208 0C28.1295 0 36.2416 8.11208 36.2416 18.1208C36.2416 22.6872 34.5503 26.8671 31.7597 30.0503L44.6436 42.9342C45.1148 43.4054 45.1148 44.1725 44.6436 44.6436C44.1725 45.1148 43.4054 45.1148 42.9342 44.6436L30.0503 31.7597ZM33.8255 18.1208C33.8255 26.7946 26.7946 33.8255 18.1208 33.8255C9.44698 33.8255 2.41611 26.7946 2.41611 18.1208C2.41611 9.44698 9.44698 2.41611 18.1208 2.41611C26.7946 2.41611 33.8255 9.44698 33.8255 18.1208Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_8_9">
                    <rect width="45" height="45" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
          </form>
        </div>

        <div className="empresas">
          <div className="d-flex flex-column listaEmpresas">
            {dados[ativo].map((item) => (
              <div key={item.id} className="d-flex align-items-center itemParceiros">
                <div className="imgParceiros">
                  <img
                    src={`../images/parceiros/${item.img}`}
                    alt={`Parceiro ${item.nome}`}
                    width="200"
                  />
                </div>
                <div className="textoParceiros">
                  <h2>{item.nome}</h2>
                  <p>{item.descricao}</p>
                </div>
                <div className="d-flex botoesParceiros">
                  <button>
                    <i className="fa fa-mouse-pointer" aria-hidden="true"></i>
                  </button>
                  <button>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="trabalheConosco pb-5">
          <h2>Quer trabalhar conosco?</h2>
          <button className="botaoGeral">Cadastro</button>
        </div>
      </div>
    </div>
  );
};

export default Partners;