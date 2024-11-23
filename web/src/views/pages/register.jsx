import React, { useState } from "react";
import axios from "axios";
import "../../assets/styles/register.css";

const Register = () => {
  // Estado inicial para o formulário
  const [formData, setFormData] = useState({
    representativeName: "",
    representativeEmail: "",
    representativePhone: "",
    representativeCPF: "",
    companyName: "",
    companyType: "",
    companyEmail: "",
    companyWebsite: "",
    companyPhone: "",
    companyCNPJ: "",
    companyAddress: "",
    companyCEP: "",
    companyCity: "",
    companyUF: "",
    companyCountry: "",
    companyDescription: "",
    linkedin: "",
    instagram: "",
    facebook: "",
  });

  const [message, setMessage] = useState(""); // Mensagem de erro/sucesso

  // Atualizar estado com dados dos inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submeter formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Envia os dados ao backend
      const response = await axios.post("http://localhost:5000/api/register", formData);

      setMessage("Cadastro realizado com sucesso!");
      console.log("Resposta do backend:", response.data);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error.response || error.message);
      setMessage(error.response?.data?.message || "Erro ao salvar o cadastro.");
    }
  };

  return (
    <main className="profile-page">
      <div className="container">
        <h1>Complete Seu Perfil</h1>
        {message && <p className="message">{message}</p>} {/* Mensagem de status */}
        <form onSubmit={handleSubmit}>
          <section className="representative-info">
            <h2>Cadastro Representante</h2>
            <div className="container text-center">
              <div className="row align-items-start">
                <div className="col">
                  <input
                    type="text"
                    placeholder="Nome"
                    name="representativeName"
                    value={formData.representativeName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="container text-center">
              <div className="row align-items-start">
                <div className="col">
                  <input
                    type="email"
                    placeholder="E-mail"
                    name="representativeEmail"
                    value={formData.representativeEmail}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="container text-center">
              <div className="row align-items-start">
                <div className="col">
                  <input
                    type="tel"
                    placeholder="Telefone"
                    name="representativePhone"
                    value={formData.representativePhone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    placeholder="CPF"
                    name="representativeCPF"
                    value={formData.representativeCPF}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="company-info">
            <h2>Cadastro Empresa</h2>
            <div className="container text-center">
              <div className="row align-items-start">
                <div className="col">
                  <input
                    type="text"
                    placeholder="Nome"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-3">
                  <select
                    name="companyType"
                    value={formData.companyType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Empresa</option>
                    <option value="Fornecedor">Fornecedor</option>
                    <option value="Ambos">Ambos</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Outros campos como E-mail, Site, CNPJ, Endereço, etc. */}
            <div className="container text-center">
              <div className="row align-items-start">
                <div className="col">
                  <textarea
                    placeholder="Descrição Empresa"
                    name="companyDescription"
                    value={formData.companyDescription}
                    onChange={handleChange}
                  ></textarea>
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
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                  />
                </div>
                <div className="col">
                  <input
                    type="url"
                    placeholder="Instagram"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                  />
                </div>
                <div className="col">
                  <input
                    type="url"
                    placeholder="Facebook"
                    name="facebook"
                    value={formData.facebook}
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
