import { extendTheme } from "@chakra-ui/react";

const colors = {
    brand: {
        dark: "#101111",
        white: "white",
        green: "#00ffa3",
        fade: "rgba(255, 255, 255, 0.9)",
        purple: "rgba(88, 101, 242, 0.9)",
        gold: "rgba(255, 230, 0, 0.9)",
		pink: "rgba(255, 20, 147, 0.9)",
    },
};

const fonts = {
    fira: `"fira-sans",  sans-serif`,
    roboto: ` roboto-slab, sans-serif`,
};

const theme = extendTheme({ colors, fonts });

export default theme;
