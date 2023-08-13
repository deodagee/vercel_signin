import {
  Box,
  Heading,
  Center,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Image,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article2'
import { Title, WorkImage, Meta } from '../../components/work2'
import P from '../../components/paragraph'
import Section from '../../components/section'
import { Component } from 'react'
import { WorkGridItem } from '../../components/grid-item'
import ui3 from '/public/images/works/ui3.jpg'
import ui4 from '/public/images/works/ui4.jpg'



const Work = () => (
  <Layout title="Ui/Ux">
    <Container>
      <Title>
        Ui/UX <Badge>Web Dev</Badge>
      </Title>

      <Heading as="h4" my={6}>

        <Center style={{ margin: "15px", fontSize: "17px",marginBottom:"40px", marginTop: '66px' }}> Key Features  </Center>
        <Center style={{ margin: "15px", fontSize: "10px", marginTop: '15px' }}><Badge style={{ fontSize: "10px" }}>User Experience</Badge></Center>

      </Heading>
      <Section>
          <WorkGridItem
            id="ui3"
            thumbnail={ui3}
            quality={50}>
          </WorkGridItem>
        </Section>
      <P style={{ textAlign:"center", margin:"15px", fontSize: "12px",marginBottom:"40px" }}>
      The User Interface (UI) of a website refers to the visual and interactive elements that users interact with when they visit your website. It encompasses everything that users see and interact with on the screen, including buttons, menus, forms, images, and content layout. A well-designed UI is crucial for creating a positive first impression and ensuring that visitors can easily navigate and engage with your website.
      </P>

        <Center style={{ margin: "15px", fontSize: "10px", marginTop: '15px' }}><Badge style={{ fontSize: "10px" }}>User Interface</Badge></Center>

        <Section>
          <WorkGridItem
            id="ui4"
            thumbnail={ui4}
            quality={50}>
          </WorkGridItem>
        </Section>

      <P style={{ textAlign:"center", margin:"15px", fontSize: "12px", marginTop: '36px' }}>
      User Experience (UX) is the overall feeling and perception users have when interacting with your website. It encompasses everything from the UI to the content, performance, and usability. A positive UX is essential for keeping visitors engaged, encouraging them to explore your website further, and ultimately converting them into customers.
      </P>
      <Center my={6}>
          <Image src="/images/footprint.png" marginTop={10} width={5} height={4} alt="icon" />
        </Center>




      <Box align="center" my={6}>
        <Link
          className=""
          href="https://digitalmarketinginstitute.com/blog/what-is-seo-and-why-is-it-important"
          target="_blank"
        >
          <Image  marginTop={70}
            maxW={240}
            alt="See why your SEO matters "
            quality={50}
          />
        </Link>
      </Box>


      <List style={{ textAlign:"center", margin:"15px", fontSize: "12px", marginTop: '66px' }} ml={4} my={4}>
        <ListItem>
          <Center>
          <Badge>Styles</Badge></Center>
          <UnorderedList>
          <List >
          <ListItem style={{  marginTop: '10px' }}>Neumorphic</ListItem>
          <ListItem style={{  marginTop: '10px' }}>Glassmorphic</ListItem>
          <ListItem style={{  marginTop: '10px' }}>Skeuomorphic </ListItem>
          <ListItem style={{  marginTop: '10px' }}>Retro </ListItem>
          <ListItem style={{  marginTop: '10px' }}>Illustrative </ListItem>
          <ListItem style={{  marginTop: '10px' }}>Flat </ListItem>
          </List>
          </UnorderedList>
        </ListItem>
        <ListItem>
          <Meta>Devices</Meta>
          <span>Desktop + Mobile</span>
        </ListItem>
      </List>



      <SimpleGrid
        ml="35%"
        columns={2}
        gap={2}>
        <WorkImage src="/images/works/thumbnail3.jpg" alt="branding" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
