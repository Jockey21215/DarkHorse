import React, { Button, Box, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { formatEther } from "@ethersproject/units";
import Identicon from "../Identicon";
import { useDispatch } from "react-redux";
import { useWeb3React } from '@web3-react/core'
import { BigNumber, ethers,  } from 'ethers'

//utils

import { injectedConnector } from "../../utils/connector";

declare let window: any

export default function ConnectWalletButton() {

  const [balance, setBalance] = useState<string | undefined>()
  const [currentAccount, setCurrentAccount] = useState<string | undefined>()
  const { account, activate, deactivate } = useWeb3React()

  const onConnect = async () => {
    try {
      if (typeof window.ethereum !== 'undefined') {
        // if (force) destroyCookie(null, COOKIES.JWT, { path: '/' })
        await activate(injectedConnector)
        // setConnected(true)
        
      } else {
        alert('Please install MetaMask in your browser')
      }
    } catch (ex) {
      console.log(ex)
    }
  }

  onConnect();
  
  useEffect(() =>  {
    if(!window.ethereum) return
    if(account) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      provider.getBalance(account).then((result)=>{
        setBalance(ethers.utils.formatEther(result))
      })
    }
  }, [account]);

  return account ? (
    <Box
      display="flex"
      alignItems="center"
      background="gray.700"
      borderRadius="xl"
      py="0"
    >
      <Box px="3">
        <Text color="white" fontSize="md">
          {balance && parseFloat(balance).toFixed(3)} ETH
        </Text>
      </Box>
      <Button
        bg="gray.800"
        border="1px solid transparent"
        _hover={{
          border: "1px",
          borderStyle: "solid",
          borderColor: "blue.400",
          backgroundColor: "gray.700",
        }}
        borderRadius="xl"
        m="1px"
        px={3}
        height="38px"
      >
        <Text color="white" fontSize="md" fontWeight="medium" mr="2">
          {account &&
            `${account.slice(0, 6)}...${account.slice(
              account.length - 4,
              account.length
            )}`}
        </Text>
        <Identicon />
      </Button>
    </Box>
  ) : (
    <Button
      
      bg="blue.800"
      color="blue.300"
      fontSize="lg"
      fontWeight="medium"
      borderRadius="xl"
      border="1px solid transparent"
      _hover={{
        borderColor: "blue.700",
        color: "blue.400",
      }}
      _active={{
        backgroundColor: "blue.800",
        borderColor: "blue.700",
      }}
    >
      Unconnected to a wallet.
    </Button>
  );
}
