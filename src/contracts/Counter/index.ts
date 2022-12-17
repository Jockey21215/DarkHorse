import { ethers } from "ethers";
import ContractABI from "./counter.abi.json";

const CounterContractAddress = "0x01B1f27a6Ea32d5D50336117536E9292a1Cab4F0";

const getCounterContract = (providerOrSigner: ethers.Signer) => {
  return new ethers.Contract(
      CounterContractAddress,
      ContractABI,
      providerOrSigner
  );
};

export default getCounterContract;