import { useMutation } from "@tanstack/react-query";
import { loadData, URL } from "@/apis";
import { EventCreateDataRequest } from "@/types";

const usePostEventCreate = () => {
  const postEventCreate = async (eventCreateData: EventCreateDataRequest) => {
    return await loadData(URL.event, "POST", eventCreateData);
  };
  return useMutation({ mutationFn: postEventCreate });
};

export default usePostEventCreate;
