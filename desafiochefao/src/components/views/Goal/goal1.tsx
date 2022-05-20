const Goal1 = () => {
  // const bt1 = document.getElementById('firstButton')
  // const bt2 = document.getElementById('secondButton')
  // const bt3 = document.getElementById('thirdButton')
  // const bt4 = document.getElementById('fourthButton')

  // if (condition) {

  // }


  return (
    <>
      <div className="flex flex-col items-center min-h-full w-96 max-w-full justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div>
          <p className="flex justify-center mt-6 text-center text-2xl font-bold text-gray-900">Vamos começar seu planejamento hoje!</p>
          <p className="flex justify-center mt-6 text-center text-lg text-gray-900">Escolha qual meta financeira mais combina com você agora:</p>
        </div>

        <div className="flex flex-col items-center">
          <a href="/goal2">
            <div id="firstButton" className="flex justify-center group relative w-56 py-2 px-4 my-2 border border-transparent text-sm font-medium rounded-md text-white bg-lime-400 hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Economizar mais</div>
          </a>
          <a href="/goal2">
            <div id="secondButton" className="flex justify-center group relative w-56 py-2 px-4 my-2 border border-transparent text-sm font-medium rounded-md text-white bg-lime-400 hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Ter uma renda extra</div>
          </a>
          <a href="/goal2">
            <div id="thirdButton" className="flex justify-center group relative w-56 py-2 px-4 my-2 border border-transparent text-sm font-medium rounded-md text-white bg-lime-400 hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Controlar meus gastos</div>
          </a>
          <a href="/goal2">
            <div id="fourthButton" className="flex justify-center group relative w-56 py-2 px-4 my-2 border border-transparent text-sm font-medium rounded-md text-white bg-lime-400 hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Investir meu dinheiro</div>
          </a>
          {/* <button id="firstButton" className="group relative w-56 py-2 px-4 my-2 border border-transparent text-sm font-medium rounded-md text-white bg-lime-400 hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Economizar mais</button>
          <button id="secondButton" className="group relative w-56 py-2 px-4 my-2 border border-transparent text-sm font-medium rounded-md text-white bg-lime-400 hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Ter uma renda extra</button>
          <button id="thirdButton" className="group relative w-56 py-2 px-4 my-2 border border-transparent text-sm font-medium rounded-md text-white bg-lime-400 hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Controlar meus gastos</button>
          <button id="fourthButton" className="group relative w-56 py-2 px-4 my-2 border border-transparent text-sm font-medium rounded-md text-white bg-lime-400 hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Investir meu dinheiro</button> */}
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
      </div >
    </>
  )
};

export default Goal1;