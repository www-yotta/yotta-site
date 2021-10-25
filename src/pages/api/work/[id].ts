import { NextApiRequest, NextApiResponse } from "next";
import { workMock, Mock } from "./";
import { findId } from "utils/findId";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id;
  const blog = findId<Mock>(workMock, id as string);
  res.status(200).json(blog);
};

export default handler;
