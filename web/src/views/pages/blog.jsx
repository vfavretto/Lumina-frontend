import { useState } from 'react';
import blog1 from ".././../assets/images/blog/blog2.png"
import blog2 from ".././../assets/images/blog/blog3.png"
import blog3 from ".././../assets/images/blog/blog4.png"
import "../../assets/styles/blog.css";

const Blog = () => {
  const [noticias] = useState(dadosBlog.NOTICIAS);
  const [maisLidas] = useState([
    "Tecnologia em Foco: descobertas que moldam o amanhã!",
    "Além do Horizonte: as novas fronteiras da tecnologia",
    "As histórias por trás das inovações tecnológicas mais incríveis!"
  ]);

  return (
    <div className="bg-zinc-900">
      <main>
        <div className="row">
          <div className="col-md-9">
            <div className="container mt-3 noticias">
              {noticias.map((noticia) => (
                <div key={noticia.id} className="d-flex align-items-start blog mb-4">
                  <img
                    src={noticia.img}
                    className="rounded float-start"
                    alt={noticia.nome}
                  />
                  <div className="textoBlog">
                    <h2>{noticia.nome}</h2>
                    <p>{noticia.descricao}</p>
                    <button 
                      className="leiaMais botaoGeral float-end"
                      onClick={() => console.log(`Lendo mais sobre: ${noticia.nome}`)}
                    >
                      Leia mais
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-3">
            <div className="maisLidaTop">
              <ol className="maisLidas">
                <h2>Mais lidas</h2>
                {maisLidas.map((titulo, index) => (
                  <li key={index}>{titulo}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;

const dadosBlog = {
  NOTICIAS: [
    { 
      id: 1, 
      nome: "Cientistas Avançam em Processamento de Dados", 
      descricao: "Pesquisadores anunciaram um avanço histórico na computação quântica, rompendo barreiras tecnológicas que ampliam a capacidade de processamento de dados. O marco promete transformar áreas como inteligência artificial e pesquisa científica, aproximando-se de um futuro onde problemas complexos poderão ser resolvidos com rapidez e eficiência.",
      img: blog1
    },
    { 
      id: 2, 
      nome: "Tecnologia Deve Reduzir Impacto Ambiental em Impressões", 
      descricao: "Desenvolvedores lançaram um código inovador que otimiza o uso de tinta e papel, diminuindo os custos de impressão e os resíduos gerados. A solução, voltada para empresas e consumidores, combina eficiência e sustentabilidade, promovendo uma alternativa prática para reduzir o impacto ambiental sem comprometer a qualidade das impressões.",
      img: blog2
    },
    { 
      id: 3, 
      nome: "Dispositivos que Conectam o Mundo", 
      descricao: "Em um mundo cada vez mais conectado, entender como funcionam os dispositivos tornou-se essencial. De smartphones a assistentes virtuais, a tecnologia que usamos diariamente é composta por sistemas complexos. Compreender esses mecanismos ajuda a expandir nosso conhecimento sobre inovação e a promover um uso mais consciente da tecnologia.",
      img: blog3
    }
  ]
};