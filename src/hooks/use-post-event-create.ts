import { useMutation } from "@tanstack/react-query";
import { URL } from "@/apis";
import { EventCreateDataRequest } from "@/types";
import axios from "axios";

const usePostEventCreate = () => {
  const postEventCreate = async (eventCreateData: EventCreateDataRequest) => {
    return await axios.post(URL.event, eventCreateData);
  };
  return useMutation({ mutationFn: postEventCreate });
};

export default usePostEventCreate;
