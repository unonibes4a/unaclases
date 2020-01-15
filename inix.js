
var urlmicanal="https://player.twitch.tv/?channel=unonubestres";

$( document ).ready(function() {
   
    urlmicanal="https://player.twitch.tv/?channel=unonubestres";

    cambiariframe(urlmicanal);
   /* $.getJSON('canal.json', function (data) {
      
      });*/
    


});

  function cambiariframe(stw){

    document.getElementById("idiframe").src=stw;
  }