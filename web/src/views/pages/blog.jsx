import { useState } from 'react';

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
                    src="/api/placeholder/400/300"
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
      nome: "Cientistas Alcançam Novo Patamar na Computação Quântica", 
      descricao: "Pesquisadores anunciam avanço surpreendente na computação quântica, atingindo um marco significativo que pode revolucionar...",
      img: "/api/placeholder/400/300"
    },
    { 
      id: 2, 
      nome: "Desenvolvedores criam código que Economiza nas impressões", 
      descricao: "Em busca de soluções mais sustentáveis, desenvolvedores criaram um código inovador que promete reduzir significativamente...",
      img: "/api/placeholder/400/300"
    },
    { 
      id: 3, 
      nome: "No coração da tecnologia: Descubra como os dispositivos funcionam", 
      descricao: "Em um mundo cada vez mais conectado, entender como os dispositivos funcionam é essencial. De smartphones a assistentes...",
      img: "/api/placeholder/400/300"
    }
  ]
};