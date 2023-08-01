import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    Center, 
    Image
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout 
    title="Secure and Private Chat App">
      <Container>
      <Center my={6}>
          <Image src="/images/works/cafepls.png" alt="icon" />
        </Center>
        <Title>
          Cafe Pls <Badge>July 2023</Badge>
        </Title>
        <P>
        &quot;An App featuring login capabilities and server data storage. Client log in, Admin Login, Item Order, and much more. Perfect for independent business owners looking for personalized User Interface items. Built by Deo Singiza, aka Astrum Stellar.&quot;
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <a href="https://coffee-shop-beta-swart.vercel.app/">
              Released <ExternalLinkIcon mx="2px" />
            </a>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Internet Browser</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NextJs + React</span>
            <span>SQLITE3</span>
          </ListItem>
          <ListItem>
            <Meta>App Name</Meta>
            <span>"Cafe Personal v1.0.0"</span>
          </ListItem>
          <ListItem>
            <Meta>Developer</Meta>
            <span>Deo Singiza</span>
          </ListItem>
          
          
          

        </List>


        
      </Container>
    </Layout>
  )
  
  export default Work
