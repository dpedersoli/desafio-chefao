import Avatar from '/src/images/perfil-badge-config.png'

import Points from '/src/images/icons/pontos-verde-branco.png'
import ShoppingCart from '/src/images/icons/shopping-cart.png'
import Americanas from '/src/images/Partners/americanas.png'
import MethaEnergia from '/src/images/Partners/metha-energia.png'
import Nubank from '/src/images/Partners/nubank.png'
import Rico from '/src/images/Partners/rico.png'


const TradePoints = () => {
  return (
    <div className="mx-4 h-screen">
      <div className="flex items-center pl-1 mb-6">
        <a href="/profile">
          <img src={Avatar} alt="imagem de perfil do usuário" />
        </a>
        <div className="flex flex-col ml-4">
          <div className="flex items-center">
            <img src={Points} alt="" />
            <p className="font-bold text-2xl">1500</p>
          </div>
          <p className="font-bold text-lg w-56">Troque seus pontos em nossas parcerias.</p>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex items-center">
          <img className="mr-2 w-36" src={Rico} alt="" />
          <p className="w-64 mr-4">Invista com a Rico. Fácil, rápido e seguro.</p>
          <button className="flex w-36 h-6 px-3 py-4 rounded-full items-center justify-between bg-gray-200">
            <img className="w-4 h-4" src={ShoppingCart} alt="" />
            <p className="text-sm">1600 pts</p>
          </button>
        </div>
        <hr className="border-t-2 h-6 mt-3" />
        <div className="flex items-center">
          <img className="mr-2 w-36" src={MethaEnergia} alt="" />
          <p className="w-64 mr-4">Economize na sua conta de energia todos os meses.</p>
          <button className="flex w-36 h-6 px-3 py-4 rounded-full items-center justify-between bg-gray-200">
            <img className="w-4 h-4" src={ShoppingCart} alt="" />
            <p className="text-sm">800 pts</p>
          </button>
        </div>
        <hr className="border-t-2 h-6 mt-3" />
        <div className="flex items-center">
          <img className="mr-2 w-36" src={Nubank} alt="" />
          <p className="w-64 mr-4">Movimente seu dinheiro de um jeito simples.</p>
          <button className="flex w-36 h-6 px-3 py-4 rounded-full items-center justify-between bg-gray-200">
            <img className="w-4 h-4" src={ShoppingCart} alt="" />
            <p className="text-sm">2000 pts</p>
          </button>
        </div>
        <hr className="border-t-2 h-6 mt-3" />
        <div className="flex items-center mb-40">
          <img className="mr-2 w-36" src={Americanas} alt="" />
          <p className="w-64 mr-4">Tudo o que você precisa com os melhores preços.</p>
          <button className="flex w-36 h-6 px-3 py-4 rounded-full items-center justify-between bg-gray-200">
            <img className="w-4 h-4" src={ShoppingCart} alt="" />
            <p className="text-sm">900 pts</p>
          </button>
        </div>
        <hr className="border-t-2 h-6 mt-3" />
      </div>
    </div>
  )
}

export default TradePoints;