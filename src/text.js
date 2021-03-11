
import FabricCanvasTool from './fabrictool'
import Tool from './tools'
const fabric = require('fabric').fabric;

class Text extends FabricCanvasTool {


  configureCanvas(props) {
    let canvas = this._canvas;
    canvas.isDrawingMode = canvas.selection = false;
    canvas.forEachObject((o) => o.selectable = o.evented = false);
    this._setTool = props.setTool;
    this._fontSize = props.fontSize;
    this._color = props.lineColor;
  }

  doMouseDown(o) {
    let options = {};
    let canvas = this._canvas;
    if (!canvas.selection) {
       var pointer = canvas.getPointer(o.e);
      let iText = new fabric.IText("Add text here", options);
      let opts = {
        left: pointer.x,
        top: pointer.y,
      };
      Object.assign(options, opts);
      iText.set({
        'left': options.left,
        'top': options.top,
        'fontSize': this._fontSize,
        'fill': this._color
      });

      canvas.add(iText);
      this._setTool(Tool.Select)
    }
  }
}

export default Text;