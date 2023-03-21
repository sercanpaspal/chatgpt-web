import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setApiKey } from '../../store/slices/app';
import selectors from '../../store/selectors';

function ApiKeyForm() {
  const dispatch = useDispatch();
  const apiKey = useSelector(selectors.getApiKey);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setApiKey(e.target.apiKey.value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="apiKey" type="text" defaultValue={apiKey} />
      <button type="submit">save</button>
    </form>
  );
}

export default ApiKeyForm;
