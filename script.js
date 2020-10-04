//random aerial logos appearing and floating upwards

var width = window.innerWidth;
var height = window.innerHeight;
var starContainer = document.getElementById('star-container');
var liveNow = document.getElementById('live-now');

function starsInYourEyez(){

  var x = Math.floor(Math.random() * width) + 1;
  var y = Math.floor(Math.random() * height) + 1;

  // console.log(x);
  // console.log(y);

  starContainer.innerHTML = `<div class="star" style="left: ${x}px; top: ${y}px"></div>`

  // console.log('star');

  setTimeout(starsInYourEyez, 7000);
}

starsInYourEyez();




//listen to the radio

var listen = document.getElementById('play-pause');
var radio = new Audio('https://checkyouraerial.radioca.st/skybound');

listen.addEventListener('click', function(){
  //play the rrrrrradio

  console.log(listen.classList);

  if (listen.classList.contains('listening')) {
    radio.pause();
  } else {
    radio.load();
    radio.play();
  }

  listen.classList.toggle('listening');

});




//schedule

function checkTime() {

  var CurrentDate = moment().tz('Europe/London');

  console.log(CurrentDate)

  var live = 'gate will open at 1400';

  if (CurrentDate.isAfter('2020-10-04T14:00:00')) {
    live = 'doyoudre.am';
  }
  if (CurrentDate.isAfter('2020-10-04T15:30:00')) {
    live = 'lindo forms';
  }
   if (CurrentDate.isAfter('2020-10-04T16:00:00')) {
    live = 'mod.r';
  }
   if (CurrentDate.isAfter('2020-10-04T17:00:00')) {
    live = 'ZEMA';
  }
   if (CurrentDate.isAfter('2020-10-04T18:00:00')) {
    live = 'KAVARI';
  }
   if (CurrentDate.isAfter('2020-10-04T19:00:00')) {
    live = 'zloto';
  }
   if (CurrentDate.isAfter('2020-10-04T20:00:00')) {
    live = 'thanks for checking in :)';
  }

  console.log(liveNow);

  liveNow.innerHTML = live;

  setTimeout(checkTime, 30000);
}

checkTime();





//tracking mouse position relative to centre

// (function() {
//   // Init
//   var container = document.getElementById("aerial-anim-container"),
//   inner = document.getElementById("aerial-anim");

//   // Mouse
//   var mouse = {
//     _x: 0,
//     _y: 0,
//     x: 0,
//     y: 0,
//     updatePosition: function(event) {
//       var e = event || window.event;
//       this.x = e.clientX - this._x;
//       this.y = (e.clientY - this._y) * -1;
//     },
//     setOrigin: function(e) {
//       this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
//       this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
//     },
//     show: function() {
//       return "(" + this.x + ", " + this.y + ")";
//     }
//   };

//   // Track the mouse position relative to the center of the container.
//   mouse.setOrigin(container);

//   //-----------------------------------------

//   var counter = 0;
//   var updateRate = 10;
//   var isTimeToUpdate = function() {
//     return counter++ % updateRate === 0;
//   };

//   //-----------------------------------------

//   var onMouseEnterHandler = function(event) {
//     update(event);
//   };

//   var onMouseMoveHandler = function(event) {
//     if (isTimeToUpdate()) {
//       update(event);
//     }
//   };

//   //-----------------------------------------

//   var update = function(event) {
//     mouse.updatePosition(event);
//     updateTransformStyle(
//       (mouse.y / 20).toFixed(2),
//       (mouse.x / 10).toFixed(2)
//     );
//   };

//   var updateTransformStyle = function(x, y) {
//     x = 50 - x;
//     var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
//     inner.style.transform = style;
//     inner.style.webkitTransform = style;
//     inner.style.mozTransform = style;
//     inner.style.msTransform = style;
//     inner.style.oTransform = style;
//   };

//   //-----------------------------------------

//   document.onmousemove = onMouseMoveHandler;
// })();
