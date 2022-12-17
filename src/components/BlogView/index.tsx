// node_modules
import React from "react";
import { useHistory, Link } from "react-router-dom";
import {
    Heading,
    Text,
    Image,
    Stack,
    Divider,
    Button,
    Box,
    useToast,
} from "@chakra-ui/react";
import { ThumbUpRounded, DeleteRounded, EditRounded } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";

// store
import { fetchDeleteBlog, fetchThumbUp } from "../../store/blogs-slice";
import { RootState } from "../../store";

// models
import Blog from "../../models/Blog";

// config
import { BASE_SERVER_API_URL } from "../../config";

// consts
import { PATH } from "../../consts";

// props type
type Props = {
    blog: Blog;
};

const BlogViewComponent: React.FC<Props> = ({ blog, ...props }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const me = useSelector((state: RootState) => state.me.me);
    const toast = useToast();

    const onThumbUp = () => {
        dispatch(
            fetchThumbUp(blog.id, (error: string) => {
                toast({
                    title: `${error}`,
                    status: "error",
                    isClosable: true,
                    duration: 3000,
                });
            })
        );
    };

    return (
        <>
            <Stack
                border={"1px solid lightgray"}
                mt={"8px"}
                padding="50px" paddingBottom="30px" mb="200"
            >
                <Heading display={"flex"} justifyContent={"space-between"}>
                    <Text>{blog.title}</Text>
                    <Text fontSize="20px">{blog.username}</Text>
                </Heading>
                <Divider></Divider>
                <Text paddingTop="23px" paddingBottom="23px">{blog.text}</Text>
                <Divider></Divider>
                {blog.imageUrl && (
                    <Image
                        width={"100%"}
                        height={"300px"}
                        src={`${BASE_SERVER_API_URL}/${blog.imageUrl}`}
                    />
                )}
                {blog.imageUrl && <Divider></Divider>}
                <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"flex-end"}
                >
                    <Button onClick={onThumbUp} marginTop="20px">
                        <ThumbUpRounded />
                    </Button>
                    &nbsp;&nbsp;
                    <Heading fontSize="21px" marginTop="20px">{blog.like}</Heading>                   
                    
                </Box>
            </Stack>
        </>
    );
};

export default BlogViewComponent;
