import React from 'react';
import { Text } from '@chakra-ui/react';
import PromptCard from '../../components/PromptCard';

function Prompts() {
  return (
    <div>
      <Text fontSize="5xl">Prompts</Text>
      <PromptCard />
    </div>
  );
}

export default Prompts;
