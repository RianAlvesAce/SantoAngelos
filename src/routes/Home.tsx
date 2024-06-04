import { useContext, useEffect, useRef, useState } from "react";
import logo from "../assets/logo2.svg"

import video from "../assets/videoDiacuno.mp4"

import { FaPlay, FaPause } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Title from "../components/Title";

import "./Home.css"
// import verifyData from "../utils/verifyData";
import { Link, useLocation } from "react-router-dom";
import { ActualRouteContext } from "../context/ActualPageContext";
import Header from "../components/Header";
import verifyData from "../utils/verifyData";
import Footer from "../components/Footer";
import InfoService from "../services/InfoService";

const Home = () => {

  const {setActualPage} = useContext(ActualRouteContext)
  const location = useLocation()
  useEffect(() => {
    setActualPage(location.pathname)
  })

  useEffect(() => {
    (async () => {
      if(!localStorage.getItem('info')) {
        localStorage.setItem('info', JSON.stringify(await InfoService.getAll()))
      }
    })()
  }, [])

  const projetosList: {id: number, name: string, imgBanner: string}[] = JSON.parse(localStorage.getItem('info') as string).projects

  const carrosselRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)
  const backRef = useRef<HTMLDivElement>(null)
  const lastRef = useRef<HTMLDivElement>(null)
  const firstRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const [isPlay, setIsPlay] = useState(false)

  const handleVideo = () => {
    if(videoRef.current) {
      if(videoRef.current.paused) {
        videoRef.current.play()
        setIsPlay(true)
      } else {
        videoRef.current.pause()
        setIsPlay(false)
      }
    }
  }

  const handleNextCarrossel = () => {
    if(carrosselRef.current) {
      if(nextRef.current && lastRef.current) {
        if(lastRef.current.getBoundingClientRect().x <= nextRef.current.getBoundingClientRect().x) {
          return
        }
      }
      const left = carrosselRef.current.style.left
      if(!left) {
        carrosselRef.current.style.transition = "left 0.5s ease-in-out";
        carrosselRef.current.style.left = "-196px"
      } else {
        const numberLeft = left.match(/\d+/g)
        console.log(numberLeft)
        if(numberLeft) {
          carrosselRef.current.style.left = `-${Number(numberLeft[0]) + 196}px`
        }
      }
    }
  }

  const handleBackCarrossel = () => {
    if(carrosselRef.current) {
      if(firstRef.current && backRef.current) {
        console.log(firstRef.current.getBoundingClientRect().x)
        console.log(backRef.current.getBoundingClientRect().x)
      }

      const left = carrosselRef.current.style.left
      if(!left) {
        return
      } else {
        const numberLeft = left.match(/\d+/g)
        if(numberLeft) {
          carrosselRef.current.style.left = `-${Number(numberLeft[0]) - 196}px`
        }
      }
    }
  }


  return (
    <>
      <Header />
      <div className="flex h-screen -z-10 shadow-xl shadow-shadow-semi-black">

        <div className="w-1/2 h-full bg-bg1 bg-fixed relative">
          <div className="w-full h-full bg-secondary-color bg-opacity-50 backdrop-blur-sm flex justify-center">

            <div className="bg-black w-96 h-52 mt-32 rounded flex justify-center items-center relative">

              {/* <FaPlay className="text-white text-5xl" /> */}

              {isPlay ? 
              <div className="absolute bottom-1 right-1 text-white"><FaPause /></div> :
                <div className="absolute bottom-1 right-1 text-white"><FaPlay /></div> 
              }

              <video src={video} ref={videoRef} onClick={handleVideo} className="rounded-md"></video>


            </div>

          </div>
        </div>
        <div className="w-1/2 h-full bg-white flex justify-center">

          <div className="w-3/4 flex flex-col items-center gap-8 mt-32">

            <div className="flex justify-center">
              <img src={logo} alt="" className="w-4/5" />
            </div>

            <p className="text-center text-sm">A Casa de Missão Santo Angelus foi fundada em 24 de Junho de 2017, dia dedicado a São João Batista, pelos Missionários Felipe Alecrim, Tony Muniz e o Diácono Maurício. Localizada no Bairro da Torre, a Casa de Missão desenvolve vários projetos de ação social e evangelizadora que buscam transformar a vida das pessoas, especialmente aquelas que vivem em situação de vulnerabilidade social e que residem majoritariamente na Vila de Santa Luzia e na comunidade do Cardoso. </p>

          </div>

        </div>
      </div>

      <div className="min-h-screen py-48 flex flex-col justify-center items-center gap-16">

        <div id="projects">
          <Title title={'Nossos Projetos Sociais'} />
        </div>

        <div className="w-full flex gap-12 relative overflow-hidden h-72 items-center self-end">
          <div className="flex gap-12 absolute pl-20 transition left-0" ref={carrosselRef}>
            <div ref={firstRef}></div>

              {projetosList.map((projetoName) => (
                <div 
                  className="w-64 h-64 relative bg-orange-900 rounded flex flex-col justify-center items-center gap-4 overflow-hidden hover:shadow-secondary-color hover:shadow-teste"
                >
                  <p 
                    className="z-10 relative text-4xl font-bold font-roboto-condensed italic text-white text-center"
                  >
                    {projetoName.name}
                  </p>

                  <Link
                    to={`/projeto/${projetoName.id}`} 
                    className="relative z-10 underline text-white"
                  >
                    Saiba Mais
                  </Link>
                  <img 
                    src={`${import.meta.env.VITE_REACT_APP_API_URL}imgs/${projetoName.imgBanner}`} 
                    alt="" 
                    className="w-full h-full absolute opacity-50 top-0 z-0"
                  />

                </div>
              ))}

            <div ref={lastRef}></div>
          </div>
          <div className="cursor-pointer bg-white absolute right-5 self-center text-3xl p-2 text-secondary-color bg-opacity-90 rounded-full z-50" onClick={handleNextCarrossel} ref={nextRef}>
            <IoIosArrowForward />
          </div>
          <div className="cursor-pointer bg-white absolute left-5 self-center text-3xl p-2 text-secondary-color bg-opacity-90 rounded-full z-50" onClick={handleBackCarrossel} ref={backRef}>
            <IoIosArrowForward className="rotate-180" />
          </div>
        </div>

        <div></div>

      </div>

      <div className="flex flex-col items-center justify-around min-h-screen pb-48">
        <Title title="Faça Parte da Missão" />

        <p className="mt-10 mb-28">Caso tenha se interessado pela causa, faça sua doação ou se torne um voluntário</p>

        <div className="flex gap-20 w-full px-60 h-full">

          <div className="flex-1 flex flex-col items-center gap-10 h-full">
            <h1 className="font-roboto-condensed italic font-bold text-4xl text-white header-vazado">Voluntário</h1>

            <div className="p-10 rounded-2xl gap-10 flex flex-col bg-secondary-color text-white text-sm">
              <p>Torne-se um de nossos voluntários em algumas areas:</p>
              <ul className="list-disc ml-8">
                <li>Culinaria</li>
                <li>Beleza</li>
                <li>Instrutor</li>
              </ul>

              <p>E muito mais oportunidades. Se interessou? Clique no botão abaixo para saber mais:</p>

              <button className="bg-white py-3 rounded-lg text-secondary-color">Saiba Mais</button>
            </div>

          </div>
          <div className="flex-1 flex flex-col items-center gap-10">
            <h1 className="font-roboto-condensed italic font-bold text-4xl text-white header-vazado">Doação</h1>

            <div className="border border-secondary-color p-10 rounded-2xl gap-10 flex flex-col text-sm text-secondary-color h-full justify-between">
              <p>Faça uma doação para nos auxiliar:</p>
              <ul className="list-disc ml-8">
                <li>Doação em dinheiro</li>
                <li>Doações de Alimentos</li>
                <li>Doações de Roupas</li>
              </ul>

              <p>Se interessou? Clique no botão abaixo para saber mais:</p>

              <button className="bg-secondary-color py-3 rounded-lg text-white">Saiba Mais</button>
            </div>
          </div>

        </div>

      </div>

      <Footer />
    </>
  )
}

export default Home