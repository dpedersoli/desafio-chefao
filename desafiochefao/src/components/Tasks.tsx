import { useEffect, useState } from 'react'
import api from "../services/api";

import Logo from "./logo";

import TaskOne from '../images/icons/day-1-tasks/task-1.png'
import TaskTwo from '../images/icons/day-1-tasks/task-2.png'
import TaskThree from '../images/icons/day-1-tasks/task-3.png'
import TaskFour from '../images/icons/day-1-tasks/task-4.png'
import DayOne from '../images/icons/day-1-tasks/day-1-icon.png'
import DayTwo from '../images/icons/day-2-tasks/day-2-icon.png'
import Avatar from '/src/images/perfil-badge.png'
import Points from '/src/images/icons/pontos.png'
import IconPerson from '/src/images/icons/plano.png'

interface User {
  name: string;
}

const HomeTasks = () => {
  const [data, setData] = useState<User>({} as User)
  let token: any = ""

  useEffect(() => {
    token = localStorage.getItem("token")
    api.get("/users/username", {
      headers: {
        authorization: token
      }
    })
      .then(response => {
        setData(response.data)
      })
      .catch(error => error)
  }, [])

  const tasks = [
    {
      id: 1,
      icon: TaskOne,
      description: "Como conseguir guardar uma mesma quantia todo mês?"
    },
    {
      id: 2,
      icon: TaskTwo,
      description: "Monte uma planilha simplificada + saiba mais"
    },
    {
      id: 3,
      icon: TaskThree,
      description: "Anote todos os seus gastos diários + saiba mais"
    },
    {
      id: 4,
      icon: TaskFour,
      description: "Tente sempre retirar 10% do seu salário sempre que receber + saiba mais"
    },
  ]
  return (
    <div >
      <div className="px-7 ">
        <Logo />
        <div className="flex items-center pl-1">
          <div>
            <img src={Avatar} alt="imagem de perfil do usuário" />
          </div>
          <div className="flex flex-col w-36 items-center justify-center">
            <div>
              <p className="mt-1 mb-2 text-center text-xl font-bold text-gray-900">Olá, {data.name}!</p>
            </div>
            <div className="flex items-center border rounded-[44px] py-1 px-3">
              <img className="w-4 h-4" src={Points} alt="pontuação do usuário" />
              <div className="flex flex-col ml-1">
                <span className="text-[8px]">UP Pontos</span>
                {/* Verificar cor correta */}
                <span className="text-[8px] text-sky-600">10</span>
              </div>
              <hr className="border-l-2 h-5 m-1" />
              <img className="mx-1 w-4 h-4" src={IconPerson} alt="pontuação do usuário" />
              <div className="flex flex-col">
                <span className="text-[8px]">Plano</span>
                {/* Verificar cor correta */}
                <span className="text-[8px] text-sky-600">Free</span>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5">
          <p>Você está na jornada <b>“Poupar Dinheiro”</b>. Cumpra as tarefas para atingir suas metas!</p>
        </div>
        <div className="mb-3">
          {/* Verificar cor correta */}
          <p className="text-center text-xl font-bold text-sky-600">Minhas Tarefas</p>
        </div>
        <table>
          <thead >
            <tr>
              <th className="w-10 h-10"><img src={DayOne} alt="Tarefas do dia 1" /></th>
              <th>Iniciante <span className="text-xs">(dia 1)</span></th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => {
              return (
                <tr key={task.id}>
                  <td className="text-center " ></td>
                  <td className="flex items-center">
                    <img className="w-12 h-12" src={task.icon} alt={task.description} />
                    <span className="text-xs ml-3">{task.description}</span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      {/* <div className="absolute bottom-12">
        <NavFooter />
      </div> */}
    </div>
  );
}

export default HomeTasks;