var width = window.innerWidth;
var height = window.innerHeight;
var starContainer = document.getElementById('star-container');
var liveNow = document.getElementById('who-is-live-now');
var liveNowMobile = document.getElementById('who-is-live-now-mobile');

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


// 1200 → blair
// 1300 → thawing w/ xivro
// 1400 → warp and weft
// 1500 → gloam
// 1600 → let's meet in the beatiful
// and new decade
// 1700 → novy mir (r)
// 1800 → subterra
// 1900 → terrace 2
// 2000 → hyperdome invites
// 2100 → lockdown sessions w/ .CORPSE
// 2200 → J.YOUNG


function checkTime() {

  var CurrentDate = moment().tz('Europe/London');

  console.log(CurrentDate);

  var live = "back on friday :)";
  var isItLive = '';

  if (CurrentDate.isAfter('2021-06-11T00:00:00')) {
    isItLive = ''
    live = "live from 1200 BST :)";
  };
  if (CurrentDate.isAfter('2021-06-11T12:00:00')) {
    isItLive = 'live now:'
    live = "blair";
  };
   if (CurrentDate.isAfter('2021-06-11T13:00:00')) {
    live = "thawing w/ xivro";
    // document.getElementById('join-arts-club').style.display = "block";
  };
  if (CurrentDate.isAfter('2021-06-11T14:00:00')) {
   live = "warp and weft";
  //  document.getElementById('join-arts-club').style.display = "none";
  };
  if (CurrentDate.isAfter('2021-06-11T15:00:00')) {
   live = 'gloam';
  };
  if (CurrentDate.isAfter('2021-06-11T16:00:00')) {
    live = "let's meet in the beatiful and new decade w/ antivirus and deep sea world";
   };
  if (CurrentDate.isAfter('2021-06-11T17:00:00')) {
   live = 'novy mir (r)';
  };
  if (CurrentDate.isAfter('2021-06-11T18:00:00')) {
   live = 'subterra';
  };
  if (CurrentDate.isAfter('2021-06-11T19:00:00')) {
    live = 'terrace 2';
  };
  if (CurrentDate.isAfter('2021-06-11T20:00:00')) {
    live = 'hyperdome invites';
  };
  if (CurrentDate.isAfter('2021-06-11T23:00:00')) {
    live = 'lockdown sessions w/ .CORPSE' ;
  };
  if (CurrentDate.isAfter('2021-06-11T23:00:00')) {
    live = 'J.YOUNG';
   };

  if (CurrentDate.isAfter('2021-06-12T00:00:00')) {
   live = 'back on friday :)';
  };

  //ender :)
  // if (CurrentDate.isAfter('2021-01-16T00:00:00')) {
  //  live = 'back on friday :)';
  // };

  liveNow.innerHTML = isItLive + '<marquee>' + live + '</marquee>';
  liveNowMobile.innerHTML = '<marquee>' + isItLive + ' ' + live + '</marquee>'

  setTimeout(checkTime, 30000);
}

checkTime();


function updateliveNow(x){
  liveNow.innerHTML = 'live now: ' + '<marquee>' + x + '</marquee>';
  liveNowMobile.innerHTML = '<marquee>' + isItLive + ' ' + x + '</marquee>'
}


function getLiveFromAPI(){
// Make a request for a user with a given ID
axios.get('https://public.radio.co/stations/s3f1d8bc0f/status')
  .then(function (response) {
    // handle success
    // console.log(response);
    updateliveNow(response.data.current_track.title);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  
  
  // setTimeout(getLiveFromAPI, 30000);

}

// getLiveFromAPI()



function updateliveNowFromSchedule(schedule, time){
  console.log(schedule)
  console.log(time)
  for (const i in schedule) {
    const start = moment(schedule[i].start)
    const end = moment(schedule[i].end)
    // console.log(start.isAfter(time))
    
    if (start.isAfter(time) && time.isBefore(end)) {
      console.log()
      console.log(schedule[i].playlist.name)
      break;
    }
  }
}

function getSchedule(){
// Make a request for a user with a given ID
axios.get('https://public.radio.co/stations/s3f1d8bc0f/embed/schedule')
  .then(function (response) {
    // handle success
    console.log(response);
    var CurrentDate = moment().tz('Europe/London');
    console.log(CurrentDate)
    updateliveNowFromSchedule(response.data.data, CurrentDate);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  
  
  // setTimeout(updateliveNowFromSchedule, 30000);

}

// getSchedule()



// URL FOR SCHEDULE
// https://public.radio.co/stations/s3f1d8bc0f/embed/schedule

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
