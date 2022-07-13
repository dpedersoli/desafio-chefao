//armazenar as informações dessa página 'Goal' e pular essa parte quando o usuário já tiver essa etapa concluída ('isGoalSet(true/false)')

import HeaderArrow from '../components/headerArrow'
import Logo from "../components/logo"
import Button from '../components/Button'
import CommingSoonModal from '../components/modal/CommingSoon'

import ImageButtonOne from '/src/images/Goals/sair-das-dividas.png'
import ImageButtonTwo from '/src/images/Goals/juntar-dinheiro.png'
import ImageButtonThree from '/src/images/Goals/comecar-a-investir.png'
import ImageButtonFour from '/src/images/Goals/otimizar-investimentos.png'


import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Goal = () => {
  const [modal, setModal] = useState(false)

  const showModal = () => {
    setModal(!modal)
  }

  let navigate = useNavigate();
  const homePage = () => {
    navigate('/home')
  }

  return (
    <div>
      <Logo customImageClassName="pt-2" />
      <HeaderArrow link="/tutorial" />
      <div className="min-h-screen flex flex-col items-center p-5">
        <div className="flex flex-col justify-evenly">
          <p className="text-center text-2xl font-bold text-gray-900">
            Vamos começar o seu
            <br />
            planejamento!
          </p>
          <br />
          <p className="text-center text-base text-gray-900 w-90">
            Escolha qual meta financeira você deseja alcançar agora:
          </p>
        </div>
        <div className="pt-9 w-full">
          <Button
            content="Sair das dívidas"
            customClassName="!bg-white !text-black drop-shadow !font-normal !my-4 !h-12"
            leftImage={ImageButtonOne}
            onClick={showModal}
          />
          <Button
            content="Juntar dinheiro"
            customClassName="!bg-white !text-black drop-shadow !font-normal !my-4 !h-12"
            leftImage={ImageButtonTwo}
            onClick={homePage}
          />
          <Button
            content="Começar a investir"
            customClassName="!bg-white !text-black drop-shadow !font-normal !my-4 !h-12"
            leftImage={ImageButtonThree}
            onClick={showModal}
          />
          <Button
            content="Otimizar investimentos"
            customClassName="!bg-white !text-black drop-shadow !font-normal !my-4 !h-12"
            leftImage={ImageButtonFour}
            onClick={showModal}
          />
        </div>
      </div>
      {modal && (
        <div>
          <div className="w-60 h-fit top-80 left-20 fixed">
            <CommingSoonModal />
          </div>
        </div>
      )}
      {/* PRECISO ARRUMAR UM JEITO MELHOR DE FECHAR ESSA TELA SEM USAR ALTERAÇÃO DO ESTADO -> pois o estado só retorna para 'false' depois de 1 click p/ depois do segundo click ele mudar de novo para 'true' e abrir o modal URGENTE */}

    </div>
  )
};

export default Goal;