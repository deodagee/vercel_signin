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
    title="Personal Blog">
      <Container>
      <Center my={6}>
          <Image src="/images/works/imageblog.jpg" alt="icon" />
        </Center>
        <Title>
          Ai-Generated Studio Blog Site <Badge>July 2023</Badge>
        </Title>
        <P>
        &quot;A slide-able Ai Studio Blog that is dynamic and visually engaging, running on the web. Menu bar contains information for individuals who want to learn more about ai art. It presents content in the form of a slideshow or "carousel" of images. It allows users to browse through a series of images by sliding or swiping horizontally, providing an interactive and immersive experience. In addition to its slide-able format, a slide-able image blog also ensures that accompanying information or captions are easily viewable with each slide. Alongside each image, relevant details, descriptions, or contextual information are provided, allowing users to gain insights and understand the content within the slideshow.&quot;
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://ai-studio-beta.vercel.app/">
              Released <ExternalLinkIcon mx="2px" />
            </Link>
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
            <Meta>Web App Name</Meta>
            <span>"Ai Studio V2"</span>
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
