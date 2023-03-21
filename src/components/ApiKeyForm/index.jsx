import React, { useState } from 'react';
import {
  Input, Button, InputGroup, InputRightElement,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { setApiKey } from '../../store/slices/app';
import selectors from '../../store/selectors';

function ApiKeyForm() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const apiKey = useSelector(selectors.getApiKey);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setApiKey(e.target.apiKey.value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={show ? 'text' : 'password'}
          placeholder="Api key"
          defaultValue={apiKey}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Button colorScheme="teal" type="submit">save</Button>
    </form>
  );
}

export default ApiKeyForm;
