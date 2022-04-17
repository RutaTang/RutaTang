import { Storage } from "aws-amplify";

async function getPublicFileURL(filePath) {
  const result = await Storage.get(filePath, {
    level: "public",
  });
  return result;
}

export { getPublicFileURL };
