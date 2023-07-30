import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '../../components/layouts/article';
import Section from '../../components/section';
import { GridItem } from '../../components/grid-item';
import thumbnail2 from '/public/images/works/thumbnail2.jpg';
import thumbnail3 from '/public/images/works/thumbnail3.jpg';
import Link from 'next/link';

const Posts = () => (
  <Layout title="Gallery">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Areas
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <a href={"/works/1000images"} >
        <GridItem
            title="Gallery"
            thumbnail={thumbnail3}>
        
            Images
          </GridItem>
          </a>
          <a href={"/works/1000videos"} >
          <GridItem
            title="Gallery"
            thumbnail={thumbnail2}>
            Videos
          </GridItem>
          </a>
          <a href={"/works/1000images"} >
          <GridItem
            title="Gallery"
            thumbnail={thumbnail3}>
            Images
          </GridItem>
          </a>
          <a href={"/works/1000videos"} >
          <GridItem
            title="Gallery"
            thumbnail={thumbnail2}>
            Videos
          </GridItem>
          </a>
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <a href={"/works/1000images"} >
        <GridItem
            title="Gallery"
            thumbnail={thumbnail3}>
            Images
          </GridItem>
          </a>
          <a href={"/works/1000videos"} >
          <GridItem
            title="Gallery"
            thumbnail={thumbnail2}>
            Videos
          </GridItem>
          </a>
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <a href={"/works/1000images"} >
        <GridItem
            title="Gallery"
            thumbnail={thumbnail3}>
            Images
          </GridItem>
          </a>
          <a href={"/works/1000videos"} >
          <GridItem
            title="Gallery"
            thumbnail={thumbnail2}>
            Videos
          </GridItem>
          </a>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
