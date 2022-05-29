import Logo from '../components/Logo'
import Button from '../components/Button'
import Input from '../components/Input'
import HeaderArrow from '../components/HeaderArrow'

export default function Login() {

  return (
    <div>
      <HeaderArrow link="/login" />
      <div className="min-h-screen flex flex-col items-center p-4">
        <Logo customImageClassName="pb-20" />
        <div className="flex flex-col justify-evenly">
          <p className="text-center text-xl font-bold text-gray-900">Recuperar Senha
          </p>
          <br />
          <p className="mt-6 text-center text-base text-gray-900">Digite seu e-mail e te enviaremos um e-mail para criar uma nova senha
          </p>
        </div>

        <form className="my-6 space-y-6 w-full" action="/login" method="POST">
          <Input
            id="email-address"
            content="E-mail"
            placeholder="email@provider.com"
            type="email"
            autoComplete="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            title="exemplo@email.com"
            required
            onChange={(e) => { () => { e } }}
          />

          <div className="flex flex-col items-center">
            <Button
              content="Enviar"
              type="submit"
              id="submit"
              customClassName="px-12 uppercase"
              onClick={(e) => { () => { e } }}
            />
          </div>
        </form>
      </div>
    </div>
  )
}