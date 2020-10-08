const initSocketIo = (io) => {
  
    io.on("connection", (socket) => {
    
    
    
    console.log("user connected");
    socket.emit("serverMessage", "welcome to the chat");

    socket.broadcast.emit("serverMessage", "new user has joined the chat");

    socket.on("disconnect", () => {
      io.emit("serverMessage", "A user has left the chat");
    });

  });

};

export default initSocketIo
