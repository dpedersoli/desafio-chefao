import Logo from "../components/logo";
import Input from "../components/Input";
import Button from "../components/Button";

import { useState, useCallback, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

interface Profile {
  email: string;
  password: string;
}

const Login = () => {
  const [data, setData] = useState<Profile>({} as Profile);
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      api
        .post("/users/login", data)
        .then((response) => {
          if (response.status === 200) {
            const token = response.data;
            localStorage.setItem("token", token);
            navigate("/intro-tutorial");
          }
        })
        .catch((error) => {
          setError(error.response.data.errorMessage);
        });
    },
    [data]
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Logo />
      <div className="flex flex-col justify-evenly">
        <p className="mt-1 mb-14 text-center text-xl font-bold text-gray-900">
          Olá! Entre na sua conta
        </p>
      </div>
      <div className="w-96 max-w-full flex items-center justify-center pb-12 px-4 sm:px-6 lg:px-8">
        <form className="my-6 space-y-6 w-full" onSubmit={handleSubmit}>
          <div className="rounded-md -space-y-px">
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
              autoComplete="current-password"
              required
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^*_=+-]).{4,16}$"
              title="A senha deve conter de 4 a 16 caracteres, sendo eles pelo menos uma letra minúscula, uma letra maiúscula, um número e um símbolo (!@#$%^*_=+-)"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
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
              <a
                href="/passwordrecovery"
                className="text-sm text-indigo-600 hover:text-indigo-500 pl-1"
              >
                Esqueci a senha
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Button content="Entrar" type="submit" id="submit" customClassName="px-12 uppercase" />
            <div className="flex items-center justify-center text-xs pt-4">
              <p>Não possui uma conta?</p>
              <div className="text-sm px-1">
                <a
                  href="/register"
                  className="font-bold text-indigo-600 hover:text-indigo-500 uppercase"
                >
                  Criar
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>

      <p className="text-red-700 text-center">{error}</p>
    </div>
  );
};

export default Login;
