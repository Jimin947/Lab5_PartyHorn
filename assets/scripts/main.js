// main.js


function disableButton(){
  let val = document.getElementById('volume-number').value; 
  if(val != 0 ){
    document.getElementById("honk-btn").disabled = false;
  }
  else {
    document.getElementById("honk-btn").disabled = true;
  }
}

document.getElementById('honk-btn').addEventListener('click', function(){

  document.getElementById('horn-sound').volume = document.getElementById('volume-number').value/100;
  document.getElementById('horn-sound').play();
});

//Input Field

document.getElementById('volume-number').addEventListener('input', function(){
  
  var val = document.getElementById('volume-number').value; 
  document.getElementByID('volume-slider').value = val;
  
  if(val == 0) {
    document.getElementById('volume-image').src = "./assets/media/icons/volume-level-0.svg";
    document.getElementById('honk-btn').disabled=true;
  }
  else if(val < 34) {
    document.getElementById('volume-image').src = "./assets/media/icons/volume-level-1.svg";
    document.getElementById('honk-btn').disabled=false;
  }
  else if(val < 67) {
    document.getElementById('volume-image').src = "./assets/media/icons/volume-level-2.svg";
    document.getElementById('honk-btn').disabled=false;
  }
  else {
    document.getElementById('volume-image').src = "./assets/media/icons/volume-level-3.svg";
    document.getElementById('honk-btn').disabled=false;
  }
  disableButton();

});
  
//Slider

document.getElementById('volume-slider').addEventListener('input', function(){
    
  document.getElementById('volume-number').value = document.getElementById('volume-slider').value;
  var val = document.getElementById('volume-slider').value;

  if(val == 0) {
    document.getElementById('volume-image').src = "./assets/media/icons/volume-level-0.svg";
    document.getElementById('honk-btn').disabled=true;
  }
  else if(val < 34) {
    document.getElementById('volume-image').src = "./assets/media/icons/volume-level-1.svg";
    document.getElementById('honk-btn').disabled=false;
  }
  else if(val < 67) {
    document.getElementById('volume-image').src = "./assets/media/icons/volume-level-2.svg";
    document.getElementById('honk-btn').disabled=false;
  }
  else {
    document.getElementById('volume-image').src = "./assets/media/icons/volume-level-3.svg";
    document.getElementById('honk-btn').disabled=false;
  }
  disableButton();
});

//Radio

document.getElementById('audio-selection').addEventListener('change',function(){
    
  if(document.getElementById('radio-air-horn').checked) {
    document.getElementById('horn-sound').src = "./assets/media/audio/air-horn.mp3";
    document.getElementById('sound-image').src = "./assets/media/images/air-horn.svg";
  }
  else if(document.getElementById('radio-car-horn').checked) {
    document.getElementById('horn-sound').src = "./assets/media/audio/car-horn.mp3";
    document.getElementById('sound-image').src = "./assets/media/images/car.svg";
  }
  else if(document.getElementById('radio-party-horn').checked) {
    document.getElementById('horn-sound').src = "./assets/media/audio/party-horn.mp3";
    document.getElementById('sound-image').src = "./assets/media/images/party-horn.svg";
  }
});
