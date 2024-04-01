import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { LoginDataRequest } from "@/types";
import { URL } from "@/apis";

const usePostLogin = (id: string | undefined) => {
  const postSignUp = async (formData: LoginDataRequest) => {
    return await axios.post(`${URL.login}/:${id}`, formData);
  };
  return useMutation({ mutationFn: postSignUp });
};

export default usePostLogin;
