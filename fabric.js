
// fabric.js

// get width and height of page on load

var pageWidth = window.innerWidth;
var pageHeight = window.innerHeight;

var centerX = pageWidth / 2;
var centerY = pageHeight / 2;

scale = 1;

var h1 = 40;
var h2 = 30;
var h3 = 25;
var h4 = 20;
var h5 = 18;
var padding = 50;

var purple = '#4cbdcc';
var lightPurple = '#eef';

if (window.innerWidth > 1500) {
    h1 = 60;
    h2 = 40;
    h3 = 30;
    h4 = 25;
    h5 = 20
    padding = 100;
}

// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas('c');

var skybound = new fabric.IText("sky—bound sounds from the north", {
  fontFamily: 'Arial Narrow',
  fontStyle: 'italic',
  fill: '#FFFFFF',
  fontSize: h1,
  left: centerX,
  top: 100,
  originX: 'center',
  originY: 'center',
  scaleX: scale,
  scaleY: scale,
  // borderColor: purple,
  // cornerColor: lightPurple,
});

canvas.add(skybound);

var about = new fabric.IText("aerial is an independent internet-based community radio\nbroadcasting from aberdeen, scotland.", {
  fontFamily: 'Arial Narrow',
  fill: '#FFFFFF',
  fontSize: h3,
  top: (100 + padding),
  left: padding,
  shadow: 'rgba(0,0,0,0.3) 5px 5px 5px',
  originX: 'left',
  originY: 'top',
  scaleX: scale,
  scaleY: scale
});

canvas.add(about);


var schedule = new fabric.IText(
  "✳︎ schedule 16.04.2021 ✳︎\n1400 — warp and weft\n1500 — gloam\n1700 — let's meet in the beautiful and new decade (r)\n1600 — divine inferno w/ subterra\n1900 — terrace 2\n2000 — hyperdome invites LEINAD\n2200 — .CORPSE: lockdown sessions\n2300 — J.YOUNG\n0000 — PIPE", {
  fontFamily: 'Arial Narrow',
  fill: '#FFFFFF',
  fontSize: h4,
  textAlign: 'left',
  left: padding,
  top: (pageHeight - padding),
  originX: 'left',
  originY: 'bottom',
  scaleX: scale,
  scaleY: scale

});

// var schedule = new fabric.IText(
//   "✳︎\n✳︎ ✸ \n✳︎ ✸ ✹ \n✳︎ ✸ ✹ ❇︎ \n✳︎ ✸ ✹ ❇︎ ✯\n✳︎ ✸ ✹ ❇︎ ✯ ✾ \n✳︎ ✸ ✹ ❇︎ ✯ ✾ ✢ \n✳︎ ✸ ✹ ❇︎ ✯ ✾ ✢ ✺ \n|\n|", {
//   fontFamily: 'Arial Narrow',
//   fill: '#FFFFFF',
//   fontSize: h4,
//   textAlign: 'center',
//   left: padding,
//   top: (pageHeight - padding),
//   originX: 'left',
//   originY: 'bottom',
//   scaleX: scale,
//   scaleY: scale
//  });


canvas.add(schedule);

var circle = new fabric.Circle({
  radius: 100,
  fill: '#dbf2f5',
  scaleY: 0.5,
  originX: 'center',
  originY: 'center',
});

var text = new fabric.IText('aerial community radio', {
  fontSize: h2,
  fontFamily: 'Arial Narrow',
  originX: 'center',
  originY: 'center',
  fill: '#4CBDCC'
});



var group = new fabric.Group([ circle, text ], {
  left: padding,
  top: padding,
  angle: -10,
  scaleX: scale,
  scaleY: scale
});

canvas.add(group);


var community = new fabric.IText('community radio\nis\nsick\nget involved →', {
  fontFamily: 'Arial Narrow',
  fill: 'white',
  fontSize: h3,
  textAlign: 'center',
  left: centerX,
  top: (pageHeight - padding),
  originX: 'center',
  originY: 'bottom',
  hoverCursor: "pointer",
});


