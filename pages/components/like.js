import Link from 'next/link';
import Image from 'next/image';
import { useColorModeValue} from '@chakra-ui/react';
import styled from '@emotion/styled';

const LikeBox = styled.span`
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

const Like = () => {
    const stariconastrum = `/images/staricon.png` 

    return (
        <Link href="/">
            
                <LikeBox>
                    <Image 
                    Link= {"/public/images/staricon.png"}
                    src={stariconastrum}
                    width={30}
                    height={30}
                    alt="logo"
                    quality={50}
                    loading= "eager"/>
                </LikeBox>
            
        </Link>
    )
}
export default Like