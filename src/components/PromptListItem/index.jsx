import React from 'react';
import {
  Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Tooltip,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PromptItem } from '../../lib/types';
import selectors from '../../store/selectors';
import { selectPrompt } from '../../store/slices/chat';
import { getPromptHashForURL } from '../../utils';

function PromptListItem({ promptItem }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedPrompt = useSelector(selectors.getSelectedPrompt);

  const { act } = selectedPrompt;
  const isSelected = act === promptItem.act;

  const handleSelectPrompt = () => {
    dispatch(selectPrompt(promptItem));
    navigate('/chat');
  };

  return (
    <Card id={getPromptHashForURL(promptItem.act)}>
      <CardHeader>
        <Heading size="md">{promptItem.act}</Heading>
      </CardHeader>
      <CardBody>
        <Tooltip hasArrow label={promptItem.prompt} aria-label={promptItem.act} closeOnClick={false}>
          <Text style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }} fontSize="sm">{promptItem.prompt}</Text>
        </Tooltip>
      </CardBody>
      <CardFooter>
        <Button colorScheme={isSelected ? 'green' : 'blue'} onClick={handleSelectPrompt} disabled={isSelected}>{isSelected ? 'Using' : 'Use'}</Button>
      </CardFooter>
    </Card>
  );
}

PromptListItem.propTypes = {
  promptItem: PromptItem.isRequired,
};

export default PromptListItem;
