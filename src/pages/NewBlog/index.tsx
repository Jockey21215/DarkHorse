// node_modules
import React  from "react";
import { useToast } from "@chakra-ui/toast";
import { useHistory } from "react-router-dom";

//components
import BlogAddEditComponent from "../../components/BlogAddEdit";

//config
import { SERVER_API_URL } from "../../config";

// consts
import { PATH } from "../../consts";


const NewBlogPage = () => {

    const API_URL = SERVER_API_URL;
    const toast = useToast();
    const history = useHistory();

    const BlogSave = async (title: string, text: string, imageUrl: string) => {
        try {
            const response = await fetch(`${API_URL}/blogs/add`, {
                method: "POST",
                body: JSON.stringify({
                    title,
                    text,
                    imageUrl
                }),
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
            });
            const responseData: {
                message: string;
            } = await response.json();
            toast({
                title: `${responseData.message}`,
                status: "info",
                isClosable: true,
                duration: 3000,
            });
            history.push(PATH.BLOGS);
        } catch (error) {
            toast({
                title: `${error}`,
                status: "error",
                isClosable: true,
                duration: 3000,
            })
        }
    }

    return (
       
        <BlogAddEditComponent data={{ title: "", text: "", imageUrl: "" }} setData={BlogSave}></BlogAddEditComponent>
        
    );
}

export default NewBlogPage;