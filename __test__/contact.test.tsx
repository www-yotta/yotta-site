/**
 * @jest-environment jsdom
 */
import React from "react";
import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import ContactSection from "../src/components/ContactSection";
import { server } from "../.mock/server";

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());

it("バリデーションチェック 入力必須", async () => {
  render(<ContactSection id="contact" />);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(await screen.findAllByText("入力必須です。")).toHaveLength(3);
});

it("バリデーションチェック メールアドレス", async () => {
  render(<ContactSection id="contact" />);
  const inputEmail = screen.getByTestId("inputEmail");
  const button = screen.getByRole("button");
  userEvent.type(inputEmail, "hoge");
  fireEvent.click(button);
  await waitFor(() =>
    expect(
      screen.queryByText("メールアドレスの形式で入力してください。")
    ).toBeInTheDocument()
  );

  userEvent.type(inputEmail, "info@example.com");
  fireEvent.click(button);
  await waitFor(() =>
    expect(
      screen.queryByText("メールアドレスの形式で入力してください。")
    ).toBeNull()
  );
});

// TODO: モックのレスポンスによって出しわけるテストを書く
it("メール送信で成功テキストが表示される", async () => {
  render(<ContactSection id="contact" />);
  const inputName = screen.getByTestId("inputName");
  const inputEmail = screen.getByTestId("inputEmail");
  const inputTextarea = screen.getByTestId("inputTextarea");
  const button = screen.getByRole("button");

  userEvent.type(inputName, "hoge");
  userEvent.type(inputEmail, "info@example.com");
  userEvent.type(inputTextarea, "fuga fuga");

  fireEvent.click(button);

  await waitFor(() =>
    expect(screen.queryByTestId("successMessage")).toBeInTheDocument()
  );
});
