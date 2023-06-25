export default class ArrayBufferConverter {
  constructor(data) {
    this.data = data;
    this.buffer = new ArrayBuffer(data.length * 2);
    this.bufferView = new Uint16Array(this.buffer);
  }

  load() {
    for (let i = 0; i < this.data.length; i += 1) {
      this.bufferView[i] = this.data.charCodeAt(i);
    }
    return this.buffer;
  }

  toString() {
    let str = '';
    for (let i = 0; i < this.bufferView.length; i += 1) {
      str += String.fromCharCode(this.bufferView[i]);
    }
    return str;
  }
}

/*
function getBuffer() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    console.log(data.length);
    return (input => {
      const buffer = new ArrayBuffer(data.length * 2);
      const bufferView = new Uint16Array(buffer);
      for (let i = 0; i < input.length; i += 1) {
        bufferView[i] = input.charCodeAt(i);
      }
      return buffer;
    })(data);
}
*/
