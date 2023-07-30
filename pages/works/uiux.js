import {
    Box,
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
  
  const Work = () => (
    <Layout title="Ui/Ux">
      <Container>
        <Title>
          Ui/UX <Badge>Web Dev</Badge>
        </Title>
        <P>
        When deciding between UI (user interface) or UX (user experience) design, or both, clients should consider their goals and objectives for their product or website. UI design focuses on the visual elements of a product, such as its layout, color scheme, and typography, while UX design involves designing the overall experience a user has with a product, including its functionality, accessibility, and usability. If the client prioritizes a visually appealing and aesthetically pleasing product, they may choose to focus on UI design. On the other hand, if the client prioritizes ease of use and a seamless user experience, they may choose to focus on UX design. If the client wants to create a product that combines both a great look and feel with a great user experience, they may choose to invest in both UI and UX design.
        </P>

        <UnorderedList my={4}>
          <ListItem>Business-to-consumer (B2C)</ListItem>
          <ListItem>Business-to-business (B2B)</ListItem>
        </UnorderedList>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Browsers</Meta>
            <span>All</span>
          </ListItem>
          <ListItem>
            <Meta>Devices</Meta>
            <span>Desktop + Mobile</span>
          </ListItem>
        </List>
  
        <Box align="center" my={6}>
          <Link
            className="link-appstore"
            href="https://itunes.apple.com/app/id1035645520?mt=8"
            target="_blank"
          >
            <Image
              maxW={240}
              src="https://digitalmarketinginstitute.com/blog/what-is-seo-and-why-is-it-important"
              className="image-appstore"
              alt="See why your SEO matters "
              quality={50}
            />
          </Link>
        </Box>
  
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
