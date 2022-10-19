import { Button, Image, Text, VStack } from "@chakra-ui/react";
import logo from "../../assets/logo-footer.svg";
import { globalStyles } from "../../styles/global";
import icon from "../../assets/angle-up.svg";

export const Footer = () => {
  return (
    <VStack
      w={"100vw"}
      h={{base: "310px", md: "140px"}}
      justifyContent={{ base: "space-evenly", md: "space-between"}}
      alignItems={{ base: "center" }}
      bgColor={globalStyles.grey0}
      flexDirection={{base: "column", md: "row"}}
      mt={{ base: "100px" }}
    >
      <Image ml={{base: "0px", md: "56px"}} src={logo} alt="logo site" />
      <Text
        fontFamily={"Inter"}
        fontWeight={"400"}
        fontSize={"14px"}
        color={globalStyles.whiteFixed}
      >
        © 2022 - Todos os direitos reservados.
      </Text>
      <Button
        h={"50px"}
        w={"53"}
        borderRadius={"4px"}
        bgColor={globalStyles.grey1}
        mr={{base: "0px", md: "56px"}}
      >
        <Image src={icon} alt="logo site" />
      </Button>
    </VStack>
  );
};
