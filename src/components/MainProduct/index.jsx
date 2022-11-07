import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import image from "../../assets/test.png";
import { globalStyles } from "../../styles/global";

export const MainProduct = () => {

  const images = [
    {image: "https://th.bing.com/th/id/R.e52b2d4b0547111ab9fdcf1bdac30967?rik=JzxbLVp2TwBk%2fA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-OedHxvP4PSM%2fUYVtHwKhFvI%2fAAAAAAACTw4%2f858MnA5qZ-A%2fs1600%2fcarros-imagens%2b(10).jpg&ehk=BVxiZtIXPAUBSMS%2flC%2fY7qduUzWszETwHqtAh4AAQG8%3d&risl=&pid=ImgRaw&r=0"},
    {image: "https://th.bing.com/th/id/R.e52b2d4b0547111ab9fdcf1bdac30967?rik=JzxbLVp2TwBk%2fA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-OedHxvP4PSM%2fUYVtHwKhFvI%2fAAAAAAACTw4%2f858MnA5qZ-A%2fs1600%2fcarros-imagens%2b(10).jpg&ehk=BVxiZtIXPAUBSMS%2flC%2fY7qduUzWszETwHqtAh4AAQG8%3d&risl=&pid=ImgRaw&r=0"},
    {image: "https://th.bing.com/th/id/R.e52b2d4b0547111ab9fdcf1bdac30967?rik=JzxbLVp2TwBk%2fA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-OedHxvP4PSM%2fUYVtHwKhFvI%2fAAAAAAACTw4%2f858MnA5qZ-A%2fs1600%2fcarros-imagens%2b(10).jpg&ehk=BVxiZtIXPAUBSMS%2flC%2fY7qduUzWszETwHqtAh4AAQG8%3d&risl=&pid=ImgRaw&r=0"},
  ]
  
  return (
    <VStack>
      <VStack>

        <VStack borderRadius={"4px"} mt={"45px"} bgColor={globalStyles.grey10} w={{ base: "351px" }} h={{ base: "355px" }} alignItems={"center"} justifyContent={"center"}>
          <Image src={image} alt="test" w={{ base: "351px" }} h={{ base: "255px" }}/>
        </VStack>

        <VStack borderRadius={"4px"} bgColor={globalStyles.grey10} w={{ base: "351px" }} h={{ base: "341px" }}>
          <Text fontFamily={"Lexend"} fontSize={"20px"} lineHeight={"25px"} fontWeight={"600"} mt={{ base: "44px" }} w={{ base: "300px" }}>
            Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200
          </Text>
          <VStack w={"100%"} alignItems={"left"} justifyContent={"left"}>
            <HStack pt={{ base: "25px" }} pl={{ base: "26px" }} w={"100%"}>
              <Text color={globalStyles.brand1} bgColor={globalStyles.brand4} borderRadius={"4px"} fontSize={"14px"} fontFamily={"Inter"} padding={"4px 8px 4px 8px"} fontWeight={"500"} textAlign={"center"} h={"32px"}>
                2013
              </Text>
              <Text color={globalStyles.brand1} bgColor={globalStyles.brand4} borderRadius={"4px"} fontSize={"14px"} fontFamily={"Inter"} fontWeight={"500"} textAlign={"center"} padding={"4px 8px 4px 8px"} h={"32px"}>
                0 KM
              </Text>
            </HStack>
            <Text pl={{ base: "28px" }} pt={{ base: "22px" }} w={"100%"} fontSize={"16px"} lineHeight={"20px"} fontFamily={"Lexend"} fontWeight={"500"} textAlign={"left"}>
              R$ 00.000,00
            </Text>
          </VStack>
          <Box w={"100%"} pl={"27px"} pt={"26px"}>
            <Button w={"100px"} h={"38px"} bgColor={globalStyles.brand1} borderRadius={"4px"} fontSize={"14px"} fontFamily={"Inter"} fontWeight={"600"} color={globalStyles.whiteFixed}>
              Comprar
            </Button>
          </Box>
        </VStack>

        <VStack pl={"28px"} pr={"28px"} pt={"28px"} borderRadius={"4px"} bgColor={globalStyles.grey10} w={{ base: "351px" }} h={{ base: "341px" }} textAlign={"left"}>
          <Text  fontSize={"20px"} fontFamily={"Lexend"} fontWeight={"600"} pb={"32px"} color={globalStyles.grey1} w={"100%"}>
            Descrição
          </Text>
          <Text  fontSize={"16px"} fontFamily={"Inter"} fontWeight={"400"} w={"100%"} h={"196px"} color={globalStyles.grey2} overflow={"auto"}>
            Lorem Ipsum is simply dummy t my text of the printing anmy text of the printing and 
            typesetting industry.my text of the printing and typesetting industry.my text of the 
            printing and typesetting industry.my text of the printing and typesetting industry.my 
          </Text>
        </VStack>

      </VStack>
      <VStack pt={"10px"}>
          <VStack pl={"28px"} pt={"28px"} borderRadius={"4px"} bgColor={globalStyles.grey10} w={{ base: "351px" }} h={{ base: "341px" }} textAlign={"left"}>
            <Text ml={"13px"}  fontSize={"20px"} fontFamily={"Lexend"} fontWeight={"600"} pb={"32px"} color={globalStyles.grey1} w={"100%"}>
              Fotos
            </Text>
            <HStack flexWrap={"wrap"} w={"100%"} h={"196px"} overflow={"auto"} justifyContent={"space-evenly"} >
                {
                  images && images.map((obj, index) => {
                    return <Image m={"0px"}  w={{base: "90px", md: "108px"}} h={{base: "90px"}} borderRadius={"4px"} src={obj.image} alt={"imagem carro"} key={index} />
                  })
                }
            </HStack>
            <Text></Text>
          </VStack>
      </VStack>
    </VStack>
  );
};
