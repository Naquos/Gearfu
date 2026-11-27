import{n as G,t as C}from"./chunk-OIx1IHzz.js";import{$n as kc,$t as S,A as g,An as bN,At as I0,Bn as f,Bt as Lc,Cn as Z,Cr as qp,Ct as Fe,Dt as Gt,En as a0,Er as sa,F as Ba,Fr as vo,Ft as Js,Gt as Ne,Hr as z7,I as Fa,In as dQ,Ir as wD,It as KP,Jn as hK,Jt as Oe,K as Ya,Kt as O,L as Go,Ln as dn$1,Lr as wt,Mn as c0,Mr as un,Mt as Io,Nn as cc,Nr as v$1,Nt as J,On as aw,Or as tT,Ot as He,Pn as d0,Pr as vZ,Rn as dv,Rr as xD,Rt as Ko,Sn as Yr,Sr as qn$1,St as Fc,Tn as _0,Tt as Ge,Un as fn$1,Ur as z9,Vr as z,Vt as Lg,W as Uc,Wn as fv,Wr as zD,Wt as NF,Xn as j,Xt as Pc,Y as at,Yn as iK,Yt as P,Zn as jQ,Zt as Qs,_n as X0,an as Us,bn as Yo,br as q,bt as Ee,ct as $o,dn as W7,dr as nt,dt as AL,en as SN,er as ke,fn as W9,fr as o0,ft as Ae,gn as X,gr as pD,gt as CO,hn as Wt,hr as ox,j as v,jn as bo,jr as uT,jt as Ic,k as u,kn as ax,kr as u0,ln as Vs,lt as $p,m as ht,mn as Wp,mt as At,n as Bt$1,nn as TD,on as V,or as lm,ot as x,p as ct,pn as Wn$1,pt as Ar,qn as hD,qt as OP,rr as l0,sn as VQ,sr as lr,st as $M,tn as Sr,un as Vw,ur as ni,ut as AD,vn as Y0,vr as po,vt as DP,wn as Zg,wr as rK,xn as Yp,xr as qD,xt as Fb,yn as YD,yr as pt,yt as E0,zn as ee$1,zr as xc}from"./main-5FPO3G3T.js";import{n as Ht$1,r as kt,t as $t}from"./chunk-BLJJkoxg.js";var Bt=class n{sortFormService=f(Ya);sortService=f(Fa);codeBuild=hK(this.sortFormService.codeBuild$.pipe(J(a=>a?a.split(`-`):[]),J(a=>a.length===0?``:a.map(t=>this.sortService.getDescriptionSortByGfxId(+t)).map(t=>t?t.id:`0`).join(`-`))),{initialValue:``});copyToClipboards(){navigator.clipboard.writeText(this.codeBuild()).then()}static ɵfac=function(t){return new(t||n)};static ɵcmp=un({type:n,selectors:[[`app-code-deck`]],decls:6,vars:8,consts:[[1,`code-aptitudes`],[`readonly`,``,3,`value`],[`appRipple`,``,`aria-hidden`,`false`,`fontIcon`,`file_copy`,3,`appActivate`,`matTooltip`,`matTooltipShowDelay`]],template:function(t,e){t&1&&(cc(0,`div`,0),qp(1),ox(2,`translate`),AD(3,`input`,1),cc(4,`mat-icon`,2),ox(5,`translate`),dn$1(`appActivate`,function(){return e.copyToClipboards()}),$p()()),t&2&&(Ic(),Yp(` `,ax(2,4,`sorts.code-deck`),` : `),Ic(2),wD(`value`,e.codeBuild()),Ic(),wD(`matTooltip`,ax(5,6,`sorts.copy-code`))(`matTooltipShowDelay`,300))},dependencies:[iK,W9,z9,dQ,KP,u,v,rK],styles:[`.code-aptitudes[_ngcontent-%COMP%]{font-weight:var(--%NS%font-weight-title)}mat-icon[_ngcontent-%COMP%]{background-color:var(--%NS%color-surface-empty)}`]})};var _n=new v$1(`MatTabContent`);var fn=(()=>{class n{template=f(Gt);static ɵfac=function(e){return new(e||n)};static ɵdir=X({type:n,selectors:[[``,`matTabContent`,``]],features:[pt([{provide:_n,useExisting:n}])]})}return n})();var vn=new v$1(`MatTabLabel`);var rn=new v$1(`MAT_TAB`);var yn=(()=>{class n extends z7{_closestTab=f(rn,{optional:!0});static ɵfac=(()=>{let t;return function(i){return(t||(t=He(n)))(i||n)}})();static ɵdir=X({type:n,selectors:[[``,`mat-tab-label`,``],[``,`matTabLabel`,``]],features:[pt([{provide:vn,useExisting:n}]),ke]})}return n})();var sn=new v$1(`MAT_TAB_GROUP`);var oe=(()=>{class n{_viewContainerRef=f(nt);_closestTabGroup=f(sn,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel=``;ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new O;position=null;origin=null;isActive=!1;constructor(){f(po).load(ht)}ngOnChanges(t){(Object.hasOwn(t,`textLabel`)||Object.hasOwn(t,`disabled`))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Io(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`*`];function e(i,r){i&1&&Lc(0)}return un({type:n,selectors:[[`mat-tab`]],contentQueries:function(r,h,y){if(r&1&&xD(y,yn,5)(y,fn,7,Gt),r&2){let x;kc(x=Pc())&&(h.templateLabel=x.first),kc(x=Pc())&&(h._explicitContent=x.first)}},viewQuery:function(r,h){if(r&1&&Vs(Gt,7),r&2){let y;kc(y=Pc())&&(h._implicitContent=y.first)}},hostAttrs:[`hidden`,``],hostVars:1,hostBindings:function(r,h){r&2&&ni(`id`,null)},inputs:{disabled:[2,`disabled`,`disabled`,Oe],textLabel:[0,`label`,`textLabel`],ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],labelClass:`labelClass`,bodyClass:`bodyClass`,id:`id`},exportAs:[`matTab`],features:[pt([{provide:rn,useExisting:n}]),wt],ngContentSelectors:t,decls:1,vars:0,template:function(r,h){r&1&&(xc(),pD(0,e,1,0,`ng-template`))},encapsulation:2,changeDetection:1})})()}return n})();var te=`mdc-tab-indicator--active`;var nn=`mdc-tab-indicator--no-transition`;var ne=class{_items;_currentItem;constructor(a){this._items=a}hide(){this._items.forEach(a=>a.deactivateInkBar()),this._currentItem=void 0}alignToElement(a){let t=this._items.find(i=>i.elementRef.nativeElement===a),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let i=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(i),this._currentItem=t}}};var Cn=(()=>{class n{_elementRef=f(Z);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(te);return}let i=e.getBoundingClientRect(),r=t.width/i.width,h=t.left-i.left;e.classList.add(nn),this._inkBarContentElement.style.setProperty(`transform`,`translateX(${h}px) scaleX(${r})`),e.getBoundingClientRect(),e.classList.remove(nn),e.classList.add(te),this._inkBarContentElement.style.setProperty(`transform`,``)}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(te)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement(`span`),i=this._inkBarContentElement=t.createElement(`span`);e.className=`mdc-tab-indicator`,i.className=`mdc-tab-indicator__content mdc-tab-indicator__content--underline`,e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;(this._fitToContent?this._elementRef.nativeElement.querySelector(`.mdc-tab__content`):this._elementRef.nativeElement).appendChild(this._inkBarElement)}static ɵfac=function(e){return new(e||n)};static ɵdir=X({type:n,inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,Oe]}})}return n})();var cn=(()=>{class n extends Cn{elementRef=f(Z);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static ɵfac=(()=>{let t;return function(i){return(t||(t=He(n)))(i||n)}})();static ɵdir=X({type:n,selectors:[[``,`matTabLabelWrapper`,``]],hostVars:3,hostBindings:function(e,i){e&2&&(ni(`aria-disabled`,!!i.disabled),fn$1(`mat-mdc-tab-disabled`,i.disabled))},inputs:{disabled:[2,`disabled`,`disabled`,Oe]},features:[ke]})}return n})();var an={passive:!0};var xn=650;var Sn=100;function ee(n){let a=n+``;return/^[0-9]+(?:\.[0-9]+)?$/.test(a)?`${n}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(a)?a:``}var kn=(()=>{class n{_elementRef=f(Z);_changeDetectorRef=f(At);_viewportRuler=f(bo);_dir=f(lr,{optional:!0});_ngZone=f(V);_platform=f(Ae);_sharedResizeObserver=f(x);_injector=f(j);_renderer=f(Ne);_animationsDisabled=lm();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new O;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new O;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new q;indexFocused=new q;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,`mouseleave`,()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`before`),an),this._renderer.listen(this._nextPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`after`),an))}ngAfterContentInit(){let t=this._dir?this._dir.change:Ee(`ltr`),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Wn$1(32),Ge(this._destroyed)),i=this._viewportRuler.change(150).pipe(Ge(this._destroyed)),r=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Zg(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Wt(r,{injector:this._injector}),Vw(t,i,e,this._items.changes,this._itemsResized()).pipe(Ge(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),r()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(h=>{this.indexFocused.emit(h),this._setTabFocus(h)})}_itemsResized(){return typeof ResizeObserver!=`function`?Sr:this._items.changes.pipe(Ko(this._items),Ar(t=>new P(e=>this._ngZone.runOutsideAngular(()=>{let i=new ResizeObserver(r=>e.next(r));return t.forEach(r=>i.observe(r.elementRef.nativeElement)),()=>{i.disconnect()}}))),Yo(1),Fe(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!vo(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||``,this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()==`ltr`?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()===`ltr`?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,i=(t==`before`?-1:1)*e/3;return this._scrollTo(this._scrollDistance+i)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let i=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:r,offsetWidth:h}=e.elementRef.nativeElement,y,x;this._getLayoutDirection()==`ltr`?(y=r,x=y+h):(x=this._tabListInner.nativeElement.offsetWidth-r,y=x-h);let P=this.scrollDistance,b=this.scrollDistance+i;y<P?this.scrollDistance-=P-y:x>b&&(this.scrollDistance+=Math.min(x-b,y-P))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let i=this._tabListInner.nativeElement.scrollWidth-this._elementRef.nativeElement.offsetWidth>=5;i||(this.scrollDistance=0),i!==this._showPaginationControls&&(this._showPaginationControls=i,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),$o(xn,Sn).pipe(Ge(Vw(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:i,distance:r}=this._scrollHeader(t);(r===0||r>=i)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static ɵfac=function(e){return new(e||n)};static ɵdir=X({type:n,inputs:{disablePagination:[2,`disablePagination`,`disablePagination`,Oe],selectedIndex:[2,`selectedIndex`,`selectedIndex`,AL]},outputs:{selectFocusedIndex:`selectFocusedIndex`,indexFocused:`indexFocused`}})}return n})();var Tn=(()=>{class n extends kn{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new ne(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static ɵfac=(()=>{let t;return function(i){return(t||(t=He(n)))(i||n)}})();static ɵcmp=(function(){let t=[`tabListContainer`],e=[`tabList`],i=[`tabListInner`],r=[`nextPaginator`],h=[`previousPaginator`];return un({type:n,selectors:[[`mat-tab-header`]],contentQueries:function(P,b,m){if(P&1&&xD(m,cn,4),P&2){let g;kc(g=Pc())&&(b._items=g)}},viewQuery:function(P,b){if(P&1&&Vs(t,7)(e,7)(i,7)(r,5)(h,5),P&2){let m;kc(m=Pc())&&(b._tabListContainer=m.first),kc(m=Pc())&&(b._tabList=m.first),kc(m=Pc())&&(b._tabListInner=m.first),kc(m=Pc())&&(b._nextPaginator=m.first),kc(m=Pc())&&(b._previousPaginator=m.first)}},hostAttrs:[1,`mat-mdc-tab-header`],hostVars:4,hostBindings:function(P,b){P&2&&fn$1(`mat-mdc-tab-header-pagination-controls-enabled`,b._showPaginationControls)(`mat-mdc-tab-header-rtl`,b._getLayoutDirection()==`rtl`)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],disableRipple:[2,`disableRipple`,`disableRipple`,Oe]},features:[ke],ngContentSelectors:[`*`],decls:13,vars:10,consts:[[`previousPaginator`,``],[`tabListContainer`,``],[`tabList`,``],[`tabListInner`,``],[`nextPaginator`,``],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-before`,3,`click`,`mousedown`,`touchend`,`matRippleDisabled`],[1,`mat-mdc-tab-header-pagination-chevron`],[1,`mat-mdc-tab-label-container`,3,`keydown`],[`role`,`tablist`,1,`mat-mdc-tab-list`,3,`cdkObserveContent`],[1,`mat-mdc-tab-labels`],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-after`,3,`mousedown`,`click`,`touchend`,`matRippleDisabled`]],template:function(P,b){P&1&&(xc(),cc(0,`div`,5,0),dn$1(`click`,function(){return b._handlePaginatorClick(`before`)})(`mousedown`,function(g){return b._handlePaginatorPress(`before`,g)})(`touchend`,function(){return b._stopInterval()}),AD(2,`div`,6),$p(),cc(3,`div`,7,1),dn$1(`keydown`,function(g){return b._handleKeydown(g)}),cc(5,`div`,8,2),dn$1(`cdkObserveContent`,function(){return b._onContentChanges()}),cc(7,`div`,9,3),Lc(9),$p()()(),cc(10,`div`,10,4),dn$1(`mousedown`,function(g){return b._handlePaginatorPress(`after`,g)})(`click`,function(){return b._handlePaginatorClick(`after`)})(`touchend`,function(){return b._stopInterval()}),AD(12,`div`,6),$p()),P&2&&(fn$1(`mat-mdc-tab-header-pagination-disabled`,b._disableScrollBefore),wD(`matRippleDisabled`,b._disableScrollBefore||b.disableRipple),Ic(3),fn$1(`_mat-animation-noopable`,b._animationsDisabled),Ic(2),ni(`aria-label`,b.ariaLabel||null)(`aria-labelledby`,b.ariaLabelledby||null),Ic(5),fn$1(`mat-mdc-tab-header-pagination-disabled`,b._disableScrollAfter),wD(`matRippleDisabled`,b._disableScrollAfter||b.disableRipple))},dependencies:[ct,vZ],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--%NS%mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--%NS%mat-tab-pagination-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--%NS%mat-tab-divider-height, 1px);
  border-bottom-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--%NS%mat-tab-divider-height, 1px);
  border-top-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--%NS%mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2,changeDetection:1})})()}return n})();var Mn=new v$1(`MAT_TABS_CONFIG`);var on=(()=>{class n extends W7{_host=f(ae);_ngZone=f(V);_centeringSub=ee$1.EMPTY;_leavingSub=ee$1.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Ko(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static ɵfac=(()=>{let t;return function(i){return(t||(t=He(n)))(i||n)}})();static ɵdir=X({type:n,selectors:[[``,`matTabBodyHost`,``]],features:[ke]})}return n})();var ae=(()=>{class n{_elementRef=f(Z);_dir=f(lr,{optional:!0});_ngZone=f(V);_injector=f(j);_renderer=f(Ne);_diAnimationsDisabled=lm();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=ee$1.EMPTY;_position;_previousPosition;_onCentering=new q;_beforeCentering=new q;_afterLeavingCenter=new q;_onCentered=new q(!0);_portalHost;_contentElement;_content;animationDuration=`500ms`;preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=f(At);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position===`center`&&(this._setActiveClass(!0),Wt(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=i=>{i.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove(`mat-tab-body-animating`),i.type===`transitionend`&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,`transitionstart`,i=>{i.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add(`mat-tab-body-animating`),this._transitionStarted())}),this._renderer.listen(t,`transitionend`,e),this._renderer.listen(t,`transitioncancel`,e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position===`center`;this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position===`center`?this._onCentered.emit():this._previousPosition===`center`&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle(`mat-mdc-tab-body-active`,t)}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t==`ltr`?`left`:`right`:this._positionIndex>0?this._position=t==`ltr`?`right`:`left`:this._position=`center`,this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position===`center`||this._previousPosition===`center`)&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Wt(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration===`0ms`||this.animationDuration===`0s`}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`content`];function e(i,r){}return un({type:n,selectors:[[`mat-tab-body`]],viewQuery:function(r,h){if(r&1&&Vs(on,5)(t,5),r&2){let y;kc(y=Pc())&&(h._portalHost=y.first),kc(y=Pc())&&(h._contentElement=y.first)}},hostAttrs:[1,`mat-mdc-tab-body`],hostVars:1,hostBindings:function(r,h){r&2&&ni(`inert`,h._position===`center`?null:``)},inputs:{_content:[0,`content`,`_content`],animationDuration:`animationDuration`,preserveContent:`preserveContent`,position:`position`},outputs:{_onCentering:`_onCentering`,_beforeCentering:`_beforeCentering`,_onCentered:`_onCentered`},decls:3,vars:6,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-mdc-tab-body-content`],[`matTabBodyHost`,``]],template:function(r,h){r&1&&(cc(0,`div`,1,0),hD(2,e,0,0,`ng-template`,2),$p()),r&2&&fn$1(`mat-tab-body-content-left`,h._position===`left`)(`mat-tab-body-content-right`,h._position===`right`)(`mat-tab-body-content-can-animate`,h._position===`center`||h._previousPosition===`center`)},dependencies:[on,OP],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--%NS%mat-tab-body-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2,changeDetection:1})})()}return n})();var ln=(()=>{class n{_elementRef=f(Z);_changeDetectorRef=f(At);_ngZone=f(V);_tabsSubscription=ee$1.EMPTY;_tabLabelSubscription=ee$1.EMPTY;_tabBodySubscription=ee$1.EMPTY;_diAnimationsDisabled=lm();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Yr;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition=`above`;get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=t,t&&typeof t==`object`?(this._bodyAnimationDuration=ee(t.body),this._headerAnimationDuration=ee(t.header)):this._headerAnimationDuration=this._bodyAnimationDuration=ee(t)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-tabs-with-background`,`mat-background-${this.backgroundColor}`),t&&e.add(`mat-tabs-with-background`,`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new q;focusChange=new q;animationDone=new q;selectedTabChange=new q(!0);_groupId;_isServer=!f(Ae).isBrowser;constructor(){let t=f(Mn,{optional:!0});this._groupId=f(sa).getId(`mat-tab-group-`),this.animationDuration=t&&t.animationDuration?t.animationDuration:`500ms`,this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let i=this._tabBodyWrapper.nativeElement;i.style.minHeight=i.clientHeight+`px`}Promise.resolve().then(()=>{this._tabs.forEach((i,r)=>i.isActive=r===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight=``)})}this._tabs.forEach((e,i)=>{e.position=i-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),i;for(let r=0;r<e.length;r++)if(e[r].isActive){this._indexToSelect=this._selectedIndex=r,this._lastFocusedTabIndex=null,i=e[r];break}!i&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Ko(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new ie;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Vw(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+`px`,this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+`px`)}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height=``,this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,i){e.focusIndex=i,t.disabled||(this.selectedIndex=i)}_getTabIndex(t){return t===(this._lastFocusedTabIndex??this.selectedIndex)?0:-1}_tabFocusChanged(t,e){t&&t!==`mouse`&&t!==`touch`&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,i)=>e._setActiveClass(i===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration===`0`||this._bodyAnimationDuration===`0ms`}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`tabBodyWrapper`],e=[`tabHeader`],i=[`*`];function r(m,g){}function h(m,g){if(m&1&&hD(0,r,0,0,`ng-template`,12),m&2){let l=_0().$implicit;wD(`cdkPortalOutlet`,l.templateLabel)}}function y(m,g){if(m&1&&qp(0),m&2){let l=_0().$implicit;Fc(l.textLabel)}}function x(m,g){if(m&1){let l=E0();cc(0,`div`,7,2),dn$1(`click`,function(){let f=dv(l),N=f.$implicit,Vt=f.$index,bn=_0(),pn=I0(1);return fv(bn._handleClick(N,pn,Vt))})(`cdkFocusChange`,function(f){let N=dv(l).$index,Vt=_0();return fv(Vt._tabFocusChanged(f,N))}),AD(2,`span`,8)(3,`div`,9),cc(4,`span`,10)(5,`span`,11),o0(6,h,1,1,null,12)(7,y,1,1),$p()()()}if(m&2){let l=g.$implicit,v=g.$index,f=I0(1),N=_0();Us(l.labelClass),fn$1(`mdc-tab--active`,N.selectedIndex===v),wD(`id`,N._getTabLabelId(l,v))(`disabled`,l.disabled)(`fitInkBarToContent`,N.fitInkBarToContent),ni(`tabIndex`,N._getTabIndex(v))(`aria-posinset`,v+1)(`aria-setsize`,N._tabs.length)(`aria-controls`,N._getTabContentId(v))(`aria-selected`,N.selectedIndex===v)(`aria-label`,l.ariaLabel||null)(`aria-labelledby`,!l.ariaLabel&&l.ariaLabelledby?l.ariaLabelledby:null),Ic(3),wD(`matRippleTrigger`,f)(`matRippleDisabled`,l.disabled||N.disableRipple),Ic(3),a0(l.templateLabel?6:7)}}function P(m,g){m&1&&Lc(0)}function b(m,g){if(m&1){let l=E0();cc(0,`mat-tab-body`,13),dn$1(`_onCentered`,function(){dv(l);let f=_0();return fv(f._removeTabBodyWrapperHeight())})(`_onCentering`,function(f){dv(l);let N=_0();return fv(N._setTabBodyWrapperHeight(f))})(`_beforeCentering`,function(f){dv(l);let N=_0();return fv(N._bodyCentered(f))}),$p()}if(m&2){let l=g.$implicit,v=g.$index,f=_0();Us(l.bodyClass),wD(`id`,f._getTabContentId(v))(`content`,l.content)(`position`,l.position)(`animationDuration`,f._bodyAnimationDuration)(`preserveContent`,f.preserveContent),ni(`tabindex`,f.contentTabIndex!=null&&f.selectedIndex===v?f.contentTabIndex:null)(`aria-labelledby`,f._getTabLabelId(l,v))(`aria-hidden`,f.selectedIndex!==v)}}return un({type:n,selectors:[[`mat-tab-group`]],contentQueries:function(g,l,v){if(g&1&&xD(v,oe,5),g&2){let f;kc(f=Pc())&&(l._allTabs=f)}},viewQuery:function(g,l){if(g&1&&Vs(t,5)(e,5)(ae,5),g&2){let v;kc(v=Pc())&&(l._tabBodyWrapper=v.first),kc(v=Pc())&&(l._tabHeader=v.first),kc(v=Pc())&&(l._tabBodies=v)}},hostAttrs:[1,`mat-mdc-tab-group`],hostVars:13,hostBindings:function(g,l){g&2&&(ni(`mat-align-tabs`,l.alignTabs),Us(`mat-`+(l.color||`primary`)),Wp(`--%NS%mat-tab-body-animation-duration`,l._bodyAnimationDuration)(`--%NS%mat-tab-header-animation-duration`,l._headerAnimationDuration),fn$1(`mat-mdc-tab-group-dynamic-height`,l.dynamicHeight)(`mat-mdc-tab-group-inverted-header`,l.headerPosition===`below`)(`mat-mdc-tab-group-stretch-tabs`,l.stretchTabs))},inputs:{color:`color`,fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,Oe],stretchTabs:[2,`mat-stretch-tabs`,`stretchTabs`,Oe],alignTabs:[0,`mat-align-tabs`,`alignTabs`],dynamicHeight:[2,`dynamicHeight`,`dynamicHeight`,Oe],selectedIndex:[2,`selectedIndex`,`selectedIndex`,AL],headerPosition:`headerPosition`,animationDuration:`animationDuration`,contentTabIndex:[2,`contentTabIndex`,`contentTabIndex`,AL],disablePagination:[2,`disablePagination`,`disablePagination`,Oe],disableRipple:[2,`disableRipple`,`disableRipple`,Oe],preserveContent:[2,`preserveContent`,`preserveContent`,Oe],backgroundColor:`backgroundColor`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`]},outputs:{selectedIndexChange:`selectedIndexChange`,focusChange:`focusChange`,animationDone:`animationDone`,selectedTabChange:`selectedTabChange`},exportAs:[`matTabGroup`],features:[pt([{provide:sn,useExisting:n}])],ngContentSelectors:i,decls:9,vars:8,consts:[[`tabHeader`,``],[`tabBodyWrapper`,``],[`tabNode`,``],[3,`indexFocused`,`selectFocusedIndex`,`selectedIndex`,`disableRipple`,`disablePagination`,`aria-label`,`aria-labelledby`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`id`,`mdc-tab--active`,`class`,`disabled`,`fitInkBarToContent`],[1,`mat-mdc-tab-body-wrapper`],[`role`,`tabpanel`,3,`id`,`class`,`content`,`position`,`animationDuration`,`preserveContent`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`click`,`cdkFocusChange`,`id`,`disabled`,`fitInkBarToContent`],[1,`mdc-tab__ripple`],[`mat-ripple`,``,1,`mat-mdc-tab-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mdc-tab__content`],[1,`mdc-tab__text-label`],[3,`cdkPortalOutlet`],[`role`,`tabpanel`,3,`_onCentered`,`_onCentering`,`_beforeCentering`,`id`,`content`,`position`,`animationDuration`,`preserveContent`]],template:function(g,l){g&1&&(xc(),cc(0,`mat-tab-header`,3,0),dn$1(`indexFocused`,function(f){return l._focusChanged(f)})(`selectFocusedIndex`,function(f){return l.selectedIndex=f}),u0(2,x,8,17,`div`,4,c0),$p(),o0(4,P,1,0),cc(5,`div`,5,1),u0(7,b,1,10,`mat-tab-body`,6,c0),$p()),g&2&&(wD(`selectedIndex`,l.selectedIndex||0)(`disableRipple`,l.disableRipple)(`disablePagination`,l.disablePagination),TD(`aria-label`,l.ariaLabel)(`aria-labelledby`,l.ariaLabelledby),Ic(2),d0(l._tabs),Ic(2),a0(l._isServer?4:-1),Ic(),fn$1(`_mat-animation-noopable`,l._bodyAnimationsDisabled()),Ic(2),d0(l._tabs))},dependencies:[Tn,cn,DP,ct,W7,ae],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--%NS%mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--%NS%mat-tab-container-height, 48px);
  font-family: var(--%NS%mat-tab-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-tab-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-tab-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  line-height: var(--%NS%mat-tab-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-weight: var(--%NS%mat-tab-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-tab-active-indicator-height, 2px);
  border-radius: var(--%NS%mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--%NS%mat-tab-active-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-hover-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-focus-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--%NS%mat-tab-disabled-ripple-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-label-text-color, var(--%NS%mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--%NS%mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2,changeDetection:1})})()}return n})();var ie=class{index;tab};function wn(n,a){n&1&&(cc(0,`div`,3),AD(1,`img`,4),cc(2,`span`),qp(3),ox(4,`translate`),$p()(),AD(5,`div`,5)),n&2&&(Ic(3),Yp(` `,ax(4,1,`sorts.no-sort-selectionne`)))}function Pn(n,a){if(n&1&&(cc(0,`div`,10),qp(1),AD(2,`img`,6),$p()),n&2){let t=_0(2);Ic(),zD(` `,t.sortSelected().PorteeMin,` - `,t.sortPOMaximale(),` `),Ic(),wD(`src`,t.imageService.getActionIdUrl(t.IdActionsEnum.PORTEE))}}function In(n,a){n&1&&(cc(0,`div`,10),AD(1,`img`,13),$p())}function Dn(n,a){n&1&&(cc(0,`div`,10),AD(1,`img`,14),$p())}function Nn(n,a){if(n&1&&(cc(0,`div`,10),qp(1),AD(2,`img`,6),$p()),n&2){let t=_0(2);Ic(),Yp(` `,t.sortSelected().PA,` `),Ic(),wD(`src`,t.imageService.getActionIdUrl(t.IdActionsEnum.PA))}}function On(n,a){if(n&1&&(cc(0,`div`,10),qp(1),AD(2,`img`,6),$p()),n&2){let t=_0(2);Ic(),Yp(` `,t.sortSelected().PM,` `),Ic(),wD(`src`,t.imageService.getActionIdUrl(t.IdActionsEnum.PM))}}function Ln(n,a){if(n&1&&(cc(0,`div`,10),qp(1),AD(2,`img`,6),$p()),n&2){let t=_0(2);Ic(),Yp(` `,t.sortSelected().PW,` `),Ic(),wD(`src`,t.imageService.getActionIdUrl(t.IdActionsEnum.PW))}}function En(n,a){if(n&1&&AD(0,`span`,16),n&2){let t=a.$implicit;wD(`innerHTML`,t,$M)}}function Rn(n,a){if(n&1&&AD(0,`span`,16),n&2){let t=a.$implicit;wD(`innerHTML`,t,$M)}}function Bn(n,a){if(n&1){let t=E0();cc(0,`mat-tab-group`)(1,`mat-tab`,15),ox(2,`translate`),cc(3,`div`,12),u0(4,En,1,1,`span`,16,l0),$p()(),cc(6,`mat-tab`,15),ox(7,`translate`),cc(8,`div`,12),u0(9,Rn,1,1,`span`,16,l0),$p()()(),cc(11,`div`,17)(12,`mat-slider`,18)(13,`input`,19),bN(),YD(`ngModelChange`,function(i){dv(t);let r=_0(2);return Y0(r.spellLevel,i)||(r.spellLevel=i),fv(i)}),dn$1(`ngModelChange`,function(i){dv(t);let r=_0(2);return fv(r.updateSpellLevel(i))}),$p()()()}if(n&2){let t=_0(2);Ic(),wD(`label`,X0(ax(2,6,`sorts.effet-normal`))),Ic(3),d0(t.effetNormal()),Ic(2),wD(`label`,X0(ax(7,8,`sorts.effet-critique`))),Ic(3),d0(t.effetCritique()),Ic(3),wD(`displayWith`,t.displayLevelSelector()),Ic(),qD(`ngModel`,t.spellLevel),SN()}}function An(n,a){if(n&1&&AD(0,`span`,16),n&2){let t=a.$implicit;wD(`innerHTML`,t,$M)}}function Fn(n,a){if(n&1&&(cc(0,`div`,12),u0(1,An,1,1,`span`,16,l0),$p()),n&2){let t=_0(2);Ic(),d0(t.effetNormal())}}function zn(n,a){if(n&1&&(cc(0,`div`,3),AD(1,`img`,6),cc(2,`div`,7)(3,`span`,8),qp(4),$p(),cc(5,`span`,9),o0(6,Pn,3,3,`div`,10),o0(7,In,2,0,`div`,10),o0(8,Dn,2,0,`div`,10),o0(9,Nn,3,2,`div`,10),o0(10,On,3,2,`div`,10),o0(11,Ln,3,2,`div`,10),$p()()(),cc(12,`div`,5),qp(13),$p(),cc(14,`div`,11),o0(15,Bn,14,10)(16,Fn,3,0,`div`,12),$p()),n&2){let t=_0();Ic(),wD(`src`,t.imageService.getSortUrl(t.sortSelected().gfxId)),Ic(3),Fc(t.getSortName(t.sortSelected())),Ic(2),a0(t.sortSelected().PorteeMax?6:-1),Ic(),a0(t.sortSelected()?.NotLDV?7:-1),Ic(),a0(t.sortSelected().Ligne?8:-1),Ic(),a0(t.sortSelected().PA?9:-1),Ic(),a0(t.sortSelected().PM?10:-1),Ic(),a0(t.sortSelected().PW?11:-1),Ic(2),Fc(t.getSortDescription(t.sortSelected())),Ic(2),a0(t.effetCritique()&&t.effetCritique().length>1?15:16)}}var Ft=class n{translateService=f(Lg);sanitizer=f(Qs);spellEffectService=f(Ba);sortSelectionService=f(C);recapStatsService=f(Go);imageService=f(tT);IdActionsEnum=Js;sortSelected=this.sortSelectionService.sortSelected;effectDisplay=this.sortSelectionService.effectDisplay;spellLevel=this.sortSelectionService.spellLevel;effetNormal=S(()=>(this.sortSelected(),this.getEffect(`NORMAL`)));effetCritique=S(()=>(this.sortSelected(),this.getEffect(`CRITIQUE`)));PO=hK(this.recapStatsService.recap$.pipe(J(a=>a.filter(t=>t.id===160)[0]),Fe(a=>a!==void 0),J(a=>a.value)),{initialValue:0});sortPOMaximale(){let a=this.sortSelected()?.PorteeMin||0,t=this.sortSelected()?.PorteeMax||0,e=this.sortSelected()?.POModifiable?this.PO():0;return Math.max(t+e,a)}getSortName(a){return a.name[this.translateService.currentLang]}getSortDescription(a){return a.description[this.translateService.currentLang]}displayLevelSelector(){return a=>`${a-1}`}getEffect(a){if(!this.sortSelected())return[];let t=this.sortSelected(),e=this.translateService.currentLang,i=this.spellLevel()-1,r=a===`NORMAL`,h=r?t.effect_normal[e]:t.effect_critical[e],y=r?t.normalEffect[e]:t.criticalEffect[e];return!y||y.length===0?(h.split(`
`).map(m=>m.charAt(0).toUpperCase()+m.slice(1))||[]).map(m=>this.sanitizer.bypassSecurityTrustHtml(m)):(this.spellEffectService.getFormattedEffect(h,y,i).split(`
`).map(b=>b.charAt(0).toUpperCase()+b.slice(1))||[]).map(b=>this.sanitizer.bypassSecurityTrustHtml(b))}setEffectDisplay(a){this.sortSelectionService.setEffectDisplay(a)}updateSpellLevel(a){this.sortSelectionService.setSpellLevel(a)}static ɵfac=function(t){return new(t||n)};static ɵcmp=un({type:n,selectors:[[`app-selected-sort`]],decls:7,vars:4,consts:[[1,`card`],[1,`header`],[1,`description-sort`],[1,`sort-title`],[`src`,`sorts/empty-sort.png`,`alt`,``],[1,`description`],[`alt`,``,3,`src`],[1,`sort-info`],[1,`sort-name`],[1,`cout-sort`],[1,`badge`],[1,`effet-sort`],[1,`effet`],[`src`,`aptitudes/ligne_not_vu.png`,`alt`,``,1,`ligne-not-vu`],[`src`,`aptitudes/picto_spell_line.png`,`alt`,``,1,`ligne`],[3,`label`],[3,`innerHTML`],[1,`level-select`,`or`],[`min`,`2`,`max`,`246`,`step`,`1`,`showTickMarks`,``,`discrete`,``,3,`displayWith`],[`matSliderThumb`,``,3,`ngModelChange`,`ngModel`]],template:function(t,e){t&1&&(cc(0,`div`,0)(1,`div`,1),qp(2),ox(3,`translate`),$p(),cc(4,`div`,2),o0(5,wn,6,3)(6,zn,17,10),$p()()),t&2&&(Ic(2),Yp(` `,ax(3,2,`sorts.sort-selectionne`),` `),Ic(3),a0(e.sortSelected()?6:5))},dependencies:[iK,Bt$1,jQ,uT,VQ,NF,$t,Ht$1,kt,g,ln,oe,rK],styles:[`.card[_ngcontent-%COMP%]{width:100%;padding:5px;min-width:300px;height:fit-content}.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{align-items:center;justify-content:center;padding:5px 0}.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]{margin:0 5%}.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]   .sort-title[_ngcontent-%COMP%]{display:flex}.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]   .sort-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:10px;width:56px;height:56px;cursor:pointer}.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]   .sort-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:auto 0}.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]   .sort-title[_ngcontent-%COMP%]   .sort-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;gap:8px;min-width:0}.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]   .sort-title[_ngcontent-%COMP%]   .sort-name[_ngcontent-%COMP%]{margin:0;font-size:1.25rem;font-weight:700}.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]   .sort-title[_ngcontent-%COMP%]   .cout-sort[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px;margin:0;font-size:1rem;font-weight:700}.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]   .sort-title[_ngcontent-%COMP%]   .cout-sort[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;padding:3px 12px;border-radius:999px;background:var(--%NS%color-accent);color:var(--%NS%color-text-on-accent)}.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]   .sort-title[_ngcontent-%COMP%]   .cout-sort[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0;width:18px;height:18px}.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{margin-left:66px;margin-top:12px;font-size:14px}.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]   .effet-sort[_ngcontent-%COMP%]{margin-left:66px}.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]   .effet-sort[_ngcontent-%COMP%]   .effet[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-top:10px;padding:10px;background-color:var(--%NS%color-surface-deep);border-radius:var(--%NS%panel-radius)}.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]   .effet-sort[_ngcontent-%COMP%]   .effet[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:center;text-align:start;font-size:14px;margin:0}.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]   .effet-sort[_ngcontent-%COMP%]   .effet[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 3px}.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]   .effet-sort[_ngcontent-%COMP%]   .level-select[_ngcontent-%COMP%]{width:90%}.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]   .effet-sort[_ngcontent-%COMP%]   .level-select[_ngcontent-%COMP%]   mat-slider[_ngcontent-%COMP%]{width:100%}@media screen and (max-width:850px){.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]   .sort-title[_ngcontent-%COMP%]   .cout-sort[_ngcontent-%COMP%]{flex-wrap:wrap!important;margin-left:3px!important}.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]   .sort-title[_ngcontent-%COMP%]   .cout-sort[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-left:3px!important;width:16px!important;height:16px!important}}  .effet-sort .mat-mdc-tab-body.mat-mdc-tab-body-active{z-index:0!important}`]})};var it=class n{imageService=f(tT);sortService=f(Fa);levelFormService=f(aw);sortSelectionService=f(C);sortFormService=f(Ya);sort=Fb.required();typeSort=Fb.required();level=hK(this.levelFormService.level$,{initialValue:246});isSelected=S(()=>this.sortSelectionService.sortSelected()?.gfxId===this.sort().gfxId);getSortUrl(a){return this.imageService.getSortUrl(a)}getSortName(){return this.sort().name[this.sortService.getCurrentLang()]}isLocked(){return this.level()<this.sort().levelUnlock}onDragStart(a){this.sortSelectionService.setDragSource(`list`),a.dataTransfer&&(a.dataTransfer.effectAllowed=`copy`,a.dataTransfer.setData(`sortId`,this.sort().gfxId.toString()),a.dataTransfer.setData(`typeSort`,this.typeSort()),a.dataTransfer.setData(`source`,`list`))}onClick(){this.sortSelectionService.selectSort(this.sort(),this.typeSort())}onDoubleClick(){this.addSortToBuild()}onContextMenu(a){a.preventDefault(),this.addSortToBuild()}addSortToBuild(){this.typeSort()===`NEUTRE`?this.sortFormService.addSortNeutre(this.sort().gfxId):this.typeSort()===`PASSIF`&&this.sortFormService.addSortPassif(this.sort().gfxId)}static ɵfac=function(t){return new(t||n)};static ɵcmp=un({type:n,selectors:[[`app-sort-image`]],inputs:{sort:[1,`sort`],typeSort:[1,`typeSort`]},features:[CO([v])],decls:1,vars:6,consts:[[`alt`,``,`draggable`,`true`,`appActivateTrigger`,`dblclick`,3,`dragstart`,`click`,`appActivate`,`contextmenu`,`src`,`matTooltip`]],template:function(t,e){t&1&&(cc(0,`img`,0),dn$1(`dragstart`,function(r){return e.onDragStart(r)})(`click`,function(){return e.onClick()})(`appActivate`,function(){return e.onDoubleClick()})(`contextmenu`,function(r){return e.onContextMenu(r)}),$p()),t&2&&(fn$1(`sort-locked`,e.isLocked())(`selected`,e.isSelected()),wD(`src`,e.getSortUrl(e.sort().gfxId))(`matTooltip`,e.getSortName()))},dependencies:[dQ,KP,u],styles:[`@charset "UTF-8";img[_ngcontent-%COMP%]{width:56px;height:56px;cursor:pointer}img[_ngcontent-%COMP%]{border-radius:12px;box-sizing:border-box}img.selected[_ngcontent-%COMP%]{border:3px solid var(--%NS%color-accent)}img[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.sort-locked[_ngcontent-%COMP%]{position:relative;filter:grayscale(100%) brightness(.5);cursor:not-allowed!important}.sort-locked[_ngcontent-%COMP%]:before{content:"\\1f512";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:32px;pointer-events:none;z-index:10;filter:none;text-shadow:0 0 5px var(--%NS%glow-lock-outer),0 0 10px var(--%NS%glow-lock-inner)}.sort-locked[_ngcontent-%COMP%]:hover{transform:none!important}@media screen and (max-width:850px){img[_ngcontent-%COMP%]{width:30px!important;height:30px!important}}`]})};var ot=(n,a)=>a.gfxId;function Hn(n,a){if(n&1&&AD(0,`app-sort-image`,4),n&2){let t=a.$implicit;wD(`sort`,t)}}function jn(n,a){if(n&1&&AD(0,`app-sort-image`,4),n&2){let t=a.$implicit;wD(`sort`,t)}}function Vn(n,a){if(n&1&&AD(0,`app-sort-image`,4),n&2){let t=a.$implicit;wD(`sort`,t)}}function $n(n,a){if(n&1&&AD(0,`app-sort-image`,4),n&2){let t=a.$implicit;wD(`sort`,t)}}function Wn(n,a){if(n&1&&(u0(0,Hn,1,1,`app-sort-image`,4,ot),u0(2,jn,1,1,`app-sort-image`,4,ot),u0(4,Vn,1,1,`app-sort-image`,4,ot),u0(6,$n,1,1,`app-sort-image`,4,ot)),n&2){let t=_0();d0(t.sortService.sortsClasse().sortElementaires.feu),Ic(2),d0(t.sortService.sortsClasse().sortElementaires.eau),Ic(2),d0(t.sortService.sortsClasse().sortElementaires.terre),Ic(2),d0(t.sortService.sortsClasse().sortElementaires.air)}}function Qn(n,a){if(n&1&&AD(0,`app-sort-image`,4),n&2){let t=a.$implicit;wD(`sort`,t)}}function Gn(n,a){if(n&1&&u0(0,Qn,1,1,`app-sort-image`,4,ot),n&2){let t=_0();d0(t.sortService.sortsClasse().sortActifs)}}function qn(n,a){if(n&1&&AD(0,`app-sort-image`,5),n&2){let t=a.$implicit;wD(`sort`,t)}}function Un(n,a){if(n&1&&u0(0,qn,1,1,`app-sort-image`,5,ot),n&2){let t=_0();d0(t.sortService.sortsClasse().sortPassifs)}}var zt=class n{sortService=f(Fa);static ɵfac=function(t){return new(t||n)};static ɵcmp=un({type:n,selectors:[[`app-sort-list`]],decls:19,vars:15,consts:[[1,`card`],[1,`header`],[1,`sorts-elementaires`],[1,`sorts-passifs`],[`typeSort`,`NEUTRE`,3,`sort`],[`typeSort`,`PASSIF`,3,`sort`]],template:function(t,e){t&1&&(cc(0,`div`,0)(1,`div`,1),qp(2),ox(3,`translate`),$p(),cc(4,`span`),qp(5),ox(6,`translate`),$p(),cc(7,`div`,2),o0(8,Wn,8,0),$p(),cc(9,`span`),qp(10),ox(11,`translate`),$p(),cc(12,`div`,3),o0(13,Gn,2,0),$p(),cc(14,`span`),qp(15),ox(16,`translate`),$p(),cc(17,`div`,3),o0(18,Un,2,0),$p()()),t&2&&(Ic(2),Yp(` `,ax(3,7,`sorts.sorts-classe`),` `),Ic(3),Fc(ax(6,9,`sorts.sorts-elementaires`)),Ic(3),a0(e.sortService.sortsClasse()!==void 0?8:-1),Ic(2),Fc(ax(11,11,`sorts.sorts-neutres`)),Ic(3),a0(e.sortService.sortsClasse()!==void 0?13:-1),Ic(2),Fc(ax(16,13,`sorts.passifs`)),Ic(3),a0(e.sortService.sortsClasse()!==void 0?18:-1))},dependencies:[iK,it,rK],styles:[`@charset "UTF-8";.card[_ngcontent-%COMP%]{width:100%;padding:5px;min-width:300px;height:fit-content}.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{align-items:center;justify-content:center;padding:5px 0}.card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-align:center;margin:10px 0}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:56px;height:56px;cursor:pointer}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.card[_ngcontent-%COMP%]   .sorts-neutres[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .sorts-passifs[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .sorts-elementaires[_ngcontent-%COMP%]{margin:0 5%;display:grid;justify-items:center;grid-template-columns:repeat(6,1fr);grid-template-rows:repeat(2,1fr);grid-column-gap:2px;grid-row-gap:5px}.card[_ngcontent-%COMP%]   .sorts-passifs[_ngcontent-%COMP%]{grid-template-rows:repeat(1,1fr);margin-bottom:10px}.card[_ngcontent-%COMP%]   .sorts-elementaires[_ngcontent-%COMP%]{grid-template-columns:repeat(5,1fr)}.sort-locked[_ngcontent-%COMP%]{position:relative;filter:grayscale(100%) brightness(.5);cursor:not-allowed!important}.sort-locked[_ngcontent-%COMP%]:before{content:"\\1f512";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:32px;pointer-events:none;z-index:10;filter:none;text-shadow:0 0 5px var(--%NS%glow-lock-outer),0 0 10px var(--%NS%glow-lock-inner)}.sort-locked[_ngcontent-%COMP%]:hover{transform:none!important}@media screen and (max-width:850px){.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px!important;height:30px!important}.card[_ngcontent-%COMP%]   .sorts-neutres[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .sorts-passifs[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .sorts-elementaires[_ngcontent-%COMP%]{grid-column-gap:0px!important}}`]})};var dn=(n,a)=>a.gfxId;function Xn(n,a){n&1&&(cc(0,`div`,3),AD(1,`div`,4)(2,`div`,5),$p())}function Zn(n,a){if(n&1&&u0(0,Xn,3,0,`div`,3,l0),n&2){let t=_0();d0(t.skeletonItems)}}function Kn(n,a){if(n&1&&(cc(0,`div`,3),AD(1,`app-sort-image`,6),cc(2,`span`,7),qp(3),$p()()),n&2){let t=a.$implicit,e=_0(2);Ic(),wD(`sort`,t),Ic(2),Yp(` `,e.ratioUsageSortNeutre(t),` `)}}function Yn(n,a){if(n&1&&(cc(0,`div`,3),AD(1,`app-sort-image`,8),cc(2,`span`,7),qp(3),$p()()),n&2){let t=a.$implicit,e=_0(2);Ic(),wD(`sort`,t),Ic(2),Yp(` `,e.ratioUsageSortPassif(t),` `)}}function Jn(n,a){if(n&1&&(u0(0,Kn,4,2,`div`,3,dn),u0(2,Yn,4,2,`div`,3,dn)),n&2){let t=_0();d0(t.sortsNeutreConseilles()),Ic(2),d0(t.sortsPassifConseilles())}}var Ht=class n{classeFormService=f(at);sortService=f(Fa);supabaseService=f(Uc);countSortNeutreConseilles=/* @__PURE__ */ new Map;countSortPassifConseilles=/* @__PURE__ */ new Map;nbDeckSorts=z(0);MAX_SORTS=18;MAX_SORTS_NEUTRE=12;MAX_SORTS_PASSIF=6;loading=z(!0);skeletonItems=Array.from({length:this.MAX_SORTS});sortsConseilles=hK(this.classeFormService.classe$.pipe(qn$1(()=>this.loading.set(!0)),Ar(a=>this.supabaseService.getSortsConseillees(a)),qn$1(()=>{this.countSortNeutreConseilles.clear(),this.countSortPassifConseilles.clear()}),qn$1(a=>this.nbDeckSorts.set(a.length)),qn$1(a=>this.fillCounts(a)),J(()=>this.keepBestSortsConseilles()),qn$1(()=>this.loading.set(!1))),{initialValue:[]});sortsNeutreConseilles=S(()=>this.sortsConseilles().slice(0,this.MAX_SORTS_NEUTRE));sortsPassifConseilles=S(()=>this.sortsConseilles().slice(this.MAX_SORTS_NEUTRE,this.MAX_SORTS));ratioUsageSortNeutre(a){let t=this.countSortNeutreConseilles.get(a.gfxId.toString())||0;return this.nbDeckSorts()>0?`${Math.round(t/this.nbDeckSorts()*100)}%`:`0%`}ratioUsageSortPassif(a){let t=this.countSortPassifConseilles.get(a.gfxId.toString())||0;return this.nbDeckSorts()>0?`${Math.round(t/this.nbDeckSorts()*100)}%`:`0%`}keepBestSortsConseilles(){let a=Array.from(this.countSortNeutreConseilles.entries()).sort((e,i)=>i[1]-e[1]).map(e=>parseInt(e[0],10)).map(e=>this.sortService.getDescriptionSortNeutreByGfxId(e)).filter(e=>!!e).slice(0,this.MAX_SORTS_NEUTRE),t=Array.from(this.countSortPassifConseilles.entries()).sort((e,i)=>i[1]-e[1]).map(e=>parseInt(e[0],10)).map(e=>this.sortService.getDescriptionSortPassifByGfxId(e)).filter(e=>!!e).slice(0,this.MAX_SORTS_PASSIF);return[...a,...t]}fillCounts(a){a.forEach(t=>{let e=t.split(`-`);if(e.length!==this.MAX_SORTS)return;let i=e.slice(0,this.MAX_SORTS_NEUTRE),r=e.slice(this.MAX_SORTS_NEUTRE),h=new Set(i),y=new Set(r);h.forEach(x=>this.incrementCount(this.countSortNeutreConseilles,x)),y.forEach(x=>this.incrementCount(this.countSortPassifConseilles,x))})}incrementCount(a,t){if(t===`0`)return;let e=a.get(t)||0;a.set(t,e+1)}static ɵfac=function(t){return new(t||n)};static ɵcmp=un({type:n,selectors:[[`app-sorts-conseilles`]],decls:7,vars:4,consts:[[1,`card`],[1,`header`],[1,`content`],[1,`sort-conseille`],[1,`skeleton-sort`],[1,`skeleton-ratio`],[`typeSort`,`NEUTRE`,3,`sort`],[1,`ratio`],[`typeSort`,`PASSIF`,3,`sort`]],template:function(t,e){t&1&&(cc(0,`div`,0)(1,`div`,1),qp(2),ox(3,`translate`),$p(),cc(4,`div`,2),o0(5,Zn,2,0)(6,Jn,4,0),$p()()),t&2&&(Ic(2),Yp(` `,ax(3,2,`sorts.sort-conseille`),` `),Ic(3),a0(e.loading()?5:6))},dependencies:[it,iK,rK],styles:[`.skeleton-sort[_ngcontent-%COMP%], .skeleton-ratio[_ngcontent-%COMP%]{background:linear-gradient(90deg,#2b3d58 25%,#4a658a,#2b3d58 75%);background-size:220% 100%;animation:_ngcontent-%COMP%_skeleton-loading 1.3s ease-in-out infinite;border-radius:6px}.skeleton-sort[_ngcontent-%COMP%]{width:56px;height:56px}.skeleton-ratio[_ngcontent-%COMP%]{width:36px;height:16px;margin-top:4px}@keyframes _ngcontent-%COMP%_skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}@media screen and (max-width:850px){.skeleton-sort[_ngcontent-%COMP%]{width:30px;height:30px}}.card[_ngcontent-%COMP%]{width:90%;padding:5px;min-width:300px;height:fit-content;margin:0 auto 15px}.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{align-items:center;justify-content:center;padding:5px 0}.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:grid;grid-template-rows:repeat(2,auto);grid-auto-flow:column;justify-content:space-evenly;align-items:center;gap:8px 14px;overflow-x:auto}.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sort-conseille[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sort-conseille[_ngcontent-%COMP%]   .ratio[_ngcontent-%COMP%]{margin-top:6px;padding:2px 10px;border-radius:999px;background:var(--%NS%color-accent);color:var(--%NS%color-text-on-accent);font-size:1rem;font-weight:700}@media screen and (max-width:1000px){.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{grid-template-rows:none;grid-auto-flow:row;grid-template-columns:repeat(auto-fill,minmax(64px,1fr));justify-items:center;overflow-x:visible}}`]})};var jt=class n{classeFormService=f(at);sortSelectionService=f(C);constructor(){this.classeFormService.classe$.subscribe(a=>{a&&this.sortSelectionService.clearSelection()})}static ɵfac=function(t){return new(t||n)};static ɵcmp=un({type:n,selectors:[[`app-sorts`]],decls:11,vars:3,consts:[[1,`page-title`],[1,`body`],[1,`column`]],template:function(t,e){t&1&&(cc(0,`h1`,0),qp(1),ox(2,`translate`),$p(),AD(3,`app-code-deck`)(4,`app-sorts-conseilles`),cc(5,`div`,1)(6,`div`,2),AD(7,`app-equipped-sorts`)(8,`app-selected-sort`),$p(),cc(9,`div`,2),AD(10,`app-sort-list`),$p()()),t&2&&(Ic(),Fc(ax(2,1,`app.sorts`)))},dependencies:[iK,Bt,Ht,G,Ft,zt,rK],styles:[`.body[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;gap:24px;width:auto;margin:0 20px}.body[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:48%;flex:1}[_nghost-%COMP%]     app-sorts-conseilles .card, [_nghost-%COMP%]     app-equipped-sorts .card, [_nghost-%COMP%]     app-selected-sort .card, [_nghost-%COMP%]     app-sort-list .card{width:auto;margin:0 20px 24px;padding:16px 20px;box-sizing:border-box}[_nghost-%COMP%]     .body .card{margin:0 0 24px}[_nghost-%COMP%]     .card>.header{justify-content:flex-start!important;text-align:left;padding:0 0 8px!important;border-bottom:0;margin-bottom:8px;font-size:.95rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--%NS%color-text-muted)}[_nghost-%COMP%]     app-sort-list .card>span, [_nghost-%COMP%]     app-equipped-sorts .card>span{text-align:left!important;margin:14px 0 8px!important;font-size:1.05rem;font-weight:600;color:var(--%NS%color-text-muted)}[_nghost-%COMP%]     app-selected-sort .card{font-size:1.05rem}[_nghost-%COMP%]     app-selected-sort .card .description, [_nghost-%COMP%]     app-selected-sort .card .description-sort, [_nghost-%COMP%]     app-selected-sort .card .effet{font-size:1rem!important}@media screen and (max-width:1300px){.body[_ngcontent-%COMP%]{flex-direction:column;align-items:center;margin:0}.body[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]{width:90%}[_nghost-%COMP%]     app-sorts-conseilles .card, [_nghost-%COMP%]     app-equipped-sorts .card, [_nghost-%COMP%]     app-selected-sort .card, [_nghost-%COMP%]     app-sort-list .card{margin:0 0 16px;padding:12px}}@media screen and (max-width:1000px){.body[_ngcontent-%COMP%]{align-items:stretch;margin:0 12px}.body[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]{width:100%;min-width:0}[_nghost-%COMP%]     app-sorts-conseilles .card{margin:0 12px 16px;min-width:0;width:auto}[_nghost-%COMP%]     app-equipped-sorts, [_nghost-%COMP%]     app-selected-sort, [_nghost-%COMP%]     app-sort-list{min-width:0}[_nghost-%COMP%]     .body app-equipped-sorts .card, [_nghost-%COMP%]     .body app-selected-sort .card, [_nghost-%COMP%]     .body app-sort-list .card{margin:0 0 16px;min-width:0}}`]})};var mn=class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=un({type:n,selectors:[[`app-sorts-router`]],decls:1,vars:0,template:function(t,e){t&1&&AD(0,`app-sorts`)},dependencies:[jt],styles:[`[_nghost-%COMP%]{display:flex}[_nghost-%COMP%]   app-sorts[_ngcontent-%COMP%]{width:100%}`]})};export{mn as SortsRouterComponent};