import {
  Box, Button,
  Container, Heading, Stack, Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Container maxW="6xl">
      <Container maxW="3xl">
        <Stack
          as={Box}
          textAlign="center"
          spacing={{ base: 8, md: 14 }}
          py={{ base: 12, md: 20 }}
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
            Introducing our cutting-edge web application that utilizes the power of ChatGPT prompts to quickly and effortlessly create your very own AI assistant.
            Say goodbye to the stress and hassle of navigating complex tasks on your own - our intuitive platform makes it easy to get the help you need with just a few clicks.
            So whether you're looking to boost productivity, simplify your daily routine, or just have some fun, our ChatGPT-powered assistant is the perfect solution.
            Don't miss your chance to experience the future of AI - try our app today!
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
              as={Link}
              to="/chat"
              px={6}
              _hover={{
                bg: 'green.500',
              }}
            >
              Get Started
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Container>
  );
}
