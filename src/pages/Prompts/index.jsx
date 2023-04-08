import React from 'react';
import { Text } from '@chakra-ui/react';
import PromptList from '../../components/PromptList';

function Prompts() {
  return (
    <div>
      <Text fontSize="3xl">Prompts</Text>
      <PromptList />
    </div>
  );
}

export default Prompts;
