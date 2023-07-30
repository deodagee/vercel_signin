import Link from 'next/link';
import Image from 'next/image';
import {Text, useColorModeValue} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { easeIn } from 'framer-motion';

const LogoBox = styled.span`
font-weight"bold;
font-size: 18px;
display:inlin-flex;
align-items: center;
height: 30px:
line-height: 20px;
padding: 10px;

&:hover img{
    transform:rotate(20deg);
}
`

const Logo = () => {
    const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png` 

    return (
        <Link href="/">
            
                <LogoBox>
                    <Image 
                    src={footPrintImg}
                    width={30}
                    height={30}
                    alt="logo"
                    quality={50}
                    loading= "eager"/>
                    <Text
                    color={useColorModeValue('#D0021B', '#E5E5E5')}
                    fontFamily="'Babylonica', cursive "
                    fontWeight="bold"
                    
                    
                    
                    ml={5}>
                        Deo Singiza
                    </Text>
                </LogoBox>
            
        </Link>
    )
}
export default Logo