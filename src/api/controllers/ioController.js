import messageCreator from "./messageController.js";
import { getCurrUser, userJoined } from "./users.js";

const initSocketIo = (io) => {
  io.on("connection", (socket) => {
    // DEBUG MESSAGE
    console.log("user connected");

    socket.on("userJoinedRoom", ({ username, room }) => {
      //    create a user based on the userJoined function from users.js
      const user = userJoined(socket.id, username, room);

      //   create room
      socket.join(user.room);

      // Welcome message to the user connected
      socket.emit(
        "serverMessage",
        messageCreator("snir", `${user.username} welcome to the chat`)
      );

      // broadcasts everyone in the room excepts the user who created the connection
      socket.broadcast.to(user.room).emit(
        "serverMessage",
        messageCreator("snir", `${user.username} joined the chat`)
      );

    //   need to fix to sned to my seld as well
      socket.on("userMessage", (message) => {
        socket.broadcast.to(user.room).emit("serverMessage", messageCreator("snir", message));
        // send the message back to myself 
        socket.emit('serverMessage',messageCreator("snir", message))
      });

    });

    socket.on("disconnect", () => {
      // broadcast everyone about user leaving the room
      io.emit(
        "serverMessage",
        messageCreator("snir", "A user has left the chat")
      );
    });

    // listens to a message send from the user and then send it
    
  });
};

export default initSocketIo;
