import { VStack } from "@chakra-ui/react";
import { ButtonComponent } from "../../components/Button";

export const Homepage = () => {
  return (
    <VStack>
      

      <ButtonComponent border={"2px solid black"}  bgColor={"transparent"}>Variant</ButtonComponent>
      <ButtonComponent />
      <ButtonComponent />
    </VStack>
  );
};
