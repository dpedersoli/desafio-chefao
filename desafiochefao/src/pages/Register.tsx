import Logo from "../components/logo";
import Input from "../components/Input";
import Button from "../components/Button";
import HeaderArrow from "../components/HeaderArrow";

import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { useState, useCallback, FormEvent } from "react";

interface Profile {
  nomeUsuario: string;
  emailUsuario: string;
  senhaUsuario: string;
  checkPassword: string;
}

const Register = () => {
  const [data, setData] = useState<Profile>({} as Profile);
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      api
        .post("/users/new", data)
        .then((response) => {
          if (response.status === 200) {
            navigate("/login");
          }
        })
        .catch((error) => {
          setError(error.message);
        });
      console.log(data);
    },
    [data]
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
                  placeholder="Nome"
                  type="text"
                  autoComplete="name"
                  pattern="[a-zA-Z- ]{2,30}$"
                  title="Apenas letras são aceitas"
                  required
                  onChange={(e) => setData({ ...data, nomeUsuario: e.target.value })}
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
                  onChange={(e) => setData({ ...data, emailUsuario: e.target.value })}
                />
                <Input
                  id="password"
                  content="Senha"
                  type="password"
                  placeholder="********"
                  required
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^*_=+-]).{4,16}$"
                  title="A senha deve conter de 4 a 16 caracteres, sendo eles pelo menos uma letra minúscula, uma letra maiúscula, um número e um símbolo (!@#$%^*_=+-)"
                  onChange={(e) => setData({ ...data, senhaUsuario: e.target.value })}
                />
                <Input
                  id="check-password"
                  content="Confirmar Senha"
                  type="password"
                  placeholder=""
                  required
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^*_=+-]).{4,16}$"
                  title="A senha deve ser idêntica à senha acima"
                />
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
    </div>
  );
};

export default Register;

/*<div>
<label htmlFor="password" className="sr-only">
  Password
</label>
<p className="text-sm py-2">Senha</p>
<input
  id="password"
  // name="password"
  type="password"
  autoComplete="current-password"
  //CONSERTAR O 'pattern.value'
  //COMPONETIZAR
  // {...register("password", // JS only: <p>error message</p> TS only support
  //   {
  //     required: 'Insira a senha',
  //     pattern: {
  //       value: /^[0-9a-zA-Z]{4,16}/i,
  //       message: "A senha deve conter de 4-8 dígitos com uma pelo menos letra minúscula, uma maiúscula, e pelo menos um número"
  //     }
  //   })}
  // pattern="[0-9a-zA-Z]{4,8}"
  // title="A senha deve conter de 4-8 dígitos com uma pelo menos letra minúscula, uma maiúscula, e pelo menos um número"
  // required
  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm shadow-sm"
  placeholder="Crie uma senha"
  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^*_=+-]).{4,16}$"
  title="A senha deve conter de 4 a 16 caracteres, sendo eles pelo menos uma letra minúscula, uma letra maiúscula, um número e um símbolo (!@#$%^*_=+-)"
  required
  onChange={(e) => { () => { setPassword(e.target.value) } }}
/>
/* {errors.password ? (
<>
  {errors.password.type === "required" && (
    <p style={{ color: "red", fontSize: "15px" }}>
      {errors.password.message}
    </p>
  )}
  {errors.password.type === "pattern" && (
    <p style={{ color: "red", fontSize: "15px" }}>
      {errors.password.message}
    </p>
  )}
</>
) : null} 
</div>*/
