import "../../assets/styles/profile.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import perfilMsgimg from "../../assets/images/Perfil/mensagensPerfil.png";
import Chat from "../components/common/chat";

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [conversas, setConversas] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [error, setError] = useState(null);
  const [isOwnProfile, setIsOwnProfile] = useState(false);
  const [chatMode, setChatMode] = useState(false);
  const [chatPartner, setChatPartner] = useState(null);
  const backend = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const token = localStorage.getItem("token");
    const loggedInUserId = localStorage.getItem("userId");

    const fetchProfileData = async () => {
      try {
        let response;
        // Check if viewing own profile
        if (token && loggedInUserId?.toString() === id?.toString()) {
          console.log("Matching IDs - Fetching own profile");
          setIsOwnProfile(true);
          response = await axios.get(
            `${backend}/api/v1/auth/profile/${loggedInUserId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          // Fetch conversations for logged-in user
          const conversasResponse = await axios.get(
            `${backend}/api/v1/messages/${loggedInUserId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          // Fetch last message for each conversation
          const conversasComUltimaMensagem = await Promise.all(
            conversasResponse.data.map(async (conversa) => {
              try {
                const ultimaMensagemResponse = await axios.get(
                  `${backend}/api/v1/messages/ultima-mensagem/${loggedInUserId}/${conversa._id}`,
                  {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  }
                );
                return {
                  ...conversa,
                  ultimaMensagem: ultimaMensagemResponse.data,
                };
              } catch (messageError) {
                console.error("Erro ao buscar última mensagem:", messageError);
                return conversa;
              }
            })
          );

          setConversas(conversasComUltimaMensagem);
        } else if (token) {
          // Authenticated user viewing another profile
          response = await axios.get(
            `${backend}/api/v1/auth/profilePublic/${id}`
          );
        } else {
          // Public profile view
          response = await axios.get(
            `${backend}/api/v1/auth/profilePublic/${id}`
          );
        }

        setUserData(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        setError("Erro ao carregar os dados.");
      }
    };

    fetchProfileData();
  }, [id, backend]);

  const handleConversationSelect = (conversa) => {
    setSelectedConversation(conversa);
    setChatMode(true);
    setChatPartner(conversa);
  };

  const openSocialLink = (url) => {
    if (url) window.open(url, "_blank");
  };

  const handleStartChat = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    console.log("Abrindo chat com:", id, userData.nomeEmpresa);
    setChatMode(true);
    setChatPartner({
      _id: id,
      nomeEmpresa: userData.nomeEmpresa,
      userImg: userData.userImg,
    });
  };

  const handleBackToMessages = () => {
    setChatMode(false);
    setSelectedConversation(null);
  };

  if (error) return <div>{error}</div>;
  if (!userData) return <div>Carregando...</div>;

  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <div id="perfil">
      <div className="container text-left">
        <div className="row">
          <div className="col-md-4" id="perfilImgName">
            <figure>
              <img
                className="perfilFoto"
                src={userData.userImg}
                alt="Imagem de perfil"
              />
              <h5 className="perfilNome">{userData.nomeEmpresa}</h5>
              <h5 className="perfilCargo">{userData.nomeResponsavel}</h5>
              <h5 className="perfilEmpresa">{userData.cargoResponsavel}</h5>
            </figure>
          </div>
          <div className="col-md-8 p-0" id="perfilTxt">
            <div id="perfilTxtSobre">
              <p>{userData.descricao}</p>
            </div>

            <div className="contact-info">
              {isAuthenticated && isOwnProfile ? (
                // Own Profile View
                !chatMode ? (
                  <div className="perfilMensagens">
                    <figure>
                      <img className="perfilMsgimg" src={perfilMsgimg} />
                    </figure>
                    <div
                      className="d-flex justify-content-between align-items-center"
                      id="perfilMsg"
                    >
                      <div className="d-flex justify-content-start">
                        <h1>Mensagens</h1>
                      </div>
                      <div
                        id="sininhoPerfil"
                        className="d-flex justify-content-end"
                      >
                        <i className="fa fa-bell" aria-hidden="true"></i>
                      </div>
                    </div>
                    {/* Lista de conversas */}
                    {conversas.map((conversa) => (
                      <div
                        key={conversa._id}
                        className="d-flex justify-content-center align-items-center"
                        id="perfilFotinha"
                        onClick={() => handleConversationSelect(conversa)}
                      >
                        <div id="perfilFoto">
                          <img
                            src={conversa.userImg}
                            alt={`Foto de perfil ${conversa.nomeEmpresa}`}
                          />
                        </div>
                        <div id="nomepessoa">
                          <h2>{conversa.nomeEmpresa}</h2>
                          <p>
                            {conversa.ultimaMensagem?.mensagem ||
                              "Sem mensagens"}
                          </p>
                        </div>
                        <div id="bolinha">
                          <i className="fa fa-circle" aria-hidden="true"></i>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Chat View
                  <div className="chat-section">
                    <button
                      onClick={handleBackToMessages}
                      className="btn btn-secondary mb-3"
                    >
                      <i className="fa fa-arrow-left"></i> Voltar para Mensagens
                    </button>
                    <Chat
                      chatPartner={chatPartner}
                      onClose={handleBackToMessages}
                    />
                  </div>
                )
              ) : // Public Profile View
              !chatMode ? (
                <div className="public-profile-details">
                  <div className="contact-section">
                    <h2>Informações de Contato</h2>
                    {userData.emailEmpresa && (
                      <p>
                        <strong>Email:</strong> {userData.emailEmpresa}
                      </p>
                    )}
                    {userData.telefoneEmpresa && (
                      <p>
                        <strong>Telefone:</strong> {userData.telefoneEmpresa}
                      </p>
                    )}
                    {userData.siteEmpresa && (
                      <p>
                        <strong>Site:</strong>{" "}
                        <a
                          href={userData.siteEmpresa}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {userData.siteEmpresa}
                        </a>
                      </p>
                    )}
                  </div>

                  <div className="social-section">
                    <h2>Redes Sociais</h2>
                    <div className="social-icons">
                      {userData.redesSociais?.facebook && (
                        <button
                          onClick={() =>
                            openSocialLink(userData.redesSociais.facebook)
                          }
                          className="btn btn-social facebook"
                        >
                          <i className="fab fa-facebook"></i> Facebook
                        </button>
                      )}
                      {userData.redesSociais?.instagram && (
                        <button
                          onClick={() =>
                            openSocialLink(userData.redesSociais.instagram)
                          }
                          className="btn btn-social instagram"
                        >
                          <i className="fab fa-instagram"></i> Instagram
                        </button>
                      )}
                      {userData.redesSociais?.linkedin && (
                        <button
                          onClick={() =>
                            openSocialLink(userData.redesSociais.linkedin)
                          }
                          className="btn btn-social linkedin"
                        >
                          <i className="fab fa-linkedin"></i> LinkedIn
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="services-section">
                    <h2>Serviços</h2>
                    {userData.servicos && userData.servicos.length > 0 ? (
                      <ul>
                        {userData.servicos.map((servico) => (
                          <li key={servico._id}>{servico.nome}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>Nenhum serviço cadastrado</p>
                    )}
                  </div>

                  <div className="chat-section">
                    <button
                      onClick={handleStartChat}
                      className="btn btn-primary btn-start-chat"
                    >
                      <i className="fa fa-comments"></i> Iniciar Conversa
                    </button>
                  </div>
                </div>
              ) : (
                // Chat View
                <div className="chat-section">
                  <button
                    onClick={handleBackToMessages}
                    className="btn btn-secondary mb-3"
                  >
                    <i className="fa fa-arrow-left"></i> Voltar ao Perfil
                  </button>
                  <Chat
                    chatPartner={chatPartner}
                    onClose={handleBackToMessages}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
