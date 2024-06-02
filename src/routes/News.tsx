import { useContext, useEffect } from "react"
import verifyData from "../utils/verifyData"

import "./News.css"
import { useLocation } from "react-router-dom"
import { ActualRouteContext } from "../context/ActualPageContext"
import Header from "../components/Header"

const News = () => {

  const {setActualPage} = useContext(ActualRouteContext)
  const location = useLocation()
  useEffect(() => {
    setActualPage(location.pathname)
    // console.log(location)
  })

  const newsList: {id: number, name: string, desc: string, img: string}[] = JSON.parse(localStorage.getItem('info') as string).news

  useEffect(() => {
    verifyData
  }, [])

  return (
    <>

      <Header />

      <div className="min-h-screen flex flex-col items-center py-10">

        {newsList.map((newItem) => (
          <div className="w-4/5 flex relative border border-orange-950 border-opacity-25 rounded-md overflow-hidden shadow-lg">
            <div className="w-11/12 p-5 pr-48 relative left-14 gradientTeste flex flex-col gap-2">
              <h1 className="text-xl font-bold">{newItem.name}</h1>
              <p className="text-sm">{newItem.desc}</p>
            </div>
            <div className="w-1/4 self-end">
              <img src={`${import.meta.env.VITE_REACT_APP_API_URL}imgs/${newItem.img}`} alt="" />
            </div>
          </div>
        ))}

      </div>

    </>
  )
}

export default News