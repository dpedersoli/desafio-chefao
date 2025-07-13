import Avatar from '/src/images/perfil-badge-config.png'

import Fielter from '/src/images/icons/videos/filtro.png'
import Bell from '/src/images/icons/videos/sino.png'
import Points from '/src/images/icons/pontos-verde.png'

const Videos = () => {
  return (
    <div className="mx-4 h-screen">
      <div className="flex items-center pl-1">
        <a href="/profile">
          <img className="w-44 mr-2" src={Avatar} alt="imagem de perfil do usuário" />
        </a>
        <div className="flex flex-col ml-4">
          <p className="font-bold text-lg">Vamos aprender mais?</p>
          <p>Preparamos diversos vídeos para você aprender mais, e ganhar pontos por assistir.</p>
        </div>
      </div>
      <div className="flex m-4 justify-between">
        <input className="bg-[url('/src/images/icons/videos/lupa.png')] bg-no-repeat bg-left pl-4 py-1 rounded-full " type="search" placeholder="Busca" />
        <div className="flex flex-end">
          <button>
            <img className="w-8 h-8" src={Fielter} alt="" />
          </button>
          <button>
            <img className="w-8 h-8 ml-2" src={Bell} alt="" />
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-10">
        <div className="flex items-center">
          <iframe width="180" height="120" src="https://www.youtube.com/embed/6Vv7SD8QgJM" title="YouTube Invest News" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <div className="flex flex-col ml-4">
            <p className="font-bold">InvestNews</p>
            <p>Algumas regras essenciais que...</p>
            <div className="flex mt-2">
              <img src={Points} alt="icone verde com sifrão que representa os pontos" />
              <p className="font-bold">+40</p>
            </div>
          </div>
        </div>
        <hr className="border-t-2 h-6 mt-6" />
        <div className="flex items-center">
          <iframe width="180" height="120" src="https://www.youtube.com/embed/cQ-DT2ok73w" title="YouTube O Primo Rico" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <div className="flex flex-col ml-4">
            <p className="font-bold">O primo Rico</p>
            <p>É preciso sim sacrificios reais para...</p>
            <div className="flex mt-2">
              <img src={Points} alt="icone verde com sifrão que representa os pontos" />
              <p className="font-bold">+10</p>
            </div>
          </div>
        </div>
        <hr className="border-t-2 h-6 mt-6" />
        <div className="flex items-center mb-40">
          <iframe width="180" height="120" src="https://www.youtube.com/embed/BPHJ62Xfnqo" title="YouTube Nathalia Arcuri" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <div className="flex flex-col ml-4">
            <p className="font-bold">Nathalia Arcuri</p>
            <p>Saiba aonde investir e como fazer uma...</p>
            <div className="flex mt-2">
              <img src={Points} alt="icone verde com sifrão que representa os pontos" />
              <p className="font-bold">+150</p>
            </div>
          </div>
        </div>
        <hr className="border-t-2 h-6 mt-6" />
      </div>
    </div>
  )
}

export default Videos;