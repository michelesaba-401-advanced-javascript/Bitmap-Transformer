
module.exports = Bitmap;

function Bitmap(filePath) {
  this.file = filePath;
}

/**
 * Parser -- accepts a buffer and will parse through it, according to the specification, creating object properties for each segment of the file
 * @param buffer
 */
Bitmap.prototype.parse = function(buffer) {
  this.buffer = buffer;
  console.log(buffer);
  this.type = buffer.toString("utf-8", 0, 2);
  console.log(this.type);
  this.size = buffer.readInt32LE(2);
  console.log(this.size);
  this.pixels = buffer.readInt32LE(28);
  console.log(this.pixels);
  this.width = buffer.readInt32LE(18);
  this.colors = buffer.readInt16LE(50);
  // console.log(this.colors);
  this.offset = buffer.readInt32LE(0xa);
  console.log(this.offset);
  this.colorBuffer = buffer.slice(54, this.offset);
  console.log(this.colorBuffer);
};

Bitmap.prototype.transform = function(operation) {
  transforms[operation](this);
  console.log(operation);
  this.newFile = this.file.replace(/\.bmp/, `.${operation}.bmp`);
};
