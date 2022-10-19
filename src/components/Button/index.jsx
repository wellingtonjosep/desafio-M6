import { Button } from "@chakra-ui/react";

export const ButtonComponent = ({
  bgColor,
  onClick,
  fontWeight,
  fontSize,
  hover,
  active,
  color,
  variant,
  children,
  border,
  weight,
  mr,
  w,
  type,
}) => {
  return (
    <Button
      bgColor={bgColor}
      color={color}
      onClick={onClick}
      fontWeight={fontWeight}
      fontSize={fontSize}
      _hover={hover}
      _active={active}
      variant={variant}
      border={border}
      weight={weight}
      mr={mr}
      w={w}
      // type={type}
    >
      {children}
    </Button>
  );
};
