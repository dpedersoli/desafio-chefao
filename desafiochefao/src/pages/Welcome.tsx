import Logo from '../components/logo'
import Button from '../components/Button'
import WelcomeImage from '/src/images/welcome.png'

const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <img src={WelcomeImage} alt="imagem ilutrada de mulher branca segurando um cofre em forma de porco com ícones de casa, calculadora, carro e cartões em volta dela" className="w-fit h-fit" />
      <Logo />
      <div className="flex flex-col justify-evenly">
        <p className="flex w-fit text-base text-center text-gray-900">
          Chegou a hora de atingir suas
          <br />
          metas financeiras de forma
          <br />
          descomplicada!
        </p>
      </div>
      <a href="/login">
        <Button
          content="Entrar"
          type="submit"
          id="submit"
          customClassName="px-24 uppercase text mt-6"
        />
      </a>
      <a href="/register">
        <Button
          content="Criar Conta"
          type="submit"
          id="submit"
          customClassName="px-20 uppercase text rounded-full mt-2 !bg-gray-50 !hover:bg-gray-100 !text-blue-600"
        />
      </a>
    </div>
  )
}

export default Welcome;