const initSocketIo = (io) => {
  io.on("connection", (socket) => {
    // DEBUG MESSAGE
    console.log("user connected");

    // Welcome message to every one
    socket.emit("serverMessage", "welcome to the chat");

    // broadcasts everyone excepts the user who created the connection
    socket.broadcast.emit("serverMessage", "new user has joined the chat");

    socket.on("disconnect", () => {
      // broadcast everyone about user leaving the room
      io.emit("serverMessage", "A user has left the chat");
    });

    // listens to a message send from the user and then send it
    socket.on("userMessage", (message) => {
      io.emit("serverMessage", message);
    });
  });
};

export default initSocketIo;
