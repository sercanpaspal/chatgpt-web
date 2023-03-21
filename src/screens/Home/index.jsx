import React from 'react';
import { useDispatch } from 'react-redux';
import { Text, Button } from '@chakra-ui/react';
import { setActiveScreen } from '../../store/slices/app';
import { SCREENS } from '../../constants';
import ChatForm from '../../components/ChatForm';
import Messages from '../../components/Messages/index';

function Home() {
  const dispatch = useDispatch();

  const handleEditApiKey = () => dispatch(setActiveScreen(SCREENS.SETTINGS));

  return (
    <div>
      <Text fontSize="5xl">Home</Text>
      <Button type="button" onClick={handleEditApiKey}>Edit Api Key</Button>
      <ChatForm />
      <Messages />
    </div>
  );
}

export default Home;
