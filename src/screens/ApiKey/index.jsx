import React from 'react';
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
      <ApiKeyForm />

      {apiKey && (
        <button type="button" onClick={handleBack}>Back Home</button>
      )}

    </div>
  );
}

export default ApiKey;
