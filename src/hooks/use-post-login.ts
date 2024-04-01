import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { LoginDataRequest } from "@/types";
import { URL } from "@/apis";

const usePostLogin = (param: number) => {
  const postSignUp = async (formData: LoginDataRequest) => {
    return await axios.post(`${URL.login}/:${param}`, formData);
  };
  return useMutation({ mutationFn: postSignUp });
};

export default usePostLogin;