community.on('selected', function() {
    window.open("/get-involved");
})

canvas.add(community);

var archive = new fabric.IText('archive →', {
  fontSize: h3,
  fontFamily: 'Arial Narrow',
  fill: 'white',
  textAlign: 'center',
  left: (pageWidth - 200),
  top: (centerY - 150),
  originX: 'right',
  hoverCursor: "pointer",
  scaleX: scale,
  scaleY: scale
});

archive.on('selected', function() {
    window.open("https://www.mixcloud.com/checkyouraerial/");
})

canvas.add(archive);


var instagram = new fabric.IText('instagram →', {
  fontSize: h3,
  fontFamily: 'Arial Narrow',
  fill: 'white',
  textAlign: 'center',
  left: (pageWidth - 100),
  top: (centerY - 50),
  originX: 'right',
  hoverCursor: "pointer",
  scaleX: scale,
  scaleY: scale
});


instagram.on('selected', function() {
    window.open("https://www.instagram.com/checkyouraeri.al/");
})

canvas.add(instagram);


var facebook = new fabric.IText('facebook →', {
  fontSize: h3,
  fontFamily: 'Arial Narrow',
  fill: 'white',
  textAlign: 'center',
  left: (pageWidth - 100),
  top: (centerY + 50),
  originX: 'right',
  hoverCursor: "pointer",
  scaleX: scale,
  scaleY: scale
});


facebook.on('selected', function() {
    window.open("https://www.facebook.com/aerialcommunityradio");
})

canvas.add(facebook);


var twitter = new fabric.IText('twitter →', {
  fontSize: h3,
  fontFamily: 'Arial Narrow',
  fill: 'white',
  textAlign: 'center',
  left: (pageWidth - 200),
  top: (centerY + 150),
  originX: 'right',
  hoverCursor: "pointer",
  scaleX: scale,
  scaleY: scale,
});


twitter.on('selected', function() {
    window.open("https://twitter.com/checkyouraerial");
})

canvas.add(twitter);

fabric.loadSVGFromURL('/images/check-your-aerial.svg',function(objects, options){
  var svgData = fabric.util.groupSVGElements(objects, options);
  svgData.top = padding;
  svgData.left = (pageWidth - padding);
  canvas.add(svgData);
  originX: 'center';
  originY: 'center';
  svgData.originX = 'right';
  svgData.originY = 'top';
  svgData.scaleToHeight(100);
});

fabric.loadSVGFromURL('/images/aerial-comp.svg',function(objects, options){
  var svgData = fabric.util.groupSVGElements(objects, options);
  svgData.top = padding;
  svgData.left = (pageWidth - (150 + padding));
  canvas.add(svgData);
  svgData.originX = 'right';
  svgData.originY = 'top';
  svgData.scaleToHeight(100);
});

fabric.loadSVGFromURL('/images/logo.svg?v=2',function(objects, options){
  var svgData = fabric.util.groupSVGElements(objects, options);
  svgData.top = 300;
  svgData.left = (pageWidth - 300);
  canvas.add(svgData);
  svgData.originX = 'right';
  svgData.originY = 'top';
  svgData.scaleToHeight(50);
});

fabric.loadSVGFromURL('/images/logo.svg?v=2',function(objects, options){
  var svgData = fabric.util.groupSVGElements(objects, options);
  svgData.top = (pageHeight - 100);
  svgData.left = (pageWidth - 150);
  canvas.add(svgData);
  svgData.originX = 'right';
  svgData.originY = 'top';
  svgData.scaleToHeight(50);
});

fabric.loadSVGFromURL('/images/logo.svg?v=2',function(objects, options){
  var svgData = fabric.util.groupSVGElements(objects, options);
  svgData.top = (centerY + 25);
  svgData.left = 450;
  canvas.add(svgData);
  svgData.originX = 'right';
  svgData.originY = 'top';
  svgData.scaleToHeight(50);
});


