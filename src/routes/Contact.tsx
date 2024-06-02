import { FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ActualRouteContext } from "../context/ActualPageContext";
import Header from "../components/Header";

const Contact = () => {

  const {setActualPage} = useContext(ActualRouteContext)
  const location = useLocation()
  useEffect(() => {
    setActualPage(location.pathname)
  })

  return (
    <>

      <Header />

      <div className="min-h-screen flex justify-center items-center">

        <div className="flex w-2/3 justify-around">
          <div>
            <h1 className="text-xl font-bold">Localização</h1>
            <p>Praça Professor Barreto Campêlo, 1189, Torre</p>
            <div className="w-min rounded-md overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.5271217359505!2d-34.91660029102275!3d-8.047588480343975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab191bb98cd713%3A0x39cb4f2b35371ea2!2sPra%C3%A7a%20Prof.%20Barreto%20Camp%C3%AAlo%2C%201189%20-%20Torre%2C%20Recife%20-%20PE%2C%2050710-290!5e0!3m2!1spt-BR!2sbr!4v1717343699843!5m2!1spt-BR!2sbr" width="400" height="300" loading="lazy"></iframe>
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <ul className="flex flex-col gap-5">
              <li className="text-2xl">
                <a href="https://www.instagram.com/santoangelusmissoes/" className="flex gap-2" target="_blank">
                  <FaInstagram /> <span className="text-base">- @santoangelusmissoes</span>
                </a>
              </li>
              <li className="text-2xl">
                <a href="tel:+5581989952482" className="flex gap-2" target="_blank">
                  <FaPhoneAlt /> <span className="text-base">- (81) 9.8995-2482</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </>
  )
}

export default Contact