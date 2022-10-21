import { Box, Text } from "@chakra-ui/react";
import React from "react";
import ScreenWidth from "../Layout/ScreenWidth";
import Que from "./Que";

const Faq = () => {
    return (
        <Box
            bgImage="/faq.png"
            bgSize="900"
            bgPos="center"
            bgRepeat="no-repeat"
            bgColor="#040c12"
        >
            <ScreenWidth>
                <Box py="64px">
                    <Text textAlign="center" fontWeight="900" fontSize={["24px",null,"32px"]}>
                        FREQUENTLY ASKED QUESTIONS
                    </Text>

                    <Box maxW="800px" mx="auto" mt="64px">
                        <Que />
                    </Box>
                </Box>
            </ScreenWidth>
        </Box>
    );
};

export default Faq;
