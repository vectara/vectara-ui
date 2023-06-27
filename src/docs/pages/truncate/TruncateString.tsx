import { truncateEnd, truncateStart } from "../../../lib";

export const TruncateString = () => {
  const str = "0123456789";

  return (
    <>
      <p>Original: {str}</p>
      <p>Truncate 5 from start: {truncateStart(str, 5)}</p>
      <p>Truncate 5 from end: {truncateEnd(str, 5)}</p>
    </>
  );
};
