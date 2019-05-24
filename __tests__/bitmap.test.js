"use strict";

const fs = require("fs");
const util = require("util");
const fsReadFile = util.promisify(fs.readFile);

const Bitmap = require("../lib/bitmap");

const bmpPath = `${__dirname}/../assets/michele.bmp`;

describe("Bitmap Module", () => {
  it("can parse a file!", async () => {
    const buffer = await fsReadFile(bmpPath);
    expect(buffer).toBeDefined();

    let bitmap = new Bitmap(bmpPath);

    bitmap.parse(buffer);

    expect(bitmap.buffer).toBe(buffer);
    expect(bitmap.type).toBe("BM");
    expect(bitmap.size).toBe(2780604);
    expect(bitmap.pixels).toBe(16);
    expect(bitmap.width).toBe(1237);
    expect(bitmap.offset).toBe(54);
  });
});
