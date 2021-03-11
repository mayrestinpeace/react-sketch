
import FabricCanvasTool from './fabrictool'
const fabric = require('fabric').fabric;

class Eraser extends FabricCanvasTool {

 configureCanvas(props) {
    let canvas = this._canvas;
    canvas.isDrawingMode = canvas.selection = false;
    canvas.forEachObject((o) => o.selectable = o.evented = false);
    this._width = props.lineWidth;
   this._color = props.lineColor;
   
    // this._canvas.isDrawingMode = true;

  //  this._canvas.freeDrawingBrush.width = props.lineWidth;
  //  this._canvas.freeDrawingBrush.color = 'transparent';
  //  this._canvas.freeDrawingBrush.globalCompositeOperation = "destination-out";
  }

  doMouseDown(o) {
    this.isDown = true;
    let canvas = this._canvas;
    var pointer = canvas.getPointer(o.e);
    this.lastX = pointer.x;
    this.lastY = pointer.y;
    let circle = new fabric.Circle({ radius: this._width, fill: '#f55', top: pointer.y, left: pointer.x,globalCompositeOperation:"destination-out",selectable: false,
      evented: false, })
    canvas.add(circle)
    canvas.renderAll()

  }

  doMouseMove(o) {

    if (!this.isDown) return;
    let canvas = this._canvas;
    var pointer = canvas.getPointer(o.e);
    let circle = new fabric.Circle({ radius: this._width, fill: '#f55', top: pointer.y, left: pointer.x,globalCompositeOperation:"destination-out",selectable: false,
      evented: false, })
    canvas.add(circle)
    canvas.renderAll()
  }

  doMouseUp(o) {
    this.isDown = false;
  }

  doMouseOut(o) {
    this.isDown = false;
  }
}

export default Eraser;