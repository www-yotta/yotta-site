/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import WorkItem from "../src/components/WorkItem";
import { workMock } from "../.mock/data/work";

afterEach(() => cleanup());

it("'作品を見る'が表示される", () => {
  render(<WorkItem item={workMock[0]} />);
  expect(screen.getByTestId("showLink").children).toHaveLength(2);
  expect(screen.getByTestId("showLink").children[0].textContent).toBe(
    "作品を見る"
  );
});

it("'作品を見る'が表示されない", () => {
  render(<WorkItem item={workMock[1]} />);
  expect(screen.getByTestId("showLink").children).toHaveLength(1);
  expect(screen.getByTestId("showLink").children[0].textContent).not.toBe(
    "作品を見る"
  );
});
