/* eslint-disable */
import "whatwg-fetch";

jest.mock("next/image", () => ({ src, alt, ...props }: any) => {
  return <img src={src} alt={alt} {...props} />;
});
