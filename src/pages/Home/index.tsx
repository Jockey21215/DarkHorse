// node_modules
import React from "react";
import { Box, Text, Flex, Image, Stack, Heading, Spacer } from "@chakra-ui/react";
import { ChevronRight } from "@material-ui/icons";

//images
import img from "./home.jpg";

//css
import "./home.css";


const HomePage = () => {
    return (
        <Box height="100%" display="block">
            <Flex margin="50px">
                <Box width="50%">
                    <Image src={img} alt="Home Image"></Image>
                </Box>
                <Stack
                    width="50%"
                    padding={"50px"}
                    background="#f5f5f5"
                    display="flex" alignItems="center"
                >
                    <Box>
                        <Heading fontSize="16px" color="gray">EDITOR'S PICK</Heading>
                        <Heading display={"flex"} fontSize="23px" marginTop="15px" justifyContent={"space-between"}>
                            <Text className="news-heading">News Needs to Meet Its Audiences Where They Are</Text>                        
                        </Heading>
                        <Text lineHeight="1.7" marginTop="15px" fontSize="13px" marginBottom="15px">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur ut at quae omnis pariatur
                                abcaecati possimus nisi ea istel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur ut at quae omnis pariatur
                                abcaecati possimus nisi ea istel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur ut at quae omnis pariatur
                                abcaecati possimus nisi ea istel.
                        </Text>
                        <Text fontWeight="600" fontSize="14px">Dave Rogers in Food</Text>
                        <Text fontSize="13px">
                            Jun 14 - 3 min read *
                        </Text>
                    </Box>
                </Stack>
            </Flex>
            <Flex className="pick-section" marginLeft="50px" marginRight="5px">
                <Box className="left-pick" width="70%">
                    <Heading marginBottom="50px" className="trend-heading news-heading">
                        Editor's Pick
                    </Heading>
                    <Box className="pick-detail" display="flex">
                        <Box className="left-detail" marginRight="10px" width="50%">
                            <Image src={img}></Image>
                            <Heading marginTop="30px" display={"flex"} fontSize="20px" justifyContent={"space-between"}>
                                <Text className="news-heading">News Needs to Meet Its Audiences Where They Are</Text>                        
                            </Heading>
                            <Text lineHeight="1.7" fontSize="13px" marginTop="15px" marginBottom="15px">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur ut at quae omnis pariatur
                                    abcaecati possimus nisi ea istel.
                            </Text>
                            <Text fontWeight="600" fontSize="14px">Dave Rogers in Food</Text>
                            <Text fontSize="13px">
                                Jun 14 - 3 min read *
                            </Text>
                        </Box>
                        <Box className="right-detail" marginLeft="10px" width="50%">
                            <Box className="detail-item" display="flex">
                                <Box width="30%">
                                    <Image src={img}></Image>
                                </Box>
                                <Box width="70%" className="biz-detail-item">
                                    <Heading fontSize="17px" className="news-heading">News Needs to Meet Its Audiences Where They Are</Heading>
                                    <Text fontWeight="600" fontSize="12px">Dave Rogers in Food</Text>
                                    <Text fontSize="11px">
                                        Jun 14 - 3 min read *
                                    </Text>
                                </Box>
                            </Box>
                            <Box className="detail-item" display="flex">
                                <Box width="30%">
                                    <Image src={img}></Image>
                                </Box>
                                <Box width="70%" className="biz-detail-item">
                                <Heading fontSize="17px" className="news-heading">News Needs to Meet Its Audiences Where They Are</Heading>
                                    <Text fontWeight="600" fontSize="12px">Dave Rogers in Food</Text>
                                    <Text fontSize="11px">
                                        Jun 14 - 3 min read *
                                    </Text>
                                </Box>
                            </Box>
                            <Box className="detail-item" display="flex">
                                <Box width="30%">
                                    <Image src={img}></Image>
                                </Box>
                                <Box width="70%" className="biz-detail-item">
                                <Heading fontSize="17px" className="news-heading">News Needs to Meet Its Audiences Where They Are</Heading>
                                    <Text fontWeight="600" fontSize="12px">Dave Rogers in Food</Text>
                                    <Text fontSize="11px">
                                        Jun 14 - 3 min read *
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className="trending" width="30%"  marginLeft="20px">
                    <Heading marginBottom="50px" className="trend-heading  news-heading">Trending</Heading>
                    <Box className="trend-detail">
                        <Box className="detail-item" display="flex">
                            <Text className="order-number">01</Text>
                            <Box className="trend-detail-text">
                                <Heading fontSize="17px" className="news-heading">News Needs to Meet Its Audiences Where They Are</Heading>
                                <Text fontWeight="600" fontSize="13px" mb="1" mt="1" >Dave Rogers in Food</Text>
                                <Text fontSize="11px">
                                    Jun 14 - 3 min read *
                                </Text>
                            </Box>
                        </Box>
                        <Box className="detail-item" display="flex">
                            <Text className="order-number">02</Text>
                            <Box className="trend-detail-text">
                                <Heading  fontSize="17px" className="news-heading">News Needs to Meet Its Audiences Where They Are</Heading>
                                <Text fontWeight="600" fontSize="13px" mb="1" mt="1" >Dave Rogers in Food</Text>
                                <Text fontSize="11px">
                                    Jun 14 - 3 min read *
                                </Text>
                            </Box>
                        </Box>
                        <Box className="detail-item" display="flex">
                            <Text className="order-number">03</Text>
                            <Box className="trend-detail-text">
                                <Heading  fontSize="17px" className="news-heading">News Needs to Meet Its Audiences Where They Are</Heading>
                                <Text fontWeight="600" fontSize="13px" mb="1" mt="1" >Dave Rogers in Food</Text>
                                <Text fontSize="11px">
                                    Jun 14 - 3 min read *
                                </Text>
                            </Box>
                        </Box>
                        <Box className="detail-item" display="flex">
                            <Text className="order-number">04</Text>
                            <Box className="trend-detail-text">
                                <Heading  fontSize="17px" className="news-heading">News Needs to Meet Its Audiences Where They Are</Heading>
                                <Text fontWeight="600" fontSize="13px" mb="1" mt="1" >Dave Rogers in Food</Text>
                                <Text fontSize="11px">
                                    Jun 14 - 3 min read *
                                </Text>
                            </Box>
                        </Box>
                        <a className="all-trend" href="javascript:;">SEE ALL TRENDS <ChevronRight></ChevronRight> </a>
                    </Box>
                </Box>
            </Flex>
            <Flex margin="50px">
                <Box width="50%">
                    <Image src={img} alt="Home Image"></Image>
                </Box>
                <Stack
                    width="50%"
                    padding={"50px"}
                    background="#f5f5f5"
                    display="flex" alignItems="center"
                >
                    <Box>
                        <Heading fontSize="17px" color="gray">EDITOR'S PICK</Heading>
                        <Heading display={"flex"} fontSize="25px" justifyContent={"space-between"}>
                            <Text className="news-heading">News Needs to Meet Its Audiences Where They Are</Text>                        
                        </Heading>
                        <Text lineHeight="1.7" fontSize="14px" marginTop="15px" marginBottom="15px">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur ut at quae omnis pariatur
                                abcaecati possimus nisi ea istel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur ut at quae omnis pariatur
                                abcaecati possimus nisi ea istel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur ut at quae omnis pariatur
                                abcaecati possimus nisi ea istel.
                        </Text>
                        <Text fontWeight="600" fontSize="14px">Dave Rogers in Food</Text>
                        <Text fontSize="13px">
                            Jun 14 - 3 min read *
                        </Text>
                    </Box>
                </Stack>
            </Flex>
            <Flex className="pick-section" marginLeft="50px" marginRight="50px" marginBottom="150px">
                <Box className="left-pick" width="50%">
                    <Heading marginBottom="50px" className="trend-heading news-heading">
                        Politics
                    </Heading>
                    <Box className="detail-item" display="flex">
                        <Box width="30%">
                            <Image src={img}></Image>
                        </Box>
                        <Box width="70%" className="trend-detail-item">
                            <Heading fontSize="17px" className="news-heading">News Needs to Meet Its Audiences Where They Are</Heading>
                            <Text className="trend-detail-text-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur ut at quae omnis pariatur
                                abcaecati possimus nisi ea istel. Lorem ipsum dolor sit amet, consectetur adipisicing elit</Text>
                            <Text fontWeight="600" fontSize="13px">Dave Rogers in Food</Text>
                            <Text fontSize="12px">
                                Jun 14 - 3 min read *
                            </Text>
                        </Box>
                    </Box>
                    <Box className="detail-item" display="flex">
                        <Box width="30%">
                            <Image src={img}></Image>
                        </Box>
                        <Box width="70%" className="trend-detail-item">
                            <Heading  fontSize="17px" className="news-heading">News Needs to Meet Its Audiences Where They Are</Heading>
                            <Text className="trend-detail-text-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur ut at quae omnis pariatur
                                abcaecati possimus nisi ea istel. Lorem ipsum dolor sit amet, consectetur adipisicing elit</Text>
                            <Text fontWeight="600" fontSize="13px">Dave Rogers in Food</Text>
                            <Text fontSize="12px">
                                Jun 14 - 3 min read *
                            </Text>
                        </Box>
                    </Box>
                    <Box className="detail-item" display="flex">
                        <Box width="30%">
                            <Image src={img}></Image>
                        </Box>
                        <Box width="70%" className="trend-detail-item">
                            <Heading  fontSize="17px" className="news-heading">News Needs to Meet Its Audiences Where They Are</Heading>
                            <Text className="trend-detail-text-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur ut at quae omnis pariatur
                                abcaecati possimus nisi ea istel. Lorem ipsum dolor sit amet, consectetur adipisicing elit</Text>
                            <Text fontWeight="600" fontSize="13px">Dave Rogers in Food</Text>
                            <Text fontSize="12px">
                                Jun 14 - 3 min read *
                            </Text>
                        </Box>
                    </Box>
                </Box>
                <Box className="trending" width="50%"  marginLeft="20px">
                    <Heading marginBottom="50px" className="trend-heading  news-heading">Business</Heading>
                    <Box className="detail-item" display="flex">
                        <Box width="30%">
                            <Image src={img}></Image>
                        </Box>
                        <Box width="70%" className="trend-detail-item">
                            <Heading fontSize="17px" className="news-heading">News Needs to Meet Its Audiences Where They Are</Heading>
                            <Text className="trend-detail-text-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur ut at quae omnis pariatur
                                abcaecati possimus nisi ea istel. Lorem ipsum dolor sit amet, consectetur adipisicing elit</Text>
                            <Text fontWeight="600" fontSize="13px">Dave Rogers in Food</Text>
                            <Text fontSize="12px">
                                Jun 14 - 3 min read *
                            </Text>
                        </Box>
                    </Box>
                    <Box className="detail-item" display="flex">
                        <Box width="30%">
                            <Image src={img}></Image>
                        </Box>
                        <Box width="70%" className="trend-detail-item">
                            <Heading  fontSize="17px" className="news-heading">News Needs to Meet Its Audiences Where They Are</Heading>
                            <Text className="trend-detail-text-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur ut at quae omnis pariatur
                                abcaecati possimus nisi ea istel. Lorem ipsum dolor sit amet, consectetur adipisicing elit</Text>
                            <Text fontWeight="600" fontSize="13px">Dave Rogers in Food</Text>
                            <Text fontSize="12px">
                                Jun 14 - 3 min read *
                            </Text>
                        </Box>
                    </Box>
                    <Box className="detail-item" display="flex">
                        <Box width="30%">
                            <Image src={img}></Image>
                        </Box>
                        <Box width="70%" className="trend-detail-item">
                            <Heading  fontSize="17px" className="news-heading">News Needs to Meet Its Audiences Where They Are</Heading>
                            <Text className="trend-detail-text-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur ut at quae omnis pariatur
                                abcaecati possimus nisi ea istel. Lorem ipsum dolor sit amet, consectetur adipisicing elit</Text>
                            <Text fontWeight="600" fontSize="13px">Dave Rogers in Food</Text>
                            <Text fontSize="12px">
                                Jun 14 - 3 min read *
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Flex>
            <Flex className="news-section" marginLeft="50px" marginRight="50px">
                <Box className="left-pick" width="75%">
                    <Heading marginBottom="50px" className="trend-heading news-heading">
                        Recent News
                    </Heading>
                    <Flex mb="10">
                        <Box width="70%" className="news-detail-item">
                            <Heading  fontSize="20px" className="news-heading">News Needs to Meet Its Audiences Where They Are</Heading>
                            <Text className="trend-detail-text-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur ut at quae omnis pariatur
                                abcaecati possimus nisi ea istel.  fontSize="11px"Lorem ipsum dolor sit amet, consectetur adipisicing elit</Text>
                            <Text fontWeight="600" fontSize="13px">Dave Rogers in Food</Text>
                            <Text fontSize="12px">
                                Jun 14 - 3 min read *
                            </Text>
                        </Box>
                        <Box width="30%">
                            <Image src={img}></Image>
                        </Box>
                    </Flex>
                    <Flex mb="10">
                        <Box width="70%" className="news-detail-item">
                            <Heading  fontSize="20px" className="news-heading">News Needs to Meet Its Audiences Where They Are</Heading>
                            <Text className="trend-detail-text-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur ut at quae omnis pariatur
                                abcaecati possimus nisi ea istel.  fontSize="11px"Lorem ipsum dolor sit amet, consectetur adipisicing elit</Text>
                            <Text fontWeight="600" fontSize="13px">Dave Rogers in Food</Text>
                            <Text fontSize="12px">
                                Jun 14 - 3 min read *
                            </Text>
                        </Box>
                        <Box width="30%">
                            <Image src={img}></Image>
                        </Box>
                    </Flex>
                    <Flex mb="10">
                        <Box width="70%" className="news-detail-item">
                            <Heading  fontSize="20px" className="news-heading">News Needs to Meet Its Audiences Where They Are</Heading>
                            <Text className="trend-detail-text-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur ut at quae omnis pariatur
                                abcaecati possimus nisi ea istel.Lorem ipsum dolor sit amet, consectetur adipisicing elit</Text>
                            <Text fontWeight="600" fontSize="13px">Dave Rogers in Food</Text>
                            <Text fontSize="12px">
                                Jun 14 - 3 min read *
                            </Text>
                        </Box>
                        <Box width="30%">
                            <Image src={img}></Image>
                        </Box>
                    </Flex>
                    <Flex>
                        <a href="javascript:;" className="page-index">1</a>
                        <a href="javascript:;" className="page-index">2</a>
                        <a href="javascript:;" className="page-index">3</a>
                        <a href="javascript:;" className="page-index">4</a>
                    </Flex>
                </Box>
                <Box className="trending" width="25%"  marginLeft="30px">
                    <Heading marginBottom="50px" className="trend-heading  news-heading">Popular Posts</Heading>
                    <Box className="trend-detail">
                        <Box className="detail-item" display="flex" mb="10">
                            <Text className="order-number">01</Text>
                            <Box className="trend-detail-text">
                                <Heading fontSize="17px" mb="3" className="news-heading">News Needs to Meet Its Audiences Where They Are</Heading>
                                <Text fontWeight="600" fontSize="12px">Dave Rogers in Food</Text>
                                <Text fontSize="11px">
                                    Jun 14 - 3 min re fontSize="13px"ad *
                                </Text>
                            </Box>
                        </Box>
                        <Box className="detail-item" display="flex" mb="10">
                            <Text className="order-number">02</Text>
                            <Box className="trend-detail-text">
                                <Heading  fontSize="17px" mb="3" className="news-heading">News Needs to Meet Its Audiences Where They Are</Heading>
                                <Text fontWeight="600" fontSize="12px"> Dave Rogers in Food</Text>
                                <Text fontSize="11px">
                                    Jun 14 - 3 min rea *
                                </Text>
                            </Box>
                        </Box>
                        <Box className="detail-item" display="flex" mb="10">
                            <Text className="order-number">03</Text>
                            <Box className="trend-detail-text">
                                <Heading  fontSize="17px" mb="3" className="news-heading">News Needs to Meet Its Audiences Where They Are</Heading>
                                <Text fontWeight="600" fontSize="12px"> Dave Rogers in Food</Text>
                                <Text fontSize="11px">
                                    Jun 14 - 3 min rea *
                                </Text>
                            </Box>
                        </Box>
                        <Box className="detail-item" display="flex" mb="10">
                            <Text className="order-number">04</Text>
                            <Box className="trend-detail-text">
                                <Heading  fontSize="17px" mb="3" className="news-heading">News Needs to Meet Its Audiences Where They Are</Heading>
                                <Text fontWeight="600" fontSize="12px"> Dave Rogers in Food</Text>
                                <Text fontSize="11px">
                                    Jun 14 - 3 min rea *
                                </Text>
                            </Box>
                        </Box>
                        <a className="all-trend" href="javascript:;">SEE ALL TRENDS <ChevronRight></ChevronRight> </a>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

export default HomePage;
