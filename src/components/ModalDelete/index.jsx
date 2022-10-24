import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import test from "../../assets/test.png";
import { globalStyles } from "../../styles/global";

export const ModalDelete = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          maxWidth={{ base: "344px", md: "520px" }}
          w={{ md: "520px" }}
          pb={"25px"}
          pl={{ base: "0px", md: "10px" }}
        >
          <ModalHeader
            color={globalStyles.black}
            mt={{ base: "10px", md: "0px" }}
            fontFamily={"Lexend"}
            fontSize={"16px"}
            fontWeight={"500"}
            pl={{ base: "16px", md: "10px" }}
          >
            Excluir anúncio
          </ModalHeader>
          <ModalCloseButton
            mt={{ base: "14px", md: "5px" }}
            mr={{ base: "0px", md: "10px" }}
            fontSize={"15px"}
            color={globalStyles.grey4}
          />
          <ModalBody p={"0px"} mt={"20px"}>
            <Text
              color={globalStyles.black}
              fontFamily={"Lexend"}
              fontSize={"16px"}
              fontWeight={"500"}
              ml={{ base: "16px", md: "10px" }}
            >
              Tem certeza que deseja remover este anúncio?
            </Text>

            <Text
              color={globalStyles.grey2}
              fontFamily={"Inter"}
              fontSize={"16px"}
              fontWeight={"400"}
              ml={{ base: "16px", md: "10px" }}
              mt={"30px"}
              mb={{base: "30px", md: "40px"}}
              pr={{ base: "0px", md: "22px" }}
              lineHeight={"28px"}
            >
              Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
              conta e removerá seus dados de nossos servidores.
            </Text>
          </ModalBody>

          <ModalFooter p={"0px"} alignItems={"center"}>
            <Button
              bgColor={globalStyles.grey6}
              color={globalStyles.grey2}
              fontFamily={"Inter"}
              fontSize={"16px"}
              h={"48px"}
              w={{ base: "113px", md: "126px" }}
              borderRadius={"4px"}
              mr={3}
              onClick={onClose}
            >
              Cancelar
            </Button>
            <Button
              bgColor={globalStyles.alert2}
              color={globalStyles.alert1}
              fontFamily={"Inter"}
              fontSize={"16px"}
              h={"48px"}
              w={{ base: "190px", md: "211px" }}
              borderRadius={"4px"}
              mr={{base: "3", md: "24px"}}
              onClick={onClose}
            >
              Sim, excluir anúncio
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
