import axios from "axios";
const apiKey = "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"; // Replace with your actual API key

const Dalle2Model = "dall-e-2";
const Dalle3Model = "dall-e-3";
const DalleModel = Dalle3Model;
// Store the conversation history

let firstPrompt = true;

const ImagineAI = async (content) => {
  if (firstPrompt === true) {
    const aiImagination = await axios.post(
      "https://api.openai.com/v1/images/generations",
      {
        model: `${DalleModel}`,
        //model : "dall-e-3",
        prompt: `${content}`,
        size: "1024x1024",
        quality: "standard",
        n: 1,
      },
      {
        headers: {
          Cookie: "_cfuvid=wL4Z9MgMWfO_8.xk3O138VAMz2dkwIGL1Fz.syCrp9I-1707163075662-0-604800000",
          Connection: "keep-alive",
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
          //Authorization: "Bearer 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",
        },
      }
    );

    
    let Imagination = extractImageUrl(JSON.stringify(aiImagination));
   
    firstPrompt = false;
    console.log("json: " + extractImageRevision(JSON.stringify(aiImagination)));
    return Imagination;
  }
};


function extractImageUrl(jsonString) {
  try {
      // Parse the JSON string
      const obj = JSON.parse(jsonString);

      // Navigate through the object to extract the URL
      const url = obj.data.data[0].url;

      // Return the extracted URL
      return url;
  } catch (error) {
      // Handle parsing errors or cases where the structure is not as expected
      console.error("Error extracting URL:", error);
      return null;
  }
}
 
function extractImageRevision(jsonString) {
  try {
      // Parse the JSON string
      const obj = JSON.parse(jsonString);

      // Navigate through the object to extract the URL
      const revision = obj.data.data[0].revised_prompt;

      // Return the extracted URL
      return revision;
  } catch (error) {
      // Handle parsing errors or cases where the structure is not as expected
      console.error("Error extracting URL:", error);
      return null;
  }
}

export default ImagineAI;
