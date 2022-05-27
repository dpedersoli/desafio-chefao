import HeaderArrow from '../components/HeaderArrow'
import Logo from "../components/Logo"

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
          <button className="w-full flex justify-center py-3 border border-transparent px-24 font-normal text-base bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 drop-shadow my-2"> Sair das dívidas
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <img src="src\images\Goals\sair-das-dividas.png" className="h-8 w-8" />
            </span>
          </button>
          <a href="/">
            <button onClick={(e) => { () => { 'tutorial' } }} className="w-full flex justify-center py-3 border border-transparentfont-normal text-base bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 drop-shadow my-2"> Juntar dinheiro
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <img src="src\images\Goals\juntar-dinheiro.png" className="h-8 w-8" />
              </span>
            </button>
          </a>
          <button className="w-full flex justify-center py-3 border border-transparent font-normal text-base bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 drop-shadow my-2"> Começar a investir
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <img src="src\images\Goals\comecar-a-investir.png" className="h-8 w-8" />
            </span>
          </button>
          <button className="w-full flex justify-center py-3 border border-transparent font-normal text-base bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 drop-shadow my-2"> Otimizar investimentos
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <img src="src\images\Goals\otimizar-investimentos.png" className="h-8 w-8" />
            </span>
          </button>
          <button className="w-full flex justify-center py-3 border border-transparent font-normal text-base bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 drop-shadow my-2"> Outros
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <img src="src\images\Goals\outros.png" className="h-8 w-8" />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
};

export default Goal;