import { Storage } from "aws-amplify";

async function getPublicImageUrlByS3Path(s3Path) {
  return await Storage.get(s3Path, {
    level: "public",
    download: false,
    expires: 30 * 60,
  });
}

export { getPublicImageUrlByS3Path };
