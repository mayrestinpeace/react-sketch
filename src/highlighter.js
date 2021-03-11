
import FabricCanvasTool from './fabrictool'
import { hexToRgbA, colorNameToHex } from './utils';

class Highlighter extends FabricCanvasTool {

  configureCanvas(props) {
    this._canvas.isDrawingMode = true;
    this._canvas.freeDrawingBrush.width = props.lineWidth;
    this._canvas.freeDrawingBrush.color = props.lineColor.indexOf('#') > -1 ? hexToRgbA(props.lineColor, props.opacity) : hexToRgbA(colorNameToHex(props.lineColor), props.opacity);
  }
}

export default Highlighter;