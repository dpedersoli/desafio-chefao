const Goal1 = () => {

  return (
    <>
      <div className="flex flex-col items-center">
        <div>
          <p className="flex justify-center mt-6 text-center text-2xl font-bold text-gray-900">Vamos começar seu planejamento hoje!</p>
          <p className="flex justify-center mt-6 text-center text-lg text-gray-900">Escolha qual meta financeira mais combina com você agora:</p>
        </div>

        <div className="flex flex-col items-center">
          <button className="group relative w-56 py-2 px-4 my-2 border border-transparent text-sm font-medium rounded-md text-white bg-lime-400 hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Economizar mais</button>
          <button className="group relative w-56 py-2 px-4 my-2 border border-transparent text-sm font-medium rounded-md text-white bg-lime-400 hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Ter uma renda extra</button>
          <button className="group relative w-56 py-2 px-4 my-2 border border-transparent text-sm font-medium rounded-md text-white bg-lime-400 hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Controlar meus gastos</button>
          <button className="group relative w-56 py-2 px-4 my-2 border border-transparent text-sm font-medium rounded-md text-white bg-lime-400 hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Investir meu dinheiro</button>
        </div>

        <div className="flex flex-row justify-center">
          <ul className="flex flex-row ">
            <li className="bg-black">a</li>
            <li className="">b</li>
            <li className="">c</li>
          </ul>
        </div>

        <div className="flex justify-center">
          <a href="/goal2" className="font-medium text-indigo-600 hover:text-indigo-500">Pular</a>
        </div>
      </div>
    </>
  )
};

export default Goal1;