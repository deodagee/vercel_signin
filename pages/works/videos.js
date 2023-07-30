import {
  Container,
  Badge,
  List,
  SimpleGrid,
  Heading,
  Center,
  Divider,
  WorkGridItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article2'
import { Title,WorkImage } from '../../components/work2'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="videos">
     <Container>
     <SimpleGrid
        ml="35%"
         columns={2} 
         gap={2}>
      <Title>
      3D <Badge>Visuals</Badge>
      </Title>
      <P>
      Effective branding leverages digital creativity to effectively communicate a company&apos;s unique identity and values to its target audience through various digital channels.    
      Incorporating 3D visuals into your business can bring a whole new dimension to your marketing, product design, and customer engagement strategies.    
      </P>

      <List ml={4} my={4}>

      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Gallery</Center>
      </Heading>


          <WorkImage src="/images/works/thumbnail3.jpg" alt="branding" />
        </SimpleGrid>

    </Container>
  </Layout>
)

export default Work
