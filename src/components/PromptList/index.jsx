import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import prompts from '../../constants/prompts';
import PromptListItem from '../PromptListItem';

function PromptList() {
  return (
    <SimpleGrid spacing={4} columns={{ base: 1, sm: 2, md: 3 }}>
      {prompts.map((prompt) => (
        <PromptListItem key={prompt.act} promptItem={prompt} />
      ))}
    </SimpleGrid>
  );
}

export default PromptList;
