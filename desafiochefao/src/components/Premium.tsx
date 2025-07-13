import Check from '/src/images/icons/check.png'
import Uncheck from '/src/images/icons/uncheck.png'
import Promo from '/src/images/promo.png'

const Premium = () => {
  return (
    <div className="flex flex-col mx-4 items-center h-screen">
      <p className="font-bold text-2xl my-4">Conheça nossos planos</p>
      <table>
        <tr>
          <th></th>
          <th className="bg-blue-200 w-32 h-16">Plano Gratuito</th>
          <th className="bg-blue-600 text-white w-32 h-16">UP Premium</th>
        </tr>
        <tr>
          <td className="w-32 h-16 text-center font-bold bg-blue-200 border-2">Acesso a plataforma</td>
          <td className="flex w-32 h-16 items-center justify-center border-2">
            <img className="w-8 h-8" src={Check} alt="" />
          </td>
          <td className="w-32 h-16 pl-12 bg-green-100 border-2">
            <img className="w-8 h-8" src={Check} alt="" />
          </td>
        </tr>
        <tr>
          <td className="w-32 h-16 text-center font-bold bg-blue-200 border-2">2x mais<br />pontos</td>
          <td className="flex w-32 h-16 items-center justify-center border-2">
            <img className="w-8 h-8" src={Uncheck} alt="" />
          </td>
          <td className="w-32 h-16 pl-12 bg-green-100 border-2">
            <img className="w-8 h-8" src={Check} alt="" />
          </td>
        </tr>
        <tr>
          <td className="w-32 h-16 text-center text-xs font-bold bg-blue-200 border-2">Conteúdo premium ilimitado</td>
          <td className="flex w-32 h-16 items-center justify-center border-2">
            <img className="w-8 h-8" src={Uncheck} alt="" />
          </td>
          <td className="w-32 h-16 pl-12 bg-green-100 border-2">
            <img className="w-8 h-8" src={Check} alt="" />
          </td>
        </tr>        <tr>
          <td className="w-32 h-16 text-center text-xs font-bold bg-blue-200 border-2">Concorra a prémios mensais </td>
          <td className="flex w-32 h-16 items-center justify-center border-2">
            <img className="w-8 h-8" src={Uncheck} alt="" />
          </td>
          <td className="w-32 h-16 pl-12 bg-green-100 border-2">
            <img className="w-8 h-8" src={Check} alt="" />
          </td>
        </tr>        <tr>
          <td className="w-32 h-16 text-center font-bold bg-blue-200 border-2">Mentorias ao vivo </td>
          <td className="flex w-32 h-16 items-center justify-center border-2">
            <img className="w-8 h-8" src={Uncheck} alt="" />
          </td>
          <td className="w-32 h-16 pl-12 bg-green-100 border-2">
            <img className="w-8 h-8" src={Check} alt="" />
          </td>
        </tr>
      </table>
      <button className="mt-10">
        <img src={Promo} alt="" />
      </button>
      <a className="text-sm text-indigo-600 hover:text-indigo-500 pl-1 mt-4 mb-40" href="">*Confira o regulamento</a>
    </div>
  )
}

export default Premium;