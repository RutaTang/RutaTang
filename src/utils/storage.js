import { Storage } from "aws-amplify";

async function getPublicFileUrl(key) {
  const url = await Storage.get(key, {
    level: "public",
  });
  return url;
}

export { getPublicFileUrl };
