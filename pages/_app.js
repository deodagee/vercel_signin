import { ChakraProvider, StylesProvider } from "@chakra-ui/react" ;
import Fonts from "./components/fonts";
import { AnimatePresence } from "framer-motion";


const Website = ({Component, pageProps, router}) => {
    return (
    <ChakraProvider>
        <Fonts />
        <AnimatePresence mode='sync' initial={true}>
            <Component {...pageProps} key={router.route} /> 
        </AnimatePresence>
    </ChakraProvider>
    )
}

export default Website


/*

Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons.

*/




