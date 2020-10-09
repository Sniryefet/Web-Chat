import messageCreator from "./messageController.js";
import {
  getCurrUser,
  userJoined,
  getUsersByRoom,
  deleteUser,
} from "./users.js";

const initSocketIo = (io) => {
  io.on("connection", (socket) => {
    
    socket.on("userJoinedRoom", ({ username, room }) => {
      //    create a user based on the userJoined function from users.js
      const user = userJoined(socket.id, username, room);

      //   create room
      socket.join(user.room);

      // Welcome message to the user connected
      socket.emit(
        "serverMessage",
        messageCreator("SYSTEM", `Hey ${user.username} welcome to the chat`)
      );

      // broadcasts everyone in the room excepts the user who created the connection
      socket.broadcast
        .to(user.room)
        .emit(
          "serverMessage",
          messageCreator("SYSTEM", `${user.username} has joined the chat`)
        );
      

      // update list of users shown
      io.to(user.room).emit("roomUsersHandler", {
        room: user.room,
        users: getUsersByRoom(user.room),
      });

      socket.on("userMessage", (message) => {
        const user = getCurrUser(socket.id);
        socket.broadcast
          .to(user.room)
          .emit("serverMessage", messageCreator(user.username, message));
        // send the message back to myself
        socket.emit("serverMessage", messageCreator("Me", message));
      });
    });

    socket.on("disconnect", () => {
      // broadcast everyone about user leaving the room
      const user = deleteUser(socket.id);
      if (user) {
        io.to(user.room).emit(
          "serverMessage",
          messageCreator("SYSTEM", `${user.username} has left the chat`)
        );
        // update list of users shown
        io.to(user.room).emit("roomUsersHandler", {
          room: user.room,
          users: getUsersByRoom(user.room),
        });
      }
    });

    // listens to a message send from the user and then send it
  });
};

export default initSocketIo;
