import { useQuery } from "@tanstack/react-query";
import { URL } from "@/apis";
import axios from "axios";
import { memberAllData } from "@/types";

const useGetMemberAll = (id: string | undefined) => {
  const getMemberAll = async () => {
    const response = await axios.get(`${URL.event}/:${id}`);
    return response.data;
  };

  return useQuery<memberAllData[], Error>({
    queryKey: ["getMemberAll"],
    queryFn: getMemberAll,
  });
};

export default useGetMemberAll;
