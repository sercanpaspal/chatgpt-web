import React from 'react';
import {
  Stack, Button, Text, Popover, PopoverTrigger, Portal, PopoverContent, PopoverArrow, PopoverHeader, PopoverCloseButton, PopoverBody, PopoverFooter, ButtonGroup,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPromptHashForURL } from '../../utils';
import selectors from '../../store/selectors';
import { selectPrompt } from '../../store/slices/chat';

function SelectPrompt() {
  const dispatch = useDispatch();

  const { act, prompt } = useSelector(selectors.getSelectedPrompt);

  const handleRemovePrompt = () => dispatch(selectPrompt());

  return (
    <Stack py={4}>
      {act ? (
        <Stack direction="row" alignItems="center">
          <Text fontSize="xl">
            Acting as
            {' '}
          </Text>
          <Popover>
            <PopoverTrigger>
              <Button size="md" variant="ghost" colorScheme="teal">{act}</Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>{act}</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                  <Text fontSize="sm">
                    {prompt}
                  </Text>
                </PopoverBody>
                <PopoverFooter>
                  <ButtonGroup size="sm">
                    <Button size="sm" as={Link} to={`/prompts#${getPromptHashForURL(act)}`}>Change Prompt</Button>
                    <Button size="sm" colorScheme="red" onClick={handleRemovePrompt}>Remove Prompt</Button>
                  </ButtonGroup>
                </PopoverFooter>
              </PopoverContent>
            </Portal>
          </Popover>
        </Stack>
      ) : (
        <Button size="md" as={Link} to="/prompts">Select Prompt</Button>
      )}
    </Stack>
  );
}

export default SelectPrompt;
