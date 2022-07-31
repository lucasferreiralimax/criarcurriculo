import CryptoJS, { AES } from 'crypto-js'

export function useHash() {
  const lucas = "LUC4$ F3RR31R4 D3 L1M4";
  const encodeHash = (value) => AES.encrypt(value, lucas);
  const decodeHash = (value) => AES.decrypt(value, lucas);

  return { encodeHash, decodeHash }
}