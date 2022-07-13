import Logo from "../components/logo";
import Input from "../components/Input";
import Button from "../components/Button";
import HeaderArrow from "../components/headerArrow";
import CreateAccountSucess from '../components/modal/CreateAccountSuccess'

import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { useState, useCallback, FormEvent } from "react";

interface Profile {
  name: string;
  email: string;
  password: string;
  checkPassword: string;
}

const Register = () => {
  const [data, setData] = useState<Profile>({} as Profile);
  const [error, setError] = useState("");
  const [modal, setModal] = useState(false)

  const showModal = () => {
    setModal(true)
  }


  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      api
        .post("/users/new", data)
        .then((response) => {
          if (response.status === 201) {
            showModal()
          }
        })
        .catch((error) => {
          setError(error.response.data.errorMessage);
        });
    },
    [data, modal]
  );

  return (
    <div>
      <Logo />
      <HeaderArrow link="/login" />
      <p className="text-center text-2xl font-semibold text-gray-900 mt-3">Olá! Crie sua conta</p>
      <div className="min-h-screen flex flex-col items-center p-4">
        <div className="w-96 max-w-full flex items-center justify-center pb-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full space-y-8 flex flex-col">
            <form className="mt-8 space-y-6 w-full" onSubmit={handleSubmit}>
              <div className="rounded-md -space-y-px">
                <Input
                  id="name"
                  content="Nome"
                  placeholder="Primeiro Nome"
                  type="text"
                  autoComplete="name"
                  pattern="[a-zA-Z- ]{2,30}$"
                  title="Apenas letras são aceitas"
                  required
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
                <Input
                  id="email-address"
                  content="E-mail"
                  placeholder="exemplo@email.com"
                  type="email"
                  autoComplete="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  title="exemplo@email.com"
                  required
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
                <Input
                  id="password"
                  content="Senha"
                  type="password"
                  placeholder="********"
                  required
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^*_=+-]).{4,16}$"
                  title="A senha deve conter de 4 a 16 caracteres, sendo eles pelo menos uma letra minúscula, uma letra maiúscula, um número e um símbolo (!@#$%^*_=+-)"
                  onChange={(e) => setData({ ...data, password: e.target.value })}
                />
                {/* <Input
                  id="check-password"
                  content="Confirmar Senha"
                  type="password"
                  placeholder=""
                  required
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^*_=+-]).{4,16}$"
                  title="A senha deve ser idêntica à senha acima"
                /> */}
              </div>
              <div className="flex flex-col items-center">
                <Button
                  content="Criar Conta"
                  type="submit"
                  id="submit"
                  customClassName="px-12 uppercase"
                />
                <div className="flex items-center justify-center text-xs pt-4">
                  Já possui uma conta?
                  <div className="text-sm px-1">
                    <a
                      href="/login"
                      className="font-medium text-indigo-600 hover:text-indigo-500 uppercase"
                    >
                      Entrar
                    </a>
                  </div>
                </div>
              </div>
            </form>
            <p className="text-red-700 text-center">{error}</p>
          </div>
        </div>
      </div>
      {modal && (
        <div>
          <div className="w-60 h-fit top-80 left-20 fixed">
            <CreateAccountSucess />
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;