import { Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import { Header } from "../Header";

export function SideBar() {
  return (
    <Flex
      w="100%"
      alignItems="center"
      justifyContent="center"
      border="2px"
      borderColor="gray.100"
    >
      <Heading
        color="green.500"
        fontSize="48"
        fontFamily="Dangrek"
        textShadow="sm"
      >
        Asteca
      </Heading>
      </Flex>
  );
}
