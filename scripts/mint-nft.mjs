const CONTRACT_ADDRESS = "0x18cbf03E2Ee64506BBF92Cb2E5e472F04a7424f5"
const META_DATA_URL = "ipfs://bafyreifkvblgrt7mosjuzbqxkstmf7i746pnfep2uxfqrrwgipyypgbbpq/metadata.json"

async function mintNFT(contractAddress, metaDataURL) {
   const ExampleNFT = await ethers.getContractFactory("ExampleNFT")
   const [owner] = await ethers.getSigners()
   await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
   console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });