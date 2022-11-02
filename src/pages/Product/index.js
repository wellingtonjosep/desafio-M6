import { Box } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { MainProduct } from "../../components/MainProduct";
import { globalStyles } from "../../styles/global";

export const ProductPage = () => {
  return (
    <>
      <Header />
      <MainProduct/>
      <Box position={"absolute"} zIndex={"-1"} top={"0px"} w={"100vw"} h={{base: "516px"}} bgColor={globalStyles.brand1} />
      <Footer/>
    </>
  );
};
