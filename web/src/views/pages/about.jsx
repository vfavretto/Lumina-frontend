import '../../assets/styles/about.css';
import foto1 from '../../assets/images/equipe/fotinhas_01.png'
import foto2 from '../../assets/images/equipe/fotinhas_02.png'
import foto3 from '../../assets/images/equipe/fotinhas_03.png'
import foto4 from '../../assets/images/equipe/fotinhas_04.png'
import foto5 from '../../assets/images/equipe/fotinhas_05.png'

const About = () => {
return(
    <body style={{ backgroundColor: 'rgb(26, 26, 25)' }}>
      <div className="body">
        <div className="sobreEmpresa">
          <div className="sobreTexto">
            <h2>Sobre a empresa</h2>
            <p>
              Cinco jovens universitários com diferentes habilidades e formações se uniram devido a faculdade.
              Eles fundaram a Lumina, uma consultoria tecnológica, com o objetivo de criar soluções excepcionais
              e se tornar uma referência global. A Lumina cresceu a partir de projetos universitários e se tornou
              uma empresa determinada a moldar o mundo da tecnologia, com um foco compartilhado no futuro e no
              impacto significativo na sociedade por meio de soluções tecnológicas.
            </p>
          </div>
        </div>
        <div className="equipe py-5 mb-5">
          <div className="nossaEquipe">
            <h2>Equipe</h2>
            <div className="sobreNos">
              <div className="membro">
                <img src={foto1} className="fotinha" alt="Ana Laura" />
                <h3>Ana Laura <br /> Lazdenas</h3>
                <p>18 anos <br /> Estudante</p>
              </div>
              <div className="membro">
                <img src={foto2} className="fotinha" alt="Felipe" />
                <h3>Felipe <br /> Rodrigues</h3>
                <p>24 anos <br /> Pro player</p>
              </div>
              <div className="membro">
                <img src={foto3} className="fotinha" alt="Júlia" />
                <h3>Júlia <br /> Soares</h3>
                <p>23 anos <br /> Designer e Ilustradora</p>
              </div>
              <div className="membro">
                <img src={foto4} className="fotinha" alt="Murilo" />
                <h3>Murilo <br /> Rodrigues</h3>
                <p>26 anos <br /> Técnico de Hardware</p>
              </div>
              <div className="membro">
                <img src={foto5} className="fotinha" alt="Victor" />
                <h3>Victor <br /> Favreto</h3>
                <p>26 anos <br /> Advogado</p>
              </div>
            </div>
          </div>
          <div className="missaoVisaoValores">
            <div className="itens text-center">
              <h2>Missão</h2>
              <p>Iluminar a sociedade por meio de integrações sustentáveis entre empresas.</p>
            </div>
            <div className="itens text-center">
              <h2>Visão</h2>
              <p>Tornar-se uma referência global em consultoria tecnológica, impulsionando a inovação e o progresso em todo o mundo.</p>
            </div>
            <div className="itens text-center">
              <h2>Valores</h2>
              <ul className="d-flex flex-column align-items-center">
                <li>Transparência</li>
                <li>Criatividade</li>
                <li>Inovação</li>
                <li>Responsabilidade social</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="parcerias d-flex justify-content-between">
          <div className="textoParcerias">
            <h2>Parcerias</h2>
            <p>
              As parcerias entre tecnologia e sustentabilidade estão moldando um futuro mais verde e eficiente.
              Com avanços em energia limpa, IoT e inteligência artificial, a tecnologia oferece soluções para
              monitorar e reduzir o consumo de recursos, além de impulsionar a produção de energia renovável.
              Essas colaborações abrem portas para a construção de cidades inteligentes, transporte sustentável e práticas empresariais mais ecológicas, contribuindo para a preservação do meio ambiente e o bem-estar de nossa sociedade.
            </p>
          </div>
        </div>
        <div className="faleConosco w-100 p-1">
          <h2>Fale Conosco</h2>
          <div className="form">
            <form action="" className="row">
              <div className="form-floating mb-3 formSobre">
                <input type="text" className="form-control" placeholder="Seu Nome" id="nomeSobre" />
                <label htmlFor="nomeSobre">Seu Nome</label>
              </div>
              <div className="form-floating mb-3 formSobre">
                <input type="email" className="form-control" placeholder="Seu E-mail" id="emailSobre" />
                <label htmlFor="emailSobre">Seu E-mail</label>
              </div>
              <div className="form-floating mb-3 formSobre">
                <textarea className="form-control" placeholder="Sua Mensagem" id="mensagemSobre" style={{ height: '335px' }}></textarea>
                <label htmlFor="mensagemSobre">Mensagem</label>
              </div>
              <div className="botaoFaleConosco w-100 d-flex justify-content-end">
                <button type="submit" className="botaoGeral mt-3">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </body>
);
}

export default About