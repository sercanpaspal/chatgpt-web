import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { MessageType } from '../../lib/types';

function Message({ message: { role, content } }) {
  return (
    <Box>
      <Heading size="xs" textTransform="uppercase">
        {role}
      </Heading>
      <Text pt="2" fontSize="sm">
        <ReactMarkdown
          components={{
            code({
              node, inline, className, children, ...props
            }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  style={dark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </Text>

    </Box>
  );
}

Message.propTypes = {
  message: MessageType.isRequired,
};

export default Message;
