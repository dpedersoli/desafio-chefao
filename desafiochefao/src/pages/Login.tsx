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
      emailUser: email,
      senhaUser: password,
    });

    const token = response.data;
    console.log('Token:', token);
    localStorage.setItem("token", token);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <LogoOutside />
      <div className="flex flex-col justify-evenly">
        <p className="mt-6 text-center text-xl font-bold text-gray-900">
          Olá! Que bom te ver por aqui!
        </p>
      </div>

      <form className="my-6 space-y-6 w-full" action="/goal" method="POST">
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
            onChange={(e) => { () => { setEmail(e.target.value) } }}
          />
          <Input
            id="password"
            content="Senha"
            type="password"
            placeholder="********"
            required
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^*_=+-]).{4,16}$"
            title="A senha deve conter de 4 a 16 caracteres, sendo eles pelo menos uma letra minúscula, uma letra maiúscula, um número e um símbolo (!@#$%^*_=+-)"
            onChange={(e) => { () => { setPassword(e.target.value) } }}
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

        <div className="flex flex-col items-center">
          <Button
            content="Entrar"
            type="submit"
            id="submit"
            customClassName="px-12 uppercase"
            onClick={(e) => { () => { e.preventDefault(), userLogin() } }}
          />
          <div className="flex items-center justify-center text-xs pt-4">
            <p>Não possui uma conta?</p>
            <div className="text-sm px-1">
              <a href="/register" className="font-bold text-indigo-600 hover:text-indigo-500 uppercase">
                Criar
              </a>
            </div>
          </div>
        </div>
      </form>
      <FooterOutside />
    </div>
  );
};

export default Login;
