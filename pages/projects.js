import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';
import styles from "/styles/projects.module.css" 
import cafepls from '../public/images/works/cafepls.png';
import chatapp from '../public/images/works/chatapp.jpg';
import imageblog from '../public/images/works/imageblog.jpg';
import bird from '../public/images/works/bird.jpg';
import sonyalph from '../public/images/works/sonyalph.jpg';
import deo from '../public/images/works/deo.jpg';




const Works = () => (
  <Layout title="Works">
    <Container>

      <Heading 
      as="h3" 
      fontSize={30} 
      mt={0}
      mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>

      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={0}>
          Apps
        </Heading>
      </Section>
        <Section>

        <WorkGridItem
          mb = {10} 
          id="restaurantcoffee" 
          title="Cafe Pls" 
          thumbnail={cafepls}
          quality={50}>
            Private Business Type Online Shop (Dynamic)
          </WorkGridItem>
          <div className={styles.spacer}></div>

          <WorkGridItem
          mb = {10} 
          id="chatapp" 
          title="Chat App" 
          thumbnail={chatapp}
          quality={50}>
            Live Private Chat App Full Features (Dynamic)
          </WorkGridItem>
          <div className={styles.spacer}></div>

          
          <WorkGridItem
          mb = {10} 
          id="imageblog" 
          title="Blog Site" 
          thumbnail={imageblog}
          quality={50}>
            Personal Image Blog (Static)
          </WorkGridItem>
          <div className={styles.spacer}></div>


        </Section>
        </SimpleGrid>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>

        <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={0}>
          3D Models
        </Heading>
      </Section>

        <Section>
          <WorkGridItem
          mb = {10} 
            id="3dimages"
            title="3D Images"
            thumbnail={bird}
            quality={50}>
            More Info on This Category
          </WorkGridItem>
          <div className={styles.spacer}></div>

        </Section>


      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          High Res Video Rendering
        </Heading>
      </Section>

        <Section delay={0.3}>
          <WorkGridItem 
          id="Videos"
          title="Alpha Mode"
          thumbnail={sonyalph} 
          quality={50}>
          How I Shoot
          </WorkGridItem>
          <div className={styles.spacer}></div>

        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Stellar Space Gallery
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem 
          id="gallery"
          title="Photo Gallery"
          thumbnail={deo}
          quality={50} >
          Photo Collection
          </WorkGridItem>
          <div className={styles.spacer}></div>

        </Section>

      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
