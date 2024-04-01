import { Logo } from "@/components";
import { usePostLogin } from "@/hooks";
import { useParams, useLocation } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { LoginDataRequest } from "@/types";

const LoginContainer = () => {
  const { state: eventName } = useLocation();

  const { id } = useParams();
  const { mutate: login } = usePostLogin(id);
  const [loginFormData, setLoginFormData] = useState<LoginDataRequest>({
    userName: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(loginFormData, {
      onSuccess() {
        console.log("로그인 성공");
      },
      onError() {
        console.log("error");
      },
    });
  };

  return (
    <>
      <Logo />
      <div className="flex h-full w-full flex-col items-center justify-center gap-10">
        <div className="text-2xl">{eventName}</div>
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col items-center justify-center gap-10"
        >
          <div className="flex w-[70%] flex-col justify-center gap-6">
            <div className="flex flex-row justify-between">
              이름
              <input
                className="h-8 rounded-md bg-slate-100"
                type="text"
                name="userName"
                value={loginFormData.userName}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-row justify-between">
              비밀번호
              <input
                className="h-8 rounded-md bg-slate-100"
                type="password"
                name="password"
                value={loginFormData.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="bg-line-400 flex w-[30%] justify-center rounded-md">
            <button type="submit" className="h-8 text-white">
              로그인
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginContainer;
