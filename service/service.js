import md5 from "crypto-js/md5";
import ripemd160 from "crypto-js/ripemd160";
import sha1 from "crypto-js/sha1";
import sha224 from "crypto-js/sha224";
import sha256 from "crypto-js/sha256";
import sha512 from "crypto-js/sha512";
import encBase64 from "crypto-js/enc-base64";

export const HashData = (algorithm, data) => {
  let result;
  switch (algorithm) {
    case "md5":
      result = useMd5(data);
      break;
    case "ripemd160":
      result = useRipemd160(data);
      break;
    case "sha1":
      result = useSha1(data);
      break;
    case "sha224":
      result = useSha224(data);
      break;
    case "sha256":
      result = useSha256(data);
      break;
    case "sha512":
      result = useSha512(data);
      break;

    default:
      break;
  }
  return encBase64.stringify(result);
};

const useMd5 = (data) => {
  return md5(data);
};

const useRipemd160 = (data) => {
  return ripemd160(data);
};

const useSha1 = (data) => {
  return sha1(data);
};

const useSha224 = (data) => {
  return sha224(data);
};

const useSha256 = (data) => {
  return sha256(data);
};

const useSha512 = (data) => {
  return sha512(data);
};
