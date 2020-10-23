//random aerial logos appearing and floating upwards

var width = window.innerWidth;
var height = window.innerHeight;
var starContainer = document.getElementById('star-container');
var liveNow = document.querySelectorAll('.who-is-live-now');

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

var listen = document.querySelectorAll('.play-pause');
// var radio = new Audio('https://s4.radio.co/s67e8e7da0/listen');
var listening = false;




for (let i = 0; i < listen.length; i++) {
     listen[i].addEventListener("click", function() {

         if (listen[i].classList.contains('listening')) {
           // radio.pause();
         } else {
           // radio.load();
           // radio.play();
         }

         listen[0].classList.toggle('listening');
         listen[1].classList.toggle('listening');

     });
 }




//schedule

function checkTime() {

  var CurrentDate = moment().tz('Europe/London');

  console.log(CurrentDate)

  var live = 'back soon :)';
  var isItLive = '';

  if (CurrentDate.isAfter('2020-10-23T11:00:00')) {
    live = 'discolour(ed)';
    isItLive = 'live now:<br>'
  };
  if (CurrentDate.isAfter('2020-10-23T15:00:00')) {
    live = 'downtown arts club';
  };
   if (CurrentDate.isAfter('2020-10-23T16:00:00')) {
    live = 'fair play crew';
  };
   if (CurrentDate.isAfter('2020-10-23T18:00:00')) {
    live = 'gloam';
  };
   if (CurrentDate.isAfter('2020-10-23T19:00:00')) {
    live = 'THETAMORPH';
  };
   if (CurrentDate.isAfter('2020-10-23T21:00:00')) {
    live = 'frequency bias';
  };
   if (CurrentDate.isAfter('2020-10-23T22:00:00')) {
    live = 'bacteriocene';
  };
  if (CurrentDate.isAfter('2020-10-23T22:40:00')) {
   live = 'xASHLAND';
  };
  if (CurrentDate.isAfter('2020-10-23T23:20:00')) {
    live = 'back soon :)';
    isItLive = '';
  };

  for (let i = 0; i < liveNow.length; i++) {
    liveNow[i].innerHTML = isItLive + live;
  }

  setTimeout(checkTime, 30000);
}

checkTime();





//tracking mouse position relative to centre

// (function() {
//   // Init
//   var container = document.getElementById("aerial-anim-container"),
//   inner = document.getElementById("aerial-anim");
//
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
//
//   // Track the mouse position relative to the center of the container.
//   mouse.setOrigin(container);
//
//   //-----------------------------------------
//
//   var counter = 0;
//   var updateRate = 10;
//   var isTimeToUpdate = function() {
//     return counter++ % updateRate === 0;
//   };
//
//   //-----------------------------------------
//
//   var onMouseEnterHandler = function(event) {
//     update(event);
//   };
//
//   var onMouseMoveHandler = function(event) {
//     if (isTimeToUpdate()) {
//       update(event);
//     }
//   };
//
//   //-----------------------------------------
//
//   var update = function(event) {
//     mouse.updatePosition(event);
//     updateTransformStyle(
//       (mouse.y / 20).toFixed(2),
//       (mouse.x / 10).toFixed(2)
//     );
//   };
//
//   var updateTransformStyle = function(x, y) {
//     x = 50 - x;
//     var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
//     inner.style.transform = style;
//     inner.style.webkitTransform = style;
//     inner.style.mozTransform = style;
//     inner.style.msTransform = style;
//     inner.style.oTransform = style;
//   };
//
//   //-----------------------------------------
//
//   document.onmousemove = onMouseMoveHandler;
// })();

var xMovement = document.getElementById('x-movement');
var yMovement = document.getElementById('y-movement');


window.addEventListener('mousemove', function (e) {
    var x = e.clientX - (window.innerWidth / 2) ;
    var y = e.clientY - ( window.innerHeight / 2);

    // console.log(x);
    // console.log(y);

    xMovement.innerHTML = ( 42.2 + (x / 100) ).toFixed(1);
    yMovement.innerHTML = ( 25.7 + (y / 100) ).toFixed(1);
    // $("#results").text("Left:" + (event.pageX - objCenterX) + ", Top:" + (event.pageY - objCenterY));
})


function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
