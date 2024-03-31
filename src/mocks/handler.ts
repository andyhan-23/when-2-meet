import { rest, ResponseComposition } from "msw";
import { MockEventCreateDataRequest } from "@/types";

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
    } else {
      return res(ctx.status(400), ctx.json({ message: "이벤트 생성 실패" }));
    }
  }),
];
