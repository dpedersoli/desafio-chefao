import Logo from '../components/logo'
import FooterOutside from '../components/footer'
import Button from '../components/Button'
import Input from '../components/Input'

export default function Login() {

  let emailIsValid = document.querySelector('#email-address')

  function sendEmail() {
    if (emailIsValid) {
      alert('Acesse o link que te enviamos por e-mail e redefina sua senha')
    }

  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Logo />
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
            content="Entrar"
            type="submit"
            id="submit"
            customClassName="px-12 uppercase"
            onClick={(e) => { () => { e } }}
          >
            Enviar
          </Button>
        </div>
        <div className="flex items-center justify-center text-sm pt-4">
          Lembrou a senha?
          <div className="text-sm px-1">
            <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500 uppercase">
              Entrar
            </a>
          </div>
        </div>
      </form>
      <FooterOutside />
    </div>
  )
}