import Head from 'next/head';
import {Box, Container} from '@chakra-ui/react';
import VoxelDog from '../voxel-dog.js';


const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head> 
            <meta name="viewport" content= "width=device-width, initial-scale=1" /> 

                <meta name="viewport" /> 
                <title> Astrum Stellar - Homepage</title>
            </Head>

            <Container pt={14}>
                <VoxelDog /> 
                {children}
            </Container>
        </Box>
    )
}

export default Main