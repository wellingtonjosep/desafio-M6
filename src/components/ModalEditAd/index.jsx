import {
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { ButtonComponent } from "../Button";
import { useContext } from "react";
import { ButtonTypeAdContext } from "../../providers/ButtonTypeAd";
import { InputComponent } from "../Input";

export const ModalEditAd = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    changeButtonType,
    isButtonTypeAd,
    changeButtonTypeVehicle,
    isButtonTypeVehicle,
    isButtonTypePubliched,
    changeButtonTypePubliched,
  } = useContext(ButtonTypeAdContext);

  const changeButtonTypeHandler = (buttonType) => {
    changeButtonType({ buttonType });
  };
  const changeButtonTypeVehicleHandler = (buttonType) => {
    changeButtonTypeVehicle({ buttonType });
  };
  const changeButtonPublichedHandler = (buttonType) => {
    changeButtonTypePubliched({ buttonType });
  };

  return (
    <>
      <ButtonComponent onClick={onOpen}>Edit Ad</ButtonComponent>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form>
            <ModalHeader>Editar anúncio</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl mt={"20px"}>
                <FormLabel mb={"18px"}>Tipo do anúncio</FormLabel>
                <Flex justifyContent={"space-between"}>
                  <ButtonComponent
                    bgColor={isButtonTypeAd === "sale" ? "#4529E6" : "#fff"}
                    color={isButtonTypeAd === "sale" ? "#fff" : "#000"}
                    border={
                      isButtonTypeAd === "sale"
                        ? "2px solid #4529E6"
                        : "2px solid #ADB5BD"
                    }
                    w={"49%"}
                    onClick={() => changeButtonTypeHandler("sale")}
                    hover={{
                      border:
                        isButtonTypeAd === "sale"
                          ? "2px solid #4529E6"
                          : "2px solid #000",
                    }}
                    active={{
                      bgColor: isButtonTypeAd === "auction" ? "#000" : "#fff",
                      color: isButtonTypeAd === "auction" ? "#fff" : "#4529E6",
                    }}
                  >
                    Venda
                  </ButtonComponent>
                  <ButtonComponent
                    bgColor={isButtonTypeAd === "auction" ? "#4529E6" : "#fff"}
                    color={isButtonTypeAd === "auction" ? "#fff" : "#000"}
                    border={
                      isButtonTypeAd === "auction"
                        ? "2px solid #4529E6"
                        : "2px solid #ADB5BD"
                    }
                    w={"49%"}
                    onClick={() => changeButtonTypeHandler("auction")}
                    hover={{
                      border:
                        isButtonTypeAd === "auction"
                          ? "2px solid #4529E6"
                          : "2px solid #000",
                    }}
                    active={{
                      bgColor: isButtonTypeAd === "sale" ? "#000" : "#fff",
                      color: isButtonTypeAd === "sale" ? "#fff" : "#4529E6",
                    }}
                  >
                    Leilão
                  </ButtonComponent>
                </Flex>
              </FormControl>

              <FormLabel my={"24px"}>Informações do veículo</FormLabel>
              <FormControl mt={"24px"}>
                <InputComponent
                  title={"Título"}
                  fontSize={{ base: "14px" }}
                  placeholder={
                    "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200"
                  }
                />
              </FormControl>
              <FormControl mt={"24px"}>
                <Grid
                  templateRows={{
                    base: "repeat(2, 1fr)",
                    lg: "repeat(1, 1fr)",
                  }}
                  templateColumns={{
                    base: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)",
                  }}
                  gap={4}
                  spacing={{ base: "9px", md: "11px" }}
                >
                  <GridItem colSpan={{ base: 1 }}>
                    <InputComponent
                      title={"Ano"}
                      fontSize={{ base: "14px" }}
                      placeholder={"2018"}
                      borderRadius={"4px"}
                    />
                  </GridItem>
                  <GridItem colSpan={{ base: 1 }}>
                    <InputComponent
                      title={"Quilometragem"}
                      fontSize={{ base: "14px" }}
                      placeholder={"0"}
                      borderRadius={"4px"}
                    />
                  </GridItem>
                  <GridItem colSpan={{ base: 2, lg: 1 }}>
                    <InputComponent
                      title={"Preço"}
                      fontSize={{ base: "14px" }}
                      placeholder={"50.000,00"}
                      borderRadius={"4px"}
                    />
                  </GridItem>
                </Grid>
              </FormControl>
              <FormControl mt={"24px"} fontSize={{ base: "14px" }}>
                <FormLabel>Descrição</FormLabel>
                <Textarea
                  maxH={"80px"}
                  placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  css={{
                    "&::-webkit-scrollbar": {
                      width: "4px",
                    },
                    "&::-webkit-scrollbar-track": {
                      width: "6px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      background: "#ADB5BD",
                      borderRadius: "24px",
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                      background: "#495057",
                    },
                  }}
                  border={"2px solid transparent"}
                  _focus={{ borderColor: "#4529E6", boxShadow: "none" }}
                />
              </FormControl>

              <FormControl mt={"20px"}>
                <FormLabel mb={"18px"}>Tipo do anúncio</FormLabel>
                <Flex justifyContent={"space-between"}>
                  <ButtonComponent
                    bgColor={isButtonTypeVehicle === "car" ? "#4529E6" : "#fff"}
                    color={isButtonTypeVehicle === "car" ? "#fff" : "#000"}
                    border={
                      isButtonTypeVehicle === "car"
                        ? "2px solid #4529E6"
                        : "2px solid #ADB5BD"
                    }
                    w={"49%"}
                    onClick={() => changeButtonTypeVehicleHandler("car")}
                    hover={{
                      border:
                        isButtonTypeVehicle === "car"
                          ? "2px solid #4529E6"
                          : "2px solid #000",
                    }}
                    active={{
                      bgColor:
                        isButtonTypeVehicle === "motor" ? "#000" : "#fff",
                      color:
                        isButtonTypeVehicle === "motor" ? "#fff" : "#4529E6",
                    }}
                  >
                    Carro
                  </ButtonComponent>
                  <ButtonComponent
                    bgColor={
                      isButtonTypeVehicle === "motor" ? "#4529E6" : "#fff"
                    }
                    color={isButtonTypeVehicle === "motor" ? "#fff" : "#000"}
                    border={
                      isButtonTypeVehicle === "motor"
                        ? "2px solid #4529E6"
                        : "2px solid #ADB5BD"
                    }
                    w={"49%"}
                    onClick={() => changeButtonTypeVehicleHandler("motor")}
                    hover={{
                      border:
                        isButtonTypeVehicle === "motor"
                          ? "2px solid #4529E6"
                          : "2px solid #000",
                    }}
                    active={{
                      bgColor: isButtonTypeVehicle === "car" ? "#000" : "#fff",
                      color: isButtonTypeVehicle === "car" ? "#fff" : "#4529E6",
                    }}
                  >
                    Moto
                  </ButtonComponent>
                </Flex>
              </FormControl>

              <FormControl mt={"20px"}>
                <FormLabel mb={"18px"}>Publicado</FormLabel>
                <Flex justifyContent={"space-between"}>
                  <ButtonComponent
                    bgColor={isButtonTypePubliched === "yes" ? "#4529E6" : "#fff"}
                    color={isButtonTypePubliched === "yes" ? "#fff" : "#000"}
                    border={
                      isButtonTypePubliched === "yes"
                        ? "2px solid #4529E6"
                        : "2px solid #ADB5BD"
                    }
                    w={"49%"}
                    onClick={() => changeButtonPublichedHandler("yes")}
                    hover={{
                      border:
                      isButtonTypePubliched === "yes"
                          ? "2px solid #4529E6"
                          : "2px solid #000",
                    }}
                    active={{
                      bgColor: isButtonTypePubliched === "no" ? "#000" : "#fff",
                      color: isButtonTypePubliched === "no" ? "#fff" : "#4529E6",
                    }}
                  >
                    Sim
                  </ButtonComponent>
                  <ButtonComponent
                    bgColor={isButtonTypePubliched === "no" ? "#4529E6" : "#fff"}
                    color={isButtonTypePubliched === "no" ? "#fff" : "#000"}
                    border={
                      isButtonTypePubliched === "no"
                        ? "2px solid #4529E6"
                        : "2px solid #ADB5BD"
                    }
                    w={"49%"}
                    onClick={() => changeButtonPublichedHandler("no")}
                    hover={{
                      border:
                      isButtonTypePubliched === "no"
                          ? "2px solid #4529E6"
                          : "2px solid #000",
                    }}
                    active={{
                      bgColor: isButtonTypePubliched === "yes" ? "#000" : "#fff",
                      color: isButtonTypePubliched === "yes" ? "#fff" : "#4529E6",
                    }}
                  >
                    Não
                  </ButtonComponent>
                </Flex>
              </FormControl>
            </ModalBody>
            <ModalFooter justifyContent={"flex-start"}>
              <ButtonComponent
                bgColor="#4529E6"
                type={"submit"}
                color={"#fff"}
                hover={{ bgColor: "#5126EA" }}
                active={{ bgColor: "#EDEAFD", color: "#4529E6" }}
              >
                Ir para o login
              </ButtonComponent>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};
