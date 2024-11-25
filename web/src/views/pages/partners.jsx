import React, { useState, useEffect } from "react";
import "../../assets/styles/partners.css";

const Partners = () => {
  const [ativo, setAtivo] = useState("CONTRATANTE");
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const limit = 10;

  const BASE_URL = "https://lumina-backend-three.vercel.app/api/v1/auth";

  const fetchData = async () => {
    try {
      setLoading(true);
      const tipo = ativo === "CONTRATANTE" ? "contratante" : "fornecedor";
      const response = await fetch(
        `${BASE_URL}/enterprises?tipo=${tipo}&page=${currentPage}&limit=${limit}`
      );
      
      if (!response.ok) {
        throw new Error('Erro ao buscar dados');
      }

      const data = await response.json();
      setDados(data.empresas || []); // Ajustado para usar data.empresas
      setTotalPages(data.totalPages);
      setTotalItems(data.totalEmpresas);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      setDados([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [ativo, currentPage]);

  const troca = (novoAtivo) => {
    setAtivo(novoAtivo);
    setCurrentPage(1);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredDados = dados.filter((item) =>
    item.auth?.nomeEmpresa?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="body overflow-hidden">
      <div className="paginaParceiros">
        <div className="botoesPrincipais">
          <div className="arrumarBotoes">
            <div className="botaoContainer">
              <div
                className={`botaoAnimado ${
                  ativo === "CONTRATANTE" ? "posEmpresa" : "posFornecedor"
                }`}
              />
              <button
                onClick={() => troca("CONTRATANTE")}
                className={`botao ${ativo === "CONTRATANTE" ? "ativo" : ""}`}
              >
                Contratante
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
              placeholder={`Buscar ${
                ativo === "CONTRATANTE" ? "Contratantes" : "Fornecedores"
              }...`}
              id="buscarEmpresa"
              name="buscarEmpresa"
              value={searchTerm}
              onChange={handleSearch}
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
          {loading ? (
            <div className="text-center text-white">Carregando...</div>
          ) : (
            <div className="d-flex flex-column listaEmpresas">
              {filteredDados.map((item) => (
                <div key={item._id} className="d-flex align-items-center itemParceiros">
                  <div className="imgParceiros">
                    <img
                      src={item.userImg || `../images/parceiros/default.png`}
                      alt={`Parceiro ${item.auth.nomeEmpresa}`}
                      width="200"
                    />
                  </div>
                  <div className="textoParceiros">
                    <h2>{item.auth.nomeEmpresa}</h2>
                    <p>{item.servicos?.descricao || 'Descrição não disponível'}</p>
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

              {/* Pagination Controls */}
              <div className="d-flex justify-content-center align-items-center mt-4 gap-3">
                <button
                  className="botaoGeral"
                  style={{ width: "auto", padding: "0 20px" }}
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Anterior
                </button>
                <span className="text-white">
                  Página {currentPage} de {totalPages} ({totalItems} itens)
                </span>
                <button
                  className="botaoGeral"
                  style={{ width: "auto", padding: "0 20px" }}
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                >
                  Próxima
                </button>
              </div>
            </div>
          )}
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