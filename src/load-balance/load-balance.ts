import dotenv from "dotenv";
dotenv.config();
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const keypair = getKeypairFromEnvironment("SECRET_KEY");
const publicKey = keypair.publicKey.toBase58();
let address;
if(publicKey.length === 44) address = new PublicKey(publicKey);
const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const balance = await connection.getBalance(address);
const balanceInSOL= balance / LAMPORTS_PER_SOL;
console.log(
  `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);