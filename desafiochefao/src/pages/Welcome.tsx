import Logo from '../components/logo'
import Button from '../components/Button'
import FooterOutside from '../components/footer'

const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Logo />
      <div className="flex flex-col justify-evenly">
        <p className="flex w-fit text-xl text-center font-bold text-gray-900">
          Chegou a hora de atingir suas
          <br />
          metas financeiras de forma
          <br />
          descomplicada!
        </p>
      </div>
      <img src="src\images\Investment data-cuate 1.png" alt="imagem ilutrada de mulher branca de cabelo preto sentada sob um gráfico, mexendo em seu notebook" className="my-4 w-fit h-fit" />
      <a href="/login">
        <Button
          content="Entrar"
          type="submit"
          id="submit"
          customClassName="px-12 uppercase text"
        />
      </a>
      <div className="flex items-center justify-center text-xs pt-4">
        <p>Não possui uma conta?</p>
        <div className="text-sm px-1">
          <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500 uppercase">
            Criar
          </a>
        </div>
      </div>
      <FooterOutside />
    </div>
  )
}

export default Welcome;