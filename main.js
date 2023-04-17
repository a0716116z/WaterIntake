window.onload = function(){
  callwapp();
  processUser();
  
}
let send=false;
function processUser()
{
  let parameters = location.search.substring(1).split("&");

  let temp = parameters[0].split("=");
  user = unescape(temp[1]);
  temp = parameters[1].split("=");
  volume = unescape(temp[1]);
  document.getElementById("user").innerHTML = user;
  document.getElementById("volume").innerHTML = volume+' ml';
  if(send==false){
     send_data(user, volume);
  }
  // setInterval(auto_close, 1500);
}
function auto_close(){
  window.open('', '_self', '');
  window.close();
}

function send_data(user, volume) {
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbyUWgNSHFRDs-Tl_m4CLugo2ghklyZryNCBV7VmgVad23dFYRA0TrUBTYTLDW55edtdHQ/exec",
    data: {
        "user": user,
        "volume": volume,
    },
    success: function(response) {
      if(response == "成功"){
        // alert("成功");
        show_hide();
        send=true;
        document.getElementById("status").innerHTML = '喝水成功...';
        setInterval(auto_close, 1500);
      }
      else{

      }
    },
  });
};
function callwapp(){
  $(".waterwave-canvas").waterwave({

  // parent container
  parent : '',

  // color of waves
  color : '#55adcf',

  // or 'down'
  direction: 'up',

  // background color
  background: ''
  
});

}
function show_hide(){
let dialog = document.getElementsByClassName('toast')[0];
dialog.classList.remove('display');
setTimeout(function() {dialog.classList.add('display')}, 1500);
}

