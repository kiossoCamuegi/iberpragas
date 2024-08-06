import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function TestimonialsSection() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 2.5
    };

    const Data = [
        {
            name: "Carlos Pedro Mateus",
            charge: "Gestor de Marketing",
            picture: "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg"
        },
        {
            name: "Sara Gonçalo",
            charge: "Diretora de RH",
            picture: "https://t3.ftcdn.net/jpg/02/92/28/78/360_F_292287867_hC2Owo0yInRruYbxZXKoJZhB7YUCHdmp.jpg"
        },
        {
            name: "José Manuel",
            charge: "Carpinteiro profissional",
            picture: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },

    ]

    return (
        <div className='testimonials-section'>
            <div className="wrapper">
                <div className="text-area">
                    <small className="text-second text-3">Com orgulho e trabalho os nossos clientes aplaudem</small>
                    <h1 className='text-2'>Muito mais do que ouvir as nossas palavras os nossos clintes falam por nós</h1>
                </div>
                <section className="testimonial-slider">
                    <Slider {...settings}>
                        {Data.map((item, index) => (
                            <div className="box" key={index}>
                                <article>
                                    <div className="info">
                                        <img src={item.picture} alt="" />
                                        <div className="txt">
                                            <h3 className="name">{item.name}</h3>
                                            <h5 className='text-second'>{item.charge}</h5>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum asperiores exercitationem, reprehenderit
                                    nihil voluptate sapiente facere quo nostrum cum quod. </p>
                                </article>
                            </div>
                        ))}
                    </Slider>
                </section>
            </div>
        </div>
    )
}

export default TestimonialsSection
