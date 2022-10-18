import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ButtonComponent } from "../Button";

export const ModalSignup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ButtonComponent onClick={onOpen}>Open Modal</ButtonComponent>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sucesso!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text color={"#212529"} fontWeight={"bold"}>
              Sua conta foi criada com sucesso!
            </Text>
            <Text fontSize={"16px"} color={"#495057"}>
              Agora você poderá ver seus negócios crescendo em grande escala
            </Text>
          </ModalBody>

          <ModalFooter justifyContent={"flex-start"}>
            <ButtonComponent
              bgColor="#4529E6"
              color={"#fff"}
              hover={{ bgColor: "#5126EA" }}
              active={{ bgColor: "#EDEAFD", color: "#4529E6" }}
            >
              Ir para o login
            </ButtonComponent>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
