!function(){"use strict";var t="undefined"!=typeof window?window:global;if("function"!=typeof t.require){var e={},i={},r=function(t,e){return{}.hasOwnProperty.call(t,e)},s=function(t,e){var i,r,s=[];i=/^\.\.?(\/|$)/.test(e)?[t,e].join("/").split("/"):e.split("/");for(var o=0,n=i.length;n>o;o++)r=i[o],".."===r?s.pop():"."!==r&&""!==r&&s.push(r);return s.join("/")},o=function(t){return t.split("/").slice(0,-1).join("/")},n=function(e){return function(i){var r=o(e),n=s(r,i);return t.require(n,e)}},c=function(t,e){var r={id:t,exports:{}};return i[t]=r,e(r.exports,n(t),r),r.exports},h=function(t,o){var n=s(t,".");if(null==o&&(o="/"),r(i,n))return i[n].exports;if(r(e,n))return c(n,e[n]);var h=s(n,"./index");if(r(i,h))return i[h].exports;if(r(e,h))return c(h,e[h]);throw new Error('Cannot find module "'+t+'" from "'+o+'"')},u=function(t,i){if("object"==typeof t)for(var s in t)r(t,s)&&(e[s]=t[s]);else e[t]=i},l=function(){var t=[];for(var i in e)r(e,i)&&t.push(i);return t};t.require=h,t.require.define=u,t.require.register=u,t.require.list=l,t.require.brunch=!0}}(),require.register("scripts/circle-tool",function(t,e,i){function r(t,e,i){o.call(this,t,e,i);var r=this;this.addEventListener("mouse:down",function(t){r.mouseDown(t)}),this.addEventListener("mouse:move",function(t){r.mouseMove(t)}),this.addEventListener("mouse:up",function(t){r.mouseUp(t)})}{var s=e("scripts/inherit"),o=e("scripts/shape-tool");e("scripts/util")}s(r,o),r.prototype.mouseDown=function(t){console.log("Circle down"),r.super.mouseDown.call(this,t);var e=t.e.offsetX,i=t.e.offsetY;this.curr=new fabric.Circle({top:i,left:e,radius:.1,lockUniScaling:!0,selectable:!1}),this.canvas.add(this.curr)},r.prototype.mouseMove=function(t){if(r.super.mouseMove.call(this,t),this.down!==!1){var e=t.e.offsetX,i=t.e.offsetY,s=this.curr.left,o=this.curr.top,n=e-s,c=i-o;0>n?(this.curr.originX="right",n=-n):this.curr.originX="left",0>c?(this.curr.originY="bottom",c=-c):this.curr.originY="top";var h=(c>n?n:c)/2;this.curr.set("radius",h),this.curr.set("width",2*h),this.curr.set("height",2*h),this.canvas.renderAll(!1)}},r.prototype.mouseUp=function(t){console.log("Circle up"),this.curr.radius<10?(this.canvas.remove(this.curr),this.moved=!1):("right"===this.curr.originX&&(this.curr.left=this.curr.left-this.curr.width-this.curr.strokeWidth,this.curr.originX="left"),"bottom"===this.curr.originY&&(this.curr.top=this.curr.top-this.curr.height-this.curr.strokeWidth,this.curr.originY="top")),this.curr.setCoords(),this.canvas.renderAll(!1),r.super.mouseUp.call(this,t),this.actionComplete(this.curr),this.curr=void 0},i.exports=r}),require.register("scripts/drawing-tool",function(t,e,i){function r(t){this.canvas=new fabric.Canvas(t),this.canvas.perPixelTargetFind=!0,fabric.Object.prototype.transparentCorners=!1,fabric.Object.prototype.selectable=!1,fabric.Object.prototype.minWidth=10,fabric.Object.prototype.minHeight=10,fabric.Object.prototype.strokeWidth=10,fabric.Object.prototype.stroke="rgba(100,200,200,0.75)",fabric.Object.prototype.fill="",fabric.Group.prototype.selectable=!0,this.tools={};var e=(new s("Selection Tool","select",this),new o("Line Tool","line",this),new n("Rectangle Tool","rect",this),new c("Ellipse Tool","ellipse",this),new h("Square Tool","square",this),new u("Circle Tool","circle",this),this);$(".btn").click(function(){var t=$(this).find("input").val();e._toolButtonClicked(t)}),l(this.canvas),this.chooseTool("select")}var s=(e("scripts/tool"),e("scripts/shape-tool"),e("scripts/select-tool")),o=e("scripts/line-tool"),n=e("scripts/rect-tool"),c=e("scripts/ellipse-tool"),h=e("scripts/square-tool"),u=e("scripts/circle-tool"),l=(e("scripts/util"),e("scripts/rescale-2-resize"));r.prototype.chooseTool=function(t){$("#"+t).click()},r.prototype.changeOutOfTool=function(){this.chooseTool("select")},r.prototype.check=function(){for(var t=this.canvas.getObjects(),e=0;e<t.length;e++)console.log(t[e])},r.prototype._toolButtonClicked=function(t){if(void 0!==this.currentTool&&this.currentTool.selector===t)return console.log(this.currentTool.name+" is already the current tool"),void this.currentTool.activateAgain();var e=this.tools[t];return void 0===e?void console.warn('Warning! Could not find tool with selector "'+t+'"\nExiting tool chooser.'):(void 0!==this.currentTool&&this.currentTool.setActive(!1),e.setActive(!0),this.currentTool=e,void this.canvas.renderAll(!1))},i.exports=r}),require.register("scripts/ellipse-tool",function(t,e,i){function r(t,e,i){o.call(this,t,e,i);var r=this;this.addEventListener("mouse:down",function(t){r.mouseDown(t)}),this.addEventListener("mouse:move",function(t){r.mouseMove(t)}),this.addEventListener("mouse:up",function(t){r.mouseUp(t)})}var s=e("scripts/inherit"),o=e("scripts/shape-tool"),n=e("scripts/util");s(r,o),r.prototype.mouseDown=function(t){console.log("ellipse down"),r.super.mouseDown.call(this,t);var e=t.e.offsetX,i=t.e.offsetY;this.curr=new fabric.Ellipse({top:i,left:e,rx:.1,ry:.1,selectable:!1}),this.canvas.add(this.curr)},r.prototype.mouseMove=function(t){if(r.super.mouseMove.call(this,t),this.down!==!1){var e=t.e.offsetX,i=t.e.offsetY,s=this.curr.left,o=this.curr.top,n=e-s,c=i-o;0>n?(this.curr.originX="right",n=-n):this.curr.originX="left",0>c?(this.curr.originY="bottom",c=-c):this.curr.originY="top",this.curr.set("rx",n/2),this.curr.set("ry",c/2),this.curr.set("width",n),this.curr.set("height",c),this.canvas.renderAll(!1)}},r.prototype.mouseUp=function(t){console.log("ellipse up");var e=this.curr.width,i=this.curr.height;n.dist(e,i)<10?(this.canvas.remove(this.curr),this.moved=!1):("right"===this.curr.originX&&(this.curr.left=this.curr.left-this.curr.width-this.curr.strokeWidth,this.curr.originX="left"),"bottom"===this.curr.originY&&(this.curr.top=this.curr.top-this.curr.height-this.curr.strokeWidth,this.curr.originY="top")),this.curr.setCoords(),this.canvas.renderAll(!1),r.super.mouseUp.call(this,t),this.actionComplete(this.curr),this.curr=void 0},i.exports=r}),require.register("scripts/inherit",function(t,e,i){i.exports=function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.super=e.prototype}}),require.register("scripts/line-tool",function(t,e,i){function r(t,e,i){o.call(this,t,e,i);var r=this;this.addEventListener("mouse:down",function(t){r.mouseDown(t)}),this.addEventListener("mouse:move",function(t){r.mouseMove(t)}),this.addEventListener("mouse:up",function(t){r.mouseUp(t)})}var s=e("scripts/inherit"),o=e("scripts/shape-tool"),n=e("scripts/util");s(r,o),r.prototype.mouseDown=function(t){console.log("down"),r.super.mouseDown.call(this,t);var e=t.e.offsetX,i=t.e.offsetY;this.curr=new fabric.Line([e,i,e,i],{selectable:!1}),this.canvas.add(this.curr)},r.prototype.mouseMove=function(t){if(r.super.mouseMove.call(this,t),this.down!==!1){var e=t.e.offsetX,i=t.e.offsetY;this.curr.set("x2",e),this.curr.set("y2",i),this.canvas.renderAll(!1)}},r.prototype.mouseUp=function(t){console.log("line up"),r.super.mouseUp.call(this,t);var e=this.curr.get("x1"),i=this.curr.get("y1"),s=this.curr.get("x2"),o=this.curr.get("y2");n.dist(s-e,o-i)>10?(this.curr.setCoords(),console.log("new line constructed")):(this.canvas.remove(this.curr),this.exit()),this.actionComplete(this.curr),this.curr=void 0},i.exports=r}),require.register("scripts/rect-tool",function(t,e,i){function r(t,e,i){o.call(this,t,e,i);var r=this;this.addEventListener("mouse:down",function(t){r.mouseDown(t)}),this.addEventListener("mouse:move",function(t){r.mouseMove(t)}),this.addEventListener("mouse:up",function(t){r.mouseUp(t)})}var s=e("scripts/inherit"),o=e("scripts/shape-tool"),n=e("scripts/util");s(r,o),r.prototype.mouseDown=function(t){console.log("down"),r.super.mouseDown.call(this,t);var e=t.e.offsetX,i=t.e.offsetY;this.curr=new fabric.Rect({top:i,left:e,width:0,height:0}),this.canvas.add(this.curr)},r.prototype.mouseMove=function(t){if(r.super.mouseMove.call(this,t),this.down!==!1){var e=t.e.offsetX,i=t.e.offsetY,s=this.curr.left,o=this.curr.top;this.curr.width=e-s,this.curr.height=i-o,this.canvas.renderAll(!1)}},r.prototype.mouseUp=function(t){console.log("rect up"),r.super.mouseUp.call(this,t),n.dist(this.curr.width,this.curr.height)>3?(this.curr.width<0&&(this.curr.left=this.curr.left+this.curr.width,this.curr.width=-this.curr.width),this.curr.height<0&&(this.curr.top=this.curr.top+this.curr.height,this.curr.height=-this.curr.height),this.curr.setCoords()):this.exit(),this.canvas.renderAll(!1),this.actionComplete(this.curr),this.curr=void 0},i.exports=r}),require.register("scripts/rescale-2-resize",function(t,e,i){function r(t){t.width=t.width*t.scaleX+t.strokeWidth*(t.scaleX-1),t.height=t.height*t.scaleY+t.strokeWidth*(t.scaleY-1)}function s(t){r(t),1!==t.scaleX?t.height=t.width:t.width=t.height}var o={rect:function(t){r(t)},ellipse:function(t){r(t),t.rx=t.width/2,t.ry=t.height/2},circle:function(t){s(t),t.radius=t.width/2},square:function(t){s(t)}};i.exports=function(t){t.on("object:scaling",function(t){var e=t.target,i=e.dtType||e.type;void 0!==o[i]&&(o[i](e),e.scaleX=1,e.scaleY=1)})}}),require.register("scripts/select-tool",function(t,e,i){function r(t,e,i){o.call(this,t,e,i)}var s=e("scripts/inherit"),o=e("scripts/tool");s(r,o),r.prototype.activate=function(){this.setSelectable(!0)},r.prototype.deactivate=function(){this.setSelectable(!1),this.canvas.deactivateAll()},r.prototype.setSelectable=function(t){this.canvas.selection=t;for(var e=this.canvas.getObjects(),i=e.length-1;i>=0;i--)e[i].selectable=t},i.exports=r}),require.register("scripts/shape-tool",function(t,e,i){function r(t,e,i){o.call(this,t,e,i),this.moved=!1,this.down=!1,this._firstAction=!1}var s=e("scripts/inherit"),o=e("scripts/tool");s(r,o),r.prototype.activate=function(){r.super.activate.call(this),this.moved=!1,this.down=!1,this._setFirstActionMode()},r.prototype.activateAgain=function(){this._setFirstActionMode()},r.prototype.exit=function(){console.info("changing out of "+this.name),this.down=!1,this.moved=!1,this.master.changeOutOfTool(this.selector)},r.prototype.mouseDown=function(t){this.down=!0,this.moved=!1,this._firstAction===!1&&void 0!==t.target&&this.exit()},r.prototype.mouseMove=function(){this.moved===!1&&this.down===!0&&(this.moved=!0)},r.prototype.mouseUp=function(){this.down=!1,this.moved===!1&&this.exit()},r.prototype.actionComplete=function(t){this._firstAction&&(this._firstAction=!1,this._setAllObjectsSelectable(!0)),t&&(t.selectable=!0)},r.prototype._setFirstActionMode=function(){this._firstAction=!0,this._setAllObjectsSelectable(!1)},r.prototype._setAllObjectsSelectable=function(t){for(var e=this.canvas.getObjects(),i=e.length-1;i>=0;i--)e[i].selectable=t},i.exports=r}),require.register("scripts/square-tool",function(t,e,i){function r(t,e,i){o.call(this,t,e,i);var r=this;this.addEventListener("mouse:down",function(t){r.mouseDown(t)}),this.addEventListener("mouse:move",function(t){r.mouseMove(t)}),this.addEventListener("mouse:up",function(t){r.mouseUp(t)})}var s=e("scripts/inherit"),o=e("scripts/shape-tool"),n=e("scripts/util");s(r,o),r.prototype.mouseDown=function(t){console.log("down"),r.super.mouseDown.call(this,t);var e=t.e.offsetX,i=t.e.offsetY;this.curr=new fabric.Rect({top:i,left:e,width:0,height:0,lockUniScaling:!0}),this.canvas.add(this.curr)},r.prototype.mouseMove=function(t){if(r.super.mouseMove.call(this,t),this.down!==!1){var e=t.e.offsetX-this.curr.left,i=t.e.offsetY-this.curr.top,s=Math.abs(Math.abs(e)>Math.abs(i)?e:i);this.curr.width=s,0>e&&(this.curr.width*=-1),this.curr.height=s,0>i&&(this.curr.height*=-1),this.canvas.renderAll(!1)}},r.prototype.mouseUp=function(t){console.log("rect up"),r.super.mouseUp.call(this,t),n.dist(this.curr.width,this.curr.height)>3?(this.curr.width<0&&(this.curr.left=this.curr.left+this.curr.width,this.curr.width=-this.curr.width),this.curr.height<0&&(this.curr.top=this.curr.top+this.curr.height,this.curr.height=-this.curr.height),this.curr.setCoords()):this.exit(),this.canvas.renderAll(!1),this.actionComplete(this.curr),this.curr=void 0},i.exports=r}),require.register("scripts/tool",function(t,e,i){function r(t,e,i){console.info(t),this.name=t||"Tool",this.selector=e||"",this.master=i,this.canvas=i.canvas,this.active=!1,this.master.tools[e]=this,this._listeners=[]}r.prototype.setActive=function(t){return this.active===t?t:(this.active=t,t===!0?(console.log("Activating "+this.name),this.activate()):(console.log("Deactivating "+this.name),this.deactivate()),t)},r.prototype.activate=function(){for(var t=0;t<this._listeners.length;t++){var e=this._listeners[t].trigger,i=this._listeners[t].action;this.canvas.on(e,i)}},r.prototype.activateAgain=function(){},r.prototype.deactivate=function(){for(var t=0;t<this._listeners.length;t++){{var e=this._listeners[t].trigger;this._listeners[t].action}this.canvas.off(e)}},r.prototype.addEventListener=function(t,e){this._listeners.push({trigger:t,action:e})},r.prototype.removeEventListener=function(t){for(var e=0;e<this._listeners.length;e++)if(t==this._listeners[e].trigger)return this._listeners.splice(e,1)},i.exports=r}),require.register("scripts/util",function(t,e,i){i.exports={dist:function(t,e){var i=Math.pow(t,2),r=Math.pow(e,2);return Math.sqrt(i+r)}}}),window.DrawingTool=require("scripts/drawing-tool");