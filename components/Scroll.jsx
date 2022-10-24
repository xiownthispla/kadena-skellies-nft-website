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
    "https://media.discordapp.net/attachments/1009914411223363604/1019277903231455253/Skeletor.png",
    "https://media.discordapp.net/attachments/1009914411223363604/1020047906524385381/no_name_skelly.png",
	"https://media.discordapp.net/attachments/1009914411223363604/1020737148137246851/third.png",
    "https://media.discordapp.net/attachments/1009914411223363604/1021477670237773854/fourth.png",
	"https://media.discordapp.net/attachments/1009914411223363604/1022863366991138827/fifth.png",
    "https://media.discordapp.net/attachments/1009914411223363604/1025109910393995264/sixth.png",
	"https://media.discordapp.net/attachments/1009914411223363604/1027284890384863373/seventh.png",
	"https://media.discordapp.net/attachments/1009914411223363604/1030162266382946369/8th.png",
	"https://media.discordapp.net/attachments/1009914411223363604/1032319556234002452/Ninth.png",
    "https://media.discordapp.net/attachments/1009914411223363604/1018884681032282122/KDL.png",
	"https://media.discordapp.net/attachments/1009914411223363604/1018243472676888757/1.png",
	"https://media.discordapp.net/attachments/1009914411223363604/1017819929816346755/16.png",
	"https://media.discordapp.net/attachments/1009914411223363604/1018525832953729075/IMG_9550.png",
	"https://media.discordapp.net/attachments/1009914411223363604/1018884680134701116/arkade.png",
	"https://media.discordapp.net/attachments/1009914411223363604/1018884680398946385/KDS.png",
	"https://media.discordapp.net/attachments/1009914411223363604/1018884680688357516/babena.png",
	"https://media.discordapp.net/attachments/1009914411223363604/1018884681032282122/KDL.png",
	"https://media.discordapp.net/attachments/1009914411223363604/1018884681300721736/kittykadshirt.png",
	"https://media.discordapp.net/attachments/1009914411223363604/1018884681543974922/flux.png",
	"https://media.discordapp.net/attachments/1009914411223363604/1021863930689224805/sneak4.png",
	"https://media.discordapp.net/attachments/1009914411223363604/1021863930206896268/sneak2.png",
	"https://media.discordapp.net/attachments/1009914411223363604/1024135990325022802/ARKADE.png",
	"https://media.discordapp.net/attachments/1009914411223363604/1033092733432242286/kmc2.png",
	"https://media.discordapp.net/attachments/1009914411223363604/1017473913057448037/FbgqaRyXgAQKJ2E.png",
	"https://media.discordapp.net/attachments/1009914411223363604/1017478593539997726/206_modified_WEN.png",
	"https://media.discordapp.net/attachments/1009914411223363604/1017819929816346755/16.png",
	
];
