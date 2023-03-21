import React from 'react';
import { useDispatch } from 'react-redux';
import { setActiveScreen } from '../../store/slices/app';
import { SCREENS } from '../../constants';
import ChatForm from '../../components/ChatForm';
import Messages from '../../components/Messages/index.jsx';

function Home() {
  const dispatch = useDispatch();

  const handleEditApiKey = () => dispatch(setActiveScreen(SCREENS.API_KEY));

  return (
    <div>
      Home

      <button type="button" onClick={handleEditApiKey}>Edit Api Key</button>

      <ChatForm />

      <Messages />
    </div>
  );
}

export default Home;
