import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import ScreenWidth from "../Layout/ScreenWidth";

const About = () => {
    return (
        <Box bgImage="/about.png" bgPosition="" bgColor="#040c12">
            <ScreenWidth>
                <Box py="64px">
                    <Text
                        fontWeight="900"
                        fontSize={["24px", null, "36px"]}
                        textAlign="center"
                        mb="64px"
                    >
                        About
                    </Text>

                    <Flex gap="20px" flexDir={["column", null, "row"]}>
                        <Flex
                            w={["100%", null, "50%"]}
                            justify="center"
                            align="center"
                        >
                            <Box
                                p="32px"
                                maxWidth="320px"
                                className="bg"
                                position="relative"
                            >
                                <Image
                                    src="https://media.discordapp.net/attachments/1009914411223363604/1017473913774669824/Fbcz7xhWYAAIQK7.jpeg"
                                    alt="owener"
                                />
                                <Box position="relative">
                                    <Box
                                        minH="15px"
                                        mt="20px"
                                        className="miniBg"
                                        w="70%"
                                    ></Box>
                                    <Box
                                        minH="15px"
                                        w="50%"
                                        mt="15px"
                                        className="miniBg"
                                    ></Box>
                                    <Box
                                        position="absolute"
                                        minH="15px"
                                        w="40px"
                                        h="40px"
                                        borderRadius="100%"
                                        mt="15px"
                                        className="miniBg"
                                        right="0"
                                        top="0"
                                    ></Box>
                                </Box>
                            </Box>
                        </Flex>
                        <Flex
                            w={["100%", null, "50%"]}
                            //     justify="center"
                            align="center"
                        >
                            <Box maxWidth="450px">
                                <Text fontWeight="900" fontSize={["32px"]}>
                                    {" "}
                                    <Text
                                        as="span"
                                        fontSize={["16px"]}
                                        color="brand.green"
                                    >
                                        {" "}
                                        Founder:
                                    </Text>{" "}
                                    xiownthisp
                                </Text>
                                <Text mt="16px">
                                    An OG Kadena Miner since July 2021 and
                                    knowledgeable in mining cryptocurrency in
                                    general.
                                </Text>
                                <Text mt="18px">
                                    Also part of the OG Kongs team that started
                                    last year and has moved to Kadena Monster
                                    Kongs.
                                </Text>
                            </Box>
                        </Flex>
                    </Flex>
                </Box>
            </ScreenWidth>
        </Box>
    );
};

export default About;
