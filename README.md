# ChronoConvo
ChronoConvo is an app i developed in React Native Expo, to improve my skills within app development, and to advance my personal portfolio of tech projects.
The app itself is basically just a visual wrapper for the OpenAI API, alongside a predefined template input. Not anything very technically dificult, but for me, a nice milestone to finish off my first journey in React Mobile development.

### Functions and purpose of the app
The motivation for a project really came before the actual idea on this one, so i just knew i wanted to make something that revolved around an API, and an app to interact with it.
The first idea that came to mind was ChronoConvo's, or it's premature name "Historical Figure App". 

**The basic user perspective app usage situation goes something like this:**
- User inputs the name of a historical figure
- User presses "Converse"
- User waits for AI to load
- User recieves an AI generated text & image, impersonating the given historical figure, ready to have a conversation, and inviting the user to use the text input again
- User inputs a question for the historical figure, and recieves an answer, again from the perspective of this historical figure.
- User is bored of conversation with current historical figure, and presses the "reset" button, to begin a new conversation.
**How this works behind the scenes:**
- Upon the user pressing the converse button, a onbuttonclick function triggers, that takes the textinput text, and sends it over to the Async AI API Text Handler. This handler sends an Axios API request, given:
  - the OpenAI model (GPT4),
  - an OpenAI API key,
  - a max token limit, hardcoded to 150, to fit within the textoutput box.
  - and finally, he historical figure text input, -if first input:- wrapped in a predefined prompt ("Simulate ${prompt} for an interactive conversation. Maintain the persona throughout, reflecting their language style (while mainly being within the English language), accent, opinions, and historical context. Avoid anachronistic or out-of-character responses. start off by introducing yourself.")
- While this is happening, another API post request is being sent by the Async AI API Image Handler, This takes the raw historical figure input, and requests a 1024x1024 AI generated image of the person, with the Dall-e-3 model.
- Another script takes the raw JSON result of both of these post requests, and harvests the pure Image URL, aswell as the pure text, and returns these. The text is output within the shadowbox component, and the image is rounded and outputs as an image component at the bottom of the shadowbox.
- the image handler is only used this first time - unless the reset button is pressed - as it is only nessescary to prompt an image of the Historical figure once.
- the text handler stores both input prompts from the user, and the responses from the AI in an array, and from now on just parses this array of the conversation, alongside the newest input, as the post request for the text AI.
- the user can then press the reset button, which restarts the app programatically, making it ready for a new historical figure.

### Setup to install app for yourself
as this was just a portfolio project, i didnt bother to distribute it to the google play-store, nor the apple app-store.
Therefore, the easiest way to try out this app yourself, is to download the source code, put in your personal OpenAI API key -as it costs money for me if i were to provide mine-, and then run the app in production mode with the code "npx expo start --no-dev --minify", after having installed all dependencies. From there you could either run it in your own android/ios simulator, or install the expo go app, and scan the QR code to have the actual app on your phone. So:
- download source code to a folder
- open the folder in VScode
- open the file OpenAIImageGen.js, and paste your personal OpenAI API key within the string defined as "const apikey = ''"
- open the file OpenAITextGen.js, and paste your personal OpenAI API key within the string defined as "const apikey = ''"
- cd to the "HistFigApp"
- run "npm install" to install all dependencies (make sure to have the latest version of node.js and npm installed on your pc)
- run "npx expo start --no-dev --minify"
- scan QR code with expo go app
- have fun
