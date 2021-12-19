/**
 * @jest-environment jsdom
 */
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { server } from "../.mock/server";
import { getPage } from "next-page-tester";
import { initTestHelpers } from "next-page-tester";

initTestHelpers();

beforeAll(() => {
  server.listen();
});
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());

it("トップページ", async () => {
  const { page } = await getPage({
    route: "/",
  });
  render(page);
  screen.debug();
  expect(screen.getByText("サンプル2")).toBeInTheDocument();
});
