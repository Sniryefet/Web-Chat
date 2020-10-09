const socket = io();

const userMessageForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');

// Get username and room from URL
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true
});

console.log(username,room)



// -------------------------------------------------------------------------------------------------------------

socket.on('serverMessage',message=>{
  console.log(message)
  outputMessage(message)

  // Scroll down effect 
  chatMessages.scrollTop = chatMessages.scrollHeight;
})

socket.emit('userJoinedRoom',{username,room})

// -------------------------------------------------------- FORM Listener --------------------------------------------------------

userMessageForm.addEventListener('submit',event=>{
  event.preventDefault()
  let userMessage = event.target.elements.msg.value

  // send the message to the server
  socket.emit('userMessage',userMessage)

  
  // clears user message box
  event.target.elements.msg.value=''

})



function outputMessage(message){
  const div = document.createElement('div');
  div.classList.add('message');
  const userDetailsParagraph = document.createElement('p');
  userDetailsParagraph.classList.add('meta');
  userDetailsParagraph.innerText = `${message.username}` ;
  userDetailsParagraph.innerHTML += ` <span>${message.time}</span>`;
  div.appendChild(userDetailsParagraph);
  const userMessageParagraph = document.createElement('p');
  userMessageParagraph.classList.add('text');
  userMessageParagraph.innerText = message.text;
  div.appendChild(userMessageParagraph);
  document.querySelector('.chat-messages').appendChild(div);

}












// const chatForm = document.getElementById('chat-form');
// const chatMessages = document.querySelector('.chat-messages');
// const roomName = document.getElementById('room-name');
// const userList = document.getElementById('users');


// const socket = io();

// // Get username and room from URL
// const { username, room } = Qs.parse(location.search, {
//   ignoreQueryPrefix: true
// });


// // Join chatroom
// socket.emit('joinRoom', { username, room });

// // Get room and users
// socket.on('roomUsers', ({ room, users }) => {
//   outputRoomName(room);
//   outputUsers(users);
// });

// // Message from server
// socket.on('serverMessage', message => {
//   console.log(message);
//   outputMessage(message);

//   // Scroll down
//   chatMessages.scrollTop = chatMessages.scrollHeight;
// });

// // Message submit
// chatForm.addEventListener('submit', e => {
//   e.preventDefault();

//   // Get message text
//   let msg = e.target.elements.msg.value;
  
//   msg = msg.trim();
  
//   if (!msg){
//     return false;
//   }

//   // Emit message to server
//   socket.emit('chatMessage', msg);

//   // Clear input
//   e.target.elements.msg.value = '';
//   e.target.elements.msg.focus();
// });

// // Output message to DOM
// function outputMessage(message) {
//   const div = document.createElement('div');
//   div.classList.add('message');
//   const p = document.createElement('p');
//   p.classList.add('meta');
//   p.innerText = message.username;
//   p.innerHTML += `<span>${message.time}</span>`;
//   div.appendChild(p);
//   const para = document.createElement('p');
//   para.classList.add('text');
//   para.innerText = message.text;
//   div.appendChild(para);
//   document.querySelector('.chat-messages').appendChild(div);
// }

// // Add room name to DOM
// function outputRoomName(room) {
//   roomName.innerText = room;
// }

// // Add users to DOM
// function outputUsers(users) {
//   userList.innerHTML = '';
//   users.forEach(user=>{
//     const li = document.createElement('li');
//     li.innerText = user.username;
//     userList.appendChild(li);
//   });
//  }