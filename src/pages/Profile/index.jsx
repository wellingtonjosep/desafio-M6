import { Avatar, Box, Button, HStack, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react"
import { useState } from "react"
import { Header } from "../../components/Header"
import { ModalCreatAd } from "../../components/ModalCreateAd"
import { globalStyles } from "../../styles/global"


export const ProfilePage = () => {

    const [isOpen, setIsOpen] = useState(false)

    const user = {
        "name": "Samuel Leâo",
        "email": "admin3@gmail.com",
        "cpf": "3425436543645",
        "phone": "81984848484",
        "birthDate": "2022-21-21",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        "typeUser": "advertiser",
    }

    return (
        <>
        <Header/>
        <Box position={"absolute"} zIndex={"-1"} top={"0px"} w={"100vw"} h={{base: "331px", md: "360px", lg: "351px"}} bgColor={globalStyles.brand1} />
        <VStack pb={"25px"} ml={"auto"} mr={"auto"} mt={{base: "65px", md: "75px"}}  maxWidth={{base:"343px", md: "668px", lg: "1024px"}} bgColor={globalStyles.grey10} borderRadius={"4px"}>
            <Wrap>
                <WrapItem>
                    <Avatar ml={{base: "29px", md: "41px"}} mr={{base: "210px", md: "210px", lg: "700px"}} mt={{base: "40px"}} mb={"24px"} size={"lg"} w={"104px"} h={"104px"} name={user.name} />
                </WrapItem>
                <HStack pb={"24px"} w={{base: "343px"}}>
                    <Text mt={"-2px"} ml={{base: "29px", md: "41px"}} fontFamily={"Lexend"} fontWeight={"600"} fontSize={"20px"} w={"130px"} h={"25px"}>{user.name}</Text>
                    {
                        user.typeUser === "advertiser" ? (
                        <Text borderRadius={"4px"} padding={"4px 8px 4px 8px"} fontWeight={"500"} fontSize={"14px"} fontFamily={"Inter"} color={globalStyles.brand1} bgColor={globalStyles.brand4}>Anunciante</Text>
                        ) : (
                        <Text></Text>
                        )
                    }
                </HStack>
                <Text mb={"16px"} pl={{base: "29px", md: "41px"}} pr={"24px"} color={globalStyles.grey2} lineHeight={"28px"} fontSize={"16px"}  fontWeight={"400"} fontFamily={"Inter"}>{user.description}</Text>
                <HStack pl={{base: "29px", md: "41px"}} w={"100%"}>
                    <Button onClick={() => setIsOpen(true)} fontWeight={"600"} fontSize={"16px"} color={globalStyles.brand1} bgColor={globalStyles.grey10} fontFamily={"Inter"} w={"160px"} h={"48px"} border={`1.5px solid ${globalStyles.brand1}`} borderRadius={"4px"}>Criar anuncio</Button>
                </HStack>
            </Wrap>
        </VStack>
        {
            isOpen === true && <ModalCreatAd setIsOpen={setIsOpen}/>
        }
        </>
    )
}