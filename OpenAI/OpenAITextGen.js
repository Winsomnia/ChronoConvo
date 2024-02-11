import axios from "axios";
const apiKey = ""; // Replace with your actual API key

const GPT3TurboModel = "gpt-3.5-turbo";
const GPT4TurboModel = "gpt-4-1106-preview";
// Store the conversation history
let conversationHistory = [
  {
    role: "system",
    content: "You are a helpful assistant.",
  },
];

let firstPrompt = true;

const ConverseAI = async (prompt) => {
  // Add the user prompt to the conversation history
  if (firstPrompt === true) {
    conversationHistory.push({
      role: "user",
      content: `Simulate ${prompt} for an interactive conversation. Maintain the persona throughout, reflecting their language style (while mainly being within the English language), accent, opinions, and historical context. Avoid anachronistic or out-of-character responses. start off by introducing yourself.`,
    });
  } else {
    conversationHistory.push({ role: "user", content: prompt });
  }

  {
    const aiResponse = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: GPT4TurboModel,
        messages: conversationHistory,
        max_tokens: 150,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    const response = aiResponse.data.choices[0];
    // Add AI response to the conversation history
    conversationHistory.push({
      role: "assistant",
      content: response.message.content,
    });


    firstPrompt = false;
    return response;
  } 
};

export default ConverseAI;
