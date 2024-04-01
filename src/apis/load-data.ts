import { apiClient } from ".";
import { EventCreateDataRequest } from "@/types";

const loadData = async (
  path: string,
  method: "GET" | "POST",
  reqeustData: EventCreateDataRequest
) => {
  try {
    let result;
    if (method === "GET") result = await apiClient.get(path);
    else if (method === "POST") result = await apiClient.post(path, reqeustData);
    return result?.data;
  } catch (error: unknown) {
    if (import.meta.env) console.error(`${path}에 해당하는 에러 메시지 출력: ${error}`);
    return null;
  }
};

export default loadData;
