import { useEffect } from "react"
import Title from "../components/Title"
import { useParams } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Project = () => {
  
  const {id} = useParams<{id: string}>()

  const infoArray: {id: number, name: string, desc: string, imgBanner: string}[] = JSON.parse(localStorage.getItem('info') as string).projects

  const info: {id: number, name: string, desc: string, imgBanner: string} = infoArray.filter((project) => project.id === Number(id))[0]

  useEffect(() => {
    window.scrollTo(0,0)
  })

  return (
    <>

      <Header />

      <div className="min-h-screen flex flex-col items-center justify-center gap-14 py-20">

        <Title title={info.name} />

        <p className="lg:w-1/2 w-4/5 text-center">{info.desc}</p>

        <div className="lg:w-1/4 w-4/5 rounded-full overflow-hidden shadow-xl">
          <img src={`${import.meta.env.VITE_REACT_APP_API_URL}imgs/${info.imgBanner}`} alt="" />
        </div>

      </div>

      <Footer />
    </>
  )
}

export default Project