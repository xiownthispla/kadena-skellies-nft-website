import { extendTheme } from "@chakra-ui/react";

const colors = {
    brand: {
        dark: "#101111",
        white: "white",
        purple: "purple",
        green: "#00ffa3",
    },
};

const fonts = {
    fira: `"fira-sans",  sans-serif`,
    roboto: ` roboto-slab, sans-serif`,
};

const theme = extendTheme({ colors, fonts });

export default theme;
