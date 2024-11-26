import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../assets/styles/register.css";

const Register = () => {
  const backend = import.meta.env.VITE_BACKEND_URL;
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    nomeResponsavel: "",
    cargoResponsavel: "",
    nomeEmpresa: "",
    emailEmpresa: "",
    telefoneEmpresa: "",
    CNPJ: "",
    tipoEmpresa: "",
    siteEmpresa: "",
    descricao: "",
    userImg: "",
    endereco: {
      cidade: "",
      UF: "",
      CEP: "",
      logradouro: "",
      numero: "",
      bairro: "",
      complemento: "",
    },
    redesSociais: {
      facebook: "",
      instagram: "",
      linkedin: "",
    },
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchEmpresaData = async () => {
      try {
        const response = await axios.get(
          `${backend}/api/v1/auth/profile/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        const empresa = response.data;
        setFormData({
          userName: empresa.auth?.userName || "",
          nomeResponsavel: empresa.nomeResponsavel || "",
          cargoResponsavel: empresa.cargoResponsavel || "",
          nomeEmpresa: empresa.nomeEmpresa || "",
          emailEmpresa: empresa.auth?.email || "",
          telefoneEmpresa: empresa.telefoneEmpresa || "",
          CNPJ: empresa.CNPJ || "",
          tipoEmpresa: empresa.tipoEmpresa || "",
          siteEmpresa: empresa.siteEmpresa || "",
          descricao: empresa.descricao || "",
          userImg: empresa.userImg || "",
          endereco: empresa.endereco || {
            cidade: "",
            UF: "",
            CEP: "",
            logradouro: "",
            numero: "",
            bairro: "",
            complemento: "",
          },
          redesSociais: empresa.redesSociais || {
            facebook: "",
            instagram: "",
            linkedin: "",
          },
        });
      } catch (error) {
        console.error("Erro ao buscar dados da empresa:", error);
        setMessage("Erro ao carregar dados do perfil.");
      }
    };

    fetchEmpresaData();
  }, [id, backend]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Tratamento para campos aninhados (endereco e redesSociais)
    if (name.startsWith("endereco.")) {
      const field = name.split(".")[1];
      setFormData((prevState) => ({
        ...prevState,
        endereco: {
          ...prevState.endereco,
          [field]: value,
        },
      }));
    } else if (name.startsWith("redesSociais.")) {
      const field = name.split(".")[1];
      setFormData((prevState) => ({
        ...prevState,
        redesSociais: {
          ...prevState.redesSociais,
          [field]: value,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${backend}/api/v1/auth/profile/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setMessage("Perfil atualizado com sucesso!");
      console.log("Resposta do backend:", response.data);
      navigate(`/profile/${id}`);
    } catch (error) {
      console.error(
        "Erro ao enviar formulário:",
        error.response || error.message
      );
      setMessage(
        error.response?.data?.message || "Erro ao atualizar o perfil."
      );
    }
  };

  return (
    <main className="profile-page">
      <div className="container">
        <h1 className="titleProfile">Complete Seu Perfil</h1>
        {message && <p className="message">{message}</p>}
        <form onSubmit={handleSubmit} className="formRegister">
          <section className="company-info">
            <h2 className="titleProfileInner">Cadastro Empresa</h2>

            {/* Responsible Person Details */}
            <div className="container text-center">
              <div className="row align-items-start">
                <div className="col">
                  <input
                    type="text"
                    placeholder="Nome do Responsável"
                    name="nomeResponsavel"
                    value={formData.nomeResponsavel}
                    onChange={handleChange}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    placeholder="Cargo do Responsável"
                    name="cargoResponsavel"
                    value={formData.cargoResponsavel}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Company Basic Info */}
            <div className="container text-center">
              <div className="row align-items-start">
                <div className="col">
                  <input
                    type="text"
                    placeholder="Nome da Empresa"
                    name="nomeEmpresa"
                    value={formData.nomeEmpresa}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-3">
                  <select
                    name="tipoEmpresa"
                    value={formData.tipoEmpresa}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Tipo de Empresa</option>
                    <option value="fornecedor">Fornecedor</option>
                    <option value="contratante">Contratante</option>
                    <option value="ambos">Ambos</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="container text-center">
              <div className="row align-items-start">
                <div className="col">
                  <input
                    type="email"
                    placeholder="E-mail da Empresa"
                    name="emailEmpresa"
                    value={formData.emailEmpresa}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="tel"
                    placeholder="Telefone"
                    name="telefoneEmpresa"
                    value={formData.telefoneEmpresa}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="container text-center">
              <div className="row align-items-start">
                <div className="col">
                  <textarea
                    placeholder="Descrição da Empresa"
                    name="descricao"
                    value={formData.descricao}
                    onChange={handleChange}
                    rows="4"
                  />
                </div>
              </div>
            </div>

            <div className="container text-center">
              <div className="row align-items-start">
                <div className="col">
                  <input
                    type="text"
                    placeholder="Site da Empresa"
                    name="siteEmpresa"
                    value={formData.siteEmpresa}
                    onChange={handleChange}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    placeholder="CNPJ"
                    name="CNPJ"
                    value={formData.CNPJ}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Profile Image Upload */}
            <div className="container text-center mb-4">
              <input
                type="url"
                placeholder="URL da Imagem da Empresa"
                name="userImg"
                value={formData.userImg}
                onChange={handleChange}
                className="profile-image-input"
              />
              {formData.userImg && (
                <img
                  src={formData.userImg}
                  alt="Empresa"
                  className="profile-image"
                />
              )}
            </div>

            <div className="container text-center">
              <h3>Endereço</h3>
              <div className="row align-items-start">
                <div className="col">
                  <input
                    type="text"
                    placeholder="Logradouro"
                    name="endereco.logradouro"
                    value={formData.endereco.logradouro}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="text"
                    placeholder="Número"
                    name="endereco.numero"
                    value={formData.endereco.numero}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row align-items-start">
                <div className="col">
                  <input
                    type="text"
                    placeholder="Cidade"
                    name="endereco.cidade"
                    value={formData.endereco.cidade}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="text"
                    placeholder="UF"
                    name="endereco.UF"
                    value={formData.endereco.UF}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row align-items-start">
                <div className="col">
                  <input
                    type="text"
                    placeholder="CEP"
                    name="endereco.CEP"
                    value={formData.endereco.CEP}
                    onChange={handleChange}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    placeholder="Bairro"
                    name="endereco.bairro"
                    value={formData.endereco.bairro}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="social-media">
            <h2>Redes Sociais</h2>
            <div className="container text-center formRedes">
              <div className="row align-items-start">
                <div className="col">
                  <input
                    type="url"
                    placeholder="LinkedIn"
                    name="redesSociais.linkedin"
                    value={formData.redesSociais.linkedin}
                    onChange={handleChange}
                  />
                </div>
                <div className="col">
                  <input
                    type="url"
                    placeholder="Instagram"
                    name="redesSociais.instagram"
                    value={formData.redesSociais.instagram}
                    onChange={handleChange}
                  />
                </div>
                <div className="col">
                  <input
                    type="url"
                    placeholder="Facebook"
                    name="redesSociais.facebook"
                    value={formData.redesSociais.facebook}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </section>
          <div className="saveButton">
            <button type="submit" className="save-button">
              SALVAR
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;
