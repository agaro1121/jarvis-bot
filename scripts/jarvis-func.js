'use strict';

let config = require('../conf/config.json');
let gitConfig = config.github;

module.exports = (robot) => {

  robot.respond(/show (\w*)/i, (res) => {

      let username = res.match[1]; //from slack message
      let userEmailFromSlack = res.message.user.profile.email; //from slack payload

      if(isUserEmailAuthorized(userEmailFromSlack)) {
        getUserInfoAndRespondToSlack(res, username);
      } else {
        res.send("unauthorized user");
      }

  });
};

let isUserEmailAuthorized = (userEmailFromSlack) => {
  return gitConfig.allowedUsers.some(user => user === userEmailFromSlack);
};

let formatBody = (body) => {
  return "```" + JSON.stringify(JSON.parse(body), null, 2) + "```";
};

let getUserInfoAndRespondToSlack = (res, username) => {
 res.http(`${gitConfig.url}${username}`) //TODO: how to return this ???
    .get()((err, response, body) => {
      res.send(formatBody(body));
    });
};
