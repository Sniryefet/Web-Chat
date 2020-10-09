// temporary untill a database is constructed

const users = []


function userJoined(id,username,room){
    const user = {id,username,room}
    users.push(user)
    return user;
}

function getCurrUser(id){
    return users.find(user=> id ===user.id)
}


export {userJoined, getCurrUser}