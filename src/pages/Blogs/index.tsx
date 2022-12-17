// node_modules
import React, { useEffect, useState, useRef } from "react";
import { Box, Text, Button, Select, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { ethers } from "ethers";

// components
import BlogSummaryComponent from "../../components/BlogSummary";
import PaginationComponent from "../../components/Pagination";

// store
import { fetchBlogs } from "../../store/blogs-slice";
import { RootState } from "../../store";

import getBlogContract from "../../contracts/Blog";

declare let window: any;

const BlogsPage = () => {
    const blogs = useSelector((state: RootState) => state.blogs.blogs);
    const count = useSelector((state: RootState) => state.blogs.count);
    const dispatch = useDispatch();

    const titleRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const [allPagesNumber, setAllPagesNumber] = useState(0);
    const [pageIndex, setPageIndex] = useState(1);
    const [itemCount, setItemCount] = useState(5);
    const [sortSet, setSortDir] = useState("blogs.createdAt");
    const [title, setTitle] = useState("");

    
    
   
    useEffect(() => {
        dispatch(fetchBlogs(pageIndex, itemCount, title, sortSet));
        
    }, [dispatch, pageIndex, itemCount, title, sortSet]);

    useEffect(() => {
        setAllPagesNumber(Math.ceil(count / itemCount));
    }, [count, itemCount]);

    

    return (
        <Box width={"90%"}>
            <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                marginTop="20px"
                marginBottom="20px"
            >
                
                <Box display={"flex"} alignItems={"center"}>
                    <Text>Count: </Text>
                    <Select
                        borderRadius="none"
                        variant="outline"
                        defaultValue={itemCount}
                        onChange={(event) => {
                            setItemCount(Number(event.target.value));
                        }}
                    >
                        <option value={5}>5 Blogs</option>
                        <option value={10}>10 Blogs</option>
                        <option value={20}>20 Blogs</option>
                    </Select>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                    <Text>Sort: </Text>
                    <Select
                        borderRadius="none"
                        variant="outline"
                        defaultValue={"blogs.createdAt"}
                        onChange={(event) => {
                            setSortDir(String(event.target.value));
                        }}
                    >
                        <option value={"blogs.createdAt"}>Date</option>
                        <option value={"like"}>ThumbUp</option>
                        <option value={"blogs.viewCount"}>View</option>
                    </Select>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                    <Text>Search: </Text>
                    <Input
                        borderRadius="none"
                        width="auto"
                        placeholder="Please input search title"
                        ref={titleRef}
                    />
                    <Button borderRadius="none" onClick={() => setTitle(titleRef.current.value)}>
                        <SearchIcon />
                    </Button>
                </Box>
                
            </Box>
            {blogs.length > 0 ? (
                blogs.map((blog) => (
                    <BlogSummaryComponent key={blog.id} blog={blog} />
                ))
            ) : (
                <Text>No search result!</Text>
            )}
            <PaginationComponent allPagesCount={allPagesNumber} changePage={(page: number = 1) => {setPageIndex(page)}}></PaginationComponent>
        </Box>
    );
};

export default BlogsPage;
