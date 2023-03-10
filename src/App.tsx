// node_modules
import React, { useContext, useEffect } from "react";
import {
    Route,
    Switch,
    useHistory,
    useLocation,
    Redirect,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import "@fontsource/inter";

import ConnectWalletButton from "./components/ConnectWalletButton";
import AccountModal from "./components/AccountModal";
import Theme from "./components/Theme";

// pages
import HomePage from "./pages/Home";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import BlogsPage from "./pages/Blogs";
import BlogPage from "./pages/Blog";
import UpdateBlogPage from "./pages/UpdateBlog";
import NewBlogPage from "./pages/NewBlog";
import ProfilePage from "./pages/Profile";

// components
import LayoutComponent from "./components/Layout";

// store
import { fetchMe } from "./store/me-slice";

// contexts
import AuthContext from "./store/auth-context";

// consts
import { PATH } from "./consts";

// console.log("hello");

const App = () => {
    const authContext = useContext(AuthContext);
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    if (
        location.pathname !== PATH.HOME &&
        location.pathname !== PATH.SIGNIN &&
        location.pathname !== PATH.SIGNUP &&
        !authContext.isLoggedIn
    ) {
        history.push(PATH.SIGNIN);
    }

    useEffect(() => {
        if (authContext.token) {
            dispatch(fetchMe(authContext.token));
        }
    }, [dispatch, authContext.token]);

    return (
        <ChakraProvider theme={Theme}>

            <LayoutComponent>
                {!authContext.isLoggedIn && (
                    <Switch>
                        <Route path={PATH.HOME} exact>
                            <HomePage />
                        </Route>
                        <Route path={PATH.SIGNIN}>
                            <SignInPage />
                        </Route>
                        <Route path={PATH.SIGNUP}>
                            <SignUpPage />
                        </Route>
                        <Redirect from={"*"} to={PATH.HOME} />
                    </Switch>
                )}
                {authContext.isLoggedIn && (
                    <Switch>
                        <Route path={PATH.HOME} exact>
                            <HomePage />
                        </Route>
                        <Route path={PATH.BLOGS}>
                            <BlogsPage />
                        </Route>
                        <Route path={`${PATH.BLOG}/:id`}>
                            <BlogPage />
                        </Route>
                        <Route path={PATH.NEWBLOG}>
                            <NewBlogPage></NewBlogPage>
                        </Route>
                        <Route path={`${PATH.UPDATE}/:id`}>
                            <UpdateBlogPage />
                        </Route>
                        <Route path={PATH.PROFILE}>
                            <ProfilePage></ProfilePage>
                        </Route>
                        <Redirect from={"*"} to={PATH.HOME} />
                    </Switch>
                )}
            </LayoutComponent>`
        </ChakraProvider>
    );
};

export default App;
