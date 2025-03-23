
      var React = {
        createElement: function(type, props, ...children) {
          return { type, props: { ...props, children } };
        }
      };
      var ReactDOM = {
        createRoot: function(container) {
          return {
            render: function(element) {
              if (container) {
                container.innerHTML = '';
                container.appendChild(document.createElement('div'));
              }
            }
          };
        }
      };
    
var PixelCat=(()=>{var h=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var x=Object.getOwnPropertyNames;var p=Object.prototype.hasOwnProperty;var v=(i,t,e)=>t in i?h(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var u=(i,t)=>{for(var e in t)h(i,e,{get:t[e],enumerable:!0})},J=(i,t,e,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of x(t))!p.call(i,n)&&n!==e&&h(i,n,{get:()=>t[n],enumerable:!(s=f(t,n))||s.enumerable});return i};var L=i=>J(h({},"__esModule",{value:!0}),i);var a=(i,t,e)=>v(i,typeof t!="symbol"?t+"":t,e);var X={};u(X,{PixelCat:()=>o,init:()=>V});var r="/idle.gif";var c="/run.gif";var m="/swipe.gif";var g={idle:r,chasing:c,eating:m,sleeping:r},d=150,F=5,N=.01,o=class{constructor(t){a(this,"state","idle");a(this,"position",{x:0,y:0});a(this,"treats",0);a(this,"facingLeft",!1);a(this,"element",null);a(this,"lastMousePosition",{x:window.innerWidth/2,y:0});a(this,"animationFrameId",null);this.element=document.createElement("div"),this.element.className="pixel-cat",this.element.innerHTML=`
      <img src="${g.idle}" alt="Pixel Cat" class="cat-sprite">
      <div class="treats-count"></div>
    `,t.appendChild(this.element),this.handleMouseMove=this.handleMouseMove.bind(this),this.handleClick=this.handleClick.bind(this),this.updatePosition=this.updatePosition.bind(this),window.addEventListener("mousemove",this.handleMouseMove),this.element.addEventListener("click",this.handleClick),console.log("Initial sprite:",g.idle)}handleMouseMove(t){if(this.state==="sleeping"||this.state==="eating")return;let e=t.clientX,s=window.innerWidth/2;if(Math.abs(e-s)<=d){if(this.lastMousePosition={x:e,y:0},this.element){let l=this.element.getBoundingClientRect(),j=l.left+l.width/2;this.facingLeft=e<j,this.element.classList.toggle("facing-left",this.facingLeft)}this.state!=="chasing"&&(console.log("Switching to chasing state"),this.setState("chasing"))}else this.state==="chasing"&&this.setState("idle")}handleClick(){this.treats++,this.setState("eating"),this.updateTreatsCount(),setTimeout(()=>this.setState("idle"),2e3)}updatePosition(){if(!this.element||this.state==="sleeping"||this.state==="eating")return;let t=this.element.getBoundingClientRect(),e=this.lastMousePosition.x-(t.left+t.width/2);if(Math.abs(e)>F){let n=window.innerWidth/2;Math.abs(this.lastMousePosition.x-n)<=d&&(this.position.x+=e*N,this.element.style.transform=`translate(calc(-50% + ${this.position.x}px), 0)`)}else this.state==="chasing"&&this.setState("idle");this.animationFrameId=requestAnimationFrame(this.updatePosition)}setState(t){if(console.log("Setting state:",t,"Current state:",this.state),this.state=t,this.element){this.element.className=`pixel-cat ${t} ${this.facingLeft?"facing-left":""}`;let e=this.element.querySelector("img");if(e){let s=g[t];console.log("Setting sprite:",t,"New src:",s),e.src=s}}t==="chasing"?this.animationFrameId=requestAnimationFrame(this.updatePosition):this.animationFrameId&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null)}updateTreatsCount(){if(this.element){let t=this.element.querySelector(".treats-count");t&&(t.textContent=`\u{1F363} \xD7 ${this.treats}`)}}destroy(){window.removeEventListener("mousemove",this.handleMouseMove),this.element&&(this.element.removeEventListener("click",this.handleClick),this.element.remove()),this.animationFrameId&&cancelAnimationFrame(this.animationFrameId)}};function V(i){return new o(i)}return L(X);})();
