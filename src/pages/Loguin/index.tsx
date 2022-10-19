import {
  Flex,
  Heading,
  Text,
  Input,
  Stack,
  InputGroup,
  InputRightElement,
  Button,
  ScaleFade,
  Link,
} from "@chakra-ui/react";
import { Eye } from "phosphor-react";
import { useNavigate } from "react-router-dom";

interface LoguinProps {
  setAuthState(): void;
}

export function Loguin({ setAuthState }: LoguinProps) {
  let isOpen = true;

  return (
    <Flex
      w="100vw"
      h="100vh"
      alignItems="center"
      justifyContent="center"
      backgroundColor="gray.100"
    >
      <ScaleFade in={isOpen} initialScale={0.1} delay={0.7}>
        <Flex
          flexDirection="column"
          bg="white"
          alignItems="center"
          p="10"
          borderRadius="16"
          shadow="2xl"
        >
          <Heading
            color="green.450"
            textAlign="center"
            fontSize="70"
            fontFamily="Dangrek"
            textShadow="sm"
          >
            Asteca
          </Heading>

          <form>
            <Stack mt="16" spacing="6" paddingInline="2">
              <Text fontFamily="Roboto" fontWeight="500">
                Email:
              </Text>
              <Input
                focusBorderColor="green.300"
                variant="flushed"
                w="xs"
                placeholder="email@email.com.br"
              />
              <Text fontFamily="Roboto" fontWeight="500">
                Senha:
              </Text>

              <InputGroup>
                <Input
                  focusBorderColor="green.300"
                  variant="flushed"
                  w="xs"
                  placeholder="senha"
                />
                <InputRightElement
                  borderRadius="4"
                  _hover={{ backgroundColor: "gray.200" }}
                  children={<Eye size={24} color="gray" />}
                />
              </InputGroup>

              <Flex gap="4" alignSelf="flex-end" alignItems="center">
                <Link color="blue.800">
                  <a href="#">Criar conta</a>
                </Link>
                <Button
                  size="md"
                  w="24"
                  colorScheme="green"
                  alignSelf="flex-end"
                  onClick={() => {
                    setAuthState();
                  }}
                >
                  Entrar
                </Button>
              </Flex>
            </Stack>
          </form>
        </Flex>
      </ScaleFade>
    </Flex>
  );
}
