import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import do useNavigate
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

  const backend = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate(); // Hook para navegação

  const fetchData = async () => {
    try {
      setLoading(true);
      const tipo = ativo === "CONTRATANTE" ? "contratante" : "fornecedor";
      const response = await fetch(
        `${backend}/api/v1/auth/enterprises?tipo=${tipo}&page=${currentPage}&limit=${limit}`
      );
      
      if (!response.ok) {
        throw new Error("Erro ao buscar dados");
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
    item.auth?.userName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="body overflow-hidden">
      <div className="paginaParceiros">
        {/* Botões Contratante/Fornecedor */}
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

        {/* Campo de Busca */}
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
          </form>
        </div>

        {/* Lista de Empresas */}
        <div className="empresas">
          {loading ? (
            <div className="text-center text-white">Carregando...</div>
          ) : (
            <div className="d-flex flex-column listaEmpresas">
              {filteredDados.map((item) => (
                <div
                  key={item._id}
                  className="d-flex align-items-center itemParceiros"
                  onClick={() => navigate(`/profile/${item._id}`)} // Navegação ao clicar
                  style={{ cursor: "pointer" }} // Indica que é clicável
                >
                  <div className="imgParceiros">
                    <img
                      src={item.userImg || `../images/parceiros/default.png`}
                      alt={`Parceiro ${item.auth.userName}`}
                      width="200"
                    />
                  </div>
                  <div className="textoParceiros">
                    <h2>{item.auth.userName}</h2>
                    <p>{item.descricao || "Descrição não disponível"}</p>
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

              {/* Paginação */}
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

        {/* Trabalhe Conosco */}
        <div className="trabalheConosco pb-5">
          <h2>Quer trabalhar conosco?</h2>
          <button className="botaoGeral">Cadastro</button>
        </div>
      </div>
    </div>
  );
};

export default Partners;
