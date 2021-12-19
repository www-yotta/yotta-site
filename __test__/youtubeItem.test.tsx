/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { server } from "../.mock/server";
import { YoutubeItem } from "../src/components/YouTubeItem";
import { youtubeMock } from "../.mock/data/youtube";

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());

it("Switch thumbnail to iframe", () => {
  render(<YoutubeItem item={youtubeMock[0]} />);
  fireEvent.click(screen.getByTestId("youtubeThumbnail"));
  expect(screen.getByTestId("youtubeFrame")).toBeInTheDocument();
});
