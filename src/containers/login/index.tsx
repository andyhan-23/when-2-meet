import { Logo } from "@/components";
import { usePostLogin } from "@/hooks";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { LoginDataRequest } from "@/types";

const LoginContainer = () => {
  const navigate = useNavigate();
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
        navigate(`/event/${id}`);
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
      <div className="flex  w-full flex-col items-center justify-center gap-10">
        <div className="text-2xl">{eventName}</div>
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col items-center justify-center gap-10"
        >
          <div className="flex flex-col justify-center gap-6 ">
            <div className="flex w-80 flex-row justify-around">
              이름
              <input
                className="ml-7 h-8 rounded-md bg-slate-100 "
                type="text"
                name="userName"
                value={loginFormData.userName}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-row justify-around">
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

          <div className="flex items-center justify-center">
            <button type="submit" className="h-8 w-72 rounded-lg bg-green-800 text-white">
              로그인
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginContainer;
