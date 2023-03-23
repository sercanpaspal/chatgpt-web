import PropTypes from 'prop-types';

export const MessageType = PropTypes.shape({
  role: PropTypes.string,
  content: PropTypes.string,
});

export const PromptItem = PropTypes.shape({
  act: PropTypes.string,
  prompt: PropTypes.string,
});
