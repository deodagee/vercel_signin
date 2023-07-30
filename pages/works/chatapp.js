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
          <Image src="/images/works/chatapp.jpg" alt="icon" />
        </Center>
        <Title>
          Chat App <Badge>July 2023</Badge>
        </Title>
        <P>
        &quot;A private chat app running on a web browser is a secure and encrypted communication platform that enables users to have confidential conversations in real-time. This type of app prioritizes privacy and ensures that messages and information exchanged between users remain confidential and inaccessible to unauthorized individuals. It is worth noting that through the advancement of AI, internet privacy is now a myth. Creating your own credentials provides enhanced privacy and control over your authentication process. It allows you to maintain ownership of your data and reduces the reliance on third-party services for user authentication. By managing your own credentials, you can establish a more secure and private environment, reducing the risk of potential data breaches or unauthorized access. I've set up the authentication method with github in the app, however this can be changed to your preferred method wether it be a mainstream login or a personal database.&quot;
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <a href="https://real-time-chatapp-v1-deodagee.vercel.app/">
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
          </ListItem>
          <ListItem>
            <Meta>App Name</Meta>
            <span>"Chat App-v1.0.0"</span>
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
