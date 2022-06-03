import { useState, Component } from 'react';

import { CalendarIcon } from '@heroicons/react/solid';
import { PlayIcon } from '@heroicons/react/solid';
import { SwitchHorizontalIcon } from '@heroicons/react/solid';
import { StarIcon } from '@heroicons/react/solid';

import Logo from '../components/logo'
import HomeTasks from '../components/Tasks';
import Videos from '../components/Videos'
import TradePoints from '../components/TradePoints'
import Premium from '../components/Premium'


const FooterNav = () => {
  const [tasks, setTasks] = useState(true)
  const [videos, setVideos] = useState(false)
  const [trade, setTrade] = useState(false)
  const [premium, setPremium] = useState(false)

  return (
    <div className="h-screen">
      <div>
        <Logo />
        <div>
          {tasks && <HomeTasks />}
          {videos && <Videos />}
          {trade && <TradePoints />}
          {premium && <Premium />}
        </div>
      </div>
      <div className="mt-20">
        <div className="flex items-center justify-around w-full py-1 bg-white text-zinc-400 text-xs fixed bottom-0">
          <button
            className="btn hover:text-blue-600 focus:text-blue-600"
            // href="/home-tasks" 
            onClick={() => {
              setTasks(true)
              setVideos(false)
              setTrade(false)
              setPremium(false)
            }}
          >
            <CalendarIcon className="h-5 w-5 ml-2 mb-1 group-hover:text-Zinc-50 mr-2 hover:text-blue-600 focus:text-blue-600" aria-hidden="true" />
            Tarefas
          </button>
          <button
            // href="/videos"
            className="hover:text-blue-600 focus:text-blue-600"
            onClick={() => {
              setTasks(false)
              setVideos(true)
              setTrade(false)
              setPremium(false)
            }}
          >
            <PlayIcon className="h-5 w-5 ml-2 mb-1 group-hover:text-Zinc-50 mr-2 hover:text-blue-600 focus:text-blue-600" aria-hidden="true" />
            Assista
          </button>
          <button
            // href="/trade-score"
            className="hover:text-blue-600 focus:text-blue-600">
            <SwitchHorizontalIcon className="h-5 w-5 ml-7 mb-1 group-hover:text-Zinc-50 mr-2 hover:text-blue-600 focus:text-blue-600" aria-hidden="true"
              onClick={() => {
                setTasks(false)
                setVideos(false)
                setTrade(true)
                setPremium(false)
              }}
            />
            Trocar Pontos
          </button>
          <button
            // href="/premium"
            className="hover:text-blue-600 focus:text-blue-600">
            <StarIcon className="h-5 w-5 ml-7 mb-1 group-hover:text-Zinc-50 mr-2 hover:text-blue-600 focus:text-blue-600" aria-hidden="true"
              onClick={() => {
                setTasks(false)
                setVideos(false)
                setTrade(false)
                setPremium(true)
              }}
            />
            Up Premium
          </button>
        </div>
      </div>
    </div>
  )
}

export default FooterNav;