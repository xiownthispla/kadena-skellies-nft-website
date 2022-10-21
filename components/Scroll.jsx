import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, {
    Navigation,
    Autoplay,
    Pagination,
    EffectCoverflow,
    FreeMode,
} from "swiper";

SwiperCore.use([Navigation, Autoplay, Pagination, EffectCoverflow]);

const Scroll = () => {
    return (
        <div className="marquee" h="100%">
            <Flex className="marquee--inner">
                {img.map((text, i) => {
                    return (
                        <Image
                            key={i}
                            src={text}
                            alt="image"
                            className="orb"
                            w="200px"
                            borderRadius="5px"
                            mx="10px"
                            h="200px"
                        />
                    );
                })}

                {img.map((text, i) => {
                    return (
                        <Image
                            key={i}
                            src={text}
                            alt="image"
                            className="orb"
                            w="200px"
                            borderRadius="5px"
                            mx="10px"
                            h="200px"
                        />
                    );
                })}
            </Flex>
        </div>
    );
};

export default Scroll;

const img = [
    "https://media.discordapp.net/attachments/1009914411223363604/1018243472676888757/1.png",
    "https://media.discordapp.net/attachments/1009914411223363604/1019277903231455253/Skeletor.png",
    "https://media.discordapp.net/attachments/1009914411223363604/1020047906524385381/no_name_skelly.png",
    "https://media.discordapp.net/attachments/1009914411223363604/1021477670237773854/fourth.png",
    "https://media.discordapp.net/attachments/1009914411223363604/1027284890384863373/seventh.png",
    "https://media.discordapp.net/attachments/1009914411223363604/1025109910393995264/sixth.png",
    "https://media.discordapp.net/attachments/1009914411223363604/1021863929871339611/sneak1.png",
    "https://media.discordapp.net/attachments/1009914411223363604/1018884681032282122/KDL.png",
];
