// node_modules
import React, { useState, useCallback } from "react";
import { Box, useColorMode, InputGroup, Input, Text, InputLeftElement, Stack, Button, ChakraProvider, useDisclosure } from "@chakra-ui/react";
import { EmailIcon, InfoIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { ethers } from "ethers";

// components
import ConnectWalletButton from "../../components/ConnectWalletButton";

//contracts
import getCounterContract from "../../contracts/Counter";

//store
import { RootState } from "../../store";

declare let window: any;


const ProfilePage = () => {
    const { colorMode } = useColorMode();
    const [value, setValue] = useState<number>(0);

    const onAmountChange = (event: any) => {
        setValue(event.target.value);
    }

    const onPayButton = useCallback(async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const contract = getCounterContract(signer as ethers.Signer);

        try {
            await contract.plus(value);
        } catch (err) {
            console.log(err);
        }
    }, [value]);

    const me = useSelector((state: RootState) => state.me.me);
    return (
        <Box
            mt="100" mb="200"
        >                        
                <Stack spacing={3} bg={colorMode === "light" ? "gray.200" : "gray.600"}
                    w="350px"
                    p={3}
                    boxShadow="sm"
                    rounded="lg"
                    mb="10"
                >
                    <InputGroup>
                        <InputLeftElement children={<InfoIcon />} />
                        <Input
                            type="email"
                            bg={colorMode === "light" ? "white" : "inherit"}
                            value={me.username}
                        />
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement children={<EmailIcon />} />
                        <Input
                            type="text"
                            aria-label="Email"
                            bg={colorMode === "light" ? "white" : "inherit"}
                            value={me.email}
                        />
                    </InputGroup>
                    
                </Stack>
                <Box textAlign="center">
                    <ConnectWalletButton/>
                </Box>
                <Text mt="10">Amount: </Text>
                <InputGroup mb="10">
                    <InputLeftElement children={<InfoIcon />} />
                    <Input
                        type="email"
                        bg={colorMode === "light" ? "white" : "inherit"}
                        onChange={onAmountChange}
                    />
                </InputGroup>
                <Box textAlign="center">
                    <Button onClick={onPayButton}>Pay</Button>
                </Box>
        </Box>
    );
};

export default ProfilePage;
