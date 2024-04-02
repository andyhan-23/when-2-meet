import { rest, ResponseComposition } from "msw";
import { MockEventCreateDataRequest, MockLoginDataRequest } from "@/types";
import memberAllData from "./__fixtures__/memberAll.json";

export const handlers = [
  rest.post("/event", (req: MockEventCreateDataRequest, res: ResponseComposition, ctx) => {
    const { eventName, dataList } = req.body;
    if (dataList.length > 0 && eventName) {
      return res(
        ctx.status(200),
        ctx.json({
          message: "이벤트 생성 성공",
          eventName: eventName,
          eventId: 1,
        })
      );
    } else return res(ctx.status(400), ctx.json({ message: "이벤트 생성 실패" }));
  }),
  rest.post("/login/:1", (req: MockLoginDataRequest, res: ResponseComposition, ctx) => {
    const { userName, password } = req.body;
    if (userName && password) {
      return res(
        ctx.status(200),
        ctx.json({
          message: "로그인 성공",
          name: userName,
          password: password,
        })
      );
    } else return res(ctx.status(400), ctx.json({ message: "로그인 실패" }));
  }),
  rest.get("/event/:1", (_, res: ResponseComposition, ctx) => {
    return res(ctx.json(memberAllData));
  }),
];
