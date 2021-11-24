import { rest } from "msw";
import { blogMock } from "./data/blog";
import { workMock } from "./data/work";
import { seoMock } from "./data/seo";
import { youtubeMock } from "./data/youtube";
import { addListProperty } from "./utils/addListProperty";

export const handlers = [
  rest.get("http://localhost:3000/api/v1/blog", (_, res, ctx) => {
    return res(ctx.json(addListProperty(blogMock)));
  }),
  rest.get("http://localhost:3000/api/v1/blog/:id", (req, res, ctx) => {
    const { id } = req.params;
    const data = blogMock.filter((item) => {
      if (item.id === id) {
        return item;
      }
    });
    return res(ctx.json(data[0]));
  }),
  rest.get("http://localhost:3000/api/v1/youtube", (_, res, ctx) => {
    return res(ctx.json(addListProperty(youtubeMock)));
  }),
  rest.get("http://localhost:3000/api/v1/work", (_, res, ctx) => {
    return res(ctx.json(addListProperty(workMock)));
  }),
  rest.get("http://localhost:3000/api/v1/work/:id", (req, res, ctx) => {
    const { id } = req.params;
    const data = workMock.filter((item) => {
      if (item.id === id) {
        return item;
      }
    });
    return res(ctx.json(data[0]));
  }),
  rest.get("http://localhost:3000/api/v1/seo", (_, res, ctx) => {
    return res(ctx.json(seoMock));
  }),
  rest.post("http://localhost:3000/api/v1/contact", (_, res, ctx) => {
    return res(ctx.status(200));
  }),
];
