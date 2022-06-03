import { useState, useCallback, FormEvent } from "react";
import api from "../services/api";
import Logo from "../components/logo";
import Button from "../components/Button";
import Input from "../components/Input";
import HeaderArrow from "../components/headerArrow";

interface Profile {
  email: string;
}

export default function PasswordRecovery() {
  const [data, setData] = useState<Profile>({} as Profile);
  const [message, setMessage] = useState("");
  const [textColor, setTextColor] = useState("");

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      api
        .post("/users/password-recovery", data)
        .then((response) => {
          if (response.status === 200) {
            setMessage(response.data.message);
            setTextColor("text-green-400 text-center");
          }
        })
        .catch((error) => {
          setMessage(error.response.data.errorMessage);
          setTextColor("text-red-700 text-center");
        });
    },
    [data]
  );

  return (
    <div>
      <Logo />
      <HeaderArrow link="/login" />

      <div className="min-h-screen flex flex-col items-center p-4 my-20">
        <div className="flex flex-col justify-evenly">
          <p className="text-center text-xl font-bold text-gray-900">Recuperar Senha</p>
          <br />
          <p className="mt-6 text-center text-base text-gray-900">
            Digite seu e-mail e te enviaremos um e-mail para criar uma nova senha
          </p>
        </div>
        <div className="w-96 max-w-full flex items-center justify-center pb-12 px-4 sm:px-6 lg:px-8">
          <form
            className="my-6 space-y-6 w-full"
            action="/password-recovery"
            method="POST"
            onSubmit={handleSubmit}
          >
            <Input
              id="email-address"
              content="E-mail"
              placeholder="email@provider.com"
              type="email"
              autoComplete="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              title="exemplo@email.com"
              required
              onChange={(e) => setData({ email: e.target.value })}
            />

            <div className="flex flex-col items-center">
              <Button
                content="Enviar"
                type="submit"
                id="submit"
                customClassName="px-12 uppercase"
              />
            </div>
          </form>
        </div>
      </div>
      <p className={textColor}>{message}</p>
    </div>
  );
}
