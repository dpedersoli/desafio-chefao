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


export default function Register() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full space-y-8 ">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="src\components\views\Login\images\logo-Daniel-Pedersoli.png"
              alt="Workflow"
            />
            {/* <p className="mt-6 text-center text-2xl font-bold text-gray-900">Como é bom te ver por aqui</p> */}
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
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <p className="text-sm py-1">Nome</p>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm shadow-sm"
                  placeholder="Digite seu Nome"
                />
              </div>

              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <p className="text-sm py-1">Email</p>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm shadow-sm"
                  placeholder="Digite seu Email"
                />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <p className="text-sm py-1">Senha</p>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm shadow-sm"
                  placeholder="Crie uma Senha"
                />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Confirm Password
                </label>
                <p className="text-sm py-1">Confirmar Senha</p>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm shadow-sm"
                  placeholder="Repita a Senha"
                />
              </div>

            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-lime-400 hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {/* <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-Slate-50 group-hover:text-Zinc-50" aria-hidden="true" />
                </span> */}
                Criar Conta
              </button>

              <div className="flex items-center justify-center text-sm pt-4">
                Já possui uma conta?
                <div className="text-sm px-1">
                  <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Entrar
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