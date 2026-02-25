import{Pc as m,Tb as c,Va as l,Wa as r,X as s,bb as d,sa as a,xa as o}from"./chunk-G3M3EUFA.js";var h=class n{constructor(t,e){this.el=t;this.renderer=e}isLoading=!0;loadListener;errorListener;platformId=s(o);ngOnInit(){if(!m(this.platformId))return;this.el.nativeElement.getAttribute("loading")||this.renderer.setAttribute(this.el.nativeElement,"loading","lazy"),this.injectStyles(),this.loadListener=this.renderer.listen(this.el.nativeElement,"load",()=>{this.isLoading=!1}),this.errorListener=this.renderer.listen(this.el.nativeElement,"error",()=>{this.isLoading=!1}),this.el.nativeElement.complete&&this.el.nativeElement.naturalHeight!==0&&(this.isLoading=!1)}injectStyles(){let t="lazy-image-styles";if(document.getElementById(t))return;let e=this.renderer.createElement("style");this.renderer.setAttribute(e,"id",t),this.renderer.setAttribute(e,"type","text/css");let g=this.renderer.createText(`
      img.lazy-loading {
        background-color: rgba(255, 255, 255, 0.1) !important;
        animation: lazy-pulse 1.5s ease-in-out infinite;
      }

      img.lazy-loaded {
        background-color: transparent !important;
        animation: none;
      }

      @keyframes lazy-pulse {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
      }
    `);this.renderer.appendChild(e,g),this.renderer.appendChild(document.head,e)}ngOnDestroy(){this.loadListener&&this.loadListener(),this.errorListener&&this.errorListener()}static \u0275fac=function(e){return new(e||n)(r(a),r(l))};static \u0275dir=d({type:n,selectors:[["img"]],hostVars:4,hostBindings:function(e,i){e&2&&c("lazy-loading",i.isLoading)("lazy-loaded",!i.isLoading)}})};export{h as a};
