import { ChakraProvider, theme, Box, Center, Text, VStack, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";



const MotionBox = motion(Box)


export const App = () => {


  const [anime, setAnime] = useState(false);

  const variants = {
    visible: { opacity: 100 },
    hidden: { opacity: 0 },
  }

  const handle = () => {
    setAnime(!anime)
  }

  return (
    <ChakraProvider theme={theme}>
      <Center mt={20}>
        <VStack>
          <motion.div

            animate={{ y: [null, 400], x: 800, ini }}
            transition={{ duration: 2, times: [0, 0.2, 1] }}
            initial={anime}
          >
            <Button onClick={handle} >Animation</Button>


          </motion.div>

        </VStack>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <Box h={"20px"} bg="red" w="420px"></Box>
        </motion.div>
      </Center>

    </ChakraProvider >
  );

}