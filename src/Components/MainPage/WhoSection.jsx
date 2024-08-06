import React from 'react'
import { FaBug } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { FaMoneyBillWaveAlt } from "react-icons/fa";


function WhoSection() {
  return (
    <div className='who-section'>
       <div className="wrapper">
          <div className="who-content">
               <aside>
               <small className='text-second text-3' >Qualidade, Inovação e Confiança em todos os trabalhos</small>
               <h1 className='text-2' >Como fazemos a diferença no Mercado</h1>
               <br />
               <div className="boxes">
                    <div className="box">
                        <div className="icon bg-second"><IoTime /> </div>
                        <div className="text">
                            <h5>Extermínio único</h5>
                            <p>Nos familiarizaremos com suas instalações e depois criaremos uma limpeza personalizada.</p>
                        </div>
                    </div>
                    <div className="box">
                    <div className="icon bg-main"><FaCalendar /> </div>
                        <div className="text">
                            <h5>Manutenção mensal</h5>
                            <p>Nos familiarizaremos com suas instalações e depois criaremos uma limpeza personalizada.</p>
                        </div>
                    </div>
                    <div className="box">
                    <div className="icon bg-main"><FaBug /> </div>
                        <div className="text">
                            <h5>Remoção completa de pragas</h5>
                            <p>Nos familiarizaremos com suas instalações e depois criaremos uma limpeza personalizada.</p>
                        </div>
                    </div>
                    <div className="box">
                    <div className="icon bg-second"><FaMoneyBillWaveAlt /> </div>
                        <div className="text">
                            <h5>Preços competitivos</h5>
                            <p>Nos familiarizaremos com suas instalações e depois criaremos uma limpeza personalizada.</p>
                        </div>
                    </div>
              </div>
               </aside>
              <div className="image-area">
                    <img src="https://www.quironprevencion.pt/wp-content/uploads/2020/06/controlo-de-pragas-vivamais.jpg" alt="" />
              </div>
          </div>
       </div>
    </div>
  )
}

export default WhoSection
