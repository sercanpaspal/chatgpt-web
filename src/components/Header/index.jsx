import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Container,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <Container maxW="3xl">
      <Stack
        as={Box}
        textAlign="center"
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight="110%"
        >
          GPTalk
          {' '}
          <br />
          <Text as="span" color="green.400">
            Your AI Assistant
          </Text>
        </Heading>
        <Text color="gray.500">
          With the awesome ChatGPT prompts, generate your AI assistant. Make your life easy. So, Easy come easy go, little bye little go.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </Text>
        <Stack
          direction="column"
          spacing={3}
          align="center"
          alignSelf="center"
          position="relative"
        >
          <Button
            colorScheme="green"
            bg="green.400"
            rounded="full"
            px={6}
            _hover={{
              bg: 'green.500',
            }}
            onClick={() => navigate('/home')}
          >
            Get Started
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
