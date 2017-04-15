'use strict';

module.exports = (robot) => {
  robot.respond(/show (\w*)/i, (res) => {
    let username = res.match[1];
    let userEmail = res.message.user.profile.email;
    console.log(userEmail);
    // if(userEmail == "") { //works !!!!!
      res.http(`https://api.github.com/users/${username}`)
        .get()((err, response, body) => {
          console.log("activated http callback");

          // res.send(response.statusMessage);
          res.send("```\n" + JSON.stringify(JSON.parse(body), null, 2) + "\n```"); //works


        });
    // } else {
      res.send("unauthorized user");
    // }
  });
}
