import React from 'react';
import {
  Card, CardHeader, CardBody, CardFooter, Heading, Text, Button,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { PromptItem } from '../../lib/types';
import selectors from '../../store/selectors';
import { selectPrompt } from '../../store/slices/chat';

function PromptListItem({ promptItem }) {
  const dispatch = useDispatch();
  const selectedPrompt = useSelector(selectors.getSelectedPrompt);
  const { act } = selectedPrompt;
  const isSelected = act === promptItem.act;

  const handleSelectPrompt = () => {
    dispatch(selectPrompt(promptItem));
  };

  return (
    <Card>
      <CardHeader>
        <Heading size="md">{promptItem.act}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{promptItem.prompt}</Text>
      </CardBody>
      <CardFooter>
        <Button colorScheme="blue" onClick={handleSelectPrompt} disabled={isSelected}>{isSelected ? 'Using' : 'Use'}</Button>
      </CardFooter>
    </Card>
  );
}

PromptListItem.propTypes = {
  promptItem: PromptItem.isRequired,
};

export default PromptListItem;
