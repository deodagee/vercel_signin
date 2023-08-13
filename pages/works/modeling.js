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
import Section from '../../components/section'
import { WorkGridItem } from '../../components/grid-item'  
import meme from '/public/images/works/meme.jpg'
import highres from '/public/images/works/highres.jpg'


  const Work = () => (
    <Layout title="Modeling">
      <Container>
        <Title>
          3d Modeling <Badge>Branding</Badge>
        </Title>
        <Center my={6}>
          <Image src="/images/footprint.png" width={5} height={4} alt="icon" />
        </Center>

        <Section>
          <WorkGridItem
            id="meme"
            thumbnail={meme}
            quality={50}>
          </WorkGridItem>
        </Section>
        
        <P style={{ margin:"15px",fontSize:"13px", textAlign: 'center' }}>
        With Blender's diverse capabilities, individuals can create visually stunning and personalized 3D imagery and videos to establish a strong brand presence and leave a lasting impression on their audience. Whether you need realistic product renderings, captivating animations, or immersive visual storytelling, Blender offers the tools and flexibility to bring your creative visions out.
        </P>
  
        <List  ml={4} my={4}>
        <ListItem style={{ margin:"15px", fontSize:"14px", textAlign: 'left', marginBottom: '10px' }}>
            <Meta>Os</Meta>
            <span>Windows, MacOs </span>
          </ListItem>
          <ListItem style={{ margin:"15px", fontSize:"14px", textAlign: 'left', marginBottom: '10px' }}>
            <Meta>Render Engines</Meta>
            <span>Blender offers various types of rendering, ultimately through its different types of rendering Engines: Eevee, ProRender, and Cycles. They produces high-quality, stunning, images and videos using different rendering techniques for photorealistic or real-time results.</span>
          </ListItem>
          <ListItem style={{ margin:"15px", fontSize:"14px", textAlign: 'left', marginBottom: '10px' }}>
            <Meta>3D Modeling</Meta>
            <span>Incredibly versatile 3D computer graphics that offers a wide range of features (for example: Create custom 3D objects and characters to represent your brand uniquely). </span>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
         
        </Heading>
        <Section>
          <WorkGridItem
            id="highres"
            thumbnail={highres}
            quality={50}>
          </WorkGridItem>
        </Section>

  
        <Heading as="h4" my={6}>

         <Center  style={{ margin:"15px", fontSize:"17px", marginTop: '66px'}}> Key Features  </Center>
         <Center style={{  margin:"15px", fontSize:"10px",marginTop: '15px'}}><Badge style={{ fontSize:"10px"}}>Geometry Nodes</Badge></Center>
    
        </Heading>


        <P  style={{ margin:"15px", textAlign:"center", fontSize: '13px'}}>
        Geometry nodes in Blender allow users to manipulate and generate 3D models in a non-destructive way. They offer a visual way to perform mathematical operations on the vertices and edges of a model, allowing for the creation of complex shapes and effects without permanently altering the original geometry. This gives users the ability to easily experiment and make changes to their models, making the design process more flexible and efficient. Additionally, geometry nodes can also be used for tasks such as texture mapping and UV unwrapping, further enhancing the capabilities of Blender as a powerful 3D modeling tool.
        </P>
        <List  fontSize={12} ml={4} my={4}>
          <ListItem>
            <Meta>OS</Meta>
            <span>Windows, MacOs </span>
          </ListItem>
          <ListItem>
            <Meta>Image Formats</Meta>
            <span >JPEG, PNG, OpenEXR, BMP, TIFF, HDR, TGA, GIF, PDF, EPS, and More.</span>
            <Link fontSize={12} href="https://kettlefirecreative.com/logo-file-format-jpg-png-eps-pdf-ai/">
             <ExternalLinkIcon mb="2px" mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Vidoe Formats</Meta>
            <span >AVI, QuickTime, H.264, Ogg, WebM, and More.</span>
            <Link fontSize={12} href="https://www.bitcatcha.com/blog/best-video-formats-for-websites/">
             <ExternalLinkIcon  mb="2px" mx="2px" />
            </Link>
          </ListItem>

         </List>
  
        <UnorderedList my={4}>
          <ListItem style={{ fontSize:"11px", textAlign: 'left', marginBottom: '10px' }}>
            <Badge mr={2}>1</Badge>
            <span>
            Create complex shapes and objects through a combination of simple shapes and operations like union, intersection, and subtraction.
            </span>
          </ListItem>
          <ListItem style={{ fontSize:"11px", textAlign: 'left', marginBottom: '10px' }}>
            <Badge mr={2}>2</Badge>
            <span>
            Generate 3D models procedurally, meaning you can create an unlimited number of variations with a single node setup.
            </span>
          </ListItem>
          <ListItem style={{ fontSize:"11px", textAlign: 'left', marginBottom: '10px' }}>
            <Badge mr={2}>3</Badge>
            <span>
            Apply advanced techniques such as the Boolean modifier, skinning, and subdividing to create highly detailed models.
            </span>
          </ListItem>
          <ListItem style={{ fontSize:"11px", textAlign: 'left', marginBottom: '10px' }}>
            <Badge mr={2}>4</Badge>
            <span>
            Work with a variety of shapes, including 2D shapes like circles and rectangles, as well as 3D shapes like spheres, cylinders, and tori.
            </span>
          </ListItem>
          <ListItem style={{ fontSize:"11px", textAlign: 'left', marginBottom: '50px' }}>
            <Badge mr={2}>5</Badge>
            <span>
            Automate tasks and make changes with ease using a node-based workflow, which is intuitive and non-destructive.
            </span>
          </ListItem>
        </UnorderedList>


        <Center style={{  margin:"15px", fontSize:"10px",marginTop: '15px'}}><Badge style={{ fontSize:"10px"}}>Lighting/Texturing</Badge></Center>

        <P  style={{ margin:"15px", textAlign:"center", fontSize: '13px'}}>
        Blender provides multiple lighting options to mimic real-world illumination and create captivating visual effects. With its physically-based Cycles render engine, artists can simulate natural lighting conditions, including sunlight, artificial lights, and environmental lighting. Cycles supports global illumination, soft shadows, and accurate light falloff, resulting in realistic and dramatic renderings.
        </P>
        
          <P style={{  textAlign: 'left', marginBottom: '70px' }}>
            <Link  style={{ fontSize:"12px"}} href="https://dribbble.com/search/geometry-nodes">
              <Badge style={{ fontSize:"12px"}} mr={2}>Some Examples</Badge>
                Dribble
              <ExternalLinkIcon mb="2px" mx="2px" />
            </Link>
          </P>
     


  
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
