import { NextApiResponse, NextApiRequest } from "next";
import { isContact } from "../../utils/TypeGuardUtils";
import { API_ENDPOINT, WRITE_API_KEY } from "../../utils/constants";

const contact = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (!isContact(req.body) || typeof WRITE_API_KEY === "undefined") {
    res.status(404).end();
    return;
  }

  const content = await fetch(`${API_ENDPOINT}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-WRITE-API-KEY": WRITE_API_KEY,
    },
    body: JSON.stringify(req.body),
  })
    .then(() => "Created")
    .catch(() => null);

  if (content !== "Created") {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  res.status(200).json({ message: "OK" });
};

export default contact;
