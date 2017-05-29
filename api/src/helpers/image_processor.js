const ExifImage = require('exif').ExifImage;
const Path = require('path');
const Jimp = require("jimp");


module.exports = function () {
  // console.log("processor");
  var image = Path.join(__dirname, '../tmp/image_no_gps.jpg');

  try {
      new ExifImage({ image : image }, function (error, exifData) {
          if (error){
              console.log('Error: '+error.message);
          }else
              console.log(exifData.gps); // Do something with your data!
      });
  } catch (error) {
      console.log('Error: ' + error.message);
  }

  Jimp.read(image, function (err, pImage) {
      if (err) throw err;
      pImage.resize(Jimp.AUTO, 256)      // resize 
          .quality(60)                 // set JPEG quality 
          .write("./images/thumb.jpg");        // save 
  });

  Jimp.read(image, function (err, pImage) {
      if (err) throw err;
      pImage.resize(Jimp.AUTO, 800)      // resize 
          .quality(60)                 // set JPEG quality 
          .write("./images/normal.jpg"); 
  });
}