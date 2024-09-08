import { UserType } from "../data/chats";
import { mindMapType } from "../data/mindMap";

export function truncateString(str: string, len: number) {
  if (str.length > len) {
    return str.slice(0, len) + "...";
  }
  return str;
}

export function getArrayChunk(arr: mindMapType[] | UserType[], input: number) {
  const chunkSize = 10;

  const start = (input - 1) * chunkSize;
  const end = input * chunkSize;

  return arr.slice(start, end);
}
