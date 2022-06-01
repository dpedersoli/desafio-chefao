import { CalendarIcon } from '@heroicons/react/solid'
import { PlayIcon } from '@heroicons/react/solid'
import { SwitchHorizontalIcon } from '@heroicons/react/solid'
import { StarIcon } from '@heroicons/react/solid'

//fazer o ícone ficar colorido na página

const FooterNav = () => {

  return (
    <>
      <div className="flex fixed items-center justify-around w-full py-1 bg-white text-zinc-400 text-xs">
        <a href="/home-tasks" className="active:text-blue-600">
          <CalendarIcon className="h-5 w-5 ml-2 mb-1 group-hover:text-Zinc-50 mr-2 active:text-blue-600" aria-hidden="true" />
          Tarefas
        </a>
        <a href="/videos" className="active:text-blue-600">
          <PlayIcon className="h-5 w-5 ml-2 mb-1 group-hover:text-Zinc-50 mr-2 active:text-blue-600" aria-hidden="true" />
          Assista
        </a>
        <a href="/trade-score" className="active:text-blue-600">
          <SwitchHorizontalIcon className="h-5 w-5 ml-7 mb-1 group-hover:text-Zinc-50 mr-2 active:text-blue-600" aria-hidden="true" />
          Trocar Pontos
        </a>
        <a href="/premium" className="active:text-blue-600">
          <StarIcon className="h-5 w-5 ml-7 mb-1 group-hover:text-Zinc-50 mr-2 active:text-blue-600" aria-hidden="true" />
          Up Premium
        </a>
      </div>
    </>
  )
}

export default FooterNav;

//calendar
//play
//switch-horizontal
//star