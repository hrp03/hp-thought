(self.webpackChunkhp_thought=self.webpackChunkhp_thought||[]).push([[403],{403:(n,t,e)=>{"use strict";e.r(t),e.d(t,{ArtModule:()=>h});var i=e(116),o=e(699),a=e(619),r=e(458),s=e(462);const c=["canvas"];let d=(()=>{class n{constructor(){this.width=600,this.height=600,this.x=0,this.y=0,this.spacing=10}onResize(n){location.reload()}ngOnInit(){}ngAfterViewInit(){this.width=this.canvasElement.nativeElement.offsetWidth,this.height=this.canvasElement.nativeElement.offsetHeight,this.p5Instance=new p5(this.start.bind(this))}start(n){n.setup=()=>{this.setup(n)},n.draw=()=>{this.draw()}}preload(){}setup(n){this.canvas=n,this.canvas.createCanvas(this.width,this.height).parent("canvas"),this.canvas.background(0)}draw(){this.canvas.stroke(255),this.canvas.random(1)<.5?this.canvas.line(this.x,this.y,this.x+this.spacing,this.y+this.spacing):this.canvas.line(this.x,this.y+this.spacing,this.x+this.spacing,this.y),this.x+=this.spacing,this.x>this.canvas.width&&(this.x=0,this.y+=this.spacing),this.y>this.canvas.height&&this.canvas.noLoop()}reset(){this.x=0,this.y=0,this.canvas.background(0),this.canvas.loop()}download(){domtoimage.toSvg(document.getElementById("canvas")).then(n=>{(new r.d).convertSvgToPng(n).then(n=>{var t=document.createElement("a");t.download=Date.now()+".png",t.href=n,t.click()})})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=a.Xpm({type:n,selectors:[["app-commodore"]],viewQuery:function(n,t){if(1&n&&a.Gf(c,5,a.SBq),2&n){let n;a.iGM(n=a.CRH())&&(t.canvasElement=n.first)}},hostBindings:function(n,t){1&n&&a.NdJ("resize",function(n){return t.onResize(n)},!1,a.Jf7)},decls:17,vars:1,consts:[["id","container"],["id","description"],["id","title"],["id","text"],["id","sliderContainer"],["for","slider"],["type","range","min","10","max","100","value","10","id","slider",3,"ngModel","ngModelChange","change"],["id","codeContainer"],["id","canvas"],["canvas",""],["id","btnContainer"],["id","btnDownload",3,"click"]],template:function(n,t){1&n&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a._uU(3,"Commodore"),a.qZA(),a.TgZ(4,"div",3),a._uU(5," Universe has a beautiful pattern. Find what you get! "),a.qZA(),a.TgZ(6,"div",4),a.TgZ(7,"div"),a.TgZ(8,"label",5),a._uU(9,"Size"),a.qZA(),a.qZA(),a.TgZ(10,"input",6),a.NdJ("ngModelChange",function(n){return t.spacing=n})("change",function(){return t.reset()}),a.qZA(),a.qZA(),a.qZA(),a.TgZ(11,"div",7),a._UZ(12,"div",8,9),a.TgZ(14,"div",10),a.TgZ(15,"button",11),a.NdJ("click",function(){return t.download()}),a._uU(16,"Download"),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&n&&(a.xp6(10),a.Q6J("ngModel",t.spacing))},directives:[s.eT,s.Fj,s.JJ,s.On],styles:["#container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;grid-gap:16px;gap:16px;padding:0 16px}#description[_ngcontent-%COMP%]{flex:1;width:95vw}#description[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]{font-size:64px}#description[_ngcontent-%COMP%]   #text[_ngcontent-%COMP%]{font-size:28px;text-align:justify}#codeContainer[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;grid-gap:14px;gap:14px;height:100vh;flex:1}#canvas[_ngcontent-%COMP%]{height:95vw;width:95vw;max-width:600px;max-height:600px;box-sizing:border-box;flex-grow:1}#btnDownload[_ngcontent-%COMP%]{border:none;height:64px;width:192px;font-size:32px;border-radius:50px;background:#263238;color:#fff;transition:all .6s cubic-bezier(.075,.82,.165,1)}#btnDownload[_ngcontent-%COMP%]:hover{cursor:pointer;background:#263338d4}  .CodeMirror{height:100%!important;width:100%!important;padding:32px!important;box-sizing:border-box}  .CodeMirror-scroll{overflow:hidden!important;box-sizing:border-box;align-items:center;justify-content:center;display:flex;flex-direction:column;padding-bottom:0!important}  .CodeMirror-hscrollbar{display:none!important}  .cm-string{color:#e37f00!important}canvas[_ngcontent-%COMP%]{display:none}#sliderContainer[_ngcontent-%COMP%]{margin-top:16px;font-size:32px;text-align:left;box-sizing:border-box}#sliderContainer[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{float:left}#slider[_ngcontent-%COMP%]{width:95vw;max-width:600px;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:#1f1f1f;margin-top:16px;padding:4px;box-sizing:border-box}#slider[_ngcontent-%COMP%]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:24px;height:24px;cursor:pointer;background-color:#fff}@media (max-width:640px){#container[_ngcontent-%COMP%]{flex-direction:column;padding:0 0 16px}#title[_ngcontent-%COMP%]{padding-top:36px}#sliderContainer[_ngcontent-%COMP%]{text-align:center}#slider[_ngcontent-%COMP%]{width:95vw}}"]}),n})();function p(n,t){if(1&n){const n=a.EpF();a.TgZ(0,"div",5),a.NdJ("click",function(){const t=a.CHM(n).$implicit;return a.oxw().openArt(t.url)}),a.TgZ(1,"div"),a._uU(2),a.qZA(),a.TgZ(3,"div"),a._uU(4),a.qZA(),a.qZA()}if(2&n){const n=t.$implicit;a.xp6(2),a.Oqu(n.title),a.xp6(2),a.Oqu(n.description)}}const g=[{path:"",component:(()=>{class n{constructor(n){this.router=n,this.arts=[{title:"Commodore",description:"Pattern drawn with lines",url:"/arts/commodore"}]}ngOnInit(){}openArt(n){this.router.navigateByUrl(n)}}return n.\u0275fac=function(t){return new(t||n)(a.Y36(o.F0))},n.\u0275cmp=a.Xpm({type:n,selectors:[["app-home"]],decls:6,vars:1,consts:[["id","container"],["id","labelContainer"],["id","label"],["id","artContainer"],["class","art",3,"click",4,"ngFor","ngForOf"],[1,"art",3,"click"]],template:function(n,t){1&n&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"label",2),a._uU(3,"Arts"),a.qZA(),a.qZA(),a.TgZ(4,"div",3),a.YNc(5,p,5,2,"div",4),a.qZA(),a.qZA()),2&n&&(a.xp6(5),a.Q6J("ngForOf",t.arts))},directives:[i.sg],styles:["#container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100vh;padding:0 16px}#container[_ngcontent-%COMP%]   #labelContainer[_ngcontent-%COMP%]{padding-top:36px}#container[_ngcontent-%COMP%]   #artContainer[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;grid-gap:36px;gap:36px;width:100%;margin-top:36px}#container[_ngcontent-%COMP%]   #artContainer[_ngcontent-%COMP%]   .art[_ngcontent-%COMP%]{width:30%}#label[_ngcontent-%COMP%]{width:100%;font-size:5rem}a[_ngcontent-%COMP%]{text-decoration:underline;color:#000;font-size:18px}@media (max-width:800px){#artContainer[_ngcontent-%COMP%]   .art[_ngcontent-%COMP%]{width:100%!important}}"]}),n})()},{path:"commodore",component:d}];let l=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[o.Bz.forChild(g)],o.Bz]}),n})(),h=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[i.ez,s.u5,l]]}),n})()}}]);