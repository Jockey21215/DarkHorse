// node_modules
import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import {
    Flex,
    Box,
    Heading,
    Spacer,
    Button,
    Menu,
    MenuList,
    MenuButton,
    Input,
    Image,
} from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";

// store
import { RootState } from "../../store";
import { logout } from "../../store/me-slice";

// context
import AuthContext from "../../store/auth-context";

// config
import { BASE_SERVER_API_URL } from "../../config";

// consts
import { PATH } from "../../consts";

//css
import "./header.css";

//images
import facebookImg from "./icons8-facebook-f.svg";
import instagramImg from "./icons8-instagram.svg";
import twitterImg from "./icons8-twitter.svg";

const HeaderComponent: React.FC = () => {
    const authContext = useContext(AuthContext);
    const dispatch = useDispatch();
    const history = useHistory();
    const me = useSelector((state: RootState) => state.me.me);

    const logoutHandler = () => {
        dispatch(logout());
        authContext.logout();
        history.push(PATH.HOME);
    };

    return (
        <> 
            <Flex bgColor={"white"} className="top-header">
                <Box p="2">
                    <Link to={PATH.HOME}>
                        <Heading className="logo" size="md">Meranda</Heading>
                    </Link>
                </Box>
                <Spacer />
                <Box>
                    <Flex alignItems="center">
                        <Image src={facebookImg} alt="Facebook Image" className="social-image"></Image>
                        <Image src={instagramImg} alt="Instagram Image" className="social-image"></Image>
                        <Image src={twitterImg} alt="Twitter Image" className="social-image"></Image>
                        <Input height="50px" mr="20px" className="email-input" boxShadow="0px 1px 0px 0px grey" border="none" padding="25px" background="white" color="black" borderRadius="26px" width="200px" placeholder="Search" ></Input>
                        <Button background="black" width="55px" borderRadius="20px" height="50px"><SearchIcon color="white"></SearchIcon></Button>
                    </Flex>
                </Box>
            </Flex>
            {authContext.isLoggedIn ? (
                <Box display={"flex"} alignItems={"center"} className="menu-list">
                    <Link to={PATH.HOME} className="menu-item">
                            HOME
                    </Link>
                    <Link to={PATH.BLOGS} className="menu-item">
                            Blogs
                    </Link>
                    <Link to={PATH.NEWBLOG} className="menu-item">
                            New Blog
                    </Link>
                    <Link to={PATH.PROFILE} className="menu-item">
                            Profile
                    </Link>
                    <a href="javascript:;" onClick={logoutHandler} className="menu-item">Logout</a>
                </Box>
            ) : (
                <Box className="menu-list">
                    <Link to={PATH.SIGNIN} className="menu-item">
                            Sign in
                    </Link>
                    <Link to={PATH.SIGNUP} className="menu-item">
                        Sign Up
                    </Link>
                </Box>
            )}
        </>
    );
};

export default HeaderComponent;
