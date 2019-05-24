
let transform = (module.exports = {});


transform.transformGreyscale = (bmp) => {

    console.log('Transforming bitmap into greyscale', bmp);
  
    //TODO: Figure out a way to validate that the bmp instance is actually valid before trying to transform it
  
    //TODO: alter bmp to make the image greyscale ...
  
  };
  
transform.doTheInversion = (bmp) => {
    bmp = {};
  }
  
  /**
   * A dictionary of transformations
   * Each property represents a transformation that someone could enter on the command line and then a function that would be called on the bitmap to do this job
   */
  const transforms = {
    greyscale: transformGreyscale,
    invert: doTheInversion
  };