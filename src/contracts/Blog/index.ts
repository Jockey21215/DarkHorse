import { ethers } from "ethers";
import ContractABI from "./blog.abi.json";

const BlogContractAddress = "0x99ca436e641e73dfa684c1b1e02abcda35bb3f52";

const getBlogContract = (providerOrSigner: ethers.Signer) => {
  return new ethers.Contract(
      BlogContractAddress,
      ContractABI,
      providerOrSigner
  );
};

export default getBlogContract;