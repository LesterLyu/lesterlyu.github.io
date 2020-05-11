const Clipper = require('image-clipper');
const canvas = require('canvas');

Clipper.configure('canvas', canvas);

const source = './Nintendo Switch - Animal Crossing New Horizons - DIY Recipe Icons.png';
const dim = [6656, 5888];

const clipper = Clipper({quality: 100});
clipper.image(source, () => {});

// clipper.crop(0, 0, 256, 256);
// clipper.toFile('../public/large/' + 1 + '.png', () => {});
let cnt = 0;
for (let row = 0; row < dim[1] / 256; row++) {
  for (let col = 0; col < dim[0] / 256; col++) {
    console.log(row, col)
    clipper.crop(col * 256, row * 256, 256, 256);
    clipper.toFile('../public/large/' + cnt + '.png', () => {});
    clipper.reset();
    cnt++;
  }
}
