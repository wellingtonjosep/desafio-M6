import {
  Button,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  Tabs,
  Text,
  Textarea,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { globalStyles } from "../../styles/global";

export const ModalUpdateUser = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        bgColor={globalStyles.whiteFixed}
        border={`1px solid ${globalStyles.brand1}`}
        color={globalStyles.brand1}
      >
        Editar Perfil
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxWidth={{ base: "823px", md: "520px" }} pb={"25px"}>
          <ModalHeader> Editar Perfil</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text margin={"18px"} marginLeft={"0"}>
              Informações pessoais
            </Text>
            <FormLabel>Nome</FormLabel>
            <Input marginBottom={"15px"} placeholder="Seu nome completo" />

            <FormLabel>Email</FormLabel>
            <Input marginBottom={"15px"} placeholder="exemplo@email.com" />

            <FormLabel>CPF</FormLabel>
            <Input marginBottom={"15px"} placeholder="000.000.000-00" />

            <FormLabel>Celular</FormLabel>
            <Input marginBottom={"15px"} placeholder="(00) 99999-9999" />

            <FormLabel>Data de Nascimento</FormLabel>
            <Input marginBottom={"15px"} placeholder="09/09/99" />

            <FormLabel margin={"0px"} marginTop={"15px"}>
              Descrição
            </FormLabel>
            <Textarea type={"text"} placeholder="Digitar descrição" />

            <HStack
              marginTop={"40px"}
              marginBottom={"0px"}
              justify={"flex-end"}
            >
              <Button
                w={"126px"}
                bgColor={globalStyles.grey6}
                color={globalStyles.grey2}
              >
                Cancelar
              </Button>
              <Button
                w={"193px"}
                bgColor={globalStyles.brand1}
                color={globalStyles.whiteFixed}
              >
                Salvar informações
              </Button>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
