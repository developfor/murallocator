// from an input element
var input = document.getElementById("image-file") //.files[0];
var filesToUpload = input.files;
var file = filesToUpload[0];
console.log(file)

var img = document.createElement("img");
var reader = new FileReader();  
reader.onload = function(e) {img.src = e.target.result}
reader.readAsDataURL(file);

var canvas = document.createElement('canvas');
var ctx = canvas.getContext("2d");
ctx.drawImage(img, 0, 0);

var MAX_WIDTH = 800;
var MAX_HEIGHT = 600;
var width = img.width;
var height = img.height;

if (width > height) {
  if (width > MAX_WIDTH) {
    height *= MAX_WIDTH / width;
    width = MAX_WIDTH;
  }
} else {
  if (height > MAX_HEIGHT) {
    width *= MAX_HEIGHT / height;
    height = MAX_HEIGHT;
  }
}
canvas.width = width;
canvas.height = height;
var ctx = canvas.getContext("2d");
ctx.drawImage(img, 0, 0, width, height);

var dataurl = canvas.toDataURL("image/png");
console.log(canvas)
//Post dataurl to the server with AJAX