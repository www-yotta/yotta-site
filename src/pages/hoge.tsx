import React from "react";
import { API_ENDPOINT, GET_API_KEY } from "../utils/constants";
import Image from "next/image";
import logo from "images/logo.png";

const Hoge = ({ blogData }: any) => {
  console.log("logo", logo);
  return (
    <>
      <p>{blogData.contents[1].title}</p>
      <Image src={logo} alt="test" />
      {/* <Image src="http://placehold.jp/150x150.png" alt="test" /> */}
    </>
  );
};

export const getStaticProps = async () => {
  const blogData = await fetch(`${API_ENDPOINT}/blog?limit=9&offset=1`, {
    headers: {
      "Content-Type": "application/json",
      "X-MICROCMS-API-KEY": GET_API_KEY,
    },
  }).then((r) => r.json());
  // const blogData = await res.json();
  return {
    props: { blogData },
  };
};

export default Hoge;
