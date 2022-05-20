export default function Login() {

  // const submit = document.getElementById('submit')

  // if (submit) {

  // }

  return (
    <>
      <div className="min-h-full w-96 max-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full space-y-8 flex flex-col">
          <img className="flex flex-col mx-auto h-fit max-h-20 w-auto mb-12"
            src="src\images\logo-Daniel-Pedersoli.png"
            alt="BrandLogo"
          />
          <div className="flex flex-col justify-evenly">
            <p className="mt-6 text-center text-2xl font-bold text-gray-900">Que bom te ver por aqui!
            </p>
          </div>

          <form className="mt-8 space-y-6" action="/goal1" method="POST">

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
                  placeholder="E-mail"
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
                  placeholder="Senha"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 pr-1">
                  Lembrar de mim
                </label>
              </div>
              <div className="text-sm">
                <a href="passwordrecovery" className="font-medium text-indigo-600 hover:text-indigo-500 pl-1">
                  Esqueci a senha
                </a>
              </div>
            </div>

            <div>
              <button
                id="submit"
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-lime-400 hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {/* <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-Slate-50 group-hover:text-Zinc-50" aria-hidden="true" />
                </span> */}
                Entrar
              </button>
              <div className="flex items-center justify-center text-sm pt-4">
                Não possui uma conta?
                <div className="text-sm px-1">
                  <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Criar
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

// import { AppRoutes } from '../../../routes'

// function App() {

//   return (
//     <>
//       <div className="min-h-screen flex flex-col justify-center items-center">
//         <img id="logoImage" className="flex mx-auto h-fit max-h-20 w-auto mb-12"
//           src="src\images\logo-Daniel-Pedersoli.png"
//           alt="BrandLogo"
//         />
//         <AppRoutes />
//       </div>
//     </>
//   );
// }

// export default App;