import { useContext, useEffect } from "react"

import vid1 from "../assets/testemunhos/vid1.mp4"
import vid2 from "../assets/testemunhos/vid2.mp4"
import vid3 from "../assets/testemunhos/vid3.mp4"
import Title from "../components/Title"
import { useLocation } from "react-router-dom"
import { ActualRouteContext } from "../context/ActualPageContext"
import Header from "../components/Header"
import Footer from "../components/Footer"

const About = () => {

  const {setActualPage} = useContext(ActualRouteContext)
  const location = useLocation()
  useEffect(() => {
    setActualPage(location.pathname)
  })

  const testemunhoList: string[] = [
    vid1, 
    vid2,
    vid3
  ]

  return (
    <>

      <Header />

      <div className="min-h-screen flex flex-col py-20 pb-40 justify-center items-center lg:px-10 px-6 text-base gap-20">

        <div className="text-center lg:w-3/4 flex flex-col gap-5">
          <Title title="Nossa História" />
          <p>A Casa de Missão Santo Angelus foi fundada em 24 de Junho de 2017, dia dedicado a São João Batista, pelos Missionários Felipe Alecrim, Tony Muniz e o Diácono Maurício. Localizada no Bairro da Torre, a Casa de Missão desenvolve vários projetos de ação social e evangelizadora que buscam transformar a vida das pessoas, especialmente aquelas que vivem em situação de vulnerabilidade social e que residem majoritariamente na Vila de Santa Luzia e na comunidade do Cardoso.</p>
        </div>

        <div className="text-center lg:w-3/4 flex flex-col gap-5">
          <Title title="Nossa Missão" />
          <p>Promover a intimidade das pessoas com Deus, sendo alento para o corpo e para a alma de todos aqueles que se abrem para viver uma vida dedicada a Cristo Jesus. Nossos valores são baseados no magistério, doutrina e tradição da Igreja Católica e na palavra de Deus.</p>
        </div>

        <div className="text-center lg:w-3/4 flex flex-col gap-5">
          <Title title="Nossa Equipe" />
          <p>Toda equipe da casa de missão Santo Angelus realiza um trabalho voluntário sob a coordenação dos Missionários Felipe Alecrim, Tony Muniz e do Diácono Maurício.</p>
        </div>

        <div className="flex flex-col gap-10">
          <Title title="Veja Alguns Testemunhos" />

          <div className="flex flex-col items-center lg:items-start lg:flex-row gap-10 justify-center">
            {testemunhoList.map((testemunho) => (
                  <video controls className="lg:w-1/6 w-3/4 bg-black">
                    <source src={testemunho} type="video/mp4" />
                  </video>
            ))}
          </div>

        </div>


      </div>

      <Footer />

    </>
  )
}

export default About