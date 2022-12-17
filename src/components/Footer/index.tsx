//node_modules
import React from "react";
import { Link } from "react-router-dom";
import { Flex, Box, Spacer, Button, Input, Heading, Text, Image } from "@chakra-ui/react";

//css
import "./footer.css";

//images
import sendImg from "./free_icon_1 (1).svg";
import heartImg from "./heart-svgrepo-com.svg";

const FooterComponent: React.FC = () => {

    return (
        <Box>
            <Flex bgColor="#efefef" pl="13vw" pr="13vw" pt="100px" pb="100px" className="big-footer">
                
                <Box width="500px">
                    <Heading size="md">Newsletter Subscriber</Heading>
                    <Text mt="10px" color="gray" fontSize="14px">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur ut at quae omnis pariatur
                        abcaecati possimus nisi ea istel</Text>
                </Box>
                <Spacer />
                <Flex alignItems="center">
                    <Input height="50px" mr="20px" className="email-input" boxShadow="0px 1px 0px 0px grey" border="none" padding="25px" background="white" color="black" borderRadius="26px" width="400px" placeholder="Enter your email" ></Input>
                    <Button background="black" width="55px" borderRadius="20px" height="50px"><Image src={sendImg}></Image></Button>
                </Flex>
            </Flex>
            <Box padding="30px">
                <Text color="gray" textAlign="center" display="flex" justifyContent={"center"}>Copyright &copy;2022. All rights reserved | This template is made with&nbsp; <Image width="16px" src={heartImg}></Image>&nbsp; by &nbsp;<a href="#" className="other-link">Colorlib</a></Text>
            </Box>
        </Box>
    );
}

export default FooterComponent;