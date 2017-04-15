/**
 * Created by hierro on 4/14/17.
 */

module.exports = (robot) => {
  const url = "https://api.github.com/users/agaro1121";

  robot.respond(/show all/i, function(resOut) {
    console.log("GET request on url="+url+"...");
    robot.http(url).get(function(err, res){
        console.log("something goes here");

        console.log("err="+err);
        console.log("res="+res);
        res.send("uhhhhhh")

    });
    resOut.send("SUP BITCHES!!!");

  });


}
