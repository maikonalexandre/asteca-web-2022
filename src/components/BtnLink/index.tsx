import { Box, Button, Flex, FlexProps, Skeleton, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface BtnLinkProps extends FlexProps {
  text: string;
  to: string;
  children?: ReactNode;
}

export function BtnLink({ text, to, children, ...rest }: BtnLinkProps) {
  let { pathname } = useLocation();

  return (
    <Flex
      h="70px"
      alignItems="center"
      justifyContent="left"
      paddingLeft="8"
      fontWeight="400"
      fontSize="16"
      color="gray.900"
      _hover={{ background: "gray.100" }}
      {...rest}
      bg={to == pathname ? "gray.100" : ""}
    >
      <Link to={to}>
        <Flex gap="2" alignItems="center">
          {children}
          <Text>{text}</Text>
        </Flex>
      </Link>
    </Flex>
  );
}
