import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout 
  title="3d Models">
    <Container>
      <Title>
        High Res 3d Models <Badge>July 2023</Badge>
      </Title>
      <P>
      &quot;High-resolution video rendering is a crucial aspect of creating visually stunning and detailed content, and it finds great utility when combined with Blender 3.4 and the Cycles rendering engine. Blender 3.4, renowned for its advanced capabilities, offers a powerful platform for 3D modeling and animation. When paired with the Cycles rendering engine, known for its physically-based rendering approach, the result is exceptional image quality and realism. By leveraging high-resolution video rendering techniques, artists and designers can bring their creations to life with incredible detail, intricate textures, and lifelike lighting effects. This combination allows for the production of cinematic-quality animations, architectural visualizations, product designs, and much more, empowering creators to deliver immersive and visually captivating experiences.&quot;
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>3d Models</Meta>
          <a href="https://stellar-space-bag1s35hb-deodagee.vercel.app/">
            View Models <ExternalLinkIcon mx="2px" />
          </a>
        </ListItem>
        <ListItem>
          <Meta>Viewer</Meta>
          <span>Blender 3.4 + Cycles + Eeve </span>
        </ListItem>
        <ListItem>
          <Meta>OS</Meta>
          <span>Windows 7 +</span>
        </ListItem>

      </List>


      
    </Container>
  </Layout>
)

export default Work
