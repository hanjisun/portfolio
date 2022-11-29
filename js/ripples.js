

!function(e){var t,r=e(window);String.prototype.endsWith=function(e){return-1!==this.indexOf(e,this.length-e.length)};var o,i,a,n=(o=document.createElement("canvas"),i=o.getContext("webgl")||o.getContext("experimental-webgl"),a=i&&i.getExtension("OES_texture_float")&&i.getExtension("OES_texture_float_linear"),o.remove(),a);function s(e,r,o){function i(e,r){var o=t.createShader(e);if(t.shaderSource(o,r),t.compileShader(o),!t.getShaderParameter(o,t.COMPILE_STATUS))throw new Error("compile error: "+t.getShaderInfoLog(o));return o}var a={};if(a.id=t.createProgram(),t.attachShader(a.id,i(t.VERTEX_SHADER,e)),t.attachShader(a.id,i(t.FRAGMENT_SHADER,r)),t.linkProgram(a.id),!t.getProgramParameter(a.id,t.LINK_STATUS))throw new Error("link error: "+t.getProgramInfoLog(a.id));a.uniforms={},a.locations={},t.useProgram(a.id),t.enableVertexAttribArray(0);for(var n,s=/uniform (\w+) (\w+)/g,u=e+r;null!=(match=s.exec(u));)n=match[2],a.locations[n]=t.getUniformLocation(a.id,n);return a}function u(e,r){t.activeTexture(t.TEXTURE0+(r||0)),t.bindTexture(t.TEXTURE_2D,e)}var f=function(r,o){var i=this;this.$el=e(r),this.$el.addClass("ripples");var a=/url\(["']?([^"']*)["']?\)/.exec(this.$el.css("background-image"));if(null!=a){a=a[1],this.resolution=o.resolution||256,this.textureDelta=new Float32Array([1/this.resolution,1/this.resolution]),this.perturbance=o.perturbance;var n=document.createElement("canvas");n.width=this.$el.outerWidth(),n.height=this.$el.outerHeight(),this.canvas=n,this.$el.append(n),this.context=t=n.getContext("webgl")||n.getContext("experimental-webgl"),t.getExtension("OES_texture_float"),t.getExtension("OES_texture_float_linear"),e(window).on("resize",function(){i.$el.outerWidth()==i.canvas.width&&i.$el.outerHeight()==i.canvas.height||(n.width=i.$el.outerWidth(),n.height=i.$el.outerHeight())}),this.$el.on("mousemove",e.proxy(this.mousemove,this)),this.$el.on("mousemoverel",e.proxy(this.mousemove,this)),this.$el.on("mousedown",e.proxy(this.mousedown,this));var s=new Image;s.crossOrigin="",s.onload=function(){function e(e){return 0==(e&e-1)}t=i.context;var r=e(s.width)&&e(s.height)?t.REPEAT:t.CLAMP_TO_EDGE;i.backgroundWidth=s.width,i.backgroundHeight=s.height;var o=t.createTexture();t.bindTexture(t.TEXTURE_2D,o),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,1),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,r),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,r),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,s),i.backgroundTexture=o},s.src=a,this.textures=[],this.framebuffers=[];for(var u=0;u<2;u++){var f=t.createTexture(),h=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,h),h.width=this.resolution,h.height=this.resolution,t.bindTexture(t.TEXTURE_2D,f),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,this.resolution,this.resolution,0,t.RGBA,t.FLOAT,null);var d=t.createRenderbuffer();if(t.bindRenderbuffer(t.RENDERBUFFER,d),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,this.resolution,this.resolution),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,f,0),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,d),t.checkFramebufferStatus(t.FRAMEBUFFER)!=t.FRAMEBUFFER_COMPLETE)throw new Error("Rendering to this texture is not supported (incomplete framebuffer)");t.bindTexture(t.TEXTURE_2D,null),t.bindRenderbuffer(t.RENDERBUFFER,null),t.bindFramebuffer(t.FRAMEBUFFER,null),this.textures.push(f),this.framebuffers.push(h)}this.quad=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.quad),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,1,1,-1,1]),t.STATIC_DRAW),this.initShaders(),requestAnimationFrame(function e(){i.update(),requestAnimationFrame(e)})}};f.DEFAULTS={resolution:256,perturbance:.03},f.prototype={update:function(){t=this.context,this.backgroundTexture&&(this.updateTextures(),this.render())},drawQuad:function(){t.bindBuffer(t.ARRAY_BUFFER,this.quad),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.drawArrays(t.TRIANGLE_FAN,0,4)},render:function(){t.viewport(0,0,this.canvas.width,this.canvas.height),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.useProgram(this.renderProgram.id),u(this.backgroundTexture,0),u(this.textures[0],1),t.uniform2fv(this.renderProgram.locations.topLeft,this.renderProgram.uniforms.topLeft),t.uniform2fv(this.renderProgram.locations.bottomRight,this.renderProgram.uniforms.bottomRight),t.uniform2fv(this.renderProgram.locations.containerRatio,this.renderProgram.uniforms.containerRatio),t.uniform1i(this.renderProgram.locations.samplerBackground,0),t.uniform1i(this.renderProgram.locations.samplerRipples,1),this.drawQuad()},updateTextures:function(){this.computeTextureBoundaries(),t.viewport(0,0,this.resolution,this.resolution);for(var e=0;e<2;e++)t.bindFramebuffer(t.FRAMEBUFFER,this.framebuffers[e]),u(this.textures[1-e]),t.useProgram(this.updateProgram[e].id),this.drawQuad();t.bindFramebuffer(t.FRAMEBUFFER,null)},computeTextureBoundaries:function(){var e=this.$el.css("background-size"),t=this.$el.css("background-attachment"),o=this.$el.css("background-position").split(" "),i="fixed"==t?r:this.$el,a=i.offset()||{left:pageXOffset,top:pageYOffset},n=i.outerWidth(),s=i.outerHeight();if("cover"==e)var u=Math.max(n/this.backgroundWidth,s/this.backgroundHeight),f=this.backgroundWidth*u,h=this.backgroundHeight*u;else if("contain"==e)u=Math.min(n/this.backgroundWidth,s/this.backgroundHeight),f=this.backgroundWidth*u,h=this.backgroundHeight*u;else{f=(e=e.split(" "))[0],h=e[1]||e[0];f=f.endsWith("%")?n*parseFloat(f)/100:"auto"==f?this.backgroundWidth:parseFloat(f),h=h.endsWith("%")?s*parseFloat(h)/100:"auto"==h?this.backgroundHeight:parseFloat(h)}var d=o[0],c=o[1];d="left"==d?a.left:"center"==d?a.left+n/2-f/2:"right"==d?a.left+n-f:d.endsWith("%")?a.left+(n-f)*parseFloat(d)/100:parseFloat(d),c="top"==c?a.top:"center"==c?a.top+s/2-h/2:"bottom"==c?a.top+s-h:c.endsWith("%")?a.top+(s-h)*parseFloat(c)/100:parseFloat(c);var l=this.$el.offset();this.renderProgram.uniforms.topLeft=new Float32Array([(l.left-d)/f,(l.top-c)/h]),this.renderProgram.uniforms.bottomRight=new Float32Array([this.renderProgram.uniforms.topLeft[0]+this.$el.outerWidth()/f,this.renderProgram.uniforms.topLeft[1]+this.$el.outerHeight()/h]);var m=Math.max(this.canvas.width,this.canvas.height);this.renderProgram.uniforms.containerRatio=new Float32Array([this.canvas.width/m,this.canvas.height/m])},initShaders:function(){var e=["attribute vec2 vertex;","varying vec2 coord;","void main() {","coord = vertex * 0.5 + 0.5;","gl_Position = vec4(vertex, 0.0, 1.0);","}"].join("\n");this.dropProgram=s(e,["precision highp float;","const float PI = 3.141592653589793;","uniform sampler2D texture;","uniform vec2 center;","uniform float radius;","uniform float strength;","varying vec2 coord;","void main() {","vec4 info = texture2D(texture, coord);","float drop = max(0.0, 1.0 - length(center * 0.5 + 0.5 - coord) / radius);","drop = 0.5 - cos(drop * PI) * 0.5;","info.r += drop * strength;","gl_FragColor = info;","}"].join("\n")),this.updateProgram=[0,0],this.updateProgram[0]=s(e,["precision highp float;","uniform sampler2D texture;","uniform vec2 delta;","varying vec2 coord;","void main() {","vec4 info = texture2D(texture, coord);","vec2 dx = vec2(delta.x, 0.0);","vec2 dy = vec2(0.0, delta.y);","float average = (","texture2D(texture, coord - dx).r +","texture2D(texture, coord - dy).r +","texture2D(texture, coord + dx).r +","texture2D(texture, coord + dy).r",") * 0.25;","info.g += (average - info.r) * 2.0;","info.g *= 0.995;","info.r += info.g;","gl_FragColor = info;","}"].join("\n")),t.uniform2fv(this.updateProgram[0].locations.delta,this.textureDelta),this.updateProgram[1]=s(e,["precision highp float;","uniform sampler2D texture;","uniform vec2 delta;","varying vec2 coord;","void main() {","vec4 info = texture2D(texture, coord);","vec3 dx = vec3(delta.x, texture2D(texture, vec2(coord.x + delta.x, coord.y)).r - info.r, 0.0);","vec3 dy = vec3(0.0, texture2D(texture, vec2(coord.x, coord.y + delta.y)).r - info.r, delta.y);","info.ba = normalize(cross(dy, dx)).xz;","gl_FragColor = info;","}"].join("\n")),t.uniform2fv(this.updateProgram[1].locations.delta,this.textureDelta),this.renderProgram=s(["precision highp float;","attribute vec2 vertex;","uniform vec2 topLeft;","uniform vec2 bottomRight;","uniform vec2 containerRatio;","varying vec2 ripplesCoord;","varying vec2 backgroundCoord;","void main() {","backgroundCoord = mix(topLeft, bottomRight, vertex * 0.5 + 0.5);","backgroundCoord.y = 1.0 - backgroundCoord.y;","ripplesCoord = vec2(vertex.x, -vertex.y) * containerRatio * 0.5 + 0.5;","gl_Position = vec4(vertex.x, -vertex.y, 0.0, 1.0);","}"].join("\n"),["precision highp float;","uniform sampler2D samplerBackground;","uniform sampler2D samplerRipples;","uniform float perturbance;","varying vec2 ripplesCoord;","varying vec2 backgroundCoord;","void main() {","vec2 offset = -texture2D(samplerRipples, ripplesCoord).ba;","float specular = pow(max(0.0, dot(offset, normalize(vec2(-0.6, 1.0)))), 4.0);","gl_FragColor = texture2D(samplerBackground, backgroundCoord + offset * perturbance) + specular;","}"].join("\n")),t.uniform1f(this.renderProgram.locations.perturbance,this.perturbance)},dropAtMouse:function(e,r,o){t=this.context,e.offsetX=e.offsetX||e.pageX-this.$el.offset().left,e.offsetY=e.offsetY||e.pageY-this.$el.offset().top;var i=this.$el.outerWidth(),a=this.$el.outerHeight(),n=Math.max(i,a),s=new Float32Array([(2*e.offsetX-i)/n,(a-2*e.offsetY)/n]);t.viewport(0,0,this.resolution,this.resolution),t.bindFramebuffer(t.FRAMEBUFFER,this.framebuffers[0]),u(this.textures[1]),t.useProgram(this.dropProgram.id),t.uniform2fv(this.dropProgram.locations.center,s),t.uniform1f(this.dropProgram.locations.radius,r),t.uniform1f(this.dropProgram.locations.strength,o),this.drawQuad();var f=this.framebuffers[0];this.framebuffers[0]=this.framebuffers[1],this.framebuffers[1]=f,f=this.textures[0],this.textures[0]=this.textures[1],this.textures[1]=f,t.bindFramebuffer(t.FRAMEBUFFER,null)},mousemove:function(e){this.dropAtMouse(e,.03,.01)},mousedown:function(e){this.dropAtMouse(e,.09,.14)}};var h=e.fn.ripples;e.fn.ripples=function(t){return this.each(function(){if(!n)throw new Error("Your browser does not support at least one of the following: WebGL, OES_texture_float extension, OES_texture_float_linear extension.");var r=e(this),o=r.data("ripples"),i=e.extend({},f.DEFAULTS,r.data(),"object"==typeof t&&t);o||r.data("ripples",new f(this,i))})},e.fn.ripples.Constructor=f,e.fn.ripples.noConflict=function(){return e.fn.ripples=h,this}}(window.jQuery);
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */