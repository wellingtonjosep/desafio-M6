import { Box, Flex, Heading, Image, Stack, Tag, Text } from "@chakra-ui/react";
import car from "../../assets/car.jpg";
export const CardAdvertise = ({ desactive }) => {
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
        {desactive === true ? (
          <Tag
            w={"51px"}
            h={"24px"}
            margin={"10px"}
            position={"absolute"}
            bgColor={"#ADB5BD"}
            color={"#FFFFFF"}
            borderRadius={"none"}
            padding={"0px 4px"}
            isDisabled={true}
          >
            Inativo
          </Tag>
        ) : (
          <Tag
            w={"51px"}
            h={"24px"}
            margin={"10px"}
            position={"absolute"}
            bgColor={"#4529E6"}
            color={"#FFFFFF"}
            borderRadius={"none"}
          >
            Ativo
          </Tag>
        )}
        <Image transition={"0.2s ease"} src={car} />
      </Box>
      <Stack>
        <Heading fontSize={"16px"} color={"#212529"}>
          Título do carro
        </Heading>
        <Text fontSize={"14px"} color={"#495057"}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem
        </Text>
        <Text fontSize={"14px"} fontWeight={"semibold"} color={"#495057"}>
          Nome do comprador
        </Text>
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
    </Stack>
  );
};