fabric.Image.fromURL('/images/aerial-1.jpg', function(myImg) {
  //i create an extra var for to change some image properties
  var img3 = myImg.set({
    left: padding,
    top: centerY
  });
  img3.originX = 'left';
  img3.originY = 'center';
  img3.scaleToHeight(200);
  canvas.add(img3);
  img3.sendToBack();
 });

// fabric.Image.fromURL('/images/unicorn3.jpeg', function(myImg) {
//   //i create an extra var for to change some image properties
//   var img8 = myImg.set({
//    left: padding,
//    top: centerY
//   });
//   img8.originX = 'left';
//   img8.originY = 'center';
//   img8.scaleToWidth(140);
//   canvas.add(img8);
//   img8.sendToBack();
//  });

// fabric.Image.fromURL('/images/unicorn10.jpeg', function(myImg) {
//   //i create an extra var for to change some image properties
//   var img20 = myImg.set({
//    left: padding,
//    top: (centerY - 15)
//   });
//   img20.originX = 'left';
//   img20.originY = 'center';
//   img20.scaleToWidth(130);
//   canvas.add(img20);
//   img20.sendToBack();
//  });

// fabric.Image.fromURL('/images/unicorn1.jpeg', function(myImg) {
//  //i create an extra var for to change some image properties
//  var img4 = myImg.set({
//   left: padding,
//   top: centerY
//  });
//  img4.originX = 'left';
//  img4.originY = 'center';
//  img4.scaleToWidth(175);
//  canvas.add(img4);
//  img4.sendToBack();
// });

// fabric.Image.fromURL('/images/unicorn2.jpeg', function(myImg) {
//  //i create an extra var for to change some image properties
//  var img5 = myImg.set({
//   left: padding,
//   top: centerY
//  });
//  img5.originX = 'left';
//  img5.originY = 'center';
//  img5.scaleToWidth(150);
//  canvas.add(img5);
//  img5.sendToBack();
// });




// fabric.Image.fromURL('/images/unicorn4.png', function(myImg) {
//  //i create an extra var for to change some image properties
//  var img1 = myImg.set({
//   left: padding,
//   top: centerY
//  });
//  img1.originX = 'left';
//  img1.originY = 'center';
//  img1.scaleToWidth(200);
//  canvas.add(img1);
//  img1.sendToBack();
// });


// fabric.Image.fromURL('/images/unicorn5.jpg', function(myImg) {
//  //i create an extra var for to change some image properties
//  var img2 = myImg.set({
//   left: padding,
//   top: centerY
//  });
//  img2.originX = 'left';
//  img2.originY = 'center';
//  img2.scaleToWidth(100);
//  canvas.add(img2);
//  img2.sendToBack();
// });

// fabric.Image.fromURL('/images/unicorn6.jpeg', function(myImg) {
//  //i create an extra var for to change some image properties
//  var img2 = myImg.set({
//   left: (padding + 20),
//   top: (centerY - 5)
// });
//  img2.originX = 'left';
//  img2.originY = 'center';
//  img2.scaleToWidth(175);
//  canvas.add(img2);
//  img2.sendToBack();
// });

// fabric.Image.fromURL('/images/unicorn7.jpeg', function(myImg) {
//  //i create an extra var for to change some image properties
//  var img2 = myImg.set({
//   left: (padding - 10),
//   top: centerY
//  });
//  img2.originX = 'left';
//  img2.originY = 'center';
//  img2.scaleToWidth(90);
//  canvas.add(img2);
//  img2.sendToBack();
// });



// fabric.Image.fromURL('/images/unicorn9.jpeg', function(myImg) {
//   //i create an extra var for to change some image properties
//   var img2 = myImg.set({
//    left: padding,
//    top: (centerY + 25)
//   });
//   img2.originX = 'left';
//   img2.originY = 'center';
//   img2.scaleToWidth(130);
//   canvas.add(img2);
//   img2.sendToBack();
//  });



