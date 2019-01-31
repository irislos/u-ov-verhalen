/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var btn = document.querySelector('article div img');

btn.onclick = function(){
  btn.classList.add('message');
  setTimeout(function(){
    btn.classList.add('hurray');
}, 2000);
};

var liken = document.getElementsByClassName('like');

function likeGroter() {
  this.classList.toggle('heart');
}

var i = 0;
for (i=0; i<liken.length; i++) {
  liken[i].addEventListener('click', likeGroter);
}

// bron: https://www.w3schools.com/jsref/met_audio_pause.asp

// Interactie verhaal
var x = document.getElementById('regengeluid');


function playAudio() {
x.play();
}
playAudio();

function pauseAudio() {
  x.pause();
}
pauseAudio();
