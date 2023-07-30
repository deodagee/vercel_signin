import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Container,
  Badge,
  SimpleGrid,
  Heading,
  Center,
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import Section from '../../components/section';
import Layout from '../../components/layouts/article';
import { Title } from '../../components/work';
import P from '../../components/paragraph';

const myLoader = ({ src, width, quality }) => {
  return `https://astrumstellar.com/${src}?w=${width}&q=${quality || 75}`;
};

const Work = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setIsOpen(true);
    setSelectedImage(src);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <Layout title="Older Porjects">
      <Container>
        <Title>
          Images <Badge>Gallery</Badge>
        </Title>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Gallery</Center>
        </Heading>

        <Section delay={0.1}>
          <SimpleGrid columns={[2, 3]} gap={5}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].map((index) => (
              <Box key={index}>
                <Image
                  loader={myLoader}
                  src="/images/works/branding.jpg"
                  alt="0"
                  width={200}
                  height={200}
                  onClick={() => handleImageClick(`/images/works/branding.jpg`)}
                />
              </Box>
            ))}
          </SimpleGrid>
        </Section>

        {selectedImage && (
          <Modal isOpen={isOpen} onClose={handleCloseModal}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader></ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Image loader={myLoader} src={selectedImage} alt="" width={800} height={50} />
              </ModalBody>
              <ModalFooter>
                <Button variant="ghost" onClick={handleCloseModal}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </Container>
    </Layout>
  );
};

export default Work
