import React from 'react';
import { Text, Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import ApiKeyForm from '../../components/ApiKeyForm';
import selectors from '../../store/selectors';
import { setActiveScreen } from '../../store/slices/app';
import { SCREENS } from '../../constants';

function ApiKey() {
  const dispatch = useDispatch();
  const apiKey = useSelector(selectors.getApiKey);

  const handleBack = () => dispatch(setActiveScreen(SCREENS.HOME));

  return (
    <div>
      <Text fontSize="5xl">Api Key Edit</Text>
      <ApiKeyForm />
      {apiKey && (
        <Button type="button" onClick={handleBack}>Back Home</Button>
      )}
    </div>
  );
}

export default ApiKey;
