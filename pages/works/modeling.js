import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    UnorderedList,
    Heading,
    Center,
    Image,
    SimpleGrid
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article2'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work2'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="Modeling">
      <Container>
        <Title>
          Modeling <Badge>Branding/Personal</Badge>
        </Title>
        <Center my={6}>
          <Image src="/images/works/inkdrop_01.png" alt="icon" />
        </Center>
        <P>3STL, PLY, VRML, X3D, PNG, JPEG, TIFF, OpenEXR, HDR, 3DS, OBJ, FBX, COLLADA, Alembic and More. </P>
        <P>
        Blender 3D uses a variety of modeling techniques, including Sculpting, which allows artists to sculpt and shape models as if they were working with clay, and the popular Polygon modeling technique which involves creating models by defining their shapes with a series of interconnected polyggonal faces. Additionally, Blender also supports NURBS modeling and Parametric modeling for creating smooth and precise surfaces.
        </P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Blender</span>
          </ListItem>
          <ListItem>
            <Meta>Render Engine</Meta>
            <span>Cycles</span>
          </ListItem>
          <ListItem>
            <Meta>Res</Meta>
            <span>4K capable</span>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Details</Center>
        </Heading>
  
        <UnorderedList my={4}>
          <ListItem>
            <Link href="https://www.poliigon.com/hdrs">
              <Badge mr={2}>HDRIs</Badge>
              High Dynamic Range Images (HDRI) can significantly enhance the realism and visual appeal of a scene in Blender by providing the lighting and reflections in the scene with accurate and detailed environmental information.{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>
            Geometry Nodes&nbsp;
            <Link
              target="_blank"
              href="https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/index.html"
            >
              from Blender
            </Link>
          </Center>
        </Heading>
  
        <UnorderedList my={4}>
          <ListItem>
            <Badge mr={2}>1</Badge>
            <span>
            Create complex shapes and objects through a combination of simple shapes and operations like union, intersection, and subtraction.
            </span>
          </ListItem>
          <ListItem>
            <Badge mr={2}>2</Badge>
            <span>
            Generate 3D models procedurally, meaning you can create an unlimited number of variations with a single node setup.
            </span>
          </ListItem>
          <ListItem>
            <Badge mr={2}>3</Badge>
            <span>
            Apply advanced techniques such as the Boolean modifier, skinning, and subdividing to create highly detailed models.
            </span>
          </ListItem>
          <ListItem>
            <Badge mr={2}>4</Badge>
            <span>
            Work with a variety of shapes, including 2D shapes like circles and rectangles, as well as 3D shapes like spheres, cylinders, and tori.
            </span>
          </ListItem>
          <ListItem>
            <Badge mr={2}>5</Badge>
            <span>
            Automate tasks and make changes with ease using a node-based workflow, which is intuitive and non-destructive.
            </span>
          </ListItem>
        </UnorderedList>
  
        <SimpleGrid
        ml="35%"
         columns={2} 
         gap={2}>
          <WorkImage src="/images/works/thumbnail3.jpg" alt="branding" />
        </SimpleGrid>      </Container>
    </Layout>
  )
  
  export default Work
