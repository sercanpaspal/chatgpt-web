import React from 'react';
import { useSelector } from 'react-redux';
import {
  Text, Alert, AlertTitle, AlertDescription, AlertIcon, Button,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import ChatForm from '../../components/ChatForm';
import Messages from '../../components/Messages/index';
import selectors from '../../store/selectors';
import { getPromptHashForURL } from '../../utils';

function Chat() {
  const navigate = useNavigate();
  const chatErrorMessage = useSelector(selectors.getChatErrorMessage);
  const selectedPrompt = useSelector(selectors.getSelectedPrompt);
  const { act } = selectedPrompt;

  return (
    <div>
      <Text fontSize="5xl">{act || 'Your AI Assistant' }</Text>
      <Button onClick={() => navigate(`/prompts#${getPromptHashForURL(act)}`)}>Go to Prompts</Button>
      <ChatForm />
      {chatErrorMessage ? (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Error!</AlertTitle>
          <AlertDescription>{chatErrorMessage}</AlertDescription>
        </Alert>
      ) : (
        <Messages />
      )}
    </div>
  );
}

export default Chat;
