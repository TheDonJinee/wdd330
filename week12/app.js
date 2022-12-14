const chatMessage = document.querySelector(".chat-mgs");
const inputTxt = document.querySelector("#inputTxt");
const send = document.querySelector(".send-ms");

send.addEventListener("click", () => render());

inputTxt.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    render();
  }
});

const render = () => {
  const userInput = inputTxt.value;
  message(userInput, "user");
  inputTxt.value = "";
  setTimeout(() => {
    botResponse(userInput);
    setScroll();
  }, 600);
};

const botResponse = (userInput) => {
  const res = getBotResponse(userInput);
  message(res);
};

const message = (ms, type) => {
  let className = "user-message";
  if (type !== "user") {
    className = "chatbot-message";
  }
  const message = document.createElement("div");
  const nodeTxt = document.createTextNode(ms);
  message.classList.add(className);
  message.append(nodeTxt);
  chatMessage.append(message);
};

const getBotResponse = (userInput) => {
  return responseObj[userInput] == undefined
    ? "not recognize, suggest another word, please"
    : responseObj[userInput];
};

const setScroll = () => {
  if (chatMessage.scrollHeight > 0) {
    chatMessage.scrollTop = chatMessage.scrollHeight;
  }
};
