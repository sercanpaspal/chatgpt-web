import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import prompts from '../../constants/prompts';
import PromptListItem from '../PromptListItem';

function PromptList() {
  return (
    <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(500px, 1fr))">
      {prompts.map((prompt) => (
        <PromptListItem key={prompt.act} promptItem={prompt} />
      ))}
    </SimpleGrid>
  );
}

export default PromptList;
