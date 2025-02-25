import React from 'react'



const Data = [
    {
        title:"Controle de Baratas",
        description:"Desinfestação e limpeza de moveis",
        image:require("../../Assets/Images/images/i1.jpg"),
    },
    {
        title:"Controle de Moscas",
        description:"Desinfestação e limpeza de moveis",
        image:require("../../Assets/Images/images/i2.jpg"),
    },
    {
        title:"Controle de Abelhas",
        description:"Desinfestação e limpeza de moveis",
        image:require("../../Assets/Images/images/i3.jpg"),
    },
    {
        title:"Controle de Termitas",
        description:"Desinfestação e limpeza de moveis",
        image:require("../../Assets/Images/images/i4.jpg"),
    },
    {
        title:"Controle de Mosquitos",
        description:"Desinfestação e limpeza de moveis",
        image:require("../../Assets/Images/images/i5.jpg"),
    },
    {
        title:"Controle de insetos",
        description:"Desinfestação e limpeza de moveis",
        image:require("../../Assets/Images/images/i6.jpg"),
    },
    {
        title:"Controle de  Formigas",
        description:"Desinfestação e limpeza de moveis",
        image:require("../../Assets/Images/images/i7.jpg"),
    },
    {
        title:"Controle de Roedores",
        description:"Desinfestação e limpeza de moveis",
        image:require("../../Assets/Images/images/i8.jpg"),
    },
];


function PestSection() {
  return (
    <div className='pest-section'>
       <div className="wrapper">
          <div className="text-area">
              <small className='text-second text-3' >Desinfestação de insetos , ratos , parasitas e muito mais</small>
              <h1 className='text-2' >Desinfestação de Pestes</h1>
              <p>Os processos e sistemas que implementamos proporcionam um serviço consistente e de alta qualidade com foco na segurança. Todos os nossos colaboradores
             são formados e certificados nas mais atuais técnicas de limpeza e desinfeção pandémica de limpeza para a saúde.</p>
          </div>
          <section className="boxes">
             {Data.map((item, index)=>(
                <article key={index+1}>
                  <img src={item.image} alt={item.title} />
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </article>
             ))}
          </section>
       </div>
    </div>
  )
}

export default PestSection
