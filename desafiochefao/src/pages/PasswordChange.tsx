import { useState, useCallback, FormEvent } from "react";
import api from "../services/api";
import { useParams } from "react-router-dom";
import Logo from "../components/logo";
import Button from "../components/Button";
import Input from "../components/Input";
import HeaderArrow from "../components/headerArrow";

interface Profile {
  password: string;
}

export default function PasswordChange() {
  const [data, setData] = useState<Profile>({} as Profile);
  const [message, setMessage] = useState("");
  const [textColor, setTextColor] = useState("");
  let params = useParams();

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      api
        .put("/users/password-change", data, {
          headers: {
            Authorization: `Basic ${params.token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
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
      <div className="min-h-screen flex flex-col items-center p-4">
        <div className="flex flex-col justify-evenly">
          <p className="text-center text-xl font-bold text-gray-900">Alterar Senha</p>
          <br />
          <p className="mt-6 text-center text-base text-gray-900">Digite sua nova senha</p>
        </div>
        <div className="w-96 max-w-full flex items-center justify-center pb-12 px-4 sm:px-6 lg:px-8">
          <form
            className="my-6 space-y-6 w-full"
            action="/password-change"
            method="POST"
            onSubmit={handleSubmit}
          >
            <Input
              id="password"
              content="Senha"
              type="password"
              placeholder="********"
              autoComplete="current-password"
              required
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^*_=+-]).{4,16}$"
              title="A senha deve conter de 4 a 16 caracteres, sendo eles pelo menos uma letra minúscula, uma letra maiúscula, um número e um símbolo (!@#$%^*_=+-)"
              onChange={(e) => setData({ password: e.target.value })}
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
        <div>
          <p className={textColor}>{message}</p>
        </div>
      </div>
    </div>
  );
}
