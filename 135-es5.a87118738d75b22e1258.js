!function(){"use strict";function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function t(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}(self.webpackChunkextensions_srcs=self.webpackChunkextensions_srcs||[]).push([[135],{95135:function(e,i,o){o.r(i),o.d(i,{ComponentsModule:function(){return x}});var r,s=o(54655),c=o(81940),u=o(79765),a=o(37716),l=o(41710),p=o(65939),d=o(45435),h=o(13653),f=o(75319),v=((r=function(){function e(t){var i=this;n(this,e),this.router=t,this.subscriptions=new f.w,this.navigationFocusRequests=[],this.skipLinkFocusRequests=[],this.navigationEndEvents=this.router.events.pipe((0,d.h)(function(n){return n instanceof s.m2})),this.softNavigations=this.navigationEndEvents.pipe((0,h.T)(1)),this.subscriptions.add(this.softNavigations.subscribe(function(){i.router.url.split("#")[1]||setTimeout(function(){i.navigationFocusRequests.length&&i.navigationFocusRequests[i.navigationFocusRequests.length-1].focus({preventScroll:!0})},100)}))}return t(e,[{key:"ngOnDestroy",value:function(){this.subscriptions.unsubscribe()}},{key:"requestFocusOnNavigation",value:function(n){this.navigationFocusRequests.push(n)}},{key:"relinquishFocusOnNavigation",value:function(n){this.navigationFocusRequests.splice(this.navigationFocusRequests.indexOf(n),1)}},{key:"requestSkipLinkFocus",value:function(n){this.skipLinkFocusRequests.push(n),this.setSkipLinkHref(n)}},{key:"relinquishSkipLinkFocus",value:function(n){this.skipLinkFocusRequests.splice(this.skipLinkFocusRequests.indexOf(n),1),this.setSkipLinkHref(this.skipLinkFocusRequests[this.skipLinkFocusRequests.length-1])}},{key:"setSkipLinkHref",value:function(n){var e=this.router.url.split("#")[0];this.skipLinkHref=n?"".concat(e,"#").concat(n.id):null}},{key:"getSkipLinkHref",value:function(){return this.skipLinkHref}},{key:"isNavigationWithinComponentView",value:function(n,e){var t=/(components|cdk)\/([^\/]+)/,i=n.match(t),o=e.match(t);return n&&e&&i&&o&&i[0]===o[0]&&i[1]===o[1]}}]),e}()).\u0275fac=function(n){return new(n||r)(a.LFG(s.F0))},r.\u0275prov=a.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r),m=0,k=function(){var e=function(){function e(t,i){n(this,e),this.el=t,this.navigationFocusService=i,this.tabindex="-1",this.outline="none",t.nativeElement.id||(t.nativeElement.id="skip-link-target-"+m++),this.navigationFocusService.requestFocusOnNavigation(t.nativeElement),this.navigationFocusService.requestSkipLinkFocus(t.nativeElement)}return t(e,[{key:"ngOnDestroy",value:function(){this.navigationFocusService.relinquishFocusOnNavigation(this.el.nativeElement),this.navigationFocusService.relinquishSkipLinkFocus(this.el.nativeElement)}}]),e}();return e.\u0275fac=function(n){return new(n||e)(a.Y36(a.SBq),a.Y36(v))},e.\u0275dir=a.lG2({type:e,selectors:[["","focusOnNavigation",""]],hostVars:3,hostBindings:function(n,e){2&n&&(a.Ikx("tabindex",e.tabindex),a.Udp("outline",e.outline))}}),e}(),g=o(38583);function b(n,e){if(1&n&&(a.TgZ(0,"a",4,5),a._uU(2),a.qZA()),2&n){var t=e.$implicit,i=a.MAs(1),o=a.oxw();a.Q6J("routerLink",o.componentId+"/"+t.toLowerCase())("active",i.isActive),a.xp6(2),a.Oqu(t)}}var w=[{path:"",component:function(){var e=function(){function e(t,i,o){var r=this;n(this,e),this.router=i,this._componentPageTitle=o,this.sections=new Set(["overview","api"]),this._destroyed=new u.xQ,this.componentId="",t.parent&&[t.params].push(t.parent.params),this.router.events.subscribe(function(n){n instanceof s.m2&&(r.componentId=n.url.split("/")[2],r._componentPageTitle.title=r.componentId)})}return t(e,[{key:"ngOnDestroy",value:function(){this._destroyed.next(),this._destroyed.complete()}}]),e}();return e.\u0275fac=function(n){return new(n||e)(a.Y36(s.gz),a.Y36(s.F0),a.Y36(l._))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-component-viewer"]],decls:5,vars:1,consts:[[1,"docs-component-viewer"],["mat-tab-nav-bar","","aria-label","Documentation Sections","id","component-viewer","focusOnNavigation","",1,"docs-component-viewer-tabbed-content"],["mat-tab-link","","class","docs-component-viewer-section-tab","routerLinkActive","",3,"routerLink","active",4,"ngFor","ngForOf"],[1,"docs-component-viewer-content"],["mat-tab-link","","routerLinkActive","",1,"docs-component-viewer-section-tab",3,"routerLink","active"],["rla","routerLinkActive"]],template:function(n,e){1&n&&(a.TgZ(0,"div",0),a.TgZ(1,"nav",1),a.YNc(2,b,3,3,"a",2),a.qZA(),a.TgZ(3,"div",3),a._UZ(4,"router-outlet"),a.qZA(),a.qZA()),2&n&&(a.xp6(2),a.Q6J("ngForOf",e.sections))},directives:[p.BU,k,g.sg,s.lC,s.yS,p.Nj,s.Od],styles:["app-component-viewer{font-weight:400;padding:20px 50px}@media (max-width: 599px){app-component-viewer{padding-left:15px;padding-right:15px}}.docs-component-viewer-section-tab{text-transform:uppercase}.docs-component-viewer-tabbed-content{margin-bottom:25px}.docs-component-viewer-content{position:relative;min-height:500px}.docs-component-viewer-content component-overview,.docs-component-viewer-content component-api{display:flex;align-items:flex-start}@media (max-width: 959px){.docs-component-viewer-content component-overview,.docs-component-viewer-content component-api{flex-direction:column}}.docs-component-viewer-content table-of-contents{top:35px;position:sticky}@media (max-width: 959px){.docs-component-viewer-content table-of-contents{order:-1;position:inherit;width:auto;padding-left:0}}.docs-component-view-text-content{flex-grow:1;width:100%}.docs-component-api,.docs-component-overview{width:80%;display:inline-flex}@media (max-width: 959px){.docs-component-api,.docs-component-overview{width:100%;margin-right:0}}\n"],encapsulation:2}),e}(),children:[{path:"alert",loadChildren:function(){return Promise.all([o.e(592),o.e(891)]).then(o.bind(o,76891)).then(function(n){return n.AlertModule})}},{path:"button",loadChildren:function(){return o.e(37).then(o.bind(o,83037)).then(function(n){return n.ButtonModule})}},{path:"checkbox-group",loadChildren:function(){return Promise.all([o.e(137),o.e(438)]).then(o.bind(o,18438)).then(function(n){return n.CheckboxGroupModule})}},{path:"color-picker",loadChildren:function(){return Promise.all([o.e(66),o.e(142)]).then(o.bind(o,25142)).then(function(n){return n.ColorPickerModule})}},{path:"data-grid",loadChildren:function(){return Promise.all([o.e(137),o.e(854)]).then(o.bind(o,89854)).then(function(n){return n.DataGridModule})}},{path:"dialog",loadChildren:function(){return Promise.all([o.e(137),o.e(803)]).then(o.bind(o,14803)).then(function(n){return n.DialogModule})}},{path:"loader",loadChildren:function(){return o.e(977).then(o.bind(o,63977)).then(function(n){return n.LoaderModule})}},{path:"popover",loadChildren:function(){return o.e(582).then(o.bind(o,15582)).then(function(n){return n.PopoverModule})}},{path:"progress",loadChildren:function(){return Promise.all([o.e(66),o.e(645)]).then(o.bind(o,64645)).then(function(n){return n.ProgressModule})}},{path:"select",loadChildren:function(){return Promise.all([o.e(562),o.e(592),o.e(730)]).then(o.bind(o,75730)).then(function(n){return n.SelectModule})}},{path:"split-pane",loadChildren:function(){return o.e(835).then(o.bind(o,45835)).then(function(n){return n.SplitPaneModule})}},{path:"tooltip",loadChildren:function(){return o.e(655).then(o.bind(o,86655)).then(function(n){return n.TooltipModule})}},{path:"form-group",loadChildren:function(){return Promise.all([o.e(562),o.e(870)]).then(o.bind(o,62870)).then(function(n){return n.FormGroupModule})}},{path:"text3d",loadChildren:function(){return o.e(878).then(o.bind(o,30878)).then(function(n){return n.Text3dModule})}}]}],x=function(){var e=function e(){n(this,e)};return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[c.m,s.Bz.forChild(w)]]}),e}()}}])}();