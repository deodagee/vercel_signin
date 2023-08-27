import { useState } from 'react';
import { Container, Heading, FormControl, FormLabel, Input, Textarea, Select, Button } from '@chakra-ui/react';
import Layout from './layouts/main';
import Section from './section';
import styles from "/styles/components/contact.module.css"

const Posts = () => {
  const [name, setName] = useState('');
  const [reason, setReason] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      reason,
      category,
      message
    };

    fetch('/api/send-email.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => alert(result.message))
      .catch((error) => alert(error.message));
  };




  return (

    <>
    <div className={styles.contact_whole}>
<Layout >
<Container >
        <Heading as="h3" fontSize={20}  mb={4}>
          Contact Me
        </Heading>
    <Section delay={0.1}>
      <form onSubmit={handleSubmit}>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            style={{ border: '1px solid black' }}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name or Company"
          />
        </FormControl>
        <FormControl id="reason" isRequired>
          <FormLabel>Inquiry</FormLabel>
          <Input
            style={{ border: '1px solid black' }}
            type="text"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Any questions or requests?"
          />
        </FormControl>
        <FormControl id="category" isRequired>
          <FormLabel>Request Category</FormLabel>
          <Select
            className="custom-select" // Add this class for styling
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="graphic design">Graphic Design</option>
            <option value="ui/ux">UI/UX</option>
            <option value="quote">Quote</option>
            <option value="audio">Audio</option>
          </Select>
        </FormControl>
        <FormControl id="message" isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea
            style={{ border: '1px solid black' }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Add any relevant details here:"
          />
        </FormControl>
        <Button 
        mt ="10px"
        type="submit">Send</Button>
      </form>
    </Section>
  </Container>
</Layout>
</div>


    </>
  );
};

export default Posts;