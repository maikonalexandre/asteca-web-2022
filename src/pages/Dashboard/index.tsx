import { Box, Button, Flex, Heading, IconButton } from "@chakra-ui/react";
import { Plus } from "phosphor-react";
import { Header } from "../../components/Header";
import { TableForm } from "../../components/TableForm";

export function Dashboard() {
  return (
    <>
      <Header />
      <Box ml="40px" mr='50' borderRadius="8">
        <Heading mt='8' ml='4' color='gray.600' fontSize='30'>Consultas:</Heading>

        <TableForm />
        <Flex justifyContent="flex-end">
          <Button
            aria-label=""
            borderRadius="50%"
            bg="green.500"
            color="white"
            padding="8px"
            size="40"
          >
            <Plus size={40} />
          </Button>
        </Flex>
      </Box>
    </>
  );
}
