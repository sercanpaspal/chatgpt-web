// eslint-disable-next-line import/prefer-default-export
export const fetchChatApi = async ({ apiKey, messages }) => {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages,
      max_tokens: 200,
    }),
  });
  const json = await response.json();

  if (json.error) {
    throw new Error(json.error.message);
  }
  return json.choices[0].message.content;
};
