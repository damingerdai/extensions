!function(){function s(s,a){if(!(s instanceof a))throw new TypeError("Cannot call a class as a function")}function a(s,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(s,t.key,t)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Pg5x:function(n,t,e){"use strict";e.d(t,"a",(function(){return d}));var l=e("EM62"),o=e("W1gw"),p=e("cTZo"),c=e("PBFl"),r=e("Y2X+"),i=e("bFHC"),m=e("2kYt"),g=e("KZIX"),h=["demo"];function u(s,a){if(1&s){var n=l.Ub();l.Tb(0,"mat-tab",10),l.Tb(1,"div",11),l.Tb(2,"div",12),l.Tb(3,"button",13),l.ac("click",(function(){l.zc(n);var s=l.vc(8);return l.ec(2).copySource(s)})),l.Tb(4,"mat-icon"),l.Mc(5,"content_copy"),l.Sb(),l.Sb(),l.Sb(),l.Tb(6,"div",14),l.Ob(7,"pre",15,16),l.Sb(),l.Sb(),l.Sb()}if(2&s){var t=a.$implicit;l.mc("label",t.file),l.Bb(3),l.mc("matTooltip","Copy example source"),l.Bb(4),l.mc("innerHtml",t.content,l.Ac)}}function b(s,a){if(1&s&&(l.Tb(0,"div",8),l.Tb(1,"mat-tab-group"),l.Kc(2,u,9,3,"mat-tab",9),l.Sb(),l.Sb()),2&s){var n=l.ec();l.Bb(2),l.mc("ngForOf",n.exampleData.files)}}function j(s,a){if(1&s&&l.Ob(0,"div",17),2&s){var n=l.ec();l.mc("innerHtml",n.exampleData.description,l.Ac)}}function f(s,a){}var d=function(){var n=function(){function n(a,t,e){s(this,n),this.snackbar=a,this.copier=t,this.componentFactoryResolver=e,this.showSource=!1}var t,e,l;return t=n,(e=[{key:"ngOnInit",value:function(){var s=this.componentFactoryResolver.resolveComponentFactory(this.exampleData.component);this.demoComponentRef=this.demoRef.createComponent(s)}},{key:"ngOnDestroy",value:function(){this.demoComponentRef&&this.demoComponentRef.destroy()}},{key:"toggleSourceView",value:function(){this.showSource=!this.showSource}},{key:"copySource",value:function(s){this.copier.copyText(s.innerText)?this.snackbar.open("Code copied","",{duration:2500}):this.snackbar.open("Copy failed. Please try again!","",{duration:2500})}}])&&a(t.prototype,e),l&&a(t,l),n}();return n.\u0275fac=function(s){return new(s||n)(l.Nb(o.a),l.Nb(p.a),l.Nb(l.j))},n.\u0275cmp=l.Hb({type:n,selectors:[["example-viewer"]],viewQuery:function(s,a){var n;1&s&&l.Fc(h,!0,l.R),2&s&&l.uc(n=l.bc())&&(a.demoRef=n.first)},inputs:{type:"type",exampleData:"exampleData"},decls:13,vars:4,consts:[[1,"docs-example-viewer-wrapper"],[1,"docs-example-viewer-title"],[1,"docs-example-viewer-title-spacer"],["mat-icon-button","","type","button",3,"matTooltip","click"],["class","docs-example-viewer-source",4,"ngIf"],[1,"docs-example-viewer-body"],[3,"innerHtml",4,"ngIf"],["demo",""],[1,"docs-example-viewer-source"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[1,"docs-example-source-wrapper"],[1,"button-bar"],["mat-icon-button","","type","button","title","Copy example source","aria-label","Copy example source to clipboard",1,"docs-example-source-copy","docs-example-button",3,"matTooltip","click"],[1,"code-snippet"],[1,"docs-example-source",3,"innerHtml"],["textContent",""],[3,"innerHtml"]],template:function(s,a){1&s&&(l.Tb(0,"div",0),l.Tb(1,"div",1),l.Tb(2,"span"),l.Mc(3),l.Sb(),l.Ob(4,"div",2),l.Tb(5,"button",3),l.ac("click",(function(){return a.toggleSourceView()})),l.Tb(6,"mat-icon"),l.Mc(7,"code"),l.Sb(),l.Sb(),l.Sb(),l.Kc(8,b,3,1,"div",4),l.Tb(9,"div",5),l.Kc(10,j,1,1,"div",6),l.Kc(11,f,0,0,"ng-template",null,7,l.Lc),l.Sb(),l.Sb()),2&s&&(l.Bb(3),l.Nc(a.exampleData.title),l.Bb(2),l.mc("matTooltip","View source"),l.Bb(3),l.mc("ngIf",a.showSource),l.Bb(2),l.mc("ngIf",a.exampleData.description))},directives:[c.b,r.a,i.a,m.t,g.b,m.s,g.a],styles:["[_nghost-%COMP%]{display:block;padding:20px 0}.docs-example-viewer-wrapper[_ngcontent-%COMP%]{border-radius:4px}.docs-example-viewer-title[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;justify-content:center;padding:8px 8px 8px 16px}.docs-example-viewer-title-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.docs-example-viewer-body[_ngcontent-%COMP%]{padding:30px}.button-bar[_ngcontent-%COMP%]{float:right;padding:8px}.code-snippet[_ngcontent-%COMP%]{padding:20px}.docs-example-source[_ngcontent-%COMP%]{padding:0;margin:0;border:none;background:none;font-size:14px}"]}),n}()},ZJxj:function(a,n,t){"use strict";t.r(n),t.d(n,"PopoverOverviewComponent",(function(){return C})),t.d(n,"PopoverApiComponent",(function(){return q})),t.d(n,"PopoverModule",(function(){return k}));var e,l=t("sEIs"),o=t("M0ag"),p=t("EM62"),c=t("F1o0"),r=t("nIj0"),i=t("29Wa"),m=t("Cd2c"),g=t("+Tre"),h=t("PBFl"),u=t("vuIU"),b=t("qaHs"),j=t("Meci"),f={title:"Configurable popover",component:(e=function a(){s(this,a),this.xPosition="after",this.yPosition="below",this.enterDelay=200,this.leaveDelay=200,this.xOffset=0,this.yOffset=0,this.overlapTrigger=!1,this.closeOnPanelClick=!1},e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=p.Hb({type:e,selectors:[["loader-example"]],decls:62,vars:26,consts:[[3,"ngModel","ngModelChange"],["value","before"],["value","center"],["value","after"],["value","above"],["value","below"],["matInput","","type","number",3,"ngModel","ngModelChange"],["mat-raised-button","","color","primary","mtxPopoverTriggerOn","hover",3,"mtxPopoverTriggerFor"],["popoverTrigger","mtxPopoverTrigger"],[3,"xPosition","yPosition","enterDelay","leaveDelay","xOffset","yOffset","overlapTrigger","closeOnPanelClick","closeOnBackdropClick"],["popover","mtxPopover"],["mat-raised-button","","color","accent","mtxPopoverTriggerOn","click",3,"mtxPopoverTriggerFor"],["popoverTrigger2","mtxPopoverTrigger"],[3,"xPosition","yPosition","xOffset","yOffset","overlapTrigger","closeOnPanelClick","closeOnBackdropClick"],["popover2","mtxPopover"]],template:function(s,a){if(1&s&&(p.Tb(0,"h2"),p.Mc(1,"Popover configuration"),p.Sb(),p.Tb(2,"section"),p.Tb(3,"label"),p.Mc(4,"xPosition:"),p.Sb(),p.Tb(5,"mat-radio-group",0),p.ac("ngModelChange",(function(s){return a.xPosition=s})),p.Tb(6,"mat-radio-button",1),p.Mc(7,"before"),p.Sb(),p.Tb(8,"mat-radio-button",2),p.Mc(9,"center"),p.Sb(),p.Tb(10,"mat-radio-button",3),p.Mc(11,"after"),p.Sb(),p.Sb(),p.Sb(),p.Tb(12,"section"),p.Tb(13,"label"),p.Mc(14,"yPosition:"),p.Sb(),p.Tb(15,"mat-radio-group",0),p.ac("ngModelChange",(function(s){return a.yPosition=s})),p.Tb(16,"mat-radio-button",4),p.Mc(17,"above"),p.Sb(),p.Tb(18,"mat-radio-button",5),p.Mc(19,"below"),p.Sb(),p.Sb(),p.Sb(),p.Tb(20,"section"),p.Tb(21,"mat-form-field"),p.Tb(22,"mat-label"),p.Mc(23,"xOffset"),p.Sb(),p.Tb(24,"input",6),p.ac("ngModelChange",(function(s){return a.xOffset=s})),p.Sb(),p.Sb(),p.Tb(25,"mat-form-field"),p.Tb(26,"mat-label"),p.Mc(27,"yOffset"),p.Sb(),p.Tb(28,"input",6),p.ac("ngModelChange",(function(s){return a.yOffset=s})),p.Sb(),p.Sb(),p.Sb(),p.Tb(29,"section"),p.Tb(30,"mat-form-field"),p.Tb(31,"mat-label"),p.Mc(32,"enterDelay"),p.Sb(),p.Tb(33,"input",6),p.ac("ngModelChange",(function(s){return a.enterDelay=s})),p.Sb(),p.Sb(),p.Tb(34,"mat-form-field"),p.Tb(35,"mat-label"),p.Mc(36,"leaveDelay"),p.Sb(),p.Tb(37,"input",6),p.ac("ngModelChange",(function(s){return a.leaveDelay=s})),p.Sb(),p.Sb(),p.Sb(),p.Tb(38,"section"),p.Tb(39,"mat-checkbox",0),p.ac("ngModelChange",(function(s){return a.overlapTrigger=s})),p.Mc(40,"overlapTrigger"),p.Sb(),p.Sb(),p.Tb(41,"section"),p.Tb(42,"mat-checkbox",0),p.ac("ngModelChange",(function(s){return a.closeOnPanelClick=s})),p.Mc(43,"closeOnPanelClick"),p.Sb(),p.Sb(),p.Tb(44,"h2"),p.Mc(45,"Result"),p.Sb(),p.Tb(46,"button",7,8),p.Mc(48," Show Popover With Hover\n"),p.Sb(),p.Tb(49,"mtx-popover",9,10),p.Tb(51,"mat-card"),p.Tb(52,"mat-card-content"),p.Mc(53," A material design popover component created using Angular with the Angular CDK. "),p.Sb(),p.Sb(),p.Sb(),p.Tb(54,"button",11,12),p.Mc(56," Show Popover With Click\n"),p.Sb(),p.Tb(57,"mtx-popover",13,14),p.Tb(59,"mat-card"),p.Tb(60,"mat-card-content"),p.Mc(61," A material design popover component created using Angular with the Angular CDK. "),p.Sb(),p.Sb(),p.Sb()),2&s){var n=p.vc(50),t=p.vc(58);p.Bb(5),p.mc("ngModel",a.xPosition),p.Bb(10),p.mc("ngModel",a.yPosition),p.Bb(9),p.mc("ngModel",a.xOffset),p.Bb(4),p.mc("ngModel",a.yOffset),p.Bb(5),p.mc("ngModel",a.enterDelay),p.Bb(4),p.mc("ngModel",a.leaveDelay),p.Bb(2),p.mc("ngModel",a.overlapTrigger),p.Bb(3),p.mc("ngModel",a.closeOnPanelClick),p.Bb(4),p.mc("mtxPopoverTriggerFor",n),p.Bb(3),p.mc("xPosition",a.xPosition)("yPosition",a.yPosition)("enterDelay",a.enterDelay)("leaveDelay",a.leaveDelay)("xOffset",a.xOffset)("yOffset",a.yOffset)("overlapTrigger",a.overlapTrigger)("closeOnPanelClick",a.closeOnPanelClick)("closeOnBackdropClick",!0),p.Bb(5),p.mc("mtxPopoverTriggerFor",t),p.Bb(3),p.mc("xPosition",a.xPosition)("yPosition",a.yPosition)("xOffset",a.xOffset)("yOffset",a.yOffset)("overlapTrigger",a.overlapTrigger)("closeOnPanelClick",a.closeOnPanelClick)("closeOnBackdropClick",!0)}},directives:[c.b,r.m,r.p,c.a,i.c,i.g,m.b,r.s,r.d,g.a,h.b,u.a,b.a,j.a,j.c],styles:[".mat-radio-button[_ngcontent-%COMP%]{margin:1em}.mat-checkbox[_ngcontent-%COMP%]{display:inline-block;margin:1rem 1rem 1rem 0}.mat-button-base[_ngcontent-%COMP%]{margin:0 .5em 5em}.mat-card[_ngcontent-%COMP%]{max-width:300px}"]}),e),files:[{file:"app.component.html",content:t("l94J"),filecontent:t("jatB")},{file:"app.component.ts",content:t("daT1"),filecontent:t("pZGE")},{file:"app.component.scss",content:t("tBLV"),filecontent:t("zW6d")}]},d=t("2kYt"),v=t("Pg5x");function x(s,a){if(1&s&&(p.Rb(0),p.Ob(1,"example-viewer",2),p.Qb()),2&s){var n=a.$implicit;p.Bb(1),p.mc("exampleData",n)}}function y(s,a){if(1&s&&(p.Rb(0),p.Kc(1,x,2,1,"ng-container",1),p.Qb()),2&s){var n=a.ngIf;p.Bb(1),p.mc("ngForOf",n.examples)}}var P,T,O,C=((O=function a(n){s(this,a),this.route=n}).\u0275fac=function(s){return new(s||O)(p.Nb(l.a))},O.\u0275cmp=p.Hb({type:O,selectors:[["app-popover-overview"]],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"exampleData"]],template:function(s,a){1&s&&(p.Kc(0,y,2,1,"ng-container",0),p.fc(1,"async")),2&s&&p.mc("ngIf",p.gc(1,1,a.route.data))},directives:[d.t,d.s,v.a],pipes:[d.b],encapsulation:2}),O),q=((T=function a(n){s(this,a),this.route=n}).\u0275fac=function(s){return new(s||T)(p.Nb(l.a))},T.\u0275cmp=p.Hb({type:T,selectors:[["app-popover-api"]],decls:1,vars:0,template:function(s,a){1&s&&p.Mc(0,"Coming soon\n")},encapsulation:2}),T),k=((P=function a(){s(this,a)}).\u0275mod=p.Lb({type:P}),P.\u0275inj=p.Kb({factory:function(s){return new(s||P)},imports:[[o.c,l.j.forChild([{path:"",redirectTo:"overview",pathMatch:"full"},{path:"overview",component:C,pathMatch:"full",data:{examples:[f]}},{path:"api",component:q,pathMatch:"full"},{path:"**",redirectTo:"overview"}])]]}),P)},daT1:function(s,a){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">&#x27;loader-example&#x27;</span>,\n  templateUrl: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  styleUrls: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  xPosition = <span class="hljs-string">&#x27;after&#x27;</span>;\n  yPosition = <span class="hljs-string">&#x27;below&#x27;</span>;\n  enterDelay = <span class="hljs-number">200</span>;\n  leaveDelay = <span class="hljs-number">200</span>;\n  xOffset = <span class="hljs-number">0</span>;\n  yOffset = <span class="hljs-number">0</span>;\n  overlapTrigger = <span class="hljs-literal">false</span>;\n  closeOnPanelClick = <span class="hljs-literal">false</span>;\n}\n'},jatB:function(s,a,n){"use strict";n.r(a),a.default='<h2>Popover configuration</h2>\n\n<section>\n  <label>xPosition:</label>\n  <mat-radio-group [(ngModel)]="xPosition">\n    <mat-radio-button value="before">before</mat-radio-button>\n    <mat-radio-button value="center">center</mat-radio-button>\n    <mat-radio-button value="after">after</mat-radio-button>\n  </mat-radio-group>\n</section>\n\n<section>\n  <label>yPosition:</label>\n  <mat-radio-group [(ngModel)]="yPosition">\n    <mat-radio-button value="above">above</mat-radio-button>\n    <mat-radio-button value="below">below</mat-radio-button>\n  </mat-radio-group>\n</section>\n\n<section>\n  <mat-form-field>\n    <mat-label>xOffset</mat-label>\n    <input matInput type="number" [(ngModel)]="xOffset">\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>yOffset</mat-label>\n    <input matInput type="number" [(ngModel)]="yOffset">\n  </mat-form-field>\n</section>\n\n<section>\n  <mat-form-field>\n    <mat-label>enterDelay</mat-label>\n    <input matInput type="number" [(ngModel)]="enterDelay">\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>leaveDelay</mat-label>\n    <input matInput type="number" [(ngModel)]="leaveDelay">\n  </mat-form-field>\n</section>\n\n<section>\n  <mat-checkbox [(ngModel)]="overlapTrigger">overlapTrigger</mat-checkbox>\n</section>\n\n<section>\n  <mat-checkbox [(ngModel)]="closeOnPanelClick">closeOnPanelClick</mat-checkbox>\n</section>\n\n<h2>Result</h2>\n\n<button mat-raised-button color="primary"\n        #popoverTrigger="mtxPopoverTrigger"\n        [mtxPopoverTriggerFor]="popover"\n        mtxPopoverTriggerOn="hover">\n  Show Popover With Hover\n</button>\n\n<mtx-popover #popover="mtxPopover"\n             [xPosition]="xPosition"\n             [yPosition]="yPosition"\n             [enterDelay]="enterDelay"\n             [leaveDelay]="leaveDelay"\n             [xOffset]="xOffset"\n             [yOffset]="yOffset"\n             [overlapTrigger]="overlapTrigger"\n             [closeOnPanelClick]="closeOnPanelClick"\n             [closeOnBackdropClick]="true">\n  <mat-card>\n    <mat-card-content>\n      A material design popover component created using Angular with the Angular CDK.\n    </mat-card-content>\n  </mat-card>\n</mtx-popover>\n\n<button mat-raised-button color="accent"\n        #popoverTrigger2="mtxPopoverTrigger"\n        [mtxPopoverTriggerFor]="popover2"\n        mtxPopoverTriggerOn="click">\n  Show Popover With Click\n</button>\n\n<mtx-popover #popover2="mtxPopover"\n             [xPosition]="xPosition"\n             [yPosition]="yPosition"\n             [xOffset]="xOffset"\n             [yOffset]="yOffset"\n             [overlapTrigger]="overlapTrigger"\n             [closeOnPanelClick]="closeOnPanelClick"\n             [closeOnBackdropClick]="true">\n  <mat-card>\n    <mat-card-content>\n      A material design popover component created using Angular with the Angular CDK.\n    </mat-card-content>\n  </mat-card>\n</mtx-popover>\n'},l94J:function(s,a){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Popover configuration<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>xPosition:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;xPosition&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;before&quot;</span>&gt;</span>before<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;center&quot;</span>&gt;</span>center<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;after&quot;</span>&gt;</span>after<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>yPosition:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;yPosition&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;above&quot;</span>&gt;</span>above<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;below&quot;</span>&gt;</span>below<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-label</span>&gt;</span>xOffset<span class="hljs-tag">&lt;/<span class="hljs-name">mat-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">matInput</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;xOffset&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-label</span>&gt;</span>yOffset<span class="hljs-tag">&lt;/<span class="hljs-name">mat-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">matInput</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;yOffset&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-label</span>&gt;</span>enterDelay<span class="hljs-tag">&lt;/<span class="hljs-name">mat-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">matInput</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;enterDelay&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-label</span>&gt;</span>leaveDelay<span class="hljs-tag">&lt;/<span class="hljs-name">mat-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">matInput</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;leaveDelay&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;overlapTrigger&quot;</span>&gt;</span>overlapTrigger<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;closeOnPanelClick&quot;</span>&gt;</span>closeOnPanelClick<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Result<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-raised-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;primary&quot;</span>\n        #<span class="hljs-attr">popoverTrigger</span>=<span class="hljs-string">&quot;mtxPopoverTrigger&quot;</span>\n        [<span class="hljs-attr">mtxPopoverTriggerFor</span>]=<span class="hljs-string">&quot;popover&quot;</span>\n        <span class="hljs-attr">mtxPopoverTriggerOn</span>=<span class="hljs-string">&quot;hover&quot;</span>&gt;</span>\n  Show Popover With Hover\n<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-popover</span> #<span class="hljs-attr">popover</span>=<span class="hljs-string">&quot;mtxPopover&quot;</span>\n             [<span class="hljs-attr">xPosition</span>]=<span class="hljs-string">&quot;xPosition&quot;</span>\n             [<span class="hljs-attr">yPosition</span>]=<span class="hljs-string">&quot;yPosition&quot;</span>\n             [<span class="hljs-attr">enterDelay</span>]=<span class="hljs-string">&quot;enterDelay&quot;</span>\n             [<span class="hljs-attr">leaveDelay</span>]=<span class="hljs-string">&quot;leaveDelay&quot;</span>\n             [<span class="hljs-attr">xOffset</span>]=<span class="hljs-string">&quot;xOffset&quot;</span>\n             [<span class="hljs-attr">yOffset</span>]=<span class="hljs-string">&quot;yOffset&quot;</span>\n             [<span class="hljs-attr">overlapTrigger</span>]=<span class="hljs-string">&quot;overlapTrigger&quot;</span>\n             [<span class="hljs-attr">closeOnPanelClick</span>]=<span class="hljs-string">&quot;closeOnPanelClick&quot;</span>\n             [<span class="hljs-attr">closeOnBackdropClick</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-card</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-card-content</span>&gt;</span>\n      A material design popover component created using Angular with the Angular CDK.\n    <span class="hljs-tag">&lt;/<span class="hljs-name">mat-card-content</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-card</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-popover</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-raised-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;accent&quot;</span>\n        #<span class="hljs-attr">popoverTrigger2</span>=<span class="hljs-string">&quot;mtxPopoverTrigger&quot;</span>\n        [<span class="hljs-attr">mtxPopoverTriggerFor</span>]=<span class="hljs-string">&quot;popover2&quot;</span>\n        <span class="hljs-attr">mtxPopoverTriggerOn</span>=<span class="hljs-string">&quot;click&quot;</span>&gt;</span>\n  Show Popover With Click\n<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-popover</span> #<span class="hljs-attr">popover2</span>=<span class="hljs-string">&quot;mtxPopover&quot;</span>\n             [<span class="hljs-attr">xPosition</span>]=<span class="hljs-string">&quot;xPosition&quot;</span>\n             [<span class="hljs-attr">yPosition</span>]=<span class="hljs-string">&quot;yPosition&quot;</span>\n             [<span class="hljs-attr">xOffset</span>]=<span class="hljs-string">&quot;xOffset&quot;</span>\n             [<span class="hljs-attr">yOffset</span>]=<span class="hljs-string">&quot;yOffset&quot;</span>\n             [<span class="hljs-attr">overlapTrigger</span>]=<span class="hljs-string">&quot;overlapTrigger&quot;</span>\n             [<span class="hljs-attr">closeOnPanelClick</span>]=<span class="hljs-string">&quot;closeOnPanelClick&quot;</span>\n             [<span class="hljs-attr">closeOnBackdropClick</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-card</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-card-content</span>&gt;</span>\n      A material design popover component created using Angular with the Angular CDK.\n    <span class="hljs-tag">&lt;/<span class="hljs-name">mat-card-content</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-card</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-popover</span>&gt;</span>\n'},pZGE:function(s,a,n){"use strict";n.r(a),a.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'loader-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  xPosition = 'after';\n  yPosition = 'below';\n  enterDelay = 200;\n  leaveDelay = 200;\n  xOffset = 0;\n  yOffset = 0;\n  overlapTrigger = false;\n  closeOnPanelClick = false;\n}\n"},tBLV:function(s,a){s.exports='<span class="hljs-selector-class">.mat-radio-button</span> {\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">1em</span>;\n}\n\n<span class="hljs-selector-class">.mat-checkbox</span> {\n  <span class="hljs-attribute">display</span>: inline-block;\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">1rem</span> <span class="hljs-number">1rem</span> <span class="hljs-number">1rem</span> <span class="hljs-number">0</span>;\n}\n\n<span class="hljs-selector-class">.mat-button-base</span> {\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> .<span class="hljs-number">5em</span> <span class="hljs-number">5em</span>;\n}\n\n<span class="hljs-selector-class">.mat-card</span> {\n  <span class="hljs-attribute">max-width</span>: <span class="hljs-number">300px</span>;\n}\n'},zW6d:function(s,a,n){"use strict";n.r(a),a.default=".mat-radio-button {\n  margin: 1em;\n}\n\n.mat-checkbox {\n  display: inline-block;\n  margin: 1rem 1rem 1rem 0;\n}\n\n.mat-button-base {\n  margin: 0 .5em 5em;\n}\n\n.mat-card {\n  max-width: 300px;\n}\n"}}])}();