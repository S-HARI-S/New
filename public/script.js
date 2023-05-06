import openai from 'openai';

const openaiInstance = new openai.OpenAIApi(
  new openai.Configuration({
    apiKey: "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",
  })
);

let prompt;

const promptTextarea = document.getElementById("promptTextarea");
const responseTextarea = document.getElementById("responseTextarea");
const loadingAnimation = document.querySelector(".loading-animation");

async function processResponse() {
  prompt = promptTextarea.value;
  console.log(prompt)

  if (prompt === "") {
    return;
  }

  // Show loading animation
  loadingAnimation.style.display = "block";
  responseTextarea.style.display = "none";

  const createChatCompletion = async (prompt) => {
    console.log("response sent with " + prompt)
    const completion = await openaiInstance.createCompletion({
      engine: "text-davinci-003",
      prompt: prompt,
      maxTokens: 100,
      n: 1,
      stop: ["\n"],
    });

    return completion.choices[0].text;
  };

  const responseContent = await createChatCompletion(prompt);

  // Hide loading animation and show response
  loadingAnimation.style.display = "none";
  responseTextarea.style.display = "block";
  responseTextarea.value = responseContent;
}

promptTextarea.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    processResponse();
  }
});
