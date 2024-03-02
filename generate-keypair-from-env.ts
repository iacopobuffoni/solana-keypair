import dotenv from "dotenv";
dotenv.config();
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const keypair = getKeypairFromEnvironment("SECRET_KEY");
console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`
);

console.log(`The public key is: `, keypair.publicKey);
console.log(`The secret key is: `, keypair.secretKey);