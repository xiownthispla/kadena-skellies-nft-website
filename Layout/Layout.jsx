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
                    content="We are a limited NFT collection on the Kadena Blockchain. We are bringing the Graveyard to KDA! This is our first evolution of Skellies with another 2 to follow."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box {...props} fontFamily="fira">
                <Navbar />
                <Box color="#fff">{children}</Box>
            </Box>
        </>
    );
};

export default Layout;
