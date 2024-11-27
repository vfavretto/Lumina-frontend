import React, { useRef, useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/styles/home.css";
import { Link } from "react-router-dom";
import imgBanner1 from "../../assets/images/banner-home-1.png";
import imgBlog2 from "../../assets/images/blog/blog2.png";
import imgBlog3 from "../../assets/images/blog/blog3.png";
import imgBlog4 from "../../assets/images/blog/blog4.png";

const Home = () => {
  const carouselBlogRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  const blogItems = [
    {
      img: imgBlog2,
      title: "Cientistas Avançam em Processamento de Dados",
    },
    {
      img: imgBlog3,
      title: "Tecnologia Deve Reduzir Impacto Ambiental em Impressões",
    },
    {
      img: imgBlog4,
      title: "Dispositivos que Conectam o Mundo",
    },
    {
      img: imgBlog2,
      title: "Cientistas Avançam em Processamento de Dados",
    },
    {
      img: imgBlog3,
      title: "Tecnologia Deve Reduzir Impacto Ambiental em Impressões",
    },
    {
      img: imgBlog4,
      title: "Dispositivos que Conectam o Mundo",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getVisibleItems = () => {
    if (isMobile) {
      return [blogItems[currentIndex]];
    } else {
      const itemsPerPage = 3;
      const startIndex = currentIndex;
      return blogItems.slice(startIndex, startIndex + itemsPerPage);
    }
  };

  const handleNext = () => {
    const maxIndex = isMobile 
      ? blogItems.length - 1 
      : blogItems.length - 3;
    
    if (currentIndex < maxIndex) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  useEffect(() => {
    if (carouselBlogRef.current) {
      carouselBlogRef.current.scrollTo({
        left: currentIndex,
        behavior: "smooth"
      });
    }
  }, [currentIndex]);
  
  return (
    <main className="body">
     <div id="circulo" className="carousel slide slideInicio">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#circulo"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#circulo"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#circulo"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner sombra">
          <div className="carousel-item active">
            <img
              src={imgBanner1}
              className="d-block w-100 imgSlide"
              alt="..."
            />
            <div className="divTexto">
              <div className="texto">
                <p>
                  A Lumina é uma plataforma dedicada à consultoria tecnológica e
                  inovação sustentável, explore conosco e descubra como podemos
                  iluminar o caminho para um futuro mais sustentável!
                </p>
              </div>
              <div className="saibaMais">
                <Link to="/about">
                  <button className="botaoGeral">Saiba Mais</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={imgBanner1} className="d-block w-100" alt="..." />
            <div className="divTexto">
              <div className="texto">
                <p>
                  A colaboração entre empresas e organizações não governamentais
                  promovem uma responsabilidade social corporativa e
                  possibilitam inovações significativas abordando desafios
                  críticos e contribuindo para o bem-estar da sociedade como um
                  todo.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={imgBanner1} className="d-block w-100" alt="..." />
            <div className="divTexto">
              <div className="texto">
                <p>
                  A plataforma de notícias emerge como uma fonte dinâmica e
                  informativa, dedicada a explorar as últimas tendências e
                  inovações no cenário tecnológico voltado para práticas
                  sustentáveis nas empresas.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            className="carousel-control-prev anteriorSlide"
            type="button"
            data-bs-target="#circulo"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next proximoSlide"
            type="button"
            data-bs-target="#circulo"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Proximo</span>
          </button>
        </div>
      </div>

      <div className="container text-start mt-4 pb-5">
        <div className="row row-cols-2 metasTexto">
          <div className="col mb-5">
            <h2>
              <i className="fa-solid fa-location-dot"></i> Presentes em 10
              estados
            </h2>
          </div>
          <div className="col mb-5">
            <h2>
              <i className="fa-solid fa-industry"></i> 1000+ empresas
              cadastradas
            </h2>
          </div>
          <div className="col mb-5">
            <h2>
              <i className="fa-solid fa-file-contract"></i> 750+ contratos
              firmados
            </h2>
          </div>
          <div className="col mb-5">
            <h2>
              <i className="fa-solid fa-briefcase"></i> 1500+ empregos gerados
            </h2>
          </div>
          <div className="col-12 text-center">
            <button className="facaParte botaoGeral">Faça parte</button>
          </div>
        </div>
      </div>
      
      <div className="homeBlog w-100 pb-5">
        <h1 className="text-center">Blog</h1>
        <div id="carouselBlog" className="carousel">
          <div className="carousel-inner carouselBlog" ref={carouselBlogRef}>
            {getVisibleItems().map((item, index) => (
              <div 
                key={`${index}-${currentIndex}`} 
                className={`carousel-item ${index === 0 ? 'active' : ''} itemBlog`}
              >
                <div className="card">
                  <img src={item.img} className="d-block imgBlog" alt="..." />
                  <div className="card-body">
                    <p className="card-text">{item.title}</p>
                    <Link to="/blog" className="d-flex justify-content-end">
                      Leia mais +
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev anteriorBlog"
            type="button"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            <span>&lt;</span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next proximoBlog"
            type="button"
            onClick={handleNext}
            disabled={currentIndex === (isMobile ? blogItems.length - 1 : blogItems.length - 3)}
          >
            <span>&gt;</span>
            <span className="visually-hidden">Próximo</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;