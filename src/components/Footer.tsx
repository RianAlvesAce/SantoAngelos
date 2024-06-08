import whiteLogo from "../assets/whiteLogo.svg"

import { Link } from "react-router-dom";
import logo from "../assets/myLogo.svg"

const Footer = () => {
  return (
    <footer className="flex flex-col gap-5 w-full min-h-40 bg-secondary-color p-10 relative">
      <div className="absolute right-0 bottom-0 w-14">
        <a href="https://portfolioaf.vercel.app/" target="_blank">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-0">
        <div className="flex-1 lg:border-r lg:w-1/4 flex flex-col items-center lg:items-start gap-3">
          <div className="w-1/2 lg:w-1/3">
            <img src={whiteLogo} alt="" />
          </div>
          <p className="text-sm text-white text-center lg:w-3/4 lg:text-start">"Ó São Jorge, meu guerreiro, invencível na Fé em Deus, que trazeis em vosso rosto a esperança e confiança abra os meus caminhos..."</p>
        </div>
        <div className="flex-1 lg:border-l lg:pl-10 lg:w-1/4 text-center lg:text-start">
          <h1 className="text-white font-roboto-condensed italic font-bold text-xl">Contato:</h1>
          <ul className="lg:list-disc text-white relative lg:left-10 list-none">
            <li><a href="https://www.instagram.com/santoangelusmissoes/" target="_blank">Instagram</a></li>
            <li>Telefone: (81) 9.8995-2482</li>
            <li>Endereço: Praça Professor Barreto Campêlo, 1189, Torre</li>
          </ul>
        </div>
      </div>

      <div className="border-t pt-5 w-full flex flex-col items-center gap-10 lg:gap-5">
        {/* <h1 className="text-white font-bold font-roboto-condensed italic text-xl">Menu:</h1> */}
        <ul className="flex flex-col lg:flex-row items-center gap-5 font-bold text-white lg:ml-5">
          <li><Link to="/">Página Principal</Link></li>
          <li><a href="#projects">Projetos Sociais</a></li>
          <li><Link to="/novidades">Novidades</Link></li>
          <li><Link to="/contato">Contato</Link></li>
          <li><Link to="/sobre">Sobre Nós</Link></li>
        </ul>
        <p className="text-white text-center">Direitos reservados &copy;Casa de missão Santo Angelos</p>
      </div>
    </footer> 
  )
}

export default Footer