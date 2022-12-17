// node_modules
import React, { useEffect, useRef, useState } from "react";
import { Button, Input, Textarea, Box, Text, Image } from "@chakra-ui/react"

// consts
import { PATH } from "../../consts";

//components
import ImageUploadComponent from "../ImageUpload";

// config
import { BASE_SERVER_API_URL } from "../../config";

// props type
type Props = {
    data : {
        title: string;
        text: string;
        imageUrl: string;
    };
    setData: Function;
}

const BlogAddEditComponent: React.FC<Props> = ({ data = {title: "", text: "", imageUrl: ""}, setData }) => {
    console.log(data);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const titleRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const textRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>
    const [mainImageUrl, setImageUrl] = useState(data.imageUrl);
    
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        
        setData(titleRef.current.value, textRef.current.value, mainImageUrl);
    }

    useEffect(() => {
        setTitle(data.title);
    }, [data.title]);

    useEffect(() => {
        setImageUrl(data.imageUrl);
    }, [data.imageUrl]);

    useEffect(() => {
        setText(data.text);
    }, [data.text]);

    const handleTitle = (event: any) => {
        setTitle(event.target.value);
    }

    const handleText = (event: any) => {
        setText(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box mt="20" minHeight="500px">
                <Text>Title:</Text>
                <Input ref={titleRef} mb="10" value={title} required onChange={handleTitle}></Input>
                <Text>Text:</Text>
                <Textarea ref={textRef} resize="none" value={text} mb="10" onChange={handleText} required></Textarea>
                {/* <Input type="file" mb="10" ref={fileRef}></Input> */}
                <ImageUploadComponent setData={(uploadedImageUrl: string) =>
                            setImageUrl(uploadedImageUrl)
                        } 
                        />
                {mainImageUrl && (
                        <Image
                            width={"100%"}
                            height={"300px"}
                            src={`${BASE_SERVER_API_URL}/${mainImageUrl}`}
                        />
                    )}        
                <Button type="submit" mt="10" mb="10">Save Blog</Button>
            </Box>
        </form>
    );
}

export default BlogAddEditComponent;