//  fabric.Image.fromURL('/images/unicorn11.jpeg', function(myImg) {
//   //i create an extra var for to change some image properties
//   var img2 = myImg.set({
//    left: padding,
//    top: (centerY - 20)
//   });
//   img2.originX = 'left';
//   img2.originY = 'center';
//   img2.scaleToWidth(130);
//   canvas.add(img2);
//   img2.sendToBack();
//  });

//  fabric.Image.fromURL('/images/unicorn8.png', function(myImg) {
//   //i create an extra var for to change some image properties
//   var img2 = myImg.set({
//    left: (padding + 20),
//    top: (centerY - 15)
//  });
//   img2.originX = 'left';
//   img2.originY = 'center';
//   img2.scaleToWidth(100);
//   canvas.add(img2);
//   img2.sendToBack();
//  });




//ALL OVER THE PLACE
// fabric.Image.fromURL('/images/unicorn1.jpeg', function(myImg) {
//   //i create an extra var for to change some image properties
//   var img4 = myImg.set({
//     left: pageWidth - 325,
//     top: (pageHeight - 50)
//   });
//   img4.originX = 'right';
//   img4.originY = 'bottom';
//   img4.scaleToWidth(175);
//   canvas.add(img4);
//   img4.sendToBack();
//  });
 
//  fabric.Image.fromURL('/images/unicorn2.jpeg', function(myImg) {
//   //i create an extra var for to change some image properties
//   var img5 = myImg.set({
//     left: (padding + 450),
//     top: (pageHeight - 225)
//   });
//   img5.originX = 'left';
//   img5.originY = 'center';
//   img5.scaleToWidth(150);
//   canvas.add(img5);
//   // img5.sendToBack();
//  });
 
//  fabric.Image.fromURL('/images/unicorn3.jpeg', function(myImg) {
//   //i create an extra var for to change some image properties
//   var img8 = myImg.set({
//    left: (padding + 550),
//    top: (pageHeight - 375)
//   });
//   img8.scaleToWidth(140);
//   canvas.add(img8);
//   img8.sendToBack();
//  });
 
 
//  fabric.Image.fromURL('/images/unicorn4.png', function(myImg) {
//   //i create an extra var for to change some image properties
//   var img1 = myImg.set({
//    left: (pageWidth - 680),
//    top: (pageHeight - 100)
//   });
//   img1.originX = 'left';
//   img1.originY = 'bottom';
//   img1.scaleToWidth(200);
//   canvas.add(img1);
//   img1.sendToBack();
//  });
 
 
//  fabric.Image.fromURL('/images/unicorn5.jpg', function(myImg) {
//   //i create an extra var for to change some image properties
//   var img2 = myImg.set({
//     left: padding + 100,
//     top: centerY - 100
//   });
//   img2.originX = 'left';
//   img2.originY = 'center';
//   img2.scaleToWidth(100);
//   canvas.add(img2);
//   // img2.sendToBack();
//  });
 
//  fabric.Image.fromURL('/images/unicorn6.jpeg', function(myImg) {
//   //i create an extra var for to change some image properties
//   var img2 = myImg.set({
//     left:  (padding + 75),
//     top: (centerY - 75)
//   });
//   img2.originX = 'left';
//   img2.originY = 'center';
//   img2.scaleToWidth(175);
//   canvas.add(img2);
//   // img2.sendToBack();
//  });
 
//  fabric.Image.fromURL('/images/unicorn7.jpeg', function(myImg) {
//   //i create an extra var for to change some image properties
//   var img2 = myImg.set({
//     left: (pageWidth - 450),
//     top: (padding + 20)
//   });
//   img2.originX = 'left';
//   img2.originY = 'top';
//   img2.scaleToWidth(90);
//   canvas.add(img2);
//   img2.sendToBack();
//  });
 
//  fabric.Image.fromURL('/images/unicorn8.png', function(myImg) {
//   //i create an extra var for to change some image properties
//   var img2 = myImg.set({
//    left: (pageWidth - 600),
//    top: (padding + 20)
//   });
//   img2.originX = 'left';
//   img2.originY = 'top';
//   img2.scaleToWidth(130);
//   canvas.add(img2);
//   img2.sendToBack();
//  });


