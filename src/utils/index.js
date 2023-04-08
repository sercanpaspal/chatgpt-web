export const getPromptHashForURL = (act) => act.toLowerCase().split(' ').join('-');

export const safeJSONParse = (str, defaultResponse = {}) => {
  try {
    return JSON.parse(str);
  } catch (e) {
    return defaultResponse;
  }
};
