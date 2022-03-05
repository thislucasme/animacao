import { ChakraProvider, theme, Box, Center, Text, VStack, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import './App.css'


const MotionBox = motion(Box)


export const App = () => {

  const style: React.CSSProperties = {
    height: "100vh",
    background: "linear-gradient(to right, #373b44, #4286f4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

  }

  return (
    <ChakraProvider theme={theme}>

      <VStack style={style}>
        <Center h={200} w={600} >
          <VStack as={motion.div}
          animate={{opacity: 0.2, marginTop:100, rotateZ: 360}}>
            <Text as={motion.h1}  color={"white"} fontSize={"2xl"}
            animate={{fontSize: "40px"}}
            >
              Bem vindo a pizzaria Buzz
            </Text>
            <Button as={motion.button}
            animate={{scale: 1.2}}>
              Fazer pedido
            </Button>
          </VStack>
        </Center>
      </VStack>

    </ChakraProvider >
  );

}