import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    UnorderedList,
    Heading,
    Center,
    SimpleGrid
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work2'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article2'
  
  const Work = () => (
    <Layout title="Geometry Nodes">
      <Container>
        <Title>
          Geometry Nodes <Badge>Blender</Badge>
        </Title>
        <P>
        Geometry nodes in Blender allow users to manipulate and generate 3D models in a non-destructive way. They offer a visual way to perform mathematical operations on the vertices and edges of a model, allowing for the creation of complex shapes and effects without permanently altering the original geometry. This gives users the ability to easily experiment and make changes to their models, making the design process more flexible and efficient. Additionally, geometry nodes can also be used for tasks such as texture mapping and UV unwrapping, further enhancing the capabilities of Blender as a powerful 3D modeling tool.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>SOFTWARE</Meta>
            <span>Blender,Photoshop,Illustrator,AfterFX</span>
          </ListItem>
          <ListItem>
            <Meta>GLTF & GLB</Meta>
            <Link href="https://threejs.org/">
              Coding <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Dribbble</Meta>
            <Link href="https://dribbble.com/singiza">
              Go to Dribbble
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Coding IDEs and More</Center>
        </Heading>
  
        <UnorderedList my={4}>
          <ListItem>
            <Link href="https://github.com/atom/atom">
              <Badge mr={2}>Atom</Badge>
              Atom is a highly customizable and user-friendly open-source text editor that is popular among web developers and programmers for its advanced features, such as a built-in package manager and integration with version control systems.
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
  
          <ListItem>
            <Link href="https://code.visualstudio.com/">
              <Badge mr={2}>VS Code</Badge>
              Visual Studio Code is also a highly popular and feature-rich open-source code editor that offers a streamlined interface, fast performance, and a large library of extensions for improved 
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>

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
