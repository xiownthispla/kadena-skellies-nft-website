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
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/203.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/370.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/871.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/41.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/346.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/427.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/627.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/452.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/681.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/830.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/2.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/70.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/81.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/4.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/36.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/927.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/727.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/42.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/81.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/80.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/20.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/37.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/71.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/451.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/396.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/1100.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/1155.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/1020.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/1222.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/1111.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/999.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/888.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/777.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/666.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/555.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/444.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/333.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/222.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/111.png",
	"https://cloudflare-ipfs.com/ipfs/bafybeiercfhfughibbhvz4zapooruz4wsm6fkwqjqhwr5i2pd2c7y7g2ua/1249.png"
	
];
