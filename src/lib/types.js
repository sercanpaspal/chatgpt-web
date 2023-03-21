import PropTypes from 'prop-types';

// TODO: remove when add more types
// eslint-disable-next-line import/prefer-default-export
export const MessageType = PropTypes.shape({
  role: PropTypes.string,
  content: PropTypes.string,
});
