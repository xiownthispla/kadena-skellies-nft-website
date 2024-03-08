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
            mt={["60px", null, "100px"]}
            maxWidth="1140px"
            mx="auto"
            mb="64px"
            id="mint"
        >
		     <Box mt="22px" px="16px">
                <Flex
                    gap={["16px", null, "32px"]}
                    justify="center"
                    flexDir={["column", null, "row"]}
                    mt="18px"
                >
                    <Button
                        as="a"
                        href="https://market.kadenaskellies.com/"
						target="_blank"
                        px={["50px"]}
                        py="25px"
                        display="flex"
                        borderRadius="30px"
                        bgColor={"brand.green"}
                        color="#171923"
                        _hover={{ color: "#fff", bgColor: "#FF0000" }}
                    >
                        <Text as="span" pr="15px" fontSize="20px">
							SOLD OUT! CHECK MARKETPLACE!
                        </Text>
                    </Button>
                </Flex>
            </Box>
			<br />
            <Box display={["none", "block", "block"]}>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={2}
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
                {/* <Text textAlign="center" fontSize="22px" fontWeight="400">
                    Prepare for Evolution 2
                </Text> */}
                <Flex
                    gap={["16px", null, "32px"]}
                    justify="center"
                    flexDir={["column", null, "row"]}
                    mt="18px"
                >
                    <Button
                        as="a"
                        href="https://twitter.com/KadenaSkellies"
						target="_blank"
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
                        href="https://discord.gg/7cHgZb2Wkz"
						target="_blank"
                        px={["18px"]}
                        py="25px"
                        display="flex"
                        borderRadius="30px"
                        className="fade"
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
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/203.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/370.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/871.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/41.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/346.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/427.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/627.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/452.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/681.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/830.png"
];
