import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    UnorderedList,
    Heading,
    Center,
    Image
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article2'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work2'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="Front End">
      <Container>
        <Title>
          Front End <Badge>Web Dev</Badge>
        </Title>
        <Center my={6}>
          <Image src="/images/works/frontend2.png" alt="icon" />
        </Center>
        <P>
        Front-end development involves creating and implementing the visual and interactive elements of a website or web application, utilizing technologies such as HTML, CSS, and JavaScript to enhance user experience.        </P>
        <P>
        I specialize in small business-type apps because I prefer to focus on delivering high-quality and user-friendly solutions for smaller-scale projects, allowing me to provide personalized attention to each client&apos;s unique needs and goals. I believe that this specialization allows me to deliver the best possible results for my clients in a timely and efficient manner.
        </P>
        <UnorderedList pb={20} ml={4} my={4}>
          <ListItem>User-friendly and visually appealing design</ListItem>
          <ListItem>Mobile responsiveness</ListItem>
          <ListItem>
          Fast page load speeds
          </ListItem>
          <ListItem>
          Search engine optimization (SEO)
          </ListItem>
          <ListItem>
          Ease of use for updating and maintaining the site
          </ListItem>
          <ListItem>
          Security features to protect sensitive information
          </ListItem>
          <ListItem>Integration with other tools and platforms</ListItem>
          <ListItem >
          Customizable features and scalability for future growth.
          </ListItem>
        </UnorderedList>

        <Title>
          Back End <Badge>Web Dev</Badge>
        </Title>
        <Center my={6}>
          <Image src="/images/works/frontend3.png" alt="icon" />
        </Center>
        <P>
        Back-end development entails building and integrating the server-side components of a website or web application. It involves working with technologies such as server-side programming languages, databases, APIs, and server management.</P>
        <P>
        My area of expertise lies in developing back-end solutions for small business applications. I specialize in crafting efficient and secure server-side functionalities tailored to meet the specific requirements and objectives of each client. This focus on smaller-scale projects enables me to provide personalized attention and deliver high-quality results in a timely manner. By leveraging my specialization in back-end development, I ensure that my clients receive robust and customized solutions that align with their business needs.
        </P>
        <UnorderedList  pb={50}  ml={4} my={4}>
          <ListItem>Server-side</ListItem>
          <ListItem>Database Management</ListItem>
          <ListItem>
          APIs
          </ListItem>
          <ListItem>
          Security and Authentication
          </ListItem>
          <ListItem>
          Server Management and Deployment
          </ListItem>
          <ListItem>
          Caching and Performance Optimization
          </ListItem>
          <ListItem>Testing and Debugging</ListItem>
          <ListItem>
          Version Control
          </ListItem>
        </UnorderedList>
  
        <List pb={100} ml={4} my={4}>
          <ListItem mb={5}>
            <Meta>Ide&apos;s/Frameworks</Meta>
            <span>Vs Code,Atom, NextJs </span>
          </ListItem>
          <ListItem>
            <Meta >Stack</Meta>
            <span>Javascript, ExpressJs, Axios, GraphQl, MongoDB, SQLote, Prisma</span>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Hosting Options</Center>
        </Heading>
        <span>HostGator offers a range of hosting options to meet the diverse needs of website owners. Get access to multiple websites deals for shared servers or single servers, higher levels of security and performance for websites with heavier (or light) traffic, and specific requirements.
          </span>
  
        <UnorderedList pb={20} my={4}>
          <ListItem>
            <a href="https://www.hostgator.com/">
              <Badge mr={2}>Hosting</Badge>
              website hosting options &nbsp; 
              <ExternalLinkIcon mx="2px" />
            </a>
          </ListItem>
        </UnorderedList>
  
        <SimpleGrid 
        ml="35%"
        columns={2} 
        gap={2}>
          <WorkImage src="/images/works/thumbnail3.png" alt="amembo" />

        </SimpleGrid>
      </Container>
    </Layout>
  )
  
  export default Work
