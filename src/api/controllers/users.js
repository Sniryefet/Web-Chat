// temporary untill a database is constructed

const users = [];

function userJoined(id, username, room) {
  const user = { id, username, room };
  users.push(user);
  return user;
}

function getCurrUser(id) {
  return users.find((user) => id === user.id);
}

function deleteUser(id) {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

function getUsersByRoom(room) {
  return users.filter(user => user.room === room);
}

export { userJoined, getCurrUser, getUsersByRoom, deleteUser };
