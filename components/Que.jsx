import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Icon,
    Text,
    List,
    ListItem,
    ListIcon,
} from "@chakra-ui/react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Que = () => {
    return (
        <Accordion>
            {faq.map((item, i) => {
                return (
                    <AccordionItem
                        mb="20px"
                        key={i}
                        border="none"
                        bgColor="rgba(255, 255, 255, 0.05)"
                        px="20px"
                    >
                        {({ isExpanded }) => (
                            <>
                                <Text py="30px" >
                                    <AccordionButton
                                        _focus={{ bgColor: "initial" }}
                                    >
                                        <Box
                                            flex="1"
                                            textAlign="left"
                                            fontSize={["18px",null,"20px"]}
                                            fontWeight="900"
                                        >
                                            {item.que}
                                        </Box>
                                        {isExpanded ? (
                                            <Icon
                                                as={AiOutlineMinus}
                                                fontSize="20px"
                                            />
                                        ) : (
                                            <Icon
                                                as={AiOutlinePlus}
                                                fontSize="20px"
                                            />
                                        )}
                                    </AccordionButton>
                                </Text>
                                <AccordionPanel
                                    pb={4}
                                    color="rgba(255, 255, 255, 0.7)"
				    fontSize="15px"
                                >
                                    {item.faq}
                                    <Text mt="16px"></Text>
                                    {item.option ? (
                                        <List spacing={3}>
                                            {item.option.map((text, i) => {
                                                return (
                                                    <ListItem key={i}>
                                                        <ListIcon
                                                            as={
                                                                BsFillCheckCircleFill
                                                            }
                                                            color="green.500"
                                                        />
                                                        {text}
                                                    </ListItem>
                                                );
                                            })}
                                        </List>
                                    ) : (
                                        ""
                                    )}
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                );
            })}
        </Accordion>
    );
};

export default Que;

const faq = [
    {
        que: "What are the Kadena Skellies?",
        faq: "We are a limited NFT collection on the Kadena Blockchain. We are bringing the Graveyard to KDA! This is our first evolution of Skellies with another 2 to follow. ",
    },
    {
        que: "What is the total mint supply? ",
        faq: "For the first evolution (current) there will only be 1,250 Skellies with 10 being unique (1 of 1). ",
    },
    {
        que: "How much does it cost to mint a Skelly? ",
        faq: "There will be 2 different prices: 10 $KDA and Free (OG Role).",
    },
    {
        que: "How do I receive OG Role for 1 free mint?  ",
        faq: "The first 75 Skellies to join our discord will receive the OG Role. After that we will have twitter  giveaways until we reach the maximum of 150 OG Roles. ",
    },
    {
        que: "When is mint? ",
        faq: "November, but no date set yet. ",
    },

    {
        que: "Where are we minting?",
        faq: "We have partnered with Arkade as our minting marketplace. https://www.arkade.fun/market   What wallet do we need? Arkade accepts X-wallet, Zelcore and Chainweaver.",
    },
    {
        que: " How many Skellies can I mint?",
        faq: "There are no limits. The only limit is the 1 free mint per OG Role, after you mint the first free you can mint however many you want for 10 $KDA each.",
    },
    {
        que: " How much XP do I need? ",
        faq: " There is no need to grind for XP to mint a Skelly. We would like to build our community and we hope all can join us, but we don't require the grind.",
    },
    {
        que: " Why is there a leaderboard if we don't need XP? ",
        faq: "In December we will be giving away NFT's from other KDA projects that I have personally gathered! ",
    },

    {
        que: " Who will be eligible to enter the giveaways? ",
        faq: "There is a 2 part criteria:",
        option: [
            "Must be discord Level 10 (new Reaper Skelly role)",
            "Must hold a minimum of 2 Kadena Skelly NFT's  Rules have not changed to mint Kadena Skellies NFT's, these 2 criteria are simply to be eligible to enter the December giveaways!",
        ],
    },
];
