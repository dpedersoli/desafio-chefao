/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
// import { LockClosedIcon } from '@heroicons/react/solid'


export default function Login() {

  let emailIsValid = document.querySelector('#email-address')

  function sendEmail() {
    if (emailIsValid) {
      alert('Acesse o link que te enviamos por e-mail e redefina sua senha')
    }

  }

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full w-96 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="min-h-full w-full space-y-8 flex flex-col">
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

          <form className="mt-8 space-y-6" action="#" method="POST">

            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <p className="text-sm py-1">E-mail</p>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm shadow-sm"
                  placeholder="Digite seu e-mail"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-lime-400 hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={sendEmail}
              >
                {/* <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-Slate-50 group-hover:text-Zinc-50" aria-hidden="true" />
                </span> */}
                Enviar
              </button>

              <div className="flex items-center justify-center text-sm pt-4">
                Lembrou a senha?
                <div className="text-sm px-1">
                  <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Voltar
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}