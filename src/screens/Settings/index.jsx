import React from 'react';
import { Text } from '@chakra-ui/react';
import ApiKeyForm from '../../components/ApiKeyForm';

function Settings() {
  return (
    <div>
      <Text fontSize="5xl">Settings</Text>
      <ApiKeyForm />
    </div>
  );
}

export default Settings;
