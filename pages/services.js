import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';

import branding from '../public/images/works/branding.jpg'
import flstudio from '../public/images/works/flstudio.jpg'
import frontend from '../public/images/works/frontend.jpg'
import hosting from '../public/images/works/hosting.jpg'
import modeling from '../public/images/works/modeling.jpg'
import uiux from '../public/images/works/uiux.jpg'
import logo from '../public/images/works/logo.png'



const Works = () => (
  <Layout title="Works">
    <Container>

    <Heading 
      as="h3" 
      fontSize={30} 
      mt={0}
      mb={4}>
        Services
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section delay={0.2}>
        <Divider my={6} />
      </Section>

      <Section>
          <WorkGridItem
            id="branding"
            title="Branding"
            thumbnail={branding}
            quality={50}>
            Businesses and Individuals
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem 
          id="frontend"
          title="Front End/Back End"
          thumbnail={frontend}
          quality={50} >
          Full Stack Web Dev
          </WorkGridItem>
        </Section>


        <Section delay={0.1}>
          <WorkGridItem id="uiux" 
          thumbnail={uiux} 
          quality={50}
          title="Ui / Ux">
          User Interfaces
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="modeling"
            title="3D Modeling"
            thumbnail={modeling}
            quality={50}
          >
            Blender 3.6.1
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="flstudio"
            title="Audio"
            thumbnail={flstudio}
            quality={50}>
            FL Studio 20.9
          </WorkGridItem>
        </Section>
        

         
        <Section>
          <WorkGridItem
            id="hosting"
            title="Hosting"
            thumbnail={hosting}
            quality={50}
          >
          VPS
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="logo"
            title="Logos"
            thumbnail={hosting}
            quality={50}
          >
          Logos (Graphic Design)
          </WorkGridItem>
        </Section>

      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

      </Section>
    </Container>
  </Layout>
)

export default Works
