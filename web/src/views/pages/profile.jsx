import "../../assets/styles/profile.css";
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import perfilFoto from "../../assets/images/Perfil/GM_oficina_foto.jpg";
import perfilMsgimg from "../../assets/images/Perfil/mensagensPerfil.png";
import foto1 from "../../assets/images/Perfil/foto1.png";
import foto2 from "../../assets/images/Perfil/foto2.png";

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/check`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
      } catch (error) {
        console.error("Erro na verificação da autenticação:", error);
        navigate("/login");
      }
    };
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/user/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
        setError('Erro ao carregar os dados do usuário.');
      }
    };

    checkAuthentication();
    fetchUserData();
  }, [id, navigate]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!userData) {
    return <div>Carregando...</div>;
  }

  return (
    <body>
      <main>
        <div id="perfil">
          <div className="container text-left">
            <div className="row">
              <div className="col-md-4" id="perfilImgName">
                <figure>
                  <img
                    className="perfilFoto"
                    src={perfilFoto}
                    alt="Imagem de perfil"
                  />
                  <h5 className="perfilNome">Grupo Automec {userData.fullName} </h5> {/* como usar os campos do usuario */}
                  <h5 className="perfilCargo">Lavínia Nogueira</h5>
                  <h5 className="perfilEmpresa">Gerente Geral</h5>
                </figure>
              </div>
              <div className="col-md-8 p-0" id="perfilTxt">
                <div id="perfilTxtSobre">
                  <p>
                    Somos o Grupo Automec. Aqui, vivemos a sustentabilidade em
                    cada ação. Desenvolvemos soluções ecoamigáveis, integrando
                    práticas sustentáveis em todas as áreas. Do chão de fábrica
                    à gestão, construímos um futuro verde. Junte-se a nós nesta
                    jornada por um ambiente de negócios mais consciente. Vamos
                    fazer a diferença! 🌿🌐 #Sustentabilidade #GrupoAutomec
                  </p>
                </div>
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
                  <div
                    className="d-flex justify-content-center align-items-center"
                    id="perfilFotinha"
                  >
                    <div id="perfilFoto">
                      <img src={foto1} alt="Foto de perfil Jardinagem" />
                    </div>
                    <div id="nomepessoa">
                      <h2>Casa Grande Jadinagem</h2>
                      <p>
                        Oi Lívia, sou um empresário comprometido com a
                        sustentabilidade. Gostaria de explorar oportunidades de
                        parceria para impulsionarmos juntos práticas mais
                        ecoamigáveis. Estou à disposição para uma conversa.
                        Podemos agendar?
                      </p>
                    </div>

                    <div id="bolinha">
                      <i className="fa fa-circle" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div
                    className="d-flex justify-content-center align-items-center"
                    id="perfilFotinha"
                  >
                    <div id="perfilFoto">
                      <img src={foto2} alt="Foto de perfil Reciclagem" />
                    </div>
                    <div id="nomepessoa">
                      <h2>Novo Vale Reciclagem</h2>
                      <p>
                        Sou Marcio, empresário comprometido com a
                        sustentabilidade. Estou interessado em explorar
                        parcerias para impulsionar práticas ecoamigáveis em
                        nossas operações. Podemos agendar uma conversa rápida?
                      </p>
                    </div>

                    <div id="bolinha">
                      <i className="fa fa-circle" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
};

export default Profile;
