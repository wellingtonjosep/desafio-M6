import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export const InputComponent = ({
  title,
  w,
  maxW,
  placeholder,
  error,
  type,
  register,
  fontSize,
  borderRadius,
  colSpan,
}) => {
  return (
    <FormControl colSpan={colSpan} isInvalid={error} w={w} maxW={maxW}>
      <FormLabel fontSize={fontSize}>{title}</FormLabel>
      <Input
        {...register}
        placeholder={placeholder}
        borderRadius={borderRadius}
        type={type}
      />
      <FormErrorMessage>Insira um texto</FormErrorMessage>
    </FormControl>
  );
};
