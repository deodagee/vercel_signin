import Logo from './logo';
import NextLink from 'next/link';
import styles from "/styles/navbar.module.css"
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import ThemeToggleButton from './theme-toggle-button';

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200.', 'whiteAlpha.900')

    return (
        <NextLink href={href}>
            <Link
                p={2}
                pt={0.5}
                pb={1}
                borderRadius={5}
                bg={active ? 'orange.500' : undefined}
                color={active ? '#202023' : inactiveColor}>
                {children}
            </Link>
        </NextLink>
    )

}

const Navbar = props => {
    const { path } = props

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff98', '#292d3a30')}
            style={{ backdropFilter: 'blur(10px' }}
            zIndex={1}
            {...props}>
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between">

                <Flex
                    align="center"
                    mr={5}>
                    <Heading
                        as="h1"
                        size="lg"
                        letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}>
                    <LinkItem
                        href="/"
                        
                        path={path}>
                        Home
                    </LinkItem>

                    <LinkItem
                        href="/services"
                        path={path}>
                        Services
                    </LinkItem>

                    <LinkItem
                        href="/projects"
                        path={path}>
                        Projects
                    </LinkItem>

                    <LinkItem
                        href="/contact"
                        target="_blank"
                        rel="noopener noreferrer"
                        path={path}>
                        Contact
                    </LinkItem>

                    <LinkItem
                        href="/pricing"
                        path={path}>
                        Pricing
                    </LinkItem>

                    <LinkItem
                        href="https://github.com/deodagee/greenrepo"
                        target="_blank"
                        rel="noopener noreferrer"
                        path={path}>
                        Code
                    </LinkItem>

                </Stack>
                <Box
                    flex={1}
                    align="right">
                    <span className={styles.themebutton}>

                        <ThemeToggleButton
                            style={{ marginTop: '' }}

                            mt={5}
                        />
                    </span>


                    <Box
                        ml={2}
                        display={{ base: 'inline-block', md: 'none' }}
                        style={{ marginLeft: '4px', marginTop: '5px' }}
                    >
                        <Menu>
                            <span className={styles.menubutton}>
                                <MenuButton
                                    style={{ marginLeft: '40px', marginTop: '0px' }}
                                    as={IconButton}
                                    icon={<HamburgerIcon
                                    />}
                                    variants="outline"
                                    aria-label="Options" />
                            </span>

                            <MenuList>

                                <NextLink href="https://astrumstellar.com" passHref>
                                    <MenuItem as={Link}>Home</MenuItem>
                                </NextLink>

                                <NextLink href="/services" passHref>
                                    <MenuItem as={Link}>Services</MenuItem>
                                </NextLink>

                                <NextLink href="/projects" passHref>
                                    <MenuItem as={Link}>Projects</MenuItem>
                                </NextLink>

                                <NextLink href="/contact" target="_blank"
                                    rel="noopener noreferrer" passHref>
                                    <MenuItem as={Link}>Contact</MenuItem>
                                </NextLink>

                                <NextLink href="/pricing" passHref>
                                    <MenuItem as={Link}>Pricing</MenuItem>
                                </NextLink>

                                <NextLink href="https://github.com/deodagee/StellarSpace" target="_blank"
                        rel="noopener noreferrer" passHref>
                                    <MenuItem as={Link}>Source Code</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>

    )
}
export default Navbar