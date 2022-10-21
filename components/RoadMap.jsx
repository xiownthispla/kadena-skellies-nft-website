import {
    Box,
    Flex,
    Icon,
    Image,
    List,
    ListIcon,
    ListItem,
    SimpleGrid,
    Text,
} from "@chakra-ui/react";
import React from "react";
import SrceenWidth from "../Layout/ScreenWidth";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";
const RoadMap = () => {
    return (
        <Box id="roadmap">
            <Box
                // mt="25px"
                py="64px"
                bgImage="/bgImage.png"
                // bgPos="bottom"
                // bgSize="cover"
                bgRepeat="no-repeat"
            >
                <SrceenWidth>
                    <Text
                        fontWeight="900"
                        fontSize={["24px", null, "56px"]}
                        textAlign="center"
                    >
                        ROADMAP
                    </Text>

                    <Box mt="32px">
                        <Text
                            fontSize={["24px", null, "24px"]}
                            fontWeight="900"
                            //     textAlign={"center"}
                        >
                            Evolution 1​
                        </Text>

                        <Image src="/line.png" alt="Image" mt="16px" />

                        <SimpleGrid
                            minChildWidth={["300px", null, "310px"]}
                            gap={["16px", null,"32px"]}
                            mt="20px"
                        >
                            {/* Pharse one  */}
                            <Box p="16px">
                                <Text
                                    mb="19px"
                                    textTransform="uppercase"
                                    fontWeight="900"
                                    color="brand.green"
                                >
                                    pharse 01
                                    <Icon
                                        as={GiCheckMark}
                                        ml="10px"
                                        display="inline-block"
                                    />
                                </Text>
                                <List spacing={3}>
                                    {pharse_1.map((text, i) => {
                                        return (
                                            <ListItem key={i}>
                                                <ListIcon
                                                    as={BsFillCheckCircleFill}
                                                    color="green.500"
                                                />
                                                {text}
                                            </ListItem>
                                        );
                                    })}
                                </List>
                            </Box>

                            {/* Phase two */}
                            <Box p="16px">
                                <Text
                                    mb="19px"
                                    textTransform="uppercase"
                                    fontWeight="900"
                                    color="brand.green"
                                >
                                    pharse 02
                                    <Icon
                                        as={GiCheckMark}
                                        ml="10px"
                                        display="inline-block"
                                    />
                                </Text>
                                <List spacing={3}>
                                    {pharse_2.map((text, i) => {
                                        return (
                                            <ListItem key={i}>
                                                <ListIcon
                                                    as={BsFillCheckCircleFill}
                                                    color="green.500"
                                                />
                                                {text}
                                            </ListItem>
                                        );
                                    })}
                                </List>
                            </Box>
                            {/* PHRASE 3 */}

                            <Box p="16px">
                                <Text
                                    mb="19px"
                                    textTransform="uppercase"
                                    fontWeight="900"
                                    color="brand.green"
                                >
                                    pharse 03
                                    <Icon
                                        as={GiCheckMark}
                                        ml="10px"
                                        display="inline-block"
                                    />
                                </Text>
                                <List spacing={3}>
                                    {pharse_3.map((text, i) => {
                                        return (
                                            <ListItem key={i}>
                                                <ListIcon
                                                    as={BsFillCheckCircleFill}
                                                    color="green.500"
                                                />
                                                {text}
                                            </ListItem>
                                        );
                                    })}
                                </List>
                            </Box>
                        </SimpleGrid>
                    </Box>
                </SrceenWidth>
            </Box>
        </Box>
    );
};

export default RoadMap;

const pharse_1 = [
    "Project launch",
    "Build up our community",
    "Partner with a minting marketplace",
    "Allocate all OG roles for Free Mints",
    "Mint 1,250 Kadena Skellies",
];
const pharse_2 = [
    "Website launch",
    "Strategic partnerships in Kadena Ecosystem",
    "Utility integration",
];

const pharse_3 = ["Prepare for Evolution"];
