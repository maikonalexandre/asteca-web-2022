import {
  TableContainer,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Table,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { Pencil, Trash, TrashSimple } from "phosphor-react";

export function TableForm() {
  return (
    <TableContainer h="64vh" mt="4" mb='8' overflowY='auto'>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Data</Th>
            <Th>Pet</Th>
            <Th>Cliente</Th>
            <Th>Veterinário</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr _hover={{ background: "gray.100" }}>
            <Td>22/10/2022</Td>
            <Td>Naja</Td>
            <Td>Maikon Alexandre</Td>
            <Td>Richard Rasmussem</Td>
          </Tr>
          <Tr _hover={{ background: "gray.100" }}>
            <Td>22/10/2022</Td>
            <Td>Rex</Td>
            <Td>Jhon doe</Td>
            <Td>Richard Rasmussem</Td>
          </Tr>
          <Tr _hover={{ background: "gray.100" }}>
            <Td>22/10/2020</Td>
            <Td>Pity</Td>
            <Td>Anastacia Almeida</Td>
            <Td>Richard Rasmussem</Td>
          </Tr>
          <Tr _hover={{ background: "gray.100" }}>
            <Td>22/10/2022</Td>
            <Td>Rex</Td>
            <Td>Jhon doe</Td>
            <Td>Richard Rasmussem</Td>
          </Tr>
          <Tr _hover={{ background: "gray.100" }}>
            <Td>22/10/2022</Td>
            <Td>Rex</Td>
            <Td>Jhon doe</Td>
            <Td>Richard Rasmussem</Td>
          </Tr>
          <Tr _hover={{ background: "gray.100" }}>
            <Td>22/10/2022</Td>
            <Td>Rex</Td>
            <Td>Jhon doe</Td>
            <Td>Richard Rasmussem</Td>
          </Tr>
          <Tr _hover={{ background: "gray.100" }}>
            <Td>22/10/2022</Td>
            <Td>Rex</Td>
            <Td>Jhon doe</Td>
            <Td>Richard Rasmussem</Td>
          </Tr>
          <Tr _hover={{ background: "gray.100" }}>
            <Td>22/10/2022</Td>
            <Td>Rex</Td>
            <Td>Jhon doe</Td>
            <Td>Richard Rasmussem</Td>
          </Tr>
          <Tr _hover={{ background: "gray.100" }}>
            <Td>22/10/2022</Td>
            <Td>Rex</Td>
            <Td>Jhon doe</Td>
            <Td>Richard Rasmussem</Td>
          </Tr>
          <Tr _hover={{ background: "gray.100" }}>
            <Td>22/10/2022</Td>
            <Td>Rex</Td>
            <Td>Jhon doe</Td>
            <Td>Richard Rasmussem</Td>
          </Tr>
          <Tr _hover={{ background: "gray.100" }}>
            <Td>22/10/2022</Td>
            <Td>Rex</Td>
            <Td>Jhon doe</Td>
            <Td>Richard Rasmussem</Td>
          </Tr>
          <Tr _hover={{ background: "gray.100" }}>
            <Td>22/10/2022</Td>
            <Td>Rex</Td>
            <Td>Jhon doe</Td>
            <Td>Richard Rasmussem</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
