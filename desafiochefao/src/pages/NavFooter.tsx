import { useState, Component } from 'react';

import { CalendarIcon } from '@heroicons/react/solid';
import { PlayIcon } from '@heroicons/react/solid';
import { SwitchHorizontalIcon } from '@heroicons/react/solid';
import { StarIcon } from '@heroicons/react/solid';

import HomeTasks from '../components/Tasks';

const FooterNav = () => {
  const [tasks, setTasks] = useState(true)
  const [videos, setVideos] = useState(false)
  const [trade, setTrade] = useState(false)
  const [premium, setPremium] = useState(false)

  return (
    <div>
      <div>
        {tasks && <HomeTasks />}
        {videos && <HomeTasks />}
        {trade && <HomeTasks />}
        {premium && <HomeTasks />}
      </div>
      <div className="flex items-center justify-around w-full py-1 bg-white text-zinc-400 text-xs fixed bottom-0">
        <button
          className="active:text-blue-600"
          // href="/home-tasks" 
          onClick={() => { setTasks(true) }}
        >
          <CalendarIcon className="h-5 w-5 ml-2 mb-1 group-hover:text-Zinc-50 mr-2 active:text-blue-600" aria-hidden="true" />
          Tarefas
        </button>
        <button
          // href="/videos"
          className="active:text-blue-600"
          onClick={() => { setVideos(true) }}
        >
          <PlayIcon className="h-5 w-5 ml-2 mb-1 group-hover:text-Zinc-50 mr-2 active:text-blue-600" aria-hidden="true" />
          Assista
        </button>
        <button
          // href="/trade-score"
          className="active:text-blue-600">
          <SwitchHorizontalIcon className="h-5 w-5 ml-7 mb-1 group-hover:text-Zinc-50 mr-2 active:text-blue-600" aria-hidden="true"
            onClick={() => { setTrade(true) }}
          />
          Trocar Pontos
        </button>
        <button
          // href="/premium"
          className="active:text-blue-600">
          <StarIcon className="h-5 w-5 ml-7 mb-1 group-hover:text-Zinc-50 mr-2 active:text-blue-600" aria-hidden="true"
            onClick={() => { setPremium(true) }}
          />
          Up Premium
        </button>
      </div>
    </div>
  )
}

export default FooterNav;

//calendar
//play
//switch-horizontal
//star