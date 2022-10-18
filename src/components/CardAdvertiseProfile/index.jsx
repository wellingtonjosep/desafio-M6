import { Box, Flex, Heading, Image, Stack, Tag, Text } from "@chakra-ui/react";
import car from "../../assets/car.jpg";
import { ButtonComponent } from "../Button";
export const CardAdvertiseProfileComponent = () => {
  return (
    <Stack
      w={"312px"}
      _hover={{
        img: {
          transform: "scale(1.1)",
        },
        ".image-box:first-child": {
          border: "2px solid blue",
        },
      }}
    >
      <Box
      className={"image-box"}
        overflow={"hidden"}
        transition={"0.2s ease"}
        border={"2px solid #fff"}
      >
        <Image transition={"0.2s ease"} src={car} />
      </Box>
      <Stack>
        <Heading fontSize={"16px"}>Título do carro</Heading>
        <Text fontSize={"14px"}>Descrição do carro</Text>

        <Flex w={"100%"} py={1} justifyContent={"space-between"}>
          <Flex w={"105px"} justifyContent={"space-between"}>
            <Tag bgColor={"#EDEAFD"} color={"#4529E6"}>
              0 KM
            </Tag>
            <Tag bgColor={"#EDEAFD"} color={"#4529E6"}>
              2019
            </Tag>
          </Flex>
          <Text fontWeight={"500"}>R$000.000,00</Text>
        </Flex>
      </Stack>
      <Flex w={"63%"} justifyContent={"space-between"}>
        <ButtonComponent bgColor={"transparent"} border={"2px solid black"}>
          Editar
        </ButtonComponent>
        <ButtonComponent bgColor={"transparent"} border={"2px solid black"}>
          Ver como
        </ButtonComponent>
      </Flex>
    </Stack>
  );
};
