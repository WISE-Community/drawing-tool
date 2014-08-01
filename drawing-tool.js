!function(){"use strict";var t="undefined"!=typeof window?window:global;if("function"!=typeof t.require){var e={},s={},i=function(t,e){return{}.hasOwnProperty.call(t,e)},o=function(t,e){var s,i,o=[];s=/^\.\.?(\/|$)/.test(e)?[t,e].join("/").split("/"):e.split("/");for(var r=0,n=s.length;n>r;r++)i=s[r],".."===i?o.pop():"."!==i&&""!==i&&o.push(i);return o.join("/")},r=function(t){return t.split("/").slice(0,-1).join("/")},n=function(e){return function(s){var i=r(e),n=o(i,s);return t.require(n,e)}},a=function(t,e){var i={id:t,exports:{}};return s[t]=i,e(i.exports,n(t),i),i.exports},c=function(t,r){var n=o(t,".");if(null==r&&(r="/"),i(s,n))return s[n].exports;if(i(e,n))return a(n,e[n]);var c=o(n,"./index");if(i(s,c))return s[c].exports;if(i(e,c))return a(c,e[c]);throw new Error('Cannot find module "'+t+'" from "'+r+'"')},h=function(t,s){if("object"==typeof t)for(var o in t)i(t,o)&&(e[o]=t[o]);else e[t]=s},l=function(){var t=[];for(var s in e)i(e,s)&&t.push(s);return t};t.require=c,t.require.define=h,t.require.register=h,t.require.list=l,t.require.brunch=!0}}(),require.register("scripts/drawing-tool",function(t,e,s){function i(t,e,s){this.selector=t,this.options=$.extend(!0,{},a,e),this.state=$.extend(!0,{},c,s),this.tools={},this.ui=new n(this,t,this.options),this._initFabricJS(),this.ui.initTools(),o(this.canvas),r(this.canvas)}var o=(e("scripts/util"),e("scripts/fabric-extensions/rescale-2-resize")),r=e("scripts/fabric-extensions/multi-touch-support"),n=e("scripts/ui"),a={width:700,height:500},c={color:"rgba(100,200,200,.75)",strokeWidth:10,fill:""};i.prototype.clear=function(t){this.canvas.clear(),t&&(this.canvas.setBackgroundImage(null),this._backgroundImage=null),this.canvas.renderAll()},i.prototype.clearSelection=function(){this.canvas.deactivateAllWithDispatch(),this.canvas.renderAll()},i.prototype.save=function(){return this.clearSelection(),JSON.stringify({dt:{width:this.canvas.getWidth(),height:this.canvas.getHeight()},canvas:this.canvas.toJSON()})},i.prototype.load=function(t){if(!t)return void this.clear(!0);var e=JSON.parse(t),s=e.dt;this.canvas.setDimensions({width:s.width,height:s.height});var i=e.canvas,o=i.backgroundImage;if(delete i.backgroundImage,this.canvas.loadFromJSON(i),void 0!==o){var r=o.src;delete o.src,this._setBackgroundImage(r,o)}this.canvas.renderAll()},i.prototype.setStrokeColor=function(t){this.state.color=t},i.prototype.setStrokeWidth=function(t){this.state.strokeWidth=t},i.prototype.setFill=function(t){this.state.fill=t},i.prototype.setBackgroundImage=function(t,e){var s=this;this._setBackgroundImage(t,null,function(){switch(e){case"resizeBackgroundToCanvas":return void s.resizeBackgroundToCanvas();case"resizeCanvasToBackground":return void s.resizeCanvasToBackground()}})},i.prototype.resizeBackgroundToCanvas=function(){this._backgroundImage&&(this._backgroundImage.set({width:this.canvas.width,height:this.canvas.height}),this.canvas.renderAll())},i.prototype.resizeCanvasToBackground=function(){this._backgroundImage&&(this.canvas.setDimensions({width:this._backgroundImage.width,height:this._backgroundImage.height}),this._backgroundImage.set({top:this.canvas.height/2,left:this.canvas.width/2}),this.canvas.renderAll())},i.prototype.calcOffset=function(){this.canvas.calcOffset()},i.prototype.chooseTool=function(t){$(this.selector).find("."+t).click()},i.prototype.changeOutOfTool=function(){this.chooseTool("select")},i.prototype._setBackgroundImage=function(t,e,s){function i(){fabric.util.loadImage(t,o,null,e.crossOrigin)}function o(t){return"anonymous"!==e.crossOrigin&&""!==e.crossOrigin||t?(t=new fabric.Image(t,e),r.canvas.setBackgroundImage(t,r.canvas.renderAll.bind(r.canvas)),r._backgroundImage=t,void("function"==typeof s&&s())):(e=$.extend(!0,{},e),delete e.crossOrigin,console.log("Background could not be loaded due to lack of CORS headers. Trying to load it again without CORS support."),void i())}e=e||{originX:"center",originY:"center",top:this.canvas.height/2,left:this.canvas.width/2,crossOrigin:"anonymous"},i();var r=this},i.prototype._initFabricJS=function(){this.canvas=new fabric.Canvas(this.ui.$canvas[0]),this.canvas.perPixelTargetFind=!fabric.isTouchSupported,this.canvas.setBackgroundColor("#fff")},s.exports=i}),require.register("scripts/fabric-extensions/arrow",function(){!function(t){"use strict";var e=t.fabric||(t.fabric={}),s=e.util.object.extend;return e.Arrow?void e.warn("fabric.Arrow is already defined"):(e.Arrow=e.util.createClass(e.Line,{type:"arrow",doubleArrowhead:!1,_render:function(t){t.beginPath();var e=this.group&&"path-group"===this.group.type;if(e&&!this.transformMatrix){var s=this.getCenterPoint();t.translate(-this.group.width/2+s.x,-this.group.height/2+s.y)}if(!this.strokeDashArray){var i,o=this.x1<=this.x2?-1:1,r=this.y1<=this.y2?-1:1,n=1===this.width?0:o*this.width/2,a=1===this.height?0:r*this.height/2,c=1===this.width?0:-1*o*this.width/2,h=1===this.height?0:-1*r*this.height/2,l=c-n,p=h-a,u=Math.sqrt(l*l+p*p),d=.5*this.strokeWidth,f=Math.min(3*d,u*(this.doubleArrowhead?.21:.35)),v=2*f*l/u,g=2*f*p/u,m=c-v,w=h-g,y=c-1.1*v,b=h-1.1*g;if(this.doubleArrowhead){var _=n+v,k=a+g,x=n+1.1*v,C=a+1.1*g;i=[this._perpCoords(n,a,c,h,_,k,d,1),this._perpCoords(n,a,c,h,x,C,f,1),[n,a],this._perpCoords(n,a,c,h,x,C,f,-1),this._perpCoords(n,a,c,h,_,k,d,-1)]}else i=[this._perpCoords(n,a,c,h,n,a,.5*d,1),this._perpCoords(n,a,c,h,n,a,.5*d,-1)];i.push(this._perpCoords(n,a,c,h,m,w,d,-1),this._perpCoords(n,a,c,h,y,b,f,-1),[c,h],this._perpCoords(n,a,c,h,y,b,f,1),this._perpCoords(n,a,c,h,m,w,d,1)),t.moveTo(i[0][0],i[0][1]),i.forEach(function(e){t.lineTo(e[0],e[1])})}if(this.stroke){var S=t.fillStyle;t.fillStyle=this.stroke,this._renderFill(t),t.fillStyle=S}},_perpCoords:function(t,e,s,i,o,r,n,a){var c=s-t,h=i-e,l=n/Math.sqrt(c*c+h*h);return[o+l*-h*a,r+l*c*a]},toObject:function(t){return s(this.callSuper("toObject",t),{doubleArrowhead:this.get("doubleArrowhead")})}}),e.Arrow.ATTRIBUTE_NAMES=e.SHARED_ATTRIBUTES.concat("x1 y1 x2 y2".split(" ")),e.Arrow.fromElement=function(t,i){var o=e.parseAttributes(t,e.Line.ATTRIBUTE_NAMES),r=[o.x1||0,o.y1||0,o.x2||0,o.y2||0];return new e.Arrow(r,s(o,i))},void(e.Arrow.fromObject=function(t){var s=[t.x1,t.y1,t.x2,t.y2];return new e.Arrow(s,t)}))}(this)}),require.register("scripts/fabric-extensions/line-custom-control-points",function(t,e,s){function i(t){if(!t.lineCustomControlPointsEnabled){var e=null;t.on("object:selected",function(t){var s=t.target;e&&r(e)&&!o(s,e)&&a.call(e),o(s,e)||(e=s,r(s)&&n.call(s))}),t.on("selection:cleared",function(){e&&r(e)&&a.call(e),e=null}),t.lineCustomControlPointsEnabled=!0}}function o(t,e){return e&&e.ctp&&(e.ctp[0]===t||e.ctp[1]===t)}function r(t){for(var e=0;e<g.length;e++)if(t.type===g[e])return!0;return!1}function n(){this.set({hasControls:!1,hasBorders:!1});var t=i.cornerSize;this.ctp=[v(t,this,0),v(t,this,1)],u.call(this),this.on("moving",c),this.on("removed",h),this.canvas.renderAll()}function a(){this.ctp[0].line=null,this.ctp[1].line=null,this.ctp[0].remove(),this.ctp[1].remove(),this.ctp=void 0,this.off("moving"),this.off("removed")}function c(){u.call(this)}function h(){this.ctp&&this.ctp[0].remove()}function l(){var t=this.line;t.set("x"+(this.id+1),this.left),t.set("y"+(this.id+1),this.top),t.setCoords(),t.canvas.renderAll()}function p(){var t=this.line;if(t){var e;e=t.ctp[0]!==this?t.ctp[0]:t.ctp[1],e.line=null,e.remove(),t.remove()}}function u(){d.call(this),f.call(this),this.ctp[0].set("left",this.get("x1")),this.ctp[0].set("top",this.get("y1")),this.ctp[1].set("left",this.get("x2")),this.ctp[1].set("top",this.get("y2")),this.ctp[0].setCoords(),this.ctp[1].setCoords()}function d(){var t=this.get("x1")+.5*(this.get("x2")-this.get("x1")),e=this.get("y1")+.5*(this.get("y2")-this.get("y1")),s=this.left-t,i=this.top-e;this.set("x1",s+this.x1),this.set("y1",i+this.y1),this.set("x2",s+this.x2),this.set("y2",i+this.y2)}function f(){function t(t,e,s,i,o){var r=Math.cos(o),n=Math.sin(o);return[r*(t-s)-n*(e-i)+s,n*(t-s)+r*(e-i)+i]}if(0!==this.get("angle")){var e=this.get("angle")/180*Math.PI,s=this.get("left"),i=this.get("top"),o=t(this.get("x1"),this.get("y1"),s,i,e),r=t(this.get("x2"),this.get("y2"),s,i,e);this.set({x1:o[0],y1:o[1],x2:r[0],y2:r[1],angle:0})}}function v(t,e,s){var o=new fabric.Rect({width:t,height:t,strokeWidth:0,stroke:i.controlPointColor,fill:i.controlPointColor,hasControls:!1,hasBorders:!1,originX:"center",originY:"center",line:e,id:s});return e.canvas.add(o),o.on("moving",l),o.on("removed",p),o}var g=["line","arrow"];i.controlPointColor="#bcd2ff",i.cornerSize=12,s.exports=i}),require.register("scripts/fabric-extensions/multi-touch-support",function(t,e,s){s.exports=function(t){function e(t){return"line"===t.type||"arrow"===t.type}function s(){return t.getActiveObject()||t.getActiveGroup()}function i(t,e){t.set({lockMovementX:e,lockMovementY:e,lockScalingX:e,lockScalingY:e})}if("undefined"!=typeof Hammer&&fabric.isTouchSupported){var o=new Hammer.Manager(t.upperCanvasEl);o.add(new Hammer.Pinch);var r,n;o.on("pinchstart",function(){var t=s();t&&!e(t)&&(i(t,!0),r=t.get("angle"),n=t.get("scaleX"))}),o.on("pinchmove",function(i){var o=s();o&&!e(o)&&(o.set({scaleX:i.scale*n,scaleY:i.scale*n,angle:r+i.rotation}),t.fire("object:scaling",{target:o,e:i.srcEvent}),o.get("scaleX")!==i.scale*n&&(n=1/i.scale))}),o.on("pinchend",function(){var t=s();t&&!e(t)&&i(t,!1)})}}}),require.register("scripts/fabric-extensions/rescale-2-resize",function(t,e,s){function i(t){t.width=t.width*t.scaleX+t.strokeWidth*(t.scaleX-1),t.height=t.height*t.scaleY+t.strokeWidth*(t.scaleY-1)}var o=(e("scripts/tools/shape-tools/line-tool"),{rect:function(t){i(t)},ellipse:function(t){i(t),t.rx=Math.abs(t.width/2),t.ry=Math.abs(t.height/2)},line:function(t){i(t),t.prevTop=t.top,t.prevLeft=t.left,t.x1>t.x2?(t.x1=t.left+t.width,t.x2=t.left):(t.x2=t.left+t.width,t.x1=t.left),t.y1>t.y2?(t.y1=t.top+t.height,t.y2=t.top):(t.y2=t.top+t.height,t.y1=t.top)},arrow:function(t){this.line(t)},path:function(t){i(t);for(var e=0;e<t.path.length;e++)t.path[e][1]*=t.scaleX,t.path[e][2]*=t.scaleY,t.path[e][3]*=t.scaleX,t.path[e][4]*=t.scaleY}});s.exports=function(t){t.on("object:scaling",function(t){var e=t.target,s=e.type;void 0!==o[s]&&(o[s](e),e.scaleX=1,e.scaleY=1)}),fabric.Group.prototype.lockUniScaling=!0,t.on("before:selection:cleared",function(t){var e=t.target;if("group"===e.type&&1!==e.scaleX)for(var s,i=e.scaleX,r=e.getObjects(),n=0;n<r.length;n++)void 0!==o[r[n].type]&&(s=r[n].strokeWidth,r[n].strokeWidth=0,r[n].scaleX=i,r[n].scaleY=i,o[r[n].type](r[n]),r[n].strokeWidth=s*i,r[n].scaleX=1/i,r[n].scaleY=1/i)})}}),require.register("scripts/inherit",function(t,e,s){s.exports=function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.super=e.prototype}}),require.register("scripts/tool",function(t,e,s){function i(t,e,s){this.name=t||"Tool",this.selector=e||"",this.master=s,this.canvas=s.canvas,this.active=!1,this.singleUse=!1,this.master.tools[e]=this,this._listeners=[],this._stateListeners=[]}i.prototype.setActive=function(t){return this.singleUse?void console.warn("This is a single use tool. It was not activated."):this.active===t?t:(this.active=t,t===!0?this.activate():this.deactivate(),t)},i.prototype.activate=function(){for(var t=0;t<this._listeners.length;t++){var e=this._listeners[t].trigger,s=this._listeners[t].action;this.canvas.on(e,s)}this._fireStateEvent()},i.prototype.activateAgain=function(){},i.prototype.use=function(){},i.prototype.deactivate=function(){for(var t=0;t<this._listeners.length;t++){{var e=this._listeners[t].trigger;this._listeners[t].action}this.canvas.off(e)}this._fireStateEvent()},i.prototype.addEventListener=function(t,e){this._listeners.push({trigger:t,action:e})},i.prototype.removeEventListener=function(t){for(var e=0;e<this._listeners.length;e++)if(t==this._listeners[e].trigger)return this._listeners.splice(e,1)},i.prototype.addStateListener=function(t){this._stateListeners.push(t)},i.prototype.removeStateListener=function(t){for(var e=0;e<this._stateListeners.length;e++)if(this._stateListeners[e]===t)return this._stateListeners.splice(e,1);return!1},i.prototype._fireStateEvent=function(t,e){var s={source:e||this,active:this.active};for(var i in t)s[i]=t[i];for(var o=0;o<this._stateListeners.length;o++)this._stateListeners[o].call(this.master.ui,s)},s.exports=i}),require.register("scripts/tools/delete-tool",function(t,e,s){function i(t,e,s){r.call(this,t,e,s),this.singleUse=!0;var i=this;$(".dt-canvas-container").keydown(function(t){8===t.keyCode&&(t.preventDefault(),i._delete())})}var o=e("scripts/inherit"),r=e("scripts/tool");o(i,r),i.prototype.use=function(){this._delete()},i.prototype._delete=function(){var t=this.canvas;t.getActiveObject()?t.remove(t.getActiveObject()):t.getActiveGroup()&&(t.getActiveGroup().forEachObject(function(e){t.remove(e)}),t.discardActiveGroup().renderAll())},i.prototype.show=function(){this.$element.show()},i.prototype.hide=function(){this.$element.hide()},s.exports=i}),require.register("scripts/tools/select-tool",function(t,e,s){function i(t,e,s){r.call(this,t,e,s),this.canvas.on("object:selected",function(t){t.target.set(a)}),n.controlPointColor="#bcd2ff",n.cornerSize=a.cornerSize}var o=e("scripts/inherit"),r=e("scripts/tool"),n=e("scripts/fabric-extensions/line-custom-control-points"),a={cornerSize:fabric.isTouchSupported?22:12,transparentCorners:!1};o(i,r),i.BASIC_SELECTION_PROPERTIES=a,i.prototype.activate=function(){i.super.activate.call(this),this.setSelectable(!0)},i.prototype.deactivate=function(){i.super.deactivate.call(this),this.setSelectable(!1),this.canvas.deactivateAllWithDispatch()},i.prototype.setSelectable=function(t){this.canvas.selection=t;for(var e=this.canvas.getObjects(),s=e.length-1;s>=0;s--)e[s].selectable=t},s.exports=i}),require.register("scripts/tools/shape-tool",function(t,e,s){function i(t,e,s){r.call(this,t,e,s),this.down=!1,this._firstAction=!1,this._locked=!1}{var o=e("scripts/inherit"),r=e("scripts/tool");e("scripts/util")}o(i,r),i.prototype.minSize=7,i.prototype.defSize=30,i.prototype.activate=function(){i.super.activate.call(this),this.down=!1,this._setFirstActionMode(),this.canvas.defaultCursor="crosshair"},i.prototype.activateAgain=function(){this._setFirstActionMode(),this._locked=!0,this._fireStateEvent({state:this.active,locked:!0})},i.prototype.deactivate=function(){i.super.deactivate.call(this),this.unlock()},i.prototype.unlock=function(){this._locked=!1,this._fireStateEvent({state:this.active,locked:!1})},i.prototype.exit=function(){this._locked||(this.down=!1,this.master.changeOutOfTool(this.selector),this.canvas.defaultCursor="default")},i.prototype.mouseDown=function(t){this.down=!0,this._firstAction===!1&&void 0!==t.target&&this.exit()},i.prototype.mouseMove=function(){},i.prototype.mouseUp=function(){this.down=!1},i.prototype.actionComplete=function(t){this._locked||(this._firstAction&&(this._firstAction=!1,this._setAllObjectsSelectable(!0)),t&&(t.selectable=!0))},i.prototype.setCentralOrigin=function(t){t.set({left:t.left+(t.width+t.strokeWidth)/2,top:t.top+(t.height+t.strokeWidth)/2,originX:"center",originY:"center"})},i.prototype._setFirstActionMode=function(){this._firstAction=!0,this._setAllObjectsSelectable(!1)},i.prototype._setAllObjectsSelectable=function(t){for(var e=this.canvas.getObjects(),s=e.length-1;s>=0;s--)e[s].selectable=t},s.exports=i}),require.register("scripts/tools/shape-tools/ellipse-tool",function(t,e,s){function i(t,e,s,i){n.call(this,t,e,s);var o=this;this.addEventListener("mouse:down",function(t){o.mouseDown(t)}),this.addEventListener("mouse:move",function(t){o.mouseMove(t)}),this.addEventListener("mouse:up",function(t){o.mouseUp(t)}),this._circle="circle"===i}function o(t){return t>=0?1:-1}{var r=e("scripts/inherit"),n=e("scripts/tools/shape-tool");e("scripts/util")}r(i,n),i.prototype.mouseDown=function(t){if(i.super.mouseDown.call(this,t),this.active){var e=this.canvas.getPointer(t.e),s=e.x,o=e.y;this.curr=new fabric.Ellipse({top:o,left:s,rx:.1,ry:.1,selectable:!1,lockUniScaling:this._circle,fill:this.master.state.fill,stroke:this.master.state.color,strokeWidth:this.master.state.strokeWidth}),this.canvas.add(this.curr)}},i.prototype.mouseMove=function(t){if(i.super.mouseMove.call(this,t),this.down!==!1){var e=this.canvas.getPointer(t.e),s=e.x-this.curr.left,r=e.y-this.curr.top;this._circle&&(Math.abs(s)<Math.abs(r)?r=Math.abs(s)*o(r):s=Math.abs(r)*o(s)),this.curr.set({width:s,height:r,rx:Math.abs(s/2),ry:Math.abs(r/2)}),this.canvas.renderAll()}},i.prototype.mouseUp=function(t){i.super.mouseUp.call(this,t),this._processNewShape(this.curr),this.canvas.renderAll(),this.actionComplete(this.curr),this.curr=void 0},i.prototype._processNewShape=function(t){t.width<0&&(t.left=t.left+t.width,t.width=-t.width),t.height<0&&(t.top=t.top+t.height,t.height=-t.height),Math.max(t.width,t.height)<this.minSize&&(t.set("rx",this.defSize/2),t.set("ry",this.defSize/2),t.set("width",this.defSize),t.set("height",this.defSize),t.set("top",t.get("top")-t.get("ry")-t.get("strokeWidth")/2),t.set("left",t.get("left")-t.get("rx")-t.get("strokeWidth")/2)),this.setCentralOrigin(t),t.setCoords()},s.exports=i}),require.register("scripts/tools/shape-tools/free-draw",function(t,e,s){function i(t,e,s){r.call(this,t,e,s);var i=this;this.addEventListener("mouse:down",function(t){i.mouseDown(t)}),this.addEventListener("mouse:up",function(t){i.mouseUp(t)})}var o=e("scripts/inherit"),r=e("scripts/tools/shape-tool");o(i,r),i.prototype.mouseDown=function(t){this.canvas.freeDrawingBrush.color=this.master.state.color,this.canvas.freeDrawingBrush.width=this.master.state.strokeWidth,i.super.mouseDown.call(this,t),this.active&&(this.canvas.isDrawingMode||(this.canvas.isDrawingMode=!0,this.canvas._onMouseDownInDrawingMode(t.e)))},i.prototype.mouseUp=function(t){var e=this.canvas.getObjects(),s=e[e.length-1];this.curr=s,i.super.mouseUp.call(this,t),this._locked||(this.canvas.isDrawingMode=!1),this.actionComplete(s),this.curr=void 0},i.prototype.deactivate=function(){i.super.deactivate.call(this),this.canvas.isDrawingMode=!1},s.exports=i}),require.register("scripts/tools/shape-tools/line-tool",function(t,e,s){function i(t,e,s,i,o){r.call(this,t,e,s);var n=this;this.addEventListener("mouse:down",function(t){n.mouseDown(t)}),this.addEventListener("mouse:move",function(t){n.mouseMove(t)}),this.addEventListener("mouse:up",function(t){n.mouseUp(t)}),i=i||"line",this._lineKlass=fabric.util.getKlass(i),this._lineOptions=o,a(this.canvas)}var o=e("scripts/inherit"),r=e("scripts/tools/shape-tool"),n=(e("scripts/tools/select-tool"),e("scripts/util")),a=e("scripts/fabric-extensions/line-custom-control-points");e("scripts/fabric-extensions/arrow"),o(i,r),i.prototype.mouseDown=function(t){if(i.super.mouseDown.call(this,t),this.active){var e=this.canvas.getPointer(t.e),s=e.x,o=e.y;this.curr=new this._lineKlass([s,o,s,o],$.extend(!0,{originX:"center",originY:"center",selectable:!1,stroke:this.master.state.color,strokeWidth:this.master.state.strokeWidth},this._lineOptions)),this.canvas.add(this.curr)}},i.prototype.mouseMove=function(t){if(i.super.mouseMove.call(this,t),this.down!==!1){var e=this.canvas.getPointer(t.e),s=e.x,o=e.y;this.curr.set("x2",s),this.curr.set("y2",o),this.canvas.renderAll()}},i.prototype.mouseUp=function(t){i.super.mouseUp.call(this,t),this._processNewShape(this.curr),this.canvas.renderAll(),this.actionComplete(this.curr),this.curr=void 0},i.prototype._processNewShape=function(t){var e=t.get("x1"),s=t.get("y1"),i=t.get("x2"),o=t.get("y2");n.dist(e-i,s-o)<this.minSize&&(i=e+this.defSize,o=s+this.defSize,t.set("x2",i),t.set("y2",o)),t.setCoords()},s.exports=i}),require.register("scripts/tools/shape-tools/rect-tool",function(t,e,s){function i(t,e,s,i){n.call(this,t,e,s);var o=this;this.addEventListener("mouse:down",function(t){o.mouseDown(t)}),this.addEventListener("mouse:move",function(t){o.mouseMove(t)}),this.addEventListener("mouse:up",function(t){o.mouseUp(t)}),this._square="square"===i}function o(t){return t>=0?1:-1}{var r=e("scripts/inherit"),n=e("scripts/tools/shape-tool");e("scripts/util")}r(i,n),i.prototype.mouseDown=function(t){if(i.super.mouseDown.call(this,t),this.active){var e=this.canvas.getPointer(t.e),s=e.x,o=e.y;this.curr=new fabric.Rect({top:o,left:s,width:0,height:0,selectable:!1,lockUniScaling:this._square,fill:this.master.state.fill,stroke:this.master.state.color,strokeWidth:this.master.state.strokeWidth}),this.canvas.add(this.curr)}},i.prototype.mouseMove=function(t){if(i.super.mouseMove.call(this,t),this.down!==!1){var e=this.canvas.getPointer(t.e),s=e.x-this.curr.left,r=e.y-this.curr.top;this._square&&(Math.abs(s)<Math.abs(r)?r=Math.abs(s)*o(r):s=Math.abs(r)*o(s)),this.curr.set({width:s,height:r}),this.canvas.renderAll()}},i.prototype.mouseUp=function(t){i.super.mouseUp.call(this,t),this._processNewShape(this.curr),this.canvas.renderAll(),this.actionComplete(this.curr),this.curr=void 0},i.prototype._processNewShape=function(t){t.width<0&&(t.left=t.left+t.width,t.width=-t.width),t.height<0&&(t.top=t.top+t.height,t.height=-t.height),this.setCentralOrigin(t),Math.max(t.width,t.height)<this.minSize&&(t.set("width",this.defSize),t.set("height",this.defSize),t.set("top",t.get("top")-t.get("height")/2+t.get("strokeWidth")),t.set("left",t.get("left")-t.get("width")/2+t.get("strokeWidth"))),t.setCoords()},s.exports=i}),require.register("scripts/ui",function(t,e,s){function i(t,e,s){this.master=t,this.options=s,this._initUI(e)}function o(t,e,s){this.name=t,this.static=s||!1,this.$buttons=e,this.$palette=$('<div class="dt-toolpalette dt-palette-'+this.name+'">').data("dt-palette-id",this.name),this.static?this.$palette.addClass("dt-static"):this.$palette.hide();for(var i=0;i<this.$buttons.length;i++)void 0===this.$buttons[i]||this.$buttons[i].appendTo(this.$palette);for(var o=0;o<this.$buttons.length&&"tool"!==this.$buttons[o].data("dt-btn-type");o++);this.currentTool=e[o].data("dt-target-id")}var r=(e("scripts/tool"),e("scripts/tools/select-tool")),n=e("scripts/tools/shape-tools/line-tool"),a=e("scripts/tools/shape-tools/rect-tool"),c=e("scripts/tools/shape-tools/ellipse-tool"),h=e("scripts/tools/shape-tools/free-draw"),l=e("scripts/tools/delete-tool");i.prototype.initTools=function(t){var e=new r("Selection Tool","select",this.master),s=new n("Line Tool","line",this.master),i=new n("Arrow Tool","arrow",this.master,"arrow"),o=new n("Double Arrow Tool","doubleArrow",this.master,"arrow",{doubleArrowhead:!0}),p=new a("Rectangle Tool","rect",this.master),u=new c("Ellipse Tool","ellipse",this.master),d=new a("Square Tool","square",this.master,"square"),f=new c("Circle Tool","circle",this.master,"circle"),v=new h("Free Draw Tool","free",this.master),g=new l("Delete Tool","trash",this.master),m=t||{shapes:["-select","rect","ellipse","square","circle"],lines:["-select","line","arrow","doubleArrow"],main:["select","-lines","-shapes","free","trash"]};this._initToolUI(m),this._initButtonUpdates(),this.setLabel(e.selector,"s"),this.setLabel(s.selector,"L"),this.setLabel(i.selector,"A"),this.setLabel(o.selector,"D"),this.setLabel(p.selector,"R"),this.setLabel(u.selector,"E"),this.setLabel(d.selector,"S"),this.setLabel(f.selector,"C"),this.setLabel(v.selector,"F"),this.setLabel(g.selector,"d"),this.setLabel("-shapes","Sh"),this.setLabel("-lines","Li"),this.setLabel("-select","s");var w=this.$buttons.trash;w.addClass("dt-locked"),this.master.canvas.on("object:selected",function(){w.removeClass("dt-locked")}),this.master.canvas.on("selection:cleared",function(){w.addClass("dt-locked")}),this.master.chooseTool("select")},i.prototype.setLabel=function(t,e){if("-"===t.charAt(0)){var s=t.substring(1);this.$tools.find(".dt-target-"+s).find("span").text(e)}else this.$tools.find("."+t).find("span").text(e)},i.prototype._initButtonUpdates=function(){for(var t in this.master.tools)this.master.tools[t].addStateListener(this.updateUI);var e=this;this.$tools.find(".dt-btn").on("click touchstart",function(t){e._uiClicked(this),t.preventDefault()})},i.prototype._uiClicked=function(t){"palette"===$(t).data("dt-btn-type")?this._paletteButtonClicked($(t).data("dt-target-id")):this._toolButtonClicked($(t).data("dt-target-id"))},i.prototype._paletteButtonClicked=function(t){var e,s;for(var i in this.palettes)i===t?(s=this.palettes[i],this.master.currentTool.selector!==this.palettes[i].currentTool&&this.master.chooseTool(this.palettes[i].currentTool)):this.palettes[i].$palette.is(":visible")&&(e=this.palettes[i]);e&&s?e.hide(function(){s.show()}):s&&s.show();for(var o=this.palettes[t].$palette.find(".dt-link"),r=0;r<o.length;r++)if("palette"===$(o[r]).data("dt-btn-type")){var n=$(o[r]).data("dt-target-id"),a=this.palettes[n].currentTool;$(o[r]).find("span").text(this.$tools.find("."+a).find("span").text())}},i.prototype._toolButtonClicked=function(t){var e=this.master.tools[t],s=this.$buttons[e.selector].parent();return void 0!==this.master.currentTool&&this.master.currentTool.selector===t?void this.master.currentTool.activateAgain():void 0===e?void console.warn('Warning! Could not find tool with selector "'+t+'"\nExiting tool chooser.'):e.singleUse===!0?void e.use():(void 0!==this.master.currentTool&&this.master.currentTool.setActive(!1),this.master.currentTool=e,e.setActive(!0),this.palettes[s.data("dt-palette-id")].currentTool=e.selector,s.is(":visible")||this._paletteButtonClicked(s.data("dt-palette-id")),void this.master.canvas.renderAll())},i.prototype.updateUI=function(t){var e=this.$buttons[t.source.selector];t.active?e.addClass("dt-active"):e.removeClass("dt-active"),t.locked?e.addClass("dt-locked"):e.removeClass("dt-locked")},i.prototype._initUI=function(t){$(t).empty(),this.$element=$('<div class="dt-container">').appendTo(t),this.$tools=$('<div class="dt-tools">').appendTo(this.$element);var e=$('<div class="dt-canvas-container">').attr("tabindex",0).appendTo(this.$element);this.$canvas=$("<canvas>").attr("width",this.options.width+"px").attr("height",this.options.height+"px").appendTo(e)},i.prototype._initToolUI=function(t){this.$buttons={},this.palettes={};for(var e in t){for(var s=[],i=t[e],r=0;r<i.length;r++){var n;n="-"===i[r].charAt(0)?i[r].substring(1)in t?this._initBtn(i[r],"palette"):this._initBtn(i[r],"toolLink"):this._initBtn(i[r]),s[r]=n,this.$buttons[i[r]]=n}this.palettes[e]=new o(e,s),this.palettes[e].$palette.appendTo(this.$tools)}},i.prototype._initBtn=function(t,e){var s=$('<div class="dt-btn">');return e?"palette"===e?s.data("dt-btn-type","palette").data("dt-target-id",t.substring(1)).addClass("dt-target-"+t.substring(1)).addClass("dt-link"):"toolLink"===e&&s.data("dt-btn-type","toolLink").data("dt-target-id",t.substring(1)).addClass("dt-target-"+t.substring(1)).addClass("dt-link"):s.addClass(t).data("dt-btn-type","tool").data("dt-target-id",t),$("<span>").appendTo(s),s},o.prototype.show=function(t){this.$palette.fadeIn(100,t)},o.prototype.hide=function(t){this.static||this.$palette.fadeOut(100,t)},s.exports=i}),require.register("scripts/util",function(t,e,s){s.exports={dist:function(t,e){var s=Math.pow(t,2),i=Math.pow(e,2);return Math.sqrt(s+i)}}}),window.DrawingTool=require("scripts/drawing-tool");