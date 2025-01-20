import { PinataSDK } from "pinata-web3";
import fs from "fs";
import path from "path";

const pinata = new PinataSDK({
  pinataJwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJiOWQ1Y2VmMC0xMjA3LTQzNjktYTUxYS02ZmRlMDlmMTNkZjIiLCJlbWFpbCI6InByb3NwZXIud2FuZ0BlZHUuZGV2aW5jaS5mciIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI4ZjRkMDE5ZDQzZjgyZmU4ODQ4ZCIsInNjb3BlZEtleVNlY3JldCI6IjQ3ODAzOGY0M2U5MzEwOTY1MWE0MzZjYTNlNTRjMzM1Y2MxNzI5ZmU2MWFhYzMwNGRjMjgwZWZlMDI5ZTgwZDAiLCJleHAiOjE3Njg5MzY1NDZ9.5UfW0beijLsk0NlAurEEzMUDqWf4yqSuB0WR4Y7EknM",
  pinataGateway: "blush-tough-alpaca-308.mypinata.cloud",
});

async function uploadSite() {
  try {
    const files = fs.readdirSync("./site").map((file) => ({
      path: file,
      content: fs.readFileSync(path.join("./site", file)),
    }));

    const result = await pinata.upload.json({
      pinataContent: {
        files,
      },
    });

    console.log("Site uploaded:", result.IpfsHash);
  } catch (error) {
    console.error("Error uploading site:", error);
  }
}

uploadSite();
