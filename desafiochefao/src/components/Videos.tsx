import Avatar from '/src/images/perfil-badge.png'

import Fielter from '/src/images/icons/videos/filtro.png'
import Bell from '/src/images/icons/videos/sino.png'
import Points from '/src/images/icons/pontos.png'

const Videos = () => {
  return (
    <div className="mx-7">
      <div className="flex items-center pl-1">
        <img src={Avatar} alt="imagem de perfil do usuário" />
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
        <div className="flex">
          <iframe width="180" height="120"
            src="https://www.youtube.com/embed/tgbNymZ7vqY">
          </iframe>
          <div className="flex flex-col">
            <p>InvestNews</p>
            <p>Algumas regras essenciais que...</p>
            <div className="flex">
              <img src={Points} alt="" />
              <p>+40</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Videos;

// background: url(images/comment-author.gif) no-repeat scroll 7px 7px;
// padding-left:30px;