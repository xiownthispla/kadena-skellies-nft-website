import { Box } from "@chakra-ui/react";
import React from "react";

const ScreenWidth = ({ children }) => {
    return (
        <Box maxWidth="1140px" mx="auto" px="16px">
            {children}
        </Box>
    );
};

export default ScreenWidth;
