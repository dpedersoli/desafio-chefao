import { useState } from 'react';

import ModalImage from '/src/images/modal/ilustarcao.png'
import Button from '../Button'
import "./CreateAccountSuccess.css";

const CreateAccountSucess = () => {
  const [modal, setModal] = useState(true)

  const closeModal = () => {
    setModal(!modal)
  }

  return (
    <div>
      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content flex flex-col items-center">
            <img src={ModalImage} alt="imagem de um homem e uma mulher se comunicando enquanto tem moedas e estrelas ao redor deles" />
            <p className="font-bold text-black text-2xl text-center pt-4">Em breve</p>
            <p className="text-sm text-center py-8">Iremos disponibilizar mais planejamentos customizados para você!</p>
            <Button
              onClick={closeModal}
              content="Entendi"
              customClassName="px-20 uppercase text rounded-full mt-2 !bg-white !hover:bg-gray-100 !text-blue-600"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default CreateAccountSucess;