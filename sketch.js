// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Webcam Image Classification using a pre-trained customized model and p5.js
This example uses p5 preload function to create the classifier
=== */

// Classifier Variable
let classifier;
let bg;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/PuKD1JW5H/';

// Video
let video;
let flippedVideo;
// To store the classification
let label = "";

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
   soundFormats('mp3');
   A = loadSound('A');
    D = loadSound('D');
    G = loadSound('G');
    I = loadSound('I');
    V = loadSound('V');
    hey = loadSound('hey');
    rockon = loadSound('rockon');
    thumbsup = loadSound('thumbsup');

}

function setup() {
  bg = loadImage('cool.jpg');
  createCanvas(1920, 1080);
  button = createButton('exit');
  button.position(15, 975);
  button.size(150,200)
  
  
     button = createButton('signs');
  button.position(15, 400);
  button.size(400,150)
  button.mousePressed(A);
  
   button = createButton('beats');
  button.position(15, 600);
  button.size(400,150)
 
   button = createButton('recordings');
  button.position(15, 800);
  button.size(400,150)
  // Create the video
  video = createCapture(VIDEO);
  video.size(1411, 1080);
  video.hide();

  flippedVideo = ml5.flipImage(video)
  // Start classifying
  classifyVideo();
}

function draw() {
  background(bg);
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
  stroke(0);
  noFill();
  // Draw the video
  image(flippedVideo, 510, 10);
   if(label == 'A'){
    A.play();

  } else if (label == 'D'){
    D.play();
    
  } else if(label == 'G'){
    G.play();
    
  } else if(label == 'I'){
    I.play()

    } else if(label == 'V'){
    V.play();

  } else if(label == 'hey'){
    hey.play();

  } else if(label == 'rockon'){
    rockon.play();

  } else if(label == 'thumbsup'){
    thumbsup.play();
 
  }

  // Draw the label
  //fill(255);
 // textSize(16);
 // textAlign(CENTER);
 // text(label, width / 2, height - 4);
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  // Classifiy again!
  classifyVideo();

}
