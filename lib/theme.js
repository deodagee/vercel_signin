import { extendTheme } from "@chakra-ui/react";
import { mode} from '@chakra-ui/theme-tools';

const styles ={ 
    global: props => ({
        body: {
            bg:mode('#ffffff', '#02020f')(props)
        }
    })
}

const components = {
    Heading: {
        variants: { 
            'section-title': { 
                textDecoration: 'underline',
                fontSize: 20, 
                textUnderlineOffset: 6,
                textDecorationColor: '#F3F3F3',
                textDecorationThickness: 3,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#3d7aed', '#ff63c3')(props),
            textUnderlineOffest: 3
        }) 
    }
}

const fonts= { 
    heading:"'M PLUS Rounded 1c'",
    heading: "''Zeyada', cursive'",
    heading: "''Babylonica', cursive'"
}

const colors = {
    glassTeal: '#88ccca'
}

const config = { 
    initialColorMode: 'dark',
    useSystemColorMode: false
}

const theme= extendTheme({
    config, styles, components,
    colors, fonts

})

export default theme