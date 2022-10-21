import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, {
    Navigation,
    Autoplay,
    Pagination,
    EffectCoverflow,
} from "swiper";
import { FaDiscord, FaTwitter } from "react-icons/fa";

SwiperCore.use([Navigation, Autoplay, Pagination, EffectCoverflow]);

const Hero = () => {
    return (
        <Box
            mt={["0px", null, "100px"]}
            maxWidth="1140px"
            mx="auto"
            mb="64px"
        >
            <Box display={["none", "block", "block"]}>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={2}
                    //     onSlideChange={() => console.log("slide change")}
                    //     onSwiper={(swiper) => console.log(swiper)}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    modules={[]}
                    speed={1500}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 200,
                        modifier: 4,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    pagination={{ clickable: true }}
                >
                    {img.map((image, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <Image
                                    src={image}
                                    alt="Hero image"
                                    borderRadius="10px"
                                    objectFit={"cover"}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Box>

            <Box display={["block", "none", "none"]}>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    modules={[]}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 200,
                        modifier: 2,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    pagination={{ clickable: true }}
                >
                    {img.map((image, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <Image
                                    src={image}
                                    alt="Hero image"
                                    borderRadius="0px"
                                    objectFit={"cover"}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Box>

            <Box mt="22px" px="16px">
                <Text textAlign="center" fontSize="22px" fontWeight="400">
                    Prepare for Evolution 2
                </Text>
                <Flex
                    gap={["16px", null, "32px"]}
                    justify="center"
                    flexDir={["column", null, "row"]}
                    mt="18px"
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
        </Box>
    );
};

export default Hero;

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
