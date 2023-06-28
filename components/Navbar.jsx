import { ReactNode } from "react";
import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    Center,
    Stack,
} from "@chakra-ui/react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import ScreenWidth from "../Layout/ScreenWidth";

const NavLink = ({ children }) => (
    <Link
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
            textDecoration: "none",
            bgColor: "gray.700",
        }}
        href={"#"}
    >
        {children}
    </Link>
);

export default function Navbar() {
    return (
        <>
            <Box
                zIndex={"overlay"}
                bg={["gray.900"]}
                position="fixed"
                top="0"
                w="100%"
            >
                <ScreenWidth>
                    <Flex
                        //     h={16}
                        py="16px"
                        alignItems={"center"}
                        justifyContent={"space-between"}
                    >
                        <Box
                            fontFamily="roboto"
                            fontWeight="900"
                            fontSize={["14px", "24px"]}
                        >
                            <Link
                                href="/"
                                _hover={{ textDecor: "none" }}
                                color="#fff"
                                className="pressStart"
                            >
                                KADENA SKELLIES
                            </Link>
                        </Box>

                        <Flex alignItems={"center"}>
                            <Stack direction={"row"} spacing={7} align="center">
                                {/* Large screen navigation */}
                                <Flex
                                    justify="space-evenly"
                                    align="center"
                                    gap="32px"
                                    display={["none", null, "flex"]}
                                >
                                    <Link
                                        color="#FFF"
                                        href="https://market.kadenaskellies.com/"
										target="_blank"
                                        fontSize="18px"
                                        fontWeight="700"
                                        _hover={{ textDecor: "underline" }}
                                    >
                                        Marketplace
                                    </Link>

                                    <Link
                                        color="#FFF"
                                        href="https://www.arkade.fun/marketplace/kadena-skellies"
										target="_blank"
                                        fontSize="18px"
                                        fontWeight="700"
                                        _hover={{ textDecor: "underline" }}
                                    >
                                        Arkade
                                    </Link>
									
                                    <Link
                                        color="#FFF"
                                        href="#utility"
                                        fontSize="18px"
                                        fontWeight="700"
                                        _hover={{ textDecor: "underline" }}
                                    >
                                        Utility
                                    </Link>

                                    <Link
                                        color="#FFF"
                                        href="#roadmap"
                                        fontSize="18px"
                                        fontWeight="700"
                                        _hover={{ textDecor: "underline" }}
                                    >
                                        Roadmap
                                    </Link>

                                    <Link
                                        color="#FFF"
                                        href="#faq"
                                        fontSize="18px"
                                        fontWeight="700"
                                        _hover={{ textDecor: "underline" }}
                                    >
                                        FAQ
                                    </Link>
                                </Flex>

                                {/* Dropdown menu for mobile menu.  */}
                                <Box display={["block", null, "none"]}>
                                    <Menu>
                                        <MenuButton
                                            as={Button}
                                            rounded={"full"}
                                            variant={"link"}
                                            cursor={"pointer"}
                                            minW={0}
                                        >
                                            <FaBars />
                                        </MenuButton>
                                        <MenuList>
                                            <Link
                                                href="#mint"
                                                _hover={{ textDecor: "none" }}
                                            >
                                                <MenuItem>Mint</MenuItem>
                                            </Link>
                                            <Link
                                                href="#roadmap"
                                                _hover={{ textDecor: "none" }}
                                            >
                                                <MenuItem>Roadmap</MenuItem>
                                            </Link>

                                            <Link
                                                href="#utility"
                                                _hover={{ textDecor: "none" }}
                                            >
                                                <MenuItem>Utility</MenuItem>
                                            </Link>

                                            <Link
                                                href="#faq"
                                                _hover={{ textDecor: "none" }}
                                            >
                                                <MenuItem>FAQ</MenuItem>
                                            </Link>
                                        </MenuList>
                                    </Menu>
                                </Box>
                            </Stack>
                        </Flex>
                    </Flex>
                </ScreenWidth>
            </Box>
        </>
    );
}
