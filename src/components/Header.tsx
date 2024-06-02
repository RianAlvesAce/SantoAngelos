import { Link } from "react-router-dom"
import logo from "../assets/logo.svg"
import { useContext, useEffect } from "react"
import { ActualRouteContext } from "../context/ActualPageContext"

const Header = () => {

  const {actualPage} = useContext(ActualRouteContext)
  useEffect(() => {
    console.log(actualPage)
  }, [actualPage])

  return (
    <div className="flex w-full items-center justify-center p-10 relative shadow-xl shadow-shadow-semi-black z-30">
      <div className="absolute left-6">
        <img src={logo} alt="logo da casa de missão" />
      </div>

      <ul className="flex gap-7 font-bold text-secondary-color text-sm">
        <li className={actualPage === '/' && "text-primary-color" || ''}>
          <Link to='/'>Página Principal</Link>
        </li>
        {
          actualPage === '/' && 
          <li>
            <a href='/#projects'>Projetos Sociais</a>
          </li>
        }
        <li className={actualPage === '/novidades' && "text-primary-color" || ''}>
          <Link to='/novidades'>Novidades</Link>
        </li>
        <li className={actualPage === '/contato' && "text-primary-color" || ''}>
          <Link to='/contato'>Contato</Link>
        </li>
        <li className={actualPage === '/sobre' && "text-primary-color" || ''}>
          <Link to='/sobre'>Sobre Nós</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header