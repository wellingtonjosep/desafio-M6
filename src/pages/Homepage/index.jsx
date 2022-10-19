import { Center } from "@chakra-ui/react";
import { ModalAdCreated } from "../../components/ModalAdCreated";
import { ModalAdRemoved } from "../../components/ModalAdRemoved";
import { ModalSignup } from "../../components/ModalSignup";

export const Homepage = () => {
  return (
    <Center w={"40vw"}>
      <ModalSignup />
      <ModalAdCreated />
      <ModalAdRemoved />
    </Center>
  );
};
