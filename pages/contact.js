import { useState } from 'react';
import { Container, Heading, FormControl, FormLabel, Input, Textarea, Select, Button } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';

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
    <Layout title="Posts">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Contact
        </Heading>

        <Section delay={0.1}>
          <form onSubmit={handleSubmit}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl id="reason" isRequired>
              <FormLabel>Reason</FormLabel>
              <Input type="text" value={reason} onChange={(e) => setReason(e.target.value)} />
            </FormControl>
            <FormControl id="category" isRequired>
              <FormLabel>Category</FormLabel>
              <Select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="graphic design">Graphic Design</option>
                <option value="ui/ux">UI/UX</option>
                <option value="quote">Quote</option>
                <option value="audio">Audio</option>
              </Select>
            </FormControl>
            <FormControl id="message" isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea value={message} onChange={(e) => setMessage(e.target.value)} />
            </FormControl>
            <Button type="submit">Send</Button>
          </form>
        </Section>
      </Container>
    </Layout>
  );
};

export default Posts;