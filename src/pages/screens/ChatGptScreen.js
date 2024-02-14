import axios from 'axios';
// import { OPENAI_KEY } from '@env';

const OPENAI_KEY= "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"
const instance = axios.create({
  baseURL: 'https://api.openai.com/v1/engines/gpt-3.5-turbo-instruct/completions',
//   baseURL: 'https://api.openai.com/v1/engines/davinci-codex/completions',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer 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`
    // 'Authorization': `Bearer ${OPENAI_KEY}`
  }
});

export const generateResponse = async (message) => {
  try {
    const response = await instance.post('', {
      prompt: message,
    //   max_tokens: 60
    });
    return response.data.choices[0].text;
  } catch (error) {
    console.error(error);
    console.log("comes here")
    return '';
  }
};