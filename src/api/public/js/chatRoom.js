const socket = io();

const userMessageForm = document.getElementById("chat-form");
const chatMessages = document.querySelector(".chat-messages");
const roomName = document.getElementById("room-name");
const userList = document.getElementById("users");

// Get username and room from URL
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

console.log(username, room);

// -------------------------------------------------------------------------------------------------------------

socket.on("serverMessage", (message) => {
  console.log(message);
  outputMessage(message);

  // Scroll down effect
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

socket.on("roomUsersHandler", ({ room, users }) => {
  // setting current room name
  roomName.innerHTML = room;

  // update user's list
  updateUsers(users);
});

socket.emit("userJoinedRoom", { username, room });

// -------------------------------------------------------- FORM Listener --------------------------------------------------------

userMessageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let userMessage = event.target.elements.msg.value;
  userMessage=userMessage.trim()

  if (userMessage) {
    // send the message to the server
    socket.emit("userMessage", userMessage);

    // clears user message box
    event.target.elements.msg.value = "";
    event.target.elements.msg.focus();
  }
});

function outputMessage(message) {
  const div = document.createElement("div");
  div.classList.add("message");
  const userDetailsParagraph = document.createElement("p");
  userDetailsParagraph.classList.add("meta");
  userDetailsParagraph.innerText = `${message.username}`;
  userDetailsParagraph.innerHTML += ` <span>${message.time}</span>`;
  div.appendChild(userDetailsParagraph);
  const userMessageParagraph = document.createElement("p");
  userMessageParagraph.classList.add("text");
  userMessageParagraph.innerText = message.text;
  div.appendChild(userMessageParagraph);
  document.querySelector(".chat-messages").appendChild(div);
}

function updateUsers(users) {
  console.log("clinet DEBUG " + users);
  userList.innerHTML = "";
  users.forEach((user) => {
    const li = document.createElement("li");
    li.innerText = user.username;
    userList.appendChild(li);
  });
}


