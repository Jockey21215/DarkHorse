// node_modules
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Text, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

// components
import BlogViewComponent from "../../components/BlogView";

// store
import { fetchBlog } from "../../store/blogs-slice";
import { RootState } from "../../store";

// consts
import { PATH } from "../../consts";

const BlogPage = () => {
    const blogs = useSelector((state: RootState) => state.blogs.blogs);
    const dispatch = useDispatch();
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        dispatch(fetchBlog(id));
    }, [dispatch, id]);

    return (
        <Box width={"90%"}>
            {blogs.length > 0 &&
                blogs.map((blog) => (
                    <BlogViewComponent key={blog.id} blog={blog} />
                ))}
        </Box>
    );
};

export default BlogPage;
