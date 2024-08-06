import React from 'react'
import { BsPlay, BsPlayBtnFill } from 'react-icons/bs';
import Carousel from 'react-bootstrap/Carousel';
import { FaArrowRight } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";


const CarouselItems = [
    {
        title: "Obtenha um plano de limpeza personalizado que atenda o seus requisitos",
        smallText: "Um ambiente saudável para seus clientes e funcionários.",
        description: "Nossos especialistas em limpeza oferecem a mais alta qualidade de limpeza que você sempre pode contar. Deixe-nos ajudá-lo com a limpeza e desinfecção agora.",
        image: require("../../Assets/Images/img_1.jpg"),
    },
    {
        title: "Proporcionando um ambiente saudável para clientes e funcionários",
        smallText: "proporcionando um ambiente saudável para clientes e funcionários",
        description: "Nossos especialistas em limpeza oferecem a mais alta qualidade de limpeza que você sempre pode contar. Deixe-nos ajudá-lo com a limpeza e desinfecção agora.",
        image: require("../../Assets/Images/img_2.jpg"),
    }
];


function Header() {
    return (
        <div className='header'>
            <div className="header-main">
                <Carousel fade>
                    {CarouselItems.map((item, index) => (
                        <Carousel.Item key={index}>
                            <div className="carousel-image"><img src={item.image} /></div>
                            <div className="carousel-item-over">
                                <div className="wrapper">
                                    <div className="content"> 
                                           <div className="space-item">
                                              <div className="block">
                                              <small className="text-second text-3">{item.smallText}</small>
                                            <h3 className='text-2'>{item.title}</h3>
                                            <p>{item.description}</p>
                                            <div className="buttons">
                                                <button className='bg-main btn text-light hvr-rectangle-out'><FaArrowRight /> Saiba mais </button>
                                                <button className='bg-white btn text-dark'>Nossos serviços</button>
                                            </div>
                                              </div>
                                              <div className="block">
                                                <div className="play-video">
                                                    <div className="text">

                                                    </div>
                                                    <div className="icon bg-white text-dark">
                                                      <FaPlay />
                                                    </div>
                                                </div>
                                              </div>
                                           </div> 
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
            <div className="header-boxes">
                <div className="wrapper">
                    <div className="header-boxes-items">
                        <div className="box sm">
                            <h2>Salve Tempo & Dinheiro</h2>
                            <p className='text-third'>Terceirizar os serviços de limpeza pode ajudar a reduzir o tempo de limpeza em 37%.</p>
                            <a href="#"><div className="icon-second"><FaArrowRight /></div> Saiba mais</a>
                        </div>
                        <div className="box sm sm2">
                            <h2>Ambientes saudaveis</h2>
                            <p className='text-third'>Um espaço de trabalho limpo evita doenças causadas por germes nocivos.</p>
                            <a href="#"><div className="icon-second"><FaArrowRight /></div> Saiba mais</a>
                        </div>
                        <div className="box sm">
                            <h2>Especialistas Professos</h2>
                            <p className='text-third'>Nossos especialistas são treinados e utilizam limpezas que diminuem drasticamente a poeira.</p>
                            <a href="#"><div className="icon-second"><FaArrowRight /></div> Saiba mais</a>
                        </div>
                        <div className="offer-box box">
                            <img src="https://lh3.googleusercontent.com/proxy/6YfwCAGL6SucuIuR167ovzq-RJTsGTvvtgaSzfHH_hS3qZrU6YU9Q7pzvoi0UnKC4uOWZ02IPY2lTikIAMcdUYPAQUo8TDpFrG3x0ZllSb0" alt="" />
                            <div className="over-box">
                                <h4>Protega os seus funcionarios dos germes</h4>
                                <strong>À medida que os locais de trabalho procuram reabrir, podemos aprender com essas experiências</strong>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
