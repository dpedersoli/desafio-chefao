import { useNavigate } from "react-router-dom";

import ModalImage from '/src/images/modal/account-registered.png'
import Button from '../Button'
import "./CreateAccountSuccess.css";

const CreateAccountSucess = () => {
  let navigate = useNavigate();
  const loginPage = () => {
    navigate('/login')
  }



  //   if (modal) {
  //     document.body.classList.add('active-modal')
  //   }
  //   else {
  //     document.body.classList.remove('active-modal')
  //   }
  // } //p/ impedir o usuário de descer a tela enquanto o 'modal' estiver ativo/true (com o CSS assim: body.active-modal{overflow-y: hidden;})

  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content flex flex-col items-center">
        <img src={ModalImage} alt="imagem de um homem e uma mulher se comunicando enquanto tem moedas e estrelas ao redor deles" />
        <p className="font-bold text-black text-2xl text-center pt-4">Conta criada com sucesso</p>
        <p className="text-sm text-center py-8">Você está prestes a alcaçar a meta para a realização dos seus sonhos!</p>
        <Button onClick={loginPage} content="Continuar" customClassName="px-12 uppercase" />
      </div>
    </div>
  )
}

export default CreateAccountSucess;