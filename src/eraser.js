
import FabricCanvasTool from './fabrictool'
const fabric = require('fabric').fabric;

class Eraser extends FabricCanvasTool {

 configureCanvas(props) {
    let canvas = this._canvas;
    canvas.isDrawingMode = canvas.selection = false;
    canvas.forEachObject((o) => o.selectable = o.evented = false);
    this._width = props.lineWidth;
    this._color = props.lineColor;
  }

  doMouseDown(o) {
    this.isDown = true;
    let canvas = this._canvas;
    var pointer = canvas.getPointer(o.e);
    this.lastX = pointer.x;
    this.lastY = pointer.y;
    // var points = [pointer.x, pointer.y, pointer.x, pointer.y];
    // this.line = new fabric.Line(points, {
    //   strokeWidth: this._width,
    //   fill: this._color,
    //   stroke: this._color,
    //   originX: 'center',
    //   originY: 'center',
    //   selectable: false,
    //   evented: false
    // });
    // canvas.add(this.line);
  }

  doMouseMove(o) {

    if (!this.isDown) return;
    let canvas = this._canvas;
    var pointer = canvas.getPointer(o.e);
    let ctx=canvas.getContext("2d");
    ctx.beginPath()
    ctx.globalCompositeOperation="destination-out";
    ctx.arc(this.lastX,this.lastY,8,0,Math.PI*2,false);
    ctx.fill();
    this.lastX = pointer.x;
    this.lastY = pointer.y;
  }

  doMouseUp(o) {
    this.isDown = false;
  }

  doMouseOut(o) {
    this.isDown = false;
  }
}

export default Eraser;