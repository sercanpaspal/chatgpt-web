import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Navbar from '../Navbar';

export default function Footer() {
  return (
    <Box
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW="6xl"
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Stack direction="row" spacing={6}>
          <Navbar />
        </Stack>
        <Text>© 2023 GPTalk. All rights reserved</Text>
      </Container>
    </Box>
  );
}
