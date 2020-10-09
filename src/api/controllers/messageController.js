function messageCreator(username, text) {
  const hour = new Date().getHours();
  let minutes = new Date().getMinutes();
  if(minutes<10)
    minutes='0'+minutes
  const time = `${hour}:${minutes}`;
  

  return {
    username: username,
    text: text,
    time: time,
  };
}

export default messageCreator;
