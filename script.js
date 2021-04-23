var width = window.innerWidth;
var height = window.innerHeight;
var starContainer = document.getElementById('star-container');
var liveNow = document.getElementById('who-is-live-now');
var liveNowMobile = document.getElementById('who-is-live-now-mobile')

//random aerial logos appearing and floating upwards
//
// function starsInYourEyez(){
//
//   var x = Math.floor(Math.random() * width) + 1;
//   var y = Math.floor(Math.random() * height) + 1;
//
//   // console.log(x);
//   // console.log(y);
//
//   starContainer.innerHTML = `<div class="star" style="left: ${x}px; top: ${y}px"></div>`
//
//   // console.log('star');
//
//   setTimeout(starsInYourEyez, 7000);
// }
//
// starsInYourEyez();




//listen to the radio

var listen = document.querySelectorAll('.play-pause');
var radio = new Audio('https://s4.radio.co/s3f1d8bc0f/listen');
var listening = false;
var aerial = document.getElementById('aerial-anim');


for (let i = 0; i < listen.length; i++) {
     listen[i].addEventListener("click", function() {

         if (listen[i].classList.contains('listening')) {
           radio.pause();
         } else {
           radio.load();
           radio.play();
         }

         listen[0].classList.toggle('listening');
         listen[1].classList.toggle('listening');
         aerial.classList.toggle('animate-the-aerial');

     });
 }


//schedule

// 1000 — spital selectors
// 1200 — downtown arts club
// 1300 — discolour(ed)
// 1400 — other scapes
// 1500 — MOTHERLAND
// 1700 — spin (r)
// 1900 — fair play crew
// 2100 — frequency bias
// 2200 — bacteriocene
// 2300 — broken elements w/ SMIFF


function checkTime() {

  var CurrentDate = moment().tz('Europe/London');

  console.log(CurrentDate);

  var live = "";
  var isItLive = 'back on friday :)';

  if (CurrentDate.isAfter('2021-04-23T00:00:00')) {
    isItLive = ''
    live = "live from 1000 GMT :)";
  };
  if (CurrentDate.isAfter('2021-04-23T10:00:00')) {
    isItLive = 'live now:'
    live = "spital selectors: dusk till dawn";
  };
   if (CurrentDate.isAfter('2021-04-23T12:00:00')) {
    live = "downtown arts club";
    document.getElementById('join-arts-club').style.display = "block";
  };
  if (CurrentDate.isAfter('2021-04-23T13:00:00')) {
   live = "discolour(ed)";
   document.getElementById('join-arts-club').style.display = "none";
 };
 if (CurrentDate.isAfter('2021-04-23T14:00:00')) {
   live = 'other scapes';
  };
  if (CurrentDate.isAfter('2021-04-23T15:00:00')) {
   live = 'MOTHERLAND';
  };
  if (CurrentDate.isAfter('2021-04-23T17:00:00')) {
   live = 'spin (r)';
  };
  if (CurrentDate.isAfter('2021-04-23T19:00:00')) {
   live = 'fair play crew' ;
  };
  if (CurrentDate.isAfter('2021-04-23T21:00:00')) {
   live = 'frequency bias';
  };
  if (CurrentDate.isAfter('2021-04-23T22:00:00')) {
   live = 'bacteriocene';
  };
  if (CurrentDate.isAfter('2021-04-23T23:00:00')) {
    live = 'broken elements w/ SMIFF';
   };
  if (CurrentDate.isAfter('2021-04-24T00:00:00')) {
    live = 'back on friday :)';
  };
  // if (CurrentDate.isAfter('2021-03-06T00:00:00')) {
  //  live = 'back on friday :)';
  // };

  //ender :)
  // if (CurrentDate.isAfter('2021-01-16T00:00:00')) {
  //  live = 'back on friday :)';
  // };

  liveNow.innerHTML = isItLive + '<marquee>' + live + '</marquee>';
  liveNowMobile.innerHTML = '<marquee>' + isItLive + live + '</marquee>'

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
