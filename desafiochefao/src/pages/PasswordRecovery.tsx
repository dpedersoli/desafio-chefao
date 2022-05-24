import LogoOutside from '../components/logo'
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
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="w-96 max-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full space-y-8 flex flex-col">
          <LogoOutside />
          <div>
            <p className="mt-6 text-center text-2xl font-bold text-gray-900">Recuperar Senha
            </p>
            <br />
            <p className="mt-6 text-center text-md text-gray-900">Digite seu e-mail e te enviaremos um e-mail para criar uma nova senha
            </p>
            {/* <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                start your 14-day free trial
              </a>
            </p> */}
          </div>

          <form className="mt-8 space-y-6" action="/login" method="POST">

            <div className="rounded-md -space-y-px">
              <div>
                <Input
                  id="email-address"
                  content="E-mail"
                  placeholder="email@provider.com"
                  type="email"
                  autoComplete="email"
                  pattern="/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i"
                  required
                  onChange={(e) => { () => { e } }}
                />
              </div>
            </div>

            <div>
              <Button
                content="Entrar"
                type="submit"
                id="submit"
                customClassName="px-12 uppercase"
                onClick={(e) => { () => { e } }}
              >
                Enviar
              </Button>

              <div className="flex items-center justify-center text-sm pt-4">
                Lembrou a senha?
                <div className="text-sm px-1">
                  <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Entrar
                  </a>
                </div>
              </div>
            </div>
          </form>
          <FooterOutside />
        </div>
      </div>
    </div>
  )
}