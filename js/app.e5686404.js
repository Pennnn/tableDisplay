(function(t){function e(e){for(var n,l,a=e[0],o=e[1],c=e[2],u=0,h=[];u<a.length;u++)l=a[u],i[l]&&h.push(i[l][0]),i[l]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);f&&f(e);while(h.length)h.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,a=1;a<r.length;a++){var o=r[a];0!==i[o]&&(n=!1)}n&&(s.splice(e--,1),t=l(l.s=r[0]))}return t}var n={},i={app:0},s=[];function l(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=t,l.c=n,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(r,n,function(e){return t[e]}.bind(null,n));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],o=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var f=o;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrap",class:{"full-screen":t.isFullScreen}},[r("div",{staticClass:"toolbar"},[t._v("\n            工具栏\n        ")]),r("div",{ref:"colList",staticClass:"col-list"},[r("div",{style:{transform:"translate("+t.scrollLeft+"px, 0) translateZ(0px)"}},t._l(t.cols,function(e){return r("div",{key:e,staticClass:"col-item"},[t._v(t._s(e))])}))]),r("div",{ref:"rowList",staticClass:"row-list"},[r("div",{style:{transform:"translate(0, "+t.scrollTop+"px) translateZ(0px)"}},[r("div",{style:t.firstStyle}),t._l(t.showRows,function(e,n){return r("div",{key:n,staticClass:"row-item"},[t._v(t._s(e))])}),r("div",{style:t.lastStyle})],2)]),r("div",{ref:"wrap",staticClass:"buffer-view-ct"},[r("div",{style:{width:110*t.cols.length+"px"}},[r("div",{style:t.firstStyle}),r("div",{staticClass:"buffer-view-content"},t._l(t.showRows,function(e){return r("div",{key:e,staticClass:"table-row"},t._l(t.cols,function(n){return r("div",{key:n,staticClass:"table-cell",attrs:{contenteditable:"true"}},[t._v("\n                        "+t._s(e)+t._s(n)+"\n                    ")])}))})),r("div",{style:t.lastStyle})])])])},s=[],l=(r("1c4c"),r("54af")),a=r.n(l),o=36,c={data:function(){return{data:Array.from(Array(5e3)).map(function(t,e){return e+1}),cols:Array.from(Array(26)).map(function(t,e){return String.fromCharCode(97+e)}),scrollTop:0,scrollLeft:0,bufferStart:0,bufferSize:150,visibleItems:0}},mounted:function(){var t=this;this.$nextTick(function(){var e=new a.a(t.$refs.wrap,{scrollX:!0,listenX:!0,mouseWheel:!0,bounce:!1,directionLocked:!0,deceleration:.003,probeType:3});e.on("scroll",function(){t.handleScroll(e)}),e.on("scrollEnd",function(){t.handleScroll(e,!0)}),t.iscroll=e}),this.getVisibleItems()},computed:{firstStyle:function(){return{height:this.bufferStart*o+"px"}},lastStyle:function(){var t=this.data,e=0;return this.bufferStart+this.bufferSize<t.length&&(e=(t.length-this.bufferStart-this.bufferSize)*o),{height:e+"px"}},showRows:function(){return this.data.slice(this.bufferStart,this.bufferStart+this.bufferSize)},isFullScreen:function(){return Math.abs(this.scrollTop)>400}},methods:{handleScroll:function(t,e){var r=this,n=50,i=Math.abs(t.y),s=Math.ceil(i/o);(s+this.visibleItems>=this.bufferStart+this.bufferSize||s<this.bufferStart)&&(this.bufferStart=+Math.max(s-(this.bufferSize-this.visibleItems)/2,0)),e&&s+this.visibleItems>=this.data.length-n&&this.insertNewData(),this.$nextTick(function(){isNaN(t.x)||(r.scrollLeft=t.x),isNaN(t.y)||(r.scrollTop=t.y),t.refresh()})},insertNewData:function(){var t=this,e=Array.from(Array(500)).map(function(e,r){return t.data.length+r+1});this.data=this.data.concat(e)},getVisibleItems:function(){this.visibleItems=Math.ceil(this.$refs.wrap.clientHeight/o)}}},f=c,u=(r("7c55"),r("2877")),h=Object(u["a"])(f,i,s,!1,null,null,null);h.options.__file="App.vue";var d=h.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(d)}}).$mount("#app")},"7c55":function(t,e,r){"use strict";var n=r("d3dd"),i=r.n(n);i.a},d3dd:function(t,e,r){}});
//# sourceMappingURL=app.e5686404.js.map