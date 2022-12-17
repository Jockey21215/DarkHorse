// node_modules
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Heading, Text, Stack, Divider, Box, Button } from "@chakra-ui/react";
import { ThumbUp, RemoveRedEye } from "@material-ui/icons";
import { ethers } from "ethers";


// models
import Blog from "../../models/Blog";

//contracts
import getBlogContract from "../../contracts/Blog";

// consts
import { PATH } from "../../consts";

//css
import "./blog.css";

//images
import blogImage from "./sea.jpg";
import { RootState } from "../../store";
import { fetchBlogs, fetchDeleteBlog } from "../../store/blogs-slice";

// props type
type Props = {
    blog: Blog;
};

declare let window: any;

const BlogSummaryComponent: React.FC<Props> = ({ blog, ...props }) => {
    const me = useSelector((state: RootState) => state.me.me);
    const [payblogs, setPayBlogs] = useState<any>([]);
    const [account, setAccount] = useState<string>("");

    const dispatch = useDispatch();
    const history = useHistory();


    const deleteBlog = () => {
        dispatch(fetchDeleteBlog(blog.id));
        dispatch(fetchBlogs(1, 5, "", "blogs.createdAt"));
    }

    const buyBlog = async () => {
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const contract = getBlogContract(signer as ethers.Signer);
        
        const tx = await contract.buy(blog.id);
        await tx.wait();
        getBlogs();
        
    }

    const getBlogs = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const contract = getBlogContract(signer as ethers.Signer);
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        
            const pblogs = await contract.getAllBlogs();

            setPayBlogs(pblogs);
            setAccount(accounts[0]);
        
    }


    useEffect(() => { getBlogs() }, []);
    const readBlog = () => {
        history.push(`${PATH.BLOG}/${blog.id}`);
    }
    console.log("helo")
    console.log(payblogs);
    return (
        <>
            <Box className="blog-item">
                <Box display="flex">
                    <Stack
                        width="80%"
                        mt={"8px"}
                        mb="40px"
                        padding={"20px"}
                        boxShadow="sm"
                        _hover={{ boxShadow: "md" }}
                    >
                        <Heading display={"flex"} fontSize="20px" justifyContent={"space-between"}>
                            <Text cursor="pointer" onClick={readBlog}>{blog.title}</Text>
                            {blog.userId === me.id && (
                                <Text>
                                    <Link to={`${PATH.UPDATE}/${blog.id}`}>
                                        <Button borderRadius="none" mr="2">Update</Button>
                                    </Link>
                                    <Button borderRadius="none" mr="2" onClick={deleteBlog}>Delete</Button>
                                    {account.toUpperCase() !== String(payblogs[blog.id]).toUpperCase() &&
                                        <Button borderRadius="none" onClick={buyBlog}>Buy</Button>
                                    }
                                </Text>
                            )}
                        </Heading>
                        <Text height={"25px"} overflowY={"hidden"}>
                            {blog.text}
                        </Text>
                        <Text fontWeight="600">{blog.username}</Text>
                        <Text
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                        >
                            <span className="">{blog.createdAt}</span>
                            <span className="blog-span">
                                <ThumbUp></ThumbUp>
                                &nbsp;
                                {blog.like}
                                &nbsp; &nbsp;
                                <RemoveRedEye></RemoveRedEye>
                                &nbsp;
                                {blog.viewCount}
                            </span>
                        </Text>
                    </Stack>

                    <Box width="20%" height="100%">
                        <img src={blogImage} className="blog-img" alt="blog-image" width="300px"></img>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default BlogSummaryComponent;
