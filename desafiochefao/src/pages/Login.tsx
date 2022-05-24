import LogoOutside from "../components/logo";
import FooterOutside from "../components/footer";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import api from "../services/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function userLogin() {
    const response = await api.post("/users/login", {
      emailUsuario: email,
      senhaUsuario: password,
    });
    const token = response.data;
    console.log(token);
    localStorage.setItem("token", token);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-96 max-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full space-y-8 flex flex-col">
          <LogoOutside />
          <div className="flex flex-col justify-evenly">
            <p className="mt-6 text-center text-2xl font-bold text-gray-900">
              Que bom te ver por aqui!
            </p>
          </div>

          <form className="mt-8 space-y-6" action="/goal" method="POST">
            <div className="rounded-md -space-y-px">
              <Input
                id="email-address"
                content="E-mail"
                type="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                id="password"
                content="Senha"
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
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
                  className="font-medium text-indigo-600 hover:text-indigo-500 pl-1"
                >
                  Esqueci a senha
                </a>
              </div>
            </div>

            <div>
              <Button
                content="Entrar"
                type="submit"
                id="submit"
                onClick={(e) => {
                  e.preventDefault(), userLogin();
                }}
              />
              <div className="flex items-center justify-center text-sm pt-4">
                <p>Não possui uma conta?</p>
                <div className="text-sm px-1">
                  <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Criar
                  </a>
                </div>
              </div>
            </div>
          </form>
          <FooterOutside />
        </div>
      </div>
    </div>
  );
};

export default Login;
