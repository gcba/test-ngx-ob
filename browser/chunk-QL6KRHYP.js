import{A as n,C as c,p as o,u as a}from"./chunk-IAYUGCCV.js";var d=(()=>{let r=class r{constructor(e,t){this.host=e,this.renderer=t}ngAfterViewInit(){if(navigator.clipboard){let e=this.host.nativeElement.querySelector("button.btn-clipboard");e&&(this.renderer.setProperty(e,"innerHTML","<i class='bx bxs-copy-alt'></i>"),this.renderer.setAttribute(e,"aria-label","Copiar"),this.renderer.setStyle(e,"margin-bottom","8px"),this.renderer.listen(e,"click",this.clipboard))}}clipboard(e){let t=e.currentTarget,s=t?.parentElement?.querySelector("code")?.innerText;navigator.clipboard.writeText(s),t.innerHTML='<i class="bx bx-check"></i>',t.ariaLabel="Copiado",setTimeout(()=>{t.innerHTML='<i class="bx bxs-copy-alt"></i>',t.ariaLabel="Copiar"},1e3)}};r.\u0275fac=function(t){return new(t||r)(n(a),n(c))},r.\u0275dir=o({type:r,selectors:[["","appClipboard",""]],standalone:!0});let i=r;return i})();export{d as a};