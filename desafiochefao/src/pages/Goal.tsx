import HeaderArrow from '../components/headerArrow'
import Logo from "../components/logo"
import Button from '../components/Button'

import { useState } from "react";
import axios from "axios";

const Goal = () => {

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
          <Button content="Sair das dívidas" customClassName="!bg-white !text-black drop-shadow !font-normal !my-4 !h-12" leftImage="src\images\Goals\sair-das-dividas.png" />
          <a href="/home-tasks">
            <Button content="Juntar dinheiro" customClassName="!bg-white !text-black drop-shadow !font-normal !my-4 !h-12" leftImage="src\images\Goals\juntar-dinheiro.png" />
          </a>
          <Button content="Começar a investir" customClassName="!bg-white !text-black drop-shadow !font-normal !my-4 !h-12" leftImage="src\images\Goals\comecar-a-investir.png" />
          <Button content="Otimizar investimentos" customClassName="!bg-white !text-black drop-shadow !font-normal !my-4 !h-12" leftImage="src\images\Goals\otimizar-investimentos.png" />
        </div>
      </div>
    </div>
  )
};

export default Goal;