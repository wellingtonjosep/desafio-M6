import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export const InputComponent = ({ placeholder, error, type, register }) => {
  return (
    <FormControl isInvalid={error}>
      <FormLabel>Descrição</FormLabel>
      <Input {...register} placeholder={placeholder} type={type} />
      <FormErrorMessage>Insira um texto</FormErrorMessage>
    </FormControl>
  );
};
