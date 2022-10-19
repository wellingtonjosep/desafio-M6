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

export const ModalComponent = ({ header, title, description, typeModal }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ButtonComponent onClick={onOpen}>{typeModal}</ButtonComponent>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text color={"#212529"} fontWeight={"bold"}>
              {title}
            </Text>
            <Text fontSize={"16px"} color={"#495057"}>
              {description}
            </Text>
          </ModalBody>

          {typeModal === "signup" ? (
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
          ) : typeModal === "adsense" ? (
            <ModalFooter></ModalFooter>
          ) : (
            <ModalFooter>
              <ButtonComponent
                bgColor="#DEE2E6"
                color={"#495057"}
                hover={{ bgColor: "#CED4DA" }}
                active={{ bgColor: "#495057", color: "#CED4DA" }}
                mr={3}
              >
                Cancelar
              </ButtonComponent>
              <ButtonComponent
                bgColor="#FFE5E5"
                color={"#CD2B31"}
                hover={{ bgColor: "#FDD8D8" }}
                active={{ bgColor: "#CD2B31", color: "#FDD8D8" }}
              >
                Sim, excluir anúncio
              </ButtonComponent>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
