import axios from "axios"



const HELIUS_API_KEY =`${process.env.HELIUS_API_KEY}`;

const url = `https://mainnet.helius-rpc.com/?api-key=${HELIUS_API_KEY}`;


export const getAssetsByOwner = async () => {
  try {
    const response = await axios.post(url, {
      jsonrpc: '2.0',
      id: 'my-id',
      method: 'getAssetsByOwner',
      params: {
        ownerAddress: '86xCnPeV69n6t3DnyGvkKobf9FdN2H9oiVDdaMpo2MMY',
        page: 1, // Starts at 1
        limit: 1000,
      },
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log("Assets by Owner: ", response.data.result.items);
  } catch (error) {
    console.error('Error fetching assets:', error.response ? error.response.data : error.message);
  }
};

