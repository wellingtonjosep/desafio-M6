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

import test from "../../assets/test.png"
import { globalStyles } from "../../styles/global";

export const ModalView = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxWidth={{base: "344px", md: "520px"}} w={{md: "520px"}} pb={"25px"} >
          <ModalHeader mt={{base: "20px", md: "0px"}}  color={globalStyles.grey1} fontFamily={"Lexend"} fontSize={"16px"}  >Imagem do veículo</ModalHeader>
          <ModalCloseButton mt={{base: "24px", md: "5px"}} fontSize={"15px"} color={globalStyles.grey4} />
          <ModalBody p={"0px"} mt={"20px"} textAlign="center" >
            <Image w={{base: "352px", md: "520px"}} h={{base: "239px"}} src={test}  alt="image car" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
