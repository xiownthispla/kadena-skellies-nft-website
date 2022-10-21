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
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
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
            bg: useColorModeValue("gray.200", "gray.700"),
        }}
        href={"#"}
    >
        {children}
    </Link>
);

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box
                zIndex={"overlay"}
                bg={[useColorModeValue("gray.100", "gray.900")]}
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
                            fontSize={["18px", "24px"]}
                        >
                            <Link href="/" _hover={{ textDecor: "none" }}>
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
                                        href="#mint"
                                        fontSize="18px"
                                        fontWeight="700"
                                        _hover={{ textDecor: "underline" }}
                                    >
                                        Mint
                                    </Link>
                                    <Link
                                        href="#roadmap"
                                        fontSize="18px"
                                        fontWeight="700"
                                        _hover={{ textDecor: "underline" }}
                                    >
                                        Roadmap
                                    </Link>

                                    <Link
                                        href="#utility"
                                        fontSize="18px"
                                        fontWeight="700"
                                        _hover={{ textDecor: "underline" }}
                                    >
                                        Utility
                                    </Link>

                                    <Link
                                        href="#faq"
                                        fontSize="18px"
                                        fontWeight="700"
                                        _hover={{ textDecor: "underline" }}
                                    >
                                        FAQ
                                    </Link>
                                </Flex>
                                {/* Dark mode toggler  */}
                                {/* <Button onClick={toggleColorMode}>
                                {colorMode === "light" ? (
                                    <BsMoonFill />
                                ) : (
                                    <BsSunFill />
                                )}
                            </Button> */}
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
