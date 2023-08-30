import { ChakraProvider, StylesProvider } from "@chakra-ui/react" ;
import Fonts from "./components/fonts";
import { AnimatePresence } from "framer-motion";
import { SessionProvider } from "next-auth/react"

const Website = ({Component, pageProps, router, session}) => {
    return (
        <SessionProvider session={session}>
    <ChakraProvider>
        <Fonts />
        <AnimatePresence mode='sync' initial={true}>
            <Component {...pageProps} key={router.route} /> 
        </AnimatePresence>
    </ChakraProvider>
    </SessionProvider>
    )
}

export default Website




