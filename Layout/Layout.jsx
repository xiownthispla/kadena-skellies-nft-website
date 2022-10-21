import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";

const Layout = ({ children, ...props }) => {
    return (
        <>
            <Head>
                <title>KADENA SKELLIES</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box {...props} fontFamily="fira">
                <Navbar />
                <Box>{children}</Box>
            </Box>
        </>
    );
};

export default Layout;
