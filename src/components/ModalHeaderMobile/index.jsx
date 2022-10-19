import { Button, flexbox, Link, VStack } from "@chakra-ui/react";
import { globalStyles } from "../../styles/global";

export const ModalHeaderMobile = () => {
  return (
    <VStack
      w={"100vw"}
      ml={"0px"}
      top="80px"
      display={{ base: "flex", md: "none" }}
      left={"-8px"}
      alignItems="left"
      position={"fixed"}
      justifyContent={"center"}
      pb={"20px"}
      bgColor={globalStyles.grey10}
      zIndex={1}
    >
      <VStack
        alignItems={"left"}
        ml={"0px"}
        borderBottom={`2px solid ${globalStyles.grey6}`}
      >
        <Link
          width={"80px"}
          fontSize={"16px"}
          fontFamily="Inter"
          fontWeight={"600"}
          color={globalStyles.grey2}
          pt={"32px"}
          pl={"16px"}
          href="/"
        >
          Carros
        </Link>
        <Link
          width={"80px"}
          fontSize={"16px"}
          fontFamily="Inter"
          fontWeight={"600"}
          color={globalStyles.grey2}
          pt={"32px"}
          pl={"16px"}
          pb={"32px"}
          href="/"
        >
          Motos
        </Link>
      </VStack>
      <Link
        width={"110px"}
        fontSize={"16px"}
        fontFamily="Inter"
        fontWeight={"600"}
        color={globalStyles.brand1}
        pt={"32px"}
        pl={"16px"}
        pb={"32px"}
        href="/"
      >
        Fazer Login
      </Link>
      <Button
            fontSize={"16px"}
            fontFamily="Inter"
            fontWeight={"600"}
            w={"300px"}
            h={"48px"}
            border={`2px solid ${globalStyles.grey4}`}
            bgColor={globalStyles.grey10}
          >
            Cadastrar
          </Button>
    </VStack>
  );
};
