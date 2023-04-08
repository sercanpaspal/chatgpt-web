import React from 'react';
import { Text } from '@chakra-ui/react';
import SettingsForm from '../../components/SettingsForm';

function Settings() {
  return (
    <div>
      <Text fontSize="3xl">Settings</Text>
      <SettingsForm />
    </div>
  );
}

export default Settings;
