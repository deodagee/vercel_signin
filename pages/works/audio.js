import {
    Container,
    Badge,
    Link,
    List,
    ListItem
    } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article2'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work2'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="Audio">
      <Container>
        <Title>
          FL Studio <Badge>Music</Badge>
        </Title>
        <P>FL Studio is a digital audio workstation (DAW) used for music production and composition. It allows users to create, produce, and record music using a variety of tools and instruments. </P>
        <P>
          In my opinion it&apos;s one of the strongest softwares out there that can support the broadest of all creative minds.&nbsp; 
          <a href="https://www.image-line.com/fl-studio/" target="_blank">
           FL Studio <ExternalLinkIcon mx="2px" />
          </a>
          is great for mixing and mastering tracks using a comprehensive mixing console and effects rack.
          However it really shines in it&apos;s insane versatily with combining ideas and meshes together. Any sound you can imagine can be made from the bottom up with this tool. 
          Sequence and arrange compositions using a intuitive piano roll or pattern-based system.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Software</Meta>
            <span>Fl Studio</span>
          </ListItem>
          <ListItem>
            <Meta>File Types</Meta>
            <span>Mp3, Wav and More</span>
          </ListItem>
          <ListItem>
            <Meta>Free Demo</Meta>
            <a href="https://soundcloud.com/dee_stringz/the-meddler">
            soundcloud&nbsp; 
              <ExternalLinkIcon mx="2px" />
            </a>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/0005.png" alt="mode.tokyo" />
      </Container>
    </Layout>
  )
  
  export default Work
