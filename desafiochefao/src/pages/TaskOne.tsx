import Logo from '../components/logo'
import HeaderArrow from '../components/headerArrow'

import LockOpen from '/src/images/icons/tasks/lock-open.png'
import LockClosed from '/src/images/icons/tasks/lock-closed.png'

const TaskOne = () => {
  return (
    <div className="mx-4">
      <Logo />
      <HeaderArrow link="/home" />
      <div className="flex flex-col mt-10">
        <div className="flex">
          <img className="w-6 h-6" src={LockOpen} alt="imagem de um cadeado destrancado" />
          <p className="font-bold text-xl pl-4">Conteúdo da tarefa 1</p>
        </div>
        <p className="text-lg mt-4">Assista o primeiro vídeo sobre como conseguir guardar uma mesma quantia todo mês e avance para a próxima tarefa.</p>
        <div className="flex justify-center mt-6">
          <iframe width="380" height="270" src="https://www.youtube.com/embed/9UBjaBiqDtc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="flex items-center justify-end mt-2">
          <p className="font-bold text-gray-500 mr-2">Concluído</p>
          <input type="checkbox" className="w-4 h-5 mr-2" />
        </div>
      </div>
      <div className="flex flex-col mt-5">
        <div className="flex">
          <img src={LockClosed} alt="imagem de um cadeado trancado" />
          <p className="font-bold text-xl pl-4 text-gray-500">Conteúdo da tarefa 2</p>
        </div>
        <p className="text-lg mt-4 text-gray-500">Assista o primeiro vídeo sobre como conseguir guardar uma mesma quantia todo mês e avance para a próxima tarefa.</p>
        <div className="flex justify-center mt-6">
          <iframe className="pointer-events-none" width="380" height="270" src="https://www.youtube.com/embed/9UBjaBiqDtc" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="flex items-center justify-end mt-2">
          <p className="font-bold text-gray-500 mr-2">Concluído</p>
          <input type="checkbox" className="w-4 h-5 mr-2" />
        </div>
      </div>

    </div>
  )
}

export default TaskOne;