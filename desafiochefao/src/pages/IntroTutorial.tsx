import Logo from '../components/Logo'
import Button from '../components/Button'
import axios from "axios";

const IntroTutorial = () => {
  const name = 'Daniel'

  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Logo customImageClassName="mb-20" />
        <div className="flex flex-col justify-evenly">
          <p className="mt-1 mb-2 text-center text-xl font-bold text-gray-900">
            Olá! {name}, seja bem vinde!
          </p>
        </div>
        <div className="flex flex-col justify-evenly">
          <p className="flex w-fit text-base text-center text-gray-900">
            Aqui vamos te ajudar a alcançar a sua
            <br />
            meta financeira de forma prática
          </p>
        </div>
        <img src="src\images\intro-tutorial.png" alt="imagem ilutrada de mulher branca de cabelo preto sentada sob um gráfico, mexendo em seu notebook" className="w-fit h-fit" />
        <a href="/tutorial">
          <Button
            content="Veja como é Fácil"
            customClassName="px-24 uppercase text mt-6"
          />
        </a>
        <a href="/goal" className="text-sm text-indigo-600 hover:text-indigo-500 mt-4">
          Agora não {'>'}
        </a>
      </div>
    </div>
  )
}

export default IntroTutorial;