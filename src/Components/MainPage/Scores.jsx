import React from 'react'

const Img = "https://ecolifeusa.com/wp-content/uploads/2017/05/EcoLife_utah-top-15-pests-PestShield2.jpg"

function Scores() {
    return (
        <div className='scores-section'>
            <div className="wall">
                <img src={Img} alt="" />
            </div>
            <div className="over-score-section">
                <div className="wrapper">
                    <div className="scores-wrap">
                        <div className="box">
                            <h1  className='text-second' >+106</h1>
                            <span>Clientes satisfeitos</span>
                        </div>
                        <div className="box">
                            <h1 className='text-second'>+23</h1>
                            <span>Profissionais da aréa</span>
                        </div>
                        <div className="box">
                            <h1 className='text-second'>+19</h1>
                            <span>Anos de experiencia</span>
                        </div>
                        <div className="box">
                            <h1 className='text-second '>+784</h1>
                            <span>Funcionarios qualificados</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Scores
