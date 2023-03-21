import React from 'react';
import {
  Stack, Card, StackDivider, CardBody,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import selectors from '../../store/selectors';
import Message from '../Message';

function Messages() {
  const messages = useSelector(selectors.getChatMessages);

  return messages.length > 0 && (
    <Card>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {messages.map((message) => (
            <Message key={message.content} message={message} />
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Messages;
