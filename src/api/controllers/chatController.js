

export const homeController = async(req,res)=>{
    if (req.isAuthenticated()) {
        console.log("authenticated successfully");
        res.render("home");
      } else {
        console.log("authenticated failed");
        res.redirect("/login");
      }
}

export const chatRoomController = async(req,res)=>{
    if (req.isAuthenticated()) {
        console.log("authenticated successfully");
        res.render("chatRoom");
      } else {
        console.log("authenticated failed");
        res.redirect("/login");
      }
}