import React from 'react'
import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Aw Sorry</Heading>
      <Text>Pretty sure this page is still under construction ;)</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="teal">
          Return to Index
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound