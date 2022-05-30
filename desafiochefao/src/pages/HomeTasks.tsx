import LogoOutside from "../components/logo";
import HeaderArrow from "../components/HeaderArrow";


const HomeTasks = () => {
  return(
    <div className="px-7">
      <LogoOutside />
      <div className="flex items-center pl-1">
        <div>
          <img src="src\images\perfil-badge.png" alt="imagem de perfil do usuário"/>
        </div>
        <div className="flex flex-col w-36 items-center justify-center">
          <div>
            <p className="mt-1 mb-2 text-center text-xl font-bold text-gray-900">Olá, Jane!</p>
          </div>
          <div className="flex items-center border rounded-[44px] py-1 px-3">
            <img className="w-4 h-4" src="src\images\icons\pontos.png" alt="pontuação do usuário"/>
            <div className="flex flex-col ml-1">
              <span className="text-[8px]">UP Pontos</span>
              <span className="text-[8px] text-sky-400">10</span>
            </div>
            <hr className="border-l-2 h-5 m-1"/>
            <img className="mx-1 w-4 h-4" src="src\images\icons\plano.png" alt="pontuação do usuário"/>
            <div className="flex flex-col">
              <span className="text-[8px]">Plano</span>
              <span className="text-[8px] text-sky-400">Free</span>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5">
        <p>Você está na jornada <b>“Poupar Dinheiro”</b>. Cumpra as tarefas para atingir suas metas!</p>
      </div>

    </div>
  );
}

export default HomeTasks;