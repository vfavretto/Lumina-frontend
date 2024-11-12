import '../../assets/styles/blog.css'

const Blog = () => {
return(
    <div style={{ backgroundColor: '#262625' }}>
    <main>
      <div className="row">
        <div className="col-md-9">
          <div className="container mt-3 noticias">
            <div className="d-flex align-items-start blog">
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHwxMXx8dGVjaHxlbnwwfHx8fDE3MDE1NDUyODN8MA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=400"
                className="rounded float-start"
                alt="Cientistas Alcançam Novo Patamar na Computação Quântica"
              />
              <div className="textoBlog">
                <h2>Cientistas Alcançam Novo Patamar na Computação Quântica</h2>
                <p>
                  Pesquisadores anunciam avanço surpreendente na computação quântica, atingindo um marco significativo que pode revolucionar...
                </p>
                <button className="leiaMais botaoGeral float-end">Leia mais</button>
              </div>
            </div>
            <div className="d-flex align-items-start blog">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHw0fHx0ZWNofGVufDB8fHx8MTcwMTU0NTI4M3ww&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=400"
                className="rounded float-start"
                alt="Desenvolvedores criam código que Economiza nas impressões"
              />
              <div className="textoBlog">
                <h2>Desenvolvedores criam código que Economiza nas impressões</h2>
                <p>
                  Em busca de soluções mais sustentáveis, desenvolvedores criaram um código inovador que promete reduzir significativamente...
                </p>
                <button className="leiaMais botaoGeral float-end">Leia mais</button>
              </div>
            </div>
            <div className="d-flex align-items-start blog">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHwxNnx8dGVjaHxlbnwwfHx8fDE3MDE1NDUyODN8MA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=400"
                className="rounded float-start"
                alt="No coração da tecnologia: Descubra como os dispositivos funcionam"
              />
              <div className="textoBlog">
                <h2>No coração da tecnologia: Descubra como os dispositivos funcionam</h2>
                <p>
                  Em um mundo cada vez mais conectado, entender como os dispositivos funcionam é essencial. De smartphones a assistentes...
                </p>
                <button className="leiaMais botaoGeral float-end">Leia mais</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="maisLidaTop">
            <ol className="maisLidas">
              <h2>Mais lidas</h2>
              <li>Tecnologia em Foco: descobertas que moldam o amanhã!</li>
              <li>Além do Horizonte: as novas fronteiras da tecnologia</li>
              <li>As histórias por trás das inovações tecnológicas mais incríveis!</li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  </div>
);
}


export default Blog