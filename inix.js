
var urlmicanal="https://www.youtube.com/embed/VnbKPJA2ykU";//"https://player.twitch.tv/?channel=unonubestres";

var alumnonombre="";
var alumnopass="";
var alumnopregunta="";
var arrayfire=[];
var arrayestudiantesuser=[];

// todo firebase
function inicifireabse(){

  var firebaseConfig = {
    apiKey: "AIzaSyCZf9BNc5BZlbWvO61CgMJFSjC9aoOo44E",
    authDomain: "mensajesclases.firebaseapp.com",
    databaseURL: "https://mensajesclases.firebaseio.com",
    projectId: "mensajesclases",
    storageBucket: "mensajesclases.appspot.com",
    messagingSenderId: "831115193606",
    appId: "1:831115193606:web:5c09b14c58aa2cb1b6c287"
  };

  
  firebase.initializeApp(firebaseConfig);


  arrayfire=[];

  firebase.database().ref().child("votantes").on("value", function(snapshot) {
    arrayfire=[];
    arrayfire=snapshot.val();
 
    
    

    
    
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });



  firebase.database().ref().child("estudiantes").on("value", function(snapshot) {
  
    arrayestudiantesuser=[];
  
    
    arrayestudiantesuser=snapshot.val();
    


    
    
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });



}

//function traetodoordenadopor(st1){ firebase.database().ref("votantes").orderByChild(String(st1)).on("child_added", function(snapshot) { });}






function preguntarenclase(namex,preguntax){

  firebase.database().ref().child("votantes").push({name:namex,pregunta:preguntax});

}





// fin d e firebase

$( document ).ready(function() {

   
    urlmicanal="im.jpg";

    cambiariframe(urlmicanal);
   /* $.getJSON('canal.json', function (data) {
      
      });*/
    
      inicifireabse();



      
      
      $("#iddownder").click(function(){

      
        

      });

});

  function cambiariframe(stw){

    document.getElementById("idiframe").src=stw;
  }

  function fbtmasopcionespregunta() { 
document.getElementById("idpanelenviarleerpregun").style.display="block";



   }

   function fbtmasopcionespreguntacerrar() { 
    document.getElementById("idpanelenviarleerpregun").style.display="none";
    document.getElementById("idpanelquieropreguntar").style.display="block";
    document.getElementById("idinputquieropreguntar").value="";
    
    
       }

function fbtidbtsendpregunt() { 
  fbtmasopcionespreguntacerrar();
 }

 function fidbtenviarpregutna(){
  cerraridpanelquieropreguntar();
  

 }

 function cerraridpanelquieropreguntar(){
  alumnopregunta="";
  alumnopregunta=alumnonombre+"\n  "+document.getElementById("idinputquieropreguntar").value;

  document.getElementById("idpanelquieropreguntar").style.display="none";
  if(document.getElementById("idinputquieropreguntar").value==""){

    alert("Campo vacio ");
  }
  else{
    try {
      preguntarenclase(alumnonombre,alumnopregunta);
      alert("Se envio la pregunta");
    } catch (error) {
      alert("No se envio la pregunta reinicie el sistema y compruebe internet");
    }
     
    
  }

  

 }


 function fidbtenviarpregutnacerrar(){
  document.getElementById("idpanelquieropreguntar").style.display="none";
 }

setInterval(function(){

  if(navigator.onLine) {
    // el navegador está conectado a la red
    document.getElementById("idsininternet").style.display="none";
} else {
    // el navegador NO está conectado a la red
        // el navegador está conectado a la red
   
        
    document.getElementById("idsininternet").style.display="block";
}

},4000);



function fidbtverpreguntas(){

  
  document.getElementById("idpanelchat").style.display="block";

  //crealoaspreguntasl("idname","idmsn");
  forllenamensajes() ;



}


//
function forllenamensajes() { 
  empityelementosid("#idnebsajes");
  for(var i in arrayfire){
    crealoaspreguntasl(arrayfire[i].name,arrayfire[i].pregunta);

  }
 }

function crealoaspreguntasl(idname,idmsn){
  stringpelis="";


  stringpelis= "<span class='clcolocamens' >"+idname+": <br>"+idmsn+"</span>" ;
  


    
  $("#idnebsajes").append(stringpelis);
document.getElementById("idpanelenviarleerpregun").style.display="none";

}

function empityelementosid(idel){

  $(idel).empty();
}


function fbtsalirdepreguntasver(){

  document.getElementById("idpanelchat").style.display="none";
}

function fcerrartresbotones() {

  
  document.getElementById("idpanelenviarleerpregun").style.display="none";
  }


  function comprobarlogin(){
    alumnonombre=document.getElementById("user").value;
    alumnopass=String(document.getElementById("pass").value);

    
    for(var i in  arrayestudiantesuser){
      console.log(arrayestudiantesuser[i].user);
      if(arrayestudiantesuser[i].user==alumnonombre && arrayestudiantesuser[i].pass==alumnopass){
        document.getElementById("idpanellogin").style.display="none";
      }
      else{}

    }  
  }