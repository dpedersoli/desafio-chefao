import { useState } from "react";
import Button from "../components/Button";
import Logo from '../components/Logo'

const Tutorial = () => {
  let [step, setStep] = useState(1)
  const steps = [
    { id: 1, title: 'Acompanhe seu progresso:', image: 'src/images/Tutoral-Image-01.png', imageAlt: 'imagem ilustrada de homem manipulando um calendário com um relógio ao lado', text: 'Conclua tarefas diárias, para avançar no cada vez mais na sua meta' },
    { id: 2, title: 'Aprenda de forma prática', image: 'src/images/Tutoral-Image-02.png', imageAlt: 'imagem ilustrada de mulher sentada mexendo no notebook', text: 'Assista a vídeo-aula que ajudarão a economizar dinheiro de forma simples' },
    { id: 3, title: 'Esteja conectada', image: 'src/images/Tutoral-Image-03.png', imageAlt: 'imagem ilustrada de três estrelas verdes com moedas e notas ao redor delas', text: 'Ganhe pontos por acessar a plataforma diariamente' },
    { id: 4, title: 'Ative o Lembrete', image: 'src/images/Tutoral-Image-04.png', imageAlt: 'imagem ilustrada de um troféu azul de primeiro lugar cercado por duas estrelas e duas moedas', text: 'Defina um lembrete diário e seja avisado sobre suas metas e premiações' },
    { id: 5, title: 'Premiações', image: 'src/images/Tutoral-Image-05.png', imageAlt: 'imagem ilustrada de um troféu azul de primeiro lugar cercado por duas estrelas e duas moedas', text: 'Troque seus pontos por premiações e descontos com nossos parceiros' },
  ]
  const currentStep = steps.find(item => item.id === step) //loop
  const [savedAnswers, setSavedAnswers] = useState<string[]>([])
  const skipIntro = (answer: string) => {
    setSavedAnswers([...savedAnswers, answer])
    if (step === steps.length) {
      //submit()
    } else {
      setStep(step = 5)
    }
  }

  return (
    <div className="flex flex-col justify-evenly text-center px-12 min-h-screen">
      <Logo customImageClassName="mb-12" />
      <div >
        <img className="h-full" src={currentStep?.image} alt={currentStep?.imageAlt} />
      </div>
      <div className="text-lg font-bold">
        {currentStep?.title}
      </div>
      <div className="text-base w-fit">
        {currentStep?.text}
      </div>
      <div className="flex justify-center ">
        {steps.map(({ id }) => <div key={id} className={['w-2 h-2 rounded mx-1 mt-16', id <= step ? 'bg-blue-600' : 'bg-zinc-400'].join(' ')}></div>)}
      </div>
      <div className="flex justify-center">
        {step == 5
          ?
          <a href="/goal"><Button content="Começar Planejamento" /></a>
          :
          <div className=""><span onClick={() => skipIntro('')} className="uppercase text-sm">Pular </span></div>}
      </div>
    </div>
  )
};

export default Tutorial;