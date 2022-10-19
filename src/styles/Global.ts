import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#181b23",
      "800": "#1f2029",
      "700": "#353646",
      "600": "#4b4d63",
      "200": "#eee8e8",
      "100": "#ececec",
    },

    green: {
      "800": "#389632",
      "500": "#1cc043",
      "450": "#3cd05b",
      "400": "#5ce074",
      "350": "#7cef8c",
      "300": "#9cffa4",
      "200": "#d2fbcb"
    },

    grayblue: {
      "900": "#114d4d",
    },
  },
  styles: {
    global: {
      body: {
        fontFamily: "Poppins",
        fontWeight: "500",
        color: "gray.800",
      },
    },
  },
});
