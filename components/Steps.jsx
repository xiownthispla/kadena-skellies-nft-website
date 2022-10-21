import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import ScreenWidth from "../Layout/ScreenWidth";
import Scroll from "./Scroll";

const Steps = () => {
    return (
        <Box
            py="64px"
            bgColor="#040c12"
            bgImage="/steps.png"
            bgPosition="center"
            bgSize="contain"
            bgRepeat="no-repeat"
        >
            <ScreenWidth>
                <Box mt="">
                    <Text
                        className="title"
                        fontSize="16px"
                        color="brand.green"
                        fontWeight="900"
                    >
                        EASY STEPS
                    </Text>
                    <Box pt="24px">
                        <SimpleGrid minChildWidth="250px" gap="12px">
                            <Flex align="center" w="100%">
                                <Text
                                    className="strokeText"
                                    color="transparent"
                                    fontSize="65px"
                                    fontWeight="900"
                                    mr="20px"
                                >
                                    1
                                </Text>

                                <Text
                                    fontSize="22px"
                                    fontWeight="900"
                                    lineHeight="shorter"
                                >
                                    Join our <br /> community
                                </Text>
                            </Flex>

                            <Flex align="center" w="100%">
                                <Text
                                    className="strokeText2"
                                    color="transparent"
                                    fontSize="65px"
                                    fontWeight="900"
                                    mr="20px"
                                >
                                    2
                                </Text>

                                <Text
                                    fontSize="22px"
                                    fontWeight="900"
                                    lineHeight="shorter"
                                >
                                    Partner with a <br /> Arkade marketplace
                                </Text>
                            </Flex>
                            <Flex align="center" w="100%">
                                <Text
                                    className="strokeText3"
                                    color="transparent"
                                    fontSize="65px"
                                    fontWeight="900"
                                    mr="20px"
                                >
                                    3
                                </Text>

                                <Text
                                    fontSize="22px"
                                    fontWeight="900"
                                    lineHeight="shorter"
                                >
                                    Allocate all OG <br /> roles for Free Mints
                                </Text>
                            </Flex>

                            <Flex align="center" w="100%">
                                <Text
                                    className="strokeText4"
                                    color="transparent"
                                    fontSize="65px"
                                    fontWeight="900"
                                    mr="20px"
                                >
                                    4
                                </Text>

                                <Text
                                    fontSize="22px"
                                    fontWeight="900"
                                    lineHeight="shorter"
                                >
                                    Mint 1,250 Kadena <br />
                                    Skellies
                                </Text>
                            </Flex>
                        </SimpleGrid>
                    </Box>
                </Box>
            </ScreenWidth>
            <Scroll />
        </Box>
    );
};

export default Steps;
