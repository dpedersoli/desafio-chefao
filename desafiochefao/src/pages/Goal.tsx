import HeaderArrow from '../components/HeaderArrow'
import Logo from "../components/Logo"
import Button from '../components/Button'

import { useState } from "react";
import axios from "axios";

const Goal = () => {

  return (
    <div>
      <HeaderArrow link="/tutorial" />
      <div className="min-h-screen flex flex-col items-center p-4">
        <Logo customImageClassName="pb-16" />
        <div className="flex flex-col justify-evenly">
          <p className="text-center text-2xl font-bold text-gray-900">
            Vamos começar o seu
            <br />
            planejamento!
          </p>
          <br />
          <p className="text-center text-base text-gray-900 w-96">
            Escolha qual meta financeira que você deseja
            <br />
            alcançar agora:
          </p>
        </div>
        <div className="pt-10 w-full">
          <Button content="Sair das dívidas" customClassName="!bg-white !text-black !rounded-md drop-shadow !font-normal !my-8" leftImage="src\images\Goals\sair-das-dividas.png" />
          <a href="/">
            <Button content="Juntar dinheiro" customClassName="!bg-white !text-black !rounded-md drop-shadow !font-normal !my-8" leftImage="src\images\Goals\juntar-dinheiro.png" />
          </a>
          <Button content="Começar a investir" customClassName="!bg-white !text-black !rounded-md drop-shadow !font-normal !my-8" leftImage="src\images\Goals\comecar-a-investir.png" />
          <Button content="Otimizar investimentos" customClassName="!bg-white !text-black !rounded-md drop-shadow !font-normal !my-8" leftImage="src\images\Goals\otimizar-investimentos.png" />
        </div>
      </div>
    </div>
  )
};

export default Goal;