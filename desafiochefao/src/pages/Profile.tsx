import { useEffect, useState } from 'react'

import api from "../services/api";

import Logo from '../components/logo'
import HeaderArrow from '../components/headerArrow'
import Button from '../components/Button'

import Avatar from '/src/images/perfil-badge.png'
import Points from '/src/images/icons/pontos.png'
import IconPerson from '/src/images/icons/plano.png'
import Edit from '/src/images/icons/profile/editar-dados.png'
import Plan from '/src/images/icons/profile/atualizar-planejamento.png'
import Invite from '/src/images/icons/profile/convidou-ganhou.png'
import Logout from '/src/images/icons/profile/sair-da-conta.png'

interface User {
  name: string;
  email: string;
}

const Profile = () => {
  const [data, setData] = useState<User>({} as User)
  let token: any = ""

  useEffect(() => {
    token = localStorage.getItem("token")
    api.get("/users/userdata", {
      headers: {
        authorization: token
      }
    })
      .then(response => {
        setData(response.data)
      })
      .catch(error => error)
  }, [])

  return (
    <div className="flex flex-col ">
      <Logo />
      <HeaderArrow link="/home" />
      <div className="flex flex-col text-center justify-center items-center">
        <p className="font-bold text-2xl my-2">Perfil</p>
        <img className="rounded-full w-36 my-4" src={Avatar} alt="" />
        <p className="text-blue-600 font-bold text-3xl">{data.name}</p>
        <p>{data.email}</p>
        <div className="flex flex-col w-fit justify-center text-center items-center my-4">
          <div className="flex items-center border rounded-full bg-white py-1 px-3 h-14">
            <img className="w-4 h-4" src={Points} alt="pontuação do usuário" />
            <div className="flex flex-col px-3">
              <span className="text-sm font-bold">UP Pontos</span>
              {/* Verificar cor correta */}
              <span className="text-lg text-blue-600 font-bold">10</span>
            </div>
            <hr className="border-l-2 h-6  mx-1" />
            <img className="w-4 h-4" src={IconPerson} alt="pontuação do usuário" />
            <div className="flex flex-col px-2">
              <span className="text-sm font-bold">Plano</span>
              {/* Verificar cor correta */}
              <span className="text-lg text-blue-600 font-bold">Free</span>
            </div>
          </div>
        </div>
        <Button
          content="Editar dados"
          customClassName="!bg-white !text-black !font-normal !w-80 mt-4 mb-6 "
          leftImage={Edit}
        />
        <Button
          content="Atualizar planejamento"
          customClassName="!bg-white !text-black !font-normal !w-80 mb-6"
          leftImage={Plan}
        />
        <Button
          content="Convidou - Ganhou"
          customClassName="!bg-white !text-black !font-normal !w-80 mb-6"
          leftImage={Invite}
        />
        <Button
          content="Sair da conta"
          customClassName="!bg-white !text-black !font-normal !w-80"
          leftImage={Logout}
        />
      </div>


    </div>
  )
}

export default Profile;