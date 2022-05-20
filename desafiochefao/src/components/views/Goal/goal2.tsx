const Goal1 = () => {

  return (
    <>
      <div className="flex flex-col items-center min-h-full w-96 max-w-full justify-center py-12 px-4 sm:px-6 lg:px-8">        <div>
        <p className="flex justify-center mt-6 text-center text-2xl font-bold text-gray-900">Vamos começar seu planejamento hoje!</p>
        <p className="flex justify-center mt-6 text-center text-lg text-gray-900">Já tem um valor em mente?</p>
      </div>

        <div className="flex flex-col items-center">
          <a href="/goal3">
            <div id="firstButton" className="flex justify-center group relative w-56 py-2 px-4 my-2 border border-transparent text-sm font-medium rounded-md text-white bg-lime-400 hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Até R$100,00</div>
          </a>
          <a href="/goal3">
            <div id="secondButton" className="flex justify-center group relative w-56 py-2 px-4 my-2 border border-transparent text-sm font-medium rounded-md text-white bg-lime-400 hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">De R$101,00 a R$500,00</div>
          </a>
          <a href="/goal3">
            <div id="thirdButton" className="flex justify-center group relative w-56 py-2 px-4 my-2 border border-transparent text-sm font-medium rounded-md text-white bg-lime-400 hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Mais de R$500,00</div>
          </a>
          <a href="/goal3">
            <div id="fourthButton" className="flex justify-center group relative w-56 py-2 px-4 my-2 border border-transparent text-sm font-medium rounded-md text-white bg-lime-400 hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">O quanto eu conseguir</div>
          </a>
        </div>

        <div className="flex flex-row justify-center">
          <ul className="flex flex-row ">
            <li className="">a</li>
            <li className="bg-black">b</li>
            <li className="">c</li>
          </ul>
        </div>

        <div className="flex justify-evenly">
          <a href="/goal1" className="font-medium text-indigo-600 hover:text-indigo-500">Voltar</a>
          <a href="/goal3" className="font-medium text-indigo-600 hover:text-indigo-500">Pular</a>
        </div>
      </div>
    </>
  )
};

export default Goal1;