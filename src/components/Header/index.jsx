import {
  Box,
  Button,
  Collapse,
  HStack,
  Icon,
  Image,
  Link,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import logo from "../../assets/logo-header.svg";
import { globalStyles } from "../../styles/global";
import { BiMenu } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md"
import { ModalHeaderMobile } from "../ModalHeaderMobile";

export const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <HStack
        h={"80px"}
        width="100vw"
        bgColor={globalStyles.grey10}
        borderBottom={`2px solid ${globalStyles.grey6}`}
      >
        <Image
          src={logo}
          alt="logo site"
          w={"150px"}
          mr="auto"
          ml={{ base: "16px", md: "30px", lg: "60px" }}
        />
        <Icon onClick={onToggle} h={"55px"} pt={4} pr={"16px"} display={{ md: "none" }} w>
            {
                isOpen ? <MdOutlineClose/> : <BiMenu />
            }
        </Icon>
        <HStack
          h={"80px"}
          w={{ md: "210px", lg: "250px" }}
          justifyContent="space-evenly"
          borderRight={`2px solid ${globalStyles.grey6}`}
          display={{ base: "none", md: "flex" }}
        >
          <Link
            fontSize={"16px"}
            fontFamily="Inter"
            fontWeight={"600"}
            color={globalStyles.grey2}
            href="/"
          >
            Carros
          </Link>
          <Link
            fontSize={"16px"}
            fontFamily="Inter"
            fontWeight={"600"}
            color={globalStyles.grey2}
            href="/"
          >
            Motos
          </Link>
        </HStack>
        <HStack
          paddingRight={{ md: "25px", lg: "60px" }}
          display={{ base: "none", md: "flex" }}
        >
          <Link
            fontSize={"16px"}
            fontFamily="Inter"
            fontWeight={"600"}
            ml={{ md: "25px", lg: "44px" }}
            mr={{ md: "25px", lg: "44px" }}
            color={globalStyles.brand1}
            href="/"
          >
            Fazer Login
          </Link>
          <Button
            fontSize={"16px"}
            fontFamily="Inter"
            fontWeight={"600"}
            w={"133px"}
            h={"48px"}
            border={`2px solid ${globalStyles.grey4}`}
            bgColor={globalStyles.grey10}
          >
            Cadastrar
          </Button>
        </HStack>
        {
            isOpen && <ModalHeaderMobile/>
        }
      </HStack>
    </>
  );
};
