import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  VStack,
  HStack,
  Input,
  FormLabel,
  Tab,
  TabList,
  Tabs,
  Textarea,
} from "@chakra-ui/react";
import { globalStyles } from "../../styles/global";

export const ModalCreatAd = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}> Abrir Modal </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxWidth={{ base: "1036px", md: "520px" }} pb={"25px"}>
          <ModalHeader> Criar Anúncio</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text marginBottom={"10px"}> Tipo de anuncio </Text>

            <Tabs>
              <TabList>
                <Tab
                  w={"228px"}
                  h={"48px"}
                  borderRadius={"4px"}
                  padding={"12px, 28px, 12px, 28px"}
                  border={`1.5px solid ${globalStyles.grey4}`}
                  marginRight={"10px"}
                  _selected={{
                    bgColor: globalStyles.brand1,
                    color: globalStyles.whiteFixed,
                    border: `1.5px solid ${globalStyles.grey4}`,
                  }}
                >
                  Venda
                </Tab>
                <Tab
                  w={"228px"}
                  h={"48px"}
                  borderRadius={"4px"}
                  padding={"12px, 28px, 12px, 28px"}
                  border={`1.5px solid ${globalStyles.grey4}`}
                  marginRight={"10px"}
                  _selected={{
                    bgColor: globalStyles.brand1,
                    color: globalStyles.whiteFixed,
                    border: `1.5px solid ${globalStyles.grey4}`,
                  }}
                >
                  Leilão
                </Tab>
              </TabList>
            </Tabs>

            <Text margin={"18px"} marginLeft={"0"}>
              Informações do veículo
            </Text>
            <FormLabel>Título</FormLabel>
            <Input placeholder="Título" />
            <HStack>
              <VStack align={"flex-start"}>
                <FormLabel>Ano</FormLabel>
                <Input placeholder="Digitar ano" />
              </VStack>
              <VStack align={"flex-start"}>
                <FormLabel>Quilometragem</FormLabel>
                <Input placeholder="0" />
              </VStack>
              <VStack align={"flex-start"}>
                <FormLabel>Preço</FormLabel>
                <Input placeholder="Digitar preço" />
              </VStack>
            </HStack>
            <FormLabel margin={"0px"} marginTop={"15px"}>
              Descrição
            </FormLabel>
            <Textarea type={"text"} placeholder="Digitar descrição" />

            <Text margin={"0px"} marginTop={"15px"}>
              Tipo de veículo
            </Text>

            <Tabs>
              <TabList>
                <Tab
                  w={"228px"}
                  h={"48px"}
                  borderRadius={"4px"}
                  padding={"12px, 28px, 12px, 28px"}
                  border={`1.5px solid ${globalStyles.grey4}`}
                  marginRight={"10px"}
                  _selected={{
                    bgColor: globalStyles.brand1,
                    color: globalStyles.whiteFixed,
                    border: `1.5px solid ${globalStyles.grey4}`,
                  }}
                >
                  Carro
                </Tab>
                <Tab
                  w={"228px"}
                  h={"48px"}
                  borderRadius={"4px"}
                  padding={"12px, 28px, 12px, 28px"}
                  border={`1.5px solid ${globalStyles.grey4}`}
                  marginRight={"10px"}
                  _selected={{
                    bgColor: globalStyles.brand1,
                    color: globalStyles.whiteFixed,
                    border: `1.5px solid ${globalStyles.grey4}`,
                  }}
                >
                  Moto
                </Tab>
              </TabList>
            </Tabs>
            <FormLabel margin={"0px"} marginTop={"15px"}>
              Imagem da Capa
            </FormLabel>
            <Input placeholder="Inserir URL da imagem" />
            <FormLabel margin={"0px"} marginTop={"15px"}>
              1º imagem da galeria
            </FormLabel>
            <Input placeholder="Inserir URL da imagem" />
            <HStack margin={"10px"} justify={"flex-end"}>
              <Button
                w={"126px"}
                bgColor={globalStyles.grey6}
                color={globalStyles.grey2}
              >
                Cancelar
              </Button>
              <Button
                w={"193px"}
                bgColor={globalStyles.brand3}
                color={globalStyles.brand4}
              >
                Criar anúncio
              </Button>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
