import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BsBoxArrowDown } from "react-icons/bs";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import ScreenWidth from "../Layout/ScreenWidth";

const Join = () => {
    return (
        <Box bgImage="/footer.png" py="64px">
            <ScreenWidth>
                <Box textAlign="center">
                    <Text fontSize={["22px", null, "52px"]} fontWeight="900">
                        Join Our community &amp; <br />
                        get Early access <br />
                        {"🤙"}
                    </Text>

                    <Flex
                        gap={["16px", null, "32px"]}
                        justify="center"
                        flexDir={["column", null, "row"]}
                        mt="64px"
                    >
                        <Button
                            as="a"
                            href="https://twitter.com/KadenaSkellies"
                            px={["18px"]}
                            py="25px"
                            display="flex"
                            borderRadius="30px"
                            bgColor={"brand.green"}
                            color="#171923"
                            _hover={{ color: "#fff", bgColor: "#2c313d" }}
                        >
                            <Text as="span" pr="15px" fontSize="25px">
                                {" "}
                                <FaTwitter />{" "}
                            </Text>
                            Follow our Twiter
                        </Button>
                        <Button
                            as="a"
                            href="https://discord.gg/Xe9PvYAktw"
                            px={["18px"]}
                            py="25px"
                            display="flex"
                            borderRadius="30px"
                        >
                            <Text as="span" pr="15px" fontSize="25px">
                                {" "}
                                <FaDiscord />{" "}
                            </Text>
                            Join our Discord
                        </Button>
                    </Flex>
                </Box>

                {/* <Box>
                    <Box>
                        <Box>
                            <span>
                                <Image src="/star_6.svg" alt="" />
                            </span>
                            <span>
                                <Image src="/star_3.svg" alt="" />
                            </span>
                            <span>
                                <Image src="/star_1.svg" alt="" />
                            </span>
                            <span>
                                <Image src="/star_7.svg" alt="" />
                            </span>
                            <span>
                                <Image src="/star_4.svg" alt="" />
                            </span>
                            <span>
                                <Image src="/star_2.svg" alt="" />
                            </span>
                            <span>
                                <Image src="/star_5.svg" alt="" />
                            </span>
                        </Box>
                    </Box>
                </Box> */}
            </ScreenWidth>
        </Box>
    );
};

export default Join;
