import { useEffect } from "react"
import Title from "../components/Title"
import { useParams } from "react-router-dom"

const Project = () => {
  
  const {id} = useParams<{id: string}>()

  const infoArray: {id: number, name: string, desc: string, imgBanner: string}[] = JSON.parse(localStorage.getItem('info') as string).projects

  const info: {id: number, name: string, desc: string, imgBanner: string} = infoArray.filter((project) => project.id === Number(id))[0]

  useEffect(() => {
    window.scrollTo(0,0)
  })

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center gap-14 py-20">

        <Title title={info.name} />

        <p className="w-1/2 text-center">{info.desc}</p>

        <div className="w-1/4 rounded-full overflow-hidden shadow-xl">
          <img src={`${import.meta.env.VITE_REACT_APP_API_URL}imgs/${info.imgBanner}`} alt="" />
        </div>

      </div>
    </>
  )
}

export default Project