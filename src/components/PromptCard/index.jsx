import {
  Box, Button, Card, CardBody, CardFooter, Flex, Heading, Text,
} from '@chakra-ui/react';
import React from 'react';

function PromptCard() {
  return (
    <Flex>
      <Card w={256}>
        <CardBody>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Example Prompt
            </Heading>
            <Text pt="2" fontSize="sm">
              Prompt Description. This is a prompt is the most expensive thing you are like,
            </Text>
          </Box>
        </CardBody>
        <CardFooter>
          <Button>SELECT</Button>
        </CardFooter>
      </Card>
    </Flex>
  );
}

export default PromptCard;
