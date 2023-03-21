import React, { useState } from 'react';
import {
  Textarea, Button, Switch, Stack, FormControl, FormLabel,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, setIsConversationEnabled } from '../../store/slices/chat';
import selectors from '../../store/selectors';

function ChatForm() {
  const dispatch = useDispatch();
  const isConversationEnabled = useSelector(selectors.getIsConversationEnabled);
  const chatIsLoading = useSelector(selectors.getChatIsLoading);

  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message) return;
    dispatch(addMessage(message));
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Textarea
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.which === 13 && !e.shiftKey && handleSubmit(e)}
        mb={4}
      />
      <Stack direction="row" mb={4}>
        <FormControl display="flex" alignItems="center">
          <Switch
            id="is-conversation-enabled"
            onChange={(e) => dispatch(setIsConversationEnabled(e.target.checked))}
            isChecked={isConversationEnabled}
            mr={2}
          />
          <FormLabel htmlFor="is-conversation-enabled" mb="0">
            Continue conversation
          </FormLabel>
        </FormControl>
        <Button colorScheme="teal" type="submit" isLoading={chatIsLoading}>send</Button>
      </Stack>
    </form>
  );
}

export default ChatForm;