// fabric.Image.fromURL('/images/cat8.jpg', function(myImg) {
//  //i create an extra var for to change some image properties
//  var img2 = myImg.set({
//    left: (pageWidth - 550),
//    top: (centerY - 200)
//  });
//  img2.originX = 'left';
//  img2.originY = 'top';
//  img2.scaleToWidth(120);
//  canvas.add(img2);
//  img2.sendToBack();
// });

// fabric.Image.fromURL('/images/cat9.jpg', function(myImg) {
//  //i create an extra var for to change some image properties
//  var img2 = myImg.set({
//    left: (centerX),
//    top: (centerY - 200)
//  });
//  img2.originX = 'center';
//  img2.originY = 'bottom';
//  img2.scaleToWidth(100);
//  canvas.add(img2);
//  img2.sendToBack();
// });


var arts = new fabric.IText(
  "🎨", {
  fontFamily: 'Arial Narrow',
  fill: '#FFFFFF',
  fontSize: h4,
  textAlign: 'left',
  left: padding,
  top: (pageHeight - padding),
  originX: 'left',
  originY: 'bottom',
  scaleX: scale,
  scaleY: scale
});


//bring schedule to front
canvas.bringToFront(schedule)


// customise it baby
canvas.selectionColor = 'rgba(238, 238, 255, 0.25)';
canvas.selectionBorderColor = '#4CBDCC';
canvas.objectCaching = false;


//arts club
// canvas.isDrawingMode = true;
var artsCanvas = new fabric.Canvas('arts-club');
var artsClubContainer = document.getElementById('arts-club-container');
var inClub = false;
artsCanvas.backgroundColor="white";
artsCanvas.setHeight(artsClubContainer.offsetHeight);
artsCanvas.setWidth(artsClubContainer.offsetWidth);
artsCanvas.renderTop();
artsCanvas.renderAll();


var join = document.getElementById('join-arts-club');
join.addEventListener('click', isItArtsClub);

artsCanvas.freeDrawingBrush.color = '#4CBDCC';
artsCanvas.freeDrawingCursor = 'url(/images/paintbrush.png) 3 25, crosshair';
artsCanvas.isDrawingMode = true;


function isItArtsClub(){
  if (inClub == false) {
    join.innerHTML = 'leave the arts club'
    inClub = true;
  } else {
    join.innerHTML = 'join the arts club'
    inClub = false;
  }
  artsClubContainer.classList.toggle('show');
}

document.getElementById('download').addEventListener('click', download);

function download(){
  const dataURL = artsCanvas.toDataURL({
     width: artsCanvas.width,
     height: artsCanvas.height,
     left: 0,
     top: 0,
     format: 'png',
   });
  const link = document.createElement('a');
  link.download = 'art.png';
  link.href = dataURL;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

document.getElementById('clear').addEventListener('click', function(){
  artsCanvas.clear();
  artsCanvas.backgroundColor="white";
  artsCanvas.renderAll();
});



// full width and height canvas
window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {

  if (window.innerWidth > 1500) {
    h1 = 60;
    h2 = 40;
    h3 = 30;
    h4 = 25;
    padding = 100;
  }

  canvas.setHeight(window.innerHeight);
  canvas.setWidth(window.innerWidth);
  canvas.requestRenderAll();


//   const ratio = canvas.getWidth() / canvas.getHeight();
//   const containerWidth   = window.innerWidth;
//   const containerHeight  = window.innerHeight;

//   const scale = containerWidth / canvas.getWidth();
//   const zoom  = canvas.getZoom() * scale;
//   canvas.setDimensions({width: containerWidth, height: containerWidth / ratio});
//   canvas.setViewportTransform([zoom, 0, 0, zoom, 0, 0]);

  console.log('resizing');

  //if width is greater than


}

// resize on init
resizeCanvas();
