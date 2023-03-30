import { NFTStorage, File } from "nft.storage"
import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config()

const NFT_STORAGE_API_KEY = process.env.NFT_STORAGE_API_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY;
console.log(PRIVATE_KEY)
async function storeAsset() {
   const client = new NFTStorage({ token: NFT_STORAGE_API_KEY })
   const metadata = await client.store({
       name: 'myNFT',
       description: 'My NFT is an awesome artwork!',
       image: new File(
           [await fs.promises.readFile('assets/onNFT.png')],
           'onNFT.png',
           { type: 'image/png' }
       ),
   })
   console.log("Metadata stored on Filecoin and IPFS with URL:", metadata.url)
}

storeAsset()
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });