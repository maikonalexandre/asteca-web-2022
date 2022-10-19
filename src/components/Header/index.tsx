import { Flex, Box, Text, calc, Input } from "@chakra-ui/react";
import { Book, FirstAidKit, PawPrint, User } from "phosphor-react";
import { BtnLink } from "../BtnLink";
import { useLocation, useParams } from "react-router-dom";

export function Header() {
  
  return (
    <>
      <Flex
        h="70px"
        w="100%"
        // bg="gray.100"
        alignItems="center"
        justifyContent="space-between"
        paddingInline="50px"
        borderBottom="2px"
        borderBottomColor="gray.200"
      >
        <Input
          bg="white"
          w="xs"
          h="40px"
          borderRadius="16"
          outline="none"
          placeholder="Buscar..."
        />
        <Flex alignItems="center" justifyContent="center" gap="4">
          <Flex flexDirection="column" alignItems="end">
            <Text> Usuario</Text>
            <Text fontSize="10"> email@mail.com</Text>
          </Flex>
          <Box w="50px" h="50px" borderRadius="50%" bg="gray.300"></Box>
        </Flex>
      </Flex>

      <Flex
        flexDirection="column"
        h="90.2vh"
        gap="4"
        borderRight="2px"
        borderRightColor="gray.200"
      >
        <BtnLink
          text="Pets"
          to="/pets"
          marginTop="50px"
          children={<PawPrint size={30} />}
        />

        <BtnLink text="Clientes" to="/clientes" children={<User size={30} />} />
        <BtnLink
          text="Medicos"
          to="/medicos"
          children={<FirstAidKit size={30} />}
        />
        <BtnLink
          text="Consultas"
          to="/dashboard"
          children={<Book size={30} />}
        />
      </Flex>
    </>
  );
}
