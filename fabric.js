
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
var padding = 50;

var purple = '#5E509C';
var lightPurple = '#eef';

if (window.innerWidth > 1500) {
    h1 = 60;
    h2 = 40;
    h3 = 30;
    h4 = 25;
    padding = 100;
}

// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas('c');

var skybound = new fabric.IText("sky-bound sounds from the north", {
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
  "✳︎ schedule 23.10.20 ✳︎\n1400 — discolour(ed)\n1500 — downtown arts club\n1600 — fair play crew\n1800 — gloam\n1900 — THETAMORPH\n2100 — frequency bias\n2200 — bacteriocene\n2240 — xASHLAND", {
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

canvas.add(schedule);

var circle = new fabric.Circle({
  radius: 100,
  fill: '#eef',
  scaleY: 0.5,
  originX: 'center',
  originY: 'center',
});

var text = new fabric.IText('aerial community radio', {
  fontSize: h2,
  fontFamily: 'Arial Narrow',
  originX: 'center',
  originY: 'center',
  fill: '#5E509C'
});



var group = new fabric.Group([ circle, text ], {
  left: padding,
  top: padding,
  angle: -10,
  scaleX: scale,
  scaleY: scale
});

canvas.add(group);


var community = new fabric.IText('community \nradio \n is \nsick\n get involved →', {
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





fabric.loadSVGFromURL('https://cdn.glitch.com/16fc26e9-4cbb-49e5-8a04-d70255a35c7e%2Faerial-mouse.svg?v=1602946338045',function(objects, options){
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

fabric.loadSVGFromURL('https://cdn.glitch.com/16fc26e9-4cbb-49e5-8a04-d70255a35c7e%2Faerial-comp.svg?v=1602946644776',function(objects, options){
  var svgData = fabric.util.groupSVGElements(objects, options);
  svgData.top = padding;
  svgData.left = (pageWidth - (150 + padding));
  canvas.add(svgData);
  svgData.originX = 'right';
  svgData.originY = 'top';
  svgData.scaleToHeight(100);
});

fabric.loadSVGFromURL('https://cdn.glitch.com/16fc26e9-4cbb-49e5-8a04-d70255a35c7e%2Flogo.svg?v=1603141734880',function(objects, options){
  var svgData = fabric.util.groupSVGElements(objects, options);
  svgData.top = 300;
  svgData.left = (pageWidth - 300);
  canvas.add(svgData);
  svgData.originX = 'right';
  svgData.originY = 'top';
  svgData.scaleToHeight(50);
});

fabric.loadSVGFromURL('https://cdn.glitch.com/16fc26e9-4cbb-49e5-8a04-d70255a35c7e%2Flogo.svg?v=1603141734880',function(objects, options){
  var svgData = fabric.util.groupSVGElements(objects, options);
  svgData.top = (pageHeight - 100);
  svgData.left = (pageWidth - 150);
  canvas.add(svgData);
  svgData.originX = 'right';
  svgData.originY = 'top';
  svgData.scaleToHeight(50);
});

fabric.loadSVGFromURL('https://cdn.glitch.com/16fc26e9-4cbb-49e5-8a04-d70255a35c7e%2Flogo.svg?v=1603141734880',function(objects, options){
  var svgData = fabric.util.groupSVGElements(objects, options);
  svgData.top = (centerY + 25);
  svgData.left = 450;
  canvas.add(svgData);
  svgData.originX = 'right';
  svgData.originY = 'top';
  svgData.scaleToHeight(50);
});


fabric.Image.fromURL('https://cdn.glitch.com/16fc26e9-4cbb-49e5-8a04-d70255a35c7e%2Faerial-image-1.jpg?v=1602951319736', function(myImg) {
 //i create an extra var for to change some image properties
 var img2 = myImg.set({
   left: (padding + 100),
   top: (centerY - 50)
 });
 img2.scaleToWidth(200);
 canvas.add(img2);
 img2.sendToBack();
});

fabric.Image.fromURL('https://cdn.glitch.com/16fc26e9-4cbb-49e5-8a04-d70255a35c7e%2Faerial-image-2.jpg?v=1602951322530', function(myImg) {
 //i create an extra var for to change some image properties
 var img1 = myImg.set({
   left: (padding + 150),
   top: (centerY - 150)
 });
 img1.scaleToWidth(200);
 canvas.add(img1);
 img1.sendToBack();
});

fabric.Image.fromURL('https://cdn.glitch.com/16fc26e9-4cbb-49e5-8a04-d70255a35c7e%2Fthe-aerial.jpg?v=1603138803051', function(myImg) {
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





// customise it baby
canvas.selectionColor = 'rgba(238, 238, 255, 0.25)';
canvas.selectionBorderColor = '#5E509C';
canvas.objectCaching = false;





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