import NextLink from 'next/link';
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { GridItem } from '../components/grid-item';
import {  IoLogoInstagram, IoLogoReddit, IoLogoDribbble } from 'react-icons/io5';
import thumbnail3 from '../public/images/works/thumbnail3.jpg';
import Image from 'next/image';

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt', 'loading','borderRadius','display'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hey :) You can still contact me at Deo_singiza@hotmail.com. Thank You!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
          Deodatus Singiza
          </Heading>
          <p>Web Design, And Deployment</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/Deo.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
              quality={50}
              loading="eager"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Hello
        </Heading>
        <Paragraph>
  If you&apos;re seeking website building and app development services to establish your online presence, look no further, I can help. I specialize in  utilizing the most cutting-edge, meticulously tailored systems to meet your specific aspirations. All technicalities aside, I can assure the creation of dynamically immersive websites and application that resonate with your target audience at the intended level. I deliver the most cost-effective solutions that challenge the prices and security measures of mainstream applications, bringing you power to own and monetize your own sites/apps. Why not forge a technologically simplified tech experience, empowering the individual's ability to access the realm of e-commerce enterprise options easily and {' '}
        
  <a as={NextLink} href="/pricing" passHref scroll={false} style={{ color: 'lightblue' }}>
    {' '}affordably
  </a>
  .
</Paragraph>


        
        <Box align="center"  my={4}>
          <Button pl={10} pr={6}
            as={NextLink}
            href="/services"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            color="whiteAlpha.900"
            backgroundColor="orange.500"
          >
            Services
          </Button>
        </Box>
        <Box align="center"  my={4}>
          <Button pl={10} pr={10}
            as={NextLink}
            href="/pricing"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            color="whiteAlpha.900"
            backgroundColor="teal.500"
          >
            Prices
          </Button>
        </Box>
        <Box align="center"  my={4}>
          <Button pl={8} pr={8}
            as={NextLink}
            href="/contact"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            color="whiteAlpha.900"
            backgroundColor="yellow.500"
          >
            Contact
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
        <BioYear>2017</BioYear>
        Diploma - Network Admin | CCNA, CCNP, & NET+
        </BioSection>
        <BioYear>Skills</BioYear>

        <BioSection>
                <BioYear>HTML</BioYear>
                HTML (Hypertext Markup Language) is 
                the standard markup language used 
                to create web pages and provide the 
                structure and content of a website, 
                allowing developers to define headings, 
                paragraphs, lists, links, images, and 
                other elements that are displayed in 
                the browser.
                </BioSection>
        <BioSection>
                <BioYear>CSS3</BioYear>
                CSS3 (Cascading Style Sheets Level 3) is 
                a stylesheet language used to control 
                the presentation of web content, 
                providing a wide range of visual 
                effects, layout capabilities, and media 
                queries, allowing developers to create 
                responsive designs, animations, and 
                transformations, while improving 
                performance by separating the presentation 
                from the HTML structure.
                </BioSection>

                <BioSection>
                <BioYear>NextJs</BioYear>
                Next.js is a popular React-based framework
                 that provides a simplified development
                  experience for building server-rendered, 
                  statically generated, and dynamically 
                  serving web applications, allowing 
                  developers to focus on writing their
                   application logic and leveraging 
                   its built-in performance optimization, 
                   automatic code splitting, and optimally
                    configured production builds.
                </BioSection>

      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
        I Design and Create
        </Heading>
        <Paragraph>
        3D Models with Blender3d using the powerful Cycles Engine. I create all types&nbsp;
          <a href="https://dribbble.com/shots/20753253-Black-BOX" target="_blank">
          Art 
          </a>
          , Visuals and&nbsp;
          <a href="https://soundcloud.com/dee_stringz" target="_blank">
          Music
          </a>
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
         Socials
        </Heading>
        <List>
          <ListItem>
            <a href="https://www.reddit.com/user/Intelligent-Fee5270" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoReddit />}
              >
                Reddit
              </Button>
            </a>
          </ListItem>
          <ListItem>
            <a href="https://dribbble.com/singiza" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoDribbble />}
              >
                Dribbble
              </Button>
            </a>
          </ListItem>
          <ListItem>

          </ListItem>
          <ListItem>
            <a href="https://www.instagram.com/trippp_s/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                Instagram
              </Button>
            </a>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://nextjs.org/"
            title="NEXT JS"
            thumbnail={thumbnail3}
          >
            Next FrameWork
          </GridItem>
          <GridItem
            href="https://www.cycles-renderer.org/"
            title="Cycles Render"
            thumbnail={thumbnail3}
          >
            High Poly Render
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/services"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Services
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home


