import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

const HELIUS_API_KEY = process.env.HELIUS_API_KEY;
const WALLET_ADDRESS = '86xCnPeV69n6t3DnyGvkKobf9FdN2H9oiVDdaMpo2MMY';
// 541brCMHvtsxKum5fWoxjs7g2kDuRgWbBuha85QecCX

export default async function getPortfolio(wa){
    const response = await fetch(`https://mainnet.helius-rpc.com/?api-key=${HELIUS_API_KEY}`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "jsonrpc": "2.0",
          "id": "my-id",
          "method": "getAssetsByOwner",
          "params": {
            "ownerAddress": wa,
            "page": 1,
            "limit": 1000
          }
        }),
    });

    const data = await response.json();
    console.log(data);
}
