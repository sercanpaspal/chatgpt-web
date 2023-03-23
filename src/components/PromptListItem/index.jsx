import React from 'react';
import {
  Card, CardHeader, CardBody, CardFooter, Heading, Text, Button,
} from '@chakra-ui/react';
import { PromptItem } from '../../lib/types';

function PromptListItem({ promptItem }) {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">{promptItem.act}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{promptItem.prompt}</Text>
      </CardBody>
      <CardFooter>
        <Button colorScheme="blue">Use</Button>
      </CardFooter>
    </Card>
  );
}

PromptListItem.propTypes = {
  promptItem: PromptItem.isRequired,
};

export default PromptListItem;
