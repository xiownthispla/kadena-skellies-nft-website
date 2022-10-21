import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import SrceenWidth from "../Layout/ScreenWidth";
import { FaCrown } from "react-icons/fa";
const Utilities = () => {
    return (
        <Box mt="25px">
            <SrceenWidth>
                <Text
                    fontWeight="900"
                    fontSize={["24px", null, "56px"]}
                    textAlign="center"
                >
                    Utility for the community
                </Text>

                <Flex mt="64px" gap="32px">
                    <Box border="1px" borderColor="whiteAlpha.400" p="16px">
                        <Flex
                            w="70px"
                            h="70px"
                            border="1px solid red"
                            mx="auto"
                            justify={"center"}
                            align={"center"}
                        >
                            <Icon as={FaCrown} fontSize="30px" />
                        </Flex>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ex molestiae qui delectus! Perspiciatis fugiat ut
                        sit, iure quae maxime nostrum quisquam similique nemo
                        excepturi pariatur obcaecati? Cupiditate, laudantium
                        architecto magni praesentium ratione earum delectus
                        provident qui facilis nam, quidem quam nulla
                        exercitationem. Officia, voluptate. Consequuntur
                        repellat neque ducimus placeat id hic quia nobis vero.
                        Quia officia ipsam error et id incidunt minus neque
                        praesentium facilis!
                    </Box>
                    <Box>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ex molestiae qui delectus! Perspiciatis fugiat ut
                        sit, iure quae maxime nostrum quisquam similique nemo
                        excepturi pariatur obcaecati? Cupiditate, laudantium
                        architecto magni praesentium ratione earum delectus
                        provident qui facilis nam, quidem quam nulla
                        exercitationem. Officia, voluptate. Consequuntur
                        repellat neque ducimus placeat id hic quia nobis vero.
                        Quia officia ipsam error et id incidunt minus neque
                        praesentium facilis!
                    </Box>
                    <Box>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ex molestiae qui delectus! Perspiciatis fugiat ut
                        sit, iure quae maxime nostrum quisquam similique nemo
                        excepturi pariatur obcaecati? Cupiditate, laudantium
                        architecto magni praesentium ratione earum delectus
                        provident qui facilis nam, quidem quam nulla
                        exercitationem. Officia, voluptate. Consequuntur
                        repellat neque ducimus placeat id hic quia nobis vero.
                        Quia officia ipsam error et id incidunt minus neque
                        praesentium facilis!
                    </Box>
                </Flex>
            </SrceenWidth>
        </Box>
    );
};

export default Utilities;
