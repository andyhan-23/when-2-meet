import { useGetMemberAll } from "@/hooks";
import { useParams } from "react-router-dom";

const EventContainer = () => {
  const { id } = useParams();
  const { data } = useGetMemberAll(id);
  console.log("데이터 확인", data);
  return <div>이벤트 컨테이너</div>;
};

export default EventContainer;
