/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// import userEvent from "@testing-library/user-event";

import BlogSection from "../src/components/BlogSection";
// import BlogSection from "../src/pages/hoge";

it("サンプルページ", () => {
  const dataMock = {
    id: "h--gz8ckj",
    title: "string",
    body: "string",
    image: {
      height: 100,
      width: 100,
      url: "https://yotta-site.vercel.app/_next/image?url=https%3A%2F%2Fimages.microcms-assets.io%2Fassets%2F5719ee3ae34b44709f840e70087c1e2d%2F8f48c0091f8e4300a48f7f8fc7968179%2Fthumbnail.png&w=384&q=75",
    },
  };
  render(<BlogSection id={"h--gz8ckj"} data={[dataMock]} />);
  // screen.debug();
  expect(screen.getByText("ブログ")).toBeInTheDocument();
});

// it("Should render hello text", () => {
//   render(<BlogSection />);
//   screen.debug();
//   expect(screen.getByText("Hello Nextjs")).toBeInTheDocument();
// });
