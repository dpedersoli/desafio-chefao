import Logo from '../components/logo'
import Button from '../components/Button'

const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Logo />
      <div className="flex flex-col justify-evenly">
        <p className="w-64 text-2xl font-bold text-gray-900">
          Chegou a hora de
          <br />
          atingir suas metas
          <br />
          financeiras de forma
          <br />
          descomplicada!
        </p>
      </div>
      <img src="src\images\Investment data-cuate 1.png" alt="imagem ilutrada de mulher branca de cabelo preto sentada sob um gráfico, mexendo em seu notebook" className="my-4" />
      <a href="/login">
        <Button
          content="Entrar"
          type="submit"
          id="submit"
          customClassName="px-12 uppercase text"
        />
      </a>
      <div className="flex items-center justify-center text-sm pt-4">
        <p>Não possui uma conta?</p>
        <div className="text-sm px-1">
          <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
            Criar
          </a>
        </div>
      </div>
    </div>
  )
}

export default Welcome;