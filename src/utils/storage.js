import { Storage } from "aws-amplify";

async function getPublicFile(key) {
  return await Storage.get(key, { level: "public" });
}

export { getPublicFile };
