import { Link } from "react-router-dom"
import logo from "../assets/logo.svg"
import { useContext, useEffect, useRef, useState } from "react"
import { ActualRouteContext } from "../context/ActualPageContext"

import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

import "./Header.css"

const Header = () => {

  const menuRef = useRef<HTMLDivElement>(null)
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const handleMobileMenu = () => {

    const menu = menuRef.current
    
    if(menu) {
      if(menu.classList.contains('close')) {
        menu.classList.replace('close', 'open')
        setIsOpenMenu(true)
      } else {
        menu.classList.replace('open', 'close')
        setIsOpenMenu(false)
      }
    }

  }

  const {actualPage} = useContext(ActualRouteContext)
  useEffect(() => {
    console.log(actualPage)
  }, [actualPage])

  return (
    <div className="flex flex-col-reverse relative">
      <div className="w-1/2 lg:hidden text-center absolute close right-0 bg-white rounded-b-2xl shadow-2xl z-30" ref={menuRef}>
        <ul className="w-full px-5">
          <li className="border-b border-secondary-color py-4">
            <Link to='/'>Página Principal</Link>
          </li>
          <li className="border-b border-secondary-color py-4">
            <Link to='/novidades'>Novidades</Link>
          </li>
          <li className="border-b border-secondary-color py-4">
            <Link to='/contato'>Contato</Link>
          </li>
          <li className="py-4">
            <Link to='/sobre'>Sobre Nós</Link>
          </li>
        </ul>
      </div>


      <div className="flex w-full items-center justify-center p-10 relative shadow-xl shadow-shadow-semi-black z-10 bg-white z-50">

        <div className="absolute left-6">
          <img src={logo} alt="logo da casa de missão" />
        </div>

        <div className="absolute right-5 text-2xl cursor-pointer text-secondary-color lg:hidden" onClick={handleMobileMenu}>
          {!isOpenMenu ? <IoMenu /> : <IoMdClose />}
        </div>

        <ul className="hidden gap-7 font-bold text-secondary-color text-sm lg:flex">
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
    </div>
  )
}

export default Header