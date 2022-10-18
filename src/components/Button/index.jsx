import { border, Button } from "@chakra-ui/react";

export const ButtonComponent = ({
  bgColor,
  onClick,
  fontWeight,
  fontSize,
  hover,
  focus,
  color,
  variant,
  children,
  border,
  weight,
}) => {
  return (
    <Button
      bgColor={bgColor}
      color={color}
      onClick={onClick}
      fontWeight={fontWeight}
      fontSize={fontSize}
      _hover={hover}
      _focus={focus}
      variant={variant}
      border={border}
      weight={weight}
    >
      {children}
    </Button>
  );
};
