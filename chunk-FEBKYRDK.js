import{a as Z,b as Ke}from"./chunk-Y4UM57YZ.js";import{b as qe}from"./chunk-XN4ZTDGQ.js";import{a as Ge,b as Xe,c as Ze}from"./chunk-5VII6XIH.js";import{e as Gt,f as We}from"./chunk-IMDA2UGJ.js";import{a as Qe}from"./chunk-Y4BSUJSH.js";import{a as Ae,b as It}from"./chunk-CNLK27J3.js";import{a as wt}from"./chunk-NA4244PL.js";import{B as Dt,C as Ve,E as Q,F as Ot,L as $e,N as Ue}from"./chunk-YRKQYINY.js";import{$a as z,Aa as ut,Ad as Ee,B as re,Ba as gt,Bb as Qt,Cb as ue,Da as Ht,Db as I,Dd as Re,Ea as de,Eb as yt,Ed as Le,Fa as me,Fb as _,Fd as qt,Gb as O,Hb as k,Ia as pe,Ib as ge,Jb as fe,Jc as ye,K as se,Kb as ve,L as pt,Lb as Ce,M as bt,Ma as h,Mc as xe,N as tt,O as U,Oa as V,Pb as Wt,Qb as rt,Ra as be,Rd as Tt,Sa as it,Sb as C,Sd as Mt,Ta as zt,Tb as y,Td as kt,Ua as _e,V as q,Vd as Be,Wd as E,X as c,Xb as A,Xd as R,_a as he,_c as Se,_d as Pt,a as W,aa as L,ab as u,ac as Vt,ad as $t,ae as j,ba as B,bb as g,c as ne,cb as X,cd as Te,d as lt,db as jt,dd as Me,de as Fe,ea as Nt,eb as f,ec as xt,f as ie,fb as v,gb as p,hb as s,hd as ke,he as Ne,ia as D,ib as l,ic as w,id as Ut,j as ae,ja as et,jb as m,jc as St,la as _t,le as He,n as N,nb as at,oe as ze,pb as M,qd as Pe,ra as ce,rb as b,sa as nt,sb as ft,sd as Ie,tb as vt,u as oe,ua as G,ub as Ct,v as dt,va as le,vb as ot,ve as je,wa as ht,wb as x,x as mt,xa as H,xb as S,xd as we,yd as De,za as r,zd as Oe}from"./chunk-4VUSYJZP.js";import"./chunk-25N2FLV6.js";var Et=class n{sortFormService=c(Ot);sortService=c(Q);codeBuild=j(this.sortFormService.codeBuild$.pipe(N(a=>a?a.split("-"):[]),N(a=>a.length===0?"":a.map(t=>this.sortService.getDescriptionSortByGfxId(+t)).map(t=>t?t.id:"0").join("-"))),{initialValue:""});copyToClipboards(){navigator.clipboard.writeText(this.codeBuild()).then()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=h({type:n,selectors:[["app-code-deck"]],decls:6,vars:8,consts:[[1,"code-aptitudes"],["readonly","",3,"value"],["appRipple","","aria-hidden","false","fontIcon","file_copy",3,"appActivate","matTooltip","matTooltipShowDelay"]],template:function(t,e){t&1&&(s(0,"div",0),_(1),C(2,"translate"),m(3,"input",1),s(4,"mat-icon",2),C(5,"translate"),M("appActivate",function(){return e.copyToClipboards()}),l()()),t&2&&(r(),k(" ",y(2,4,"sorts.code-deck")," : "),r(2),p("value",e.codeBuild()),r(),p("matTooltip",y(5,6,"sorts.copy-code"))("matTooltipShowDelay",300))},dependencies:[R,Me,Te,kt,Mt,wt,It,E],styles:[".code-aptitudes[_ngcontent-%COMP%]{font-weight:var(--font-weight-title)}mat-icon[_ngcontent-%COMP%]{background-color:var(--color-surface-empty)}"]})};var te=["*"];function mn(n,a){n&1&&vt(0)}var pn=["tabListContainer"],bn=["tabList"],_n=["tabListInner"],hn=["nextPaginator"],un=["previousPaginator"],gn=["content"];function fn(n,a){}var vn=["tabBodyWrapper"],Cn=["tabHeader"];function yn(n,a){}function xn(n,a){if(n&1&&zt(0,yn,0,0,"ng-template",12),n&2){let t=b().$implicit;p("cdkPortalOutlet",t.templateLabel)}}function Sn(n,a){if(n&1&&_(0),n&2){let t=b().$implicit;O(t.textLabel)}}function Tn(n,a){if(n&1){let t=at();s(0,"div",7,2),M("click",function(){let i=L(t),o=i.$implicit,d=i.$index,T=b(),P=Qt(1);return B(T._handleClick(o,P,d))})("cdkFocusChange",function(i){let o=L(t).$index,d=b();return B(d._tabFocusChanged(i,o))}),m(2,"span",8)(3,"div",9),s(4,"span",10)(5,"span",11),u(6,xn,1,1,null,12)(7,Sn,1,1),l()()()}if(n&2){let t=a.$implicit,e=a.$index,i=Qt(1),o=b();yt(t.labelClass),I("mdc-tab--active",o.selectedIndex===e),p("id",o._getTabLabelId(t,e))("disabled",t.disabled)("fitInkBarToContent",o.fitInkBarToContent),z("tabIndex",o._getTabIndex(e))("aria-posinset",e+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(e))("aria-selected",o.selectedIndex===e)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),r(3),p("matRippleTrigger",i)("matRippleDisabled",t.disabled||o.disableRipple),r(3),g(t.templateLabel?6:7)}}function Mn(n,a){n&1&&vt(0)}function kn(n,a){if(n&1){let t=at();s(0,"mat-tab-body",13),M("_onCentered",function(){L(t);let i=b();return B(i._removeTabBodyWrapperHeight())})("_onCentering",function(i){L(t);let o=b();return B(o._setTabBodyWrapperHeight(i))})("_beforeCentering",function(i){L(t);let o=b();return B(o._bodyCentered(i))}),l()}if(n&2){let t=a.$implicit,e=a.$index,i=b();yt(t.bodyClass),p("id",i._getTabContentId(e))("content",t.content)("position",t.position)("animationDuration",i._bodyAnimationDuration)("preserveContent",i.preserveContent),z("tabindex",i.contentTabIndex!=null&&i.selectedIndex===e?i.contentTabIndex:null)("aria-labelledby",i._getTabLabelId(t,e))("aria-hidden",i.selectedIndex!==e)}}var Pn=new q("MatTabContent"),In=(()=>{class n{template=c(gt);static \u0275fac=function(e){return new(e||n)};static \u0275dir=V({type:n,selectors:[["","matTabContent",""]],features:[rt([{provide:Pn,useExisting:n}])]})}return n})(),wn=new q("MatTabLabel"),en=new q("MAT_TAB"),Dn=(()=>{class n extends Le{_closestTab=c(en,{optional:!0});static \u0275fac=(()=>{let t;return function(i){return(t||(t=nt(n)))(i||n)}})();static \u0275dir=V({type:n,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[rt([{provide:wn,useExisting:n}]),it]})}return n})(),nn=new q("MAT_TAB_GROUP"),ee=(()=>{class n{_viewContainerRef=c(pe);_closestTabGroup=c(nn,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new lt;position=null;origin=null;isActive=!1;constructor(){c(Se).load(We)}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Re(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=h({type:n,selectors:[["mat-tab"]],contentQueries:function(e,i,o){if(e&1&&Ct(o,Dn,5)(o,In,7,gt),e&2){let d;x(d=S())&&(i.templateLabel=d.first),x(d=S())&&(i._explicitContent=d.first)}},viewQuery:function(e,i){if(e&1&&ot(gt,7),e&2){let o;x(o=S())&&(i._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(e,i){e&2&&z("id",null)},inputs:{disabled:[2,"disabled","disabled",w],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[rt([{provide:en,useExisting:n}]),ce],ngContentSelectors:te,decls:1,vars:0,template:function(e,i){e&1&&(ft(),_e(0,mn,1,0,"ng-template"))},encapsulation:2,changeDetection:1})}return n})(),Xt="mdc-tab-indicator--active",Ye="mdc-tab-indicator--no-transition",Kt=class{_items;_currentItem;constructor(a){this._items=a}hide(){this._items.forEach(a=>a.deactivateInkBar()),this._currentItem=void 0}alignToElement(a){let t=this._items.find(i=>i.elementRef.nativeElement===a),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let i=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(i),this._currentItem=t}}},On=(()=>{class n{_elementRef=c(G);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(Xt);return}let i=e.getBoundingClientRect(),o=t.width/i.width,d=t.left-i.left;e.classList.add(Ye),this._inkBarContentElement.style.setProperty("transform",`translateX(${d}px) scaleX(${o})`),e.getBoundingClientRect(),e.classList.remove(Ye),e.classList.add(Xt),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Xt)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement("span"),i=this._inkBarContentElement=t.createElement("span");e.className="mdc-tab-indicator",i.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let t=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;t.appendChild(this._inkBarElement)}static \u0275fac=function(e){return new(e||n)};static \u0275dir=V({type:n,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",w]}})}return n})();var an=(()=>{class n extends On{elementRef=c(G);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let t;return function(i){return(t||(t=nt(n)))(i||n)}})();static \u0275dir=V({type:n,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(e,i){e&2&&(z("aria-disabled",!!i.disabled),I("mat-mdc-tab-disabled",i.disabled))},inputs:{disabled:[2,"disabled","disabled",w]},features:[it]})}return n})(),Je={passive:!0},En=650,Rn=100,Ln=(()=>{class n{_elementRef=c(G);_changeDetectorRef=c(xt);_viewportRuler=c(Ee);_dir=c($t,{optional:!0});_ngZone=c(et);_platform=c(Ut);_sharedResizeObserver=c(Qe);_injector=c(Nt);_renderer=c(Ht);_animationsDisabled=Tt();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new lt;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new lt;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new D;indexFocused=new D;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),Je),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),Je))}ngAfterContentInit(){let t=this._dir?this._dir.change:ae("ltr"),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(re(32),tt(this._destroyed)),i=this._viewportRuler.change(150).pipe(tt(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new we(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),ut(o,{injector:this._injector}),dt(t,i,e,this._items.changes,this._itemsResized()).pipe(tt(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(d=>{this.indexFocused.emit(d),this._setTabFocus(d)})}_itemsResized(){return typeof ResizeObserver!="function"?ie:this._items.changes.pipe(pt(this._items),bt(t=>new ne(e=>this._ngZone.runOutsideAngular(()=>{let i=new ResizeObserver(o=>e.next(o));return t.forEach(o=>i.observe(o.elementRef.nativeElement)),()=>{i.disconnect()}}))),se(1),mt(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!ke(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()==="ltr"?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,i=(t=="before"?-1:1)*e/3;return this._scrollTo(this._scrollDistance+i)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let i=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:d}=e.elementRef.nativeElement,T,P;this._getLayoutDirection()=="ltr"?(T=o,P=T+d):(P=this._tabListInner.nativeElement.offsetWidth-o,T=P-d);let st=this.scrollDistance,F=this.scrollDistance+i;T<st?this.scrollDistance-=st-T:P>F&&(this.scrollDistance+=Math.min(P-F,T-st))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let t=this._tabListInner.nativeElement.scrollWidth,e=this._elementRef.nativeElement.offsetWidth,i=t-e>=5;i||(this.scrollDistance=0),i!==this._showPaginationControls&&(this._showPaginationControls=i,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let t=this._tabListInner.nativeElement.scrollWidth,e=this._tabListContainer.nativeElement.offsetWidth;return t-e||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),oe(En,Rn).pipe(tt(dt(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:i,distance:o}=this._scrollHeader(t);(o===0||o>=i)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static \u0275fac=function(e){return new(e||n)};static \u0275dir=V({type:n,inputs:{disablePagination:[2,"disablePagination","disablePagination",w],selectedIndex:[2,"selectedIndex","selectedIndex",St]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return n})(),Bn=(()=>{class n extends Ln{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Kt(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static \u0275fac=(()=>{let t;return function(i){return(t||(t=nt(n)))(i||n)}})();static \u0275cmp=h({type:n,selectors:[["mat-tab-header"]],contentQueries:function(e,i,o){if(e&1&&Ct(o,an,4),e&2){let d;x(d=S())&&(i._items=d)}},viewQuery:function(e,i){if(e&1&&ot(pn,7)(bn,7)(_n,7)(hn,5)(un,5),e&2){let o;x(o=S())&&(i._tabListContainer=o.first),x(o=S())&&(i._tabList=o.first),x(o=S())&&(i._tabListInner=o.first),x(o=S())&&(i._nextPaginator=o.first),x(o=S())&&(i._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(e,i){e&2&&I("mat-mdc-tab-header-pagination-controls-enabled",i._showPaginationControls)("mat-mdc-tab-header-rtl",i._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",w]},features:[it],ngContentSelectors:te,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(e,i){e&1&&(ft(),s(0,"div",5,0),M("click",function(){return i._handlePaginatorClick("before")})("mousedown",function(d){return i._handlePaginatorPress("before",d)})("touchend",function(){return i._stopInterval()}),m(2,"div",6),l(),s(3,"div",7,1),M("keydown",function(d){return i._handleKeydown(d)}),s(5,"div",8,2),M("cdkObserveContent",function(){return i._onContentChanges()}),s(7,"div",9,3),vt(9),l()()(),s(10,"div",10,4),M("mousedown",function(d){return i._handlePaginatorPress("after",d)})("click",function(){return i._handlePaginatorClick("after")})("touchend",function(){return i._stopInterval()}),m(12,"div",6),l()),e&2&&(I("mat-mdc-tab-header-pagination-disabled",i._disableScrollBefore),p("matRippleDisabled",i._disableScrollBefore||i.disableRipple),r(3),I("_mat-animation-noopable",i._animationsDisabled),r(2),z("aria-label",i.ariaLabel||null)("aria-labelledby",i.ariaLabelledby||null),r(5),I("mat-mdc-tab-header-pagination-disabled",i._disableScrollAfter),p("matRippleDisabled",i._disableScrollAfter||i.disableRipple))},dependencies:[Gt,Ie],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-header-animation-duration, 250ms);
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
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
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
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
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
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--mat-tab-divider-height, 1px);
  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
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
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2,changeDetection:1})}return n})(),An=new q("MAT_TABS_CONFIG"),tn=(()=>{class n extends qt{_host=c(Yt);_ngZone=c(et);_centeringSub=W.EMPTY;_leavingSub=W.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(pt(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=(()=>{let t;return function(i){return(t||(t=nt(n)))(i||n)}})();static \u0275dir=V({type:n,selectors:[["","matTabBodyHost",""]],features:[it]})}return n})(),Yt=(()=>{class n{_elementRef=c(G);_dir=c($t,{optional:!0});_ngZone=c(et);_injector=c(Nt);_renderer=c(Ht);_diAnimationsDisabled=Tt();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=W.EMPTY;_position;_previousPosition;_onCentering=new D;_beforeCentering=new D;_afterLeavingCenter=new D;_onCentered=new D(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=c(xt);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),ut(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=i=>{i.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),i.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,"transitionstart",i=>{i.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(t,"transitionend",e),this._renderer.listen(t,"transitioncancel",e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position==="center";this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",t)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t=="ltr"?"left":"right":this._positionIndex>0?this._position=t=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),ut(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=h({type:n,selectors:[["mat-tab-body"]],viewQuery:function(e,i){if(e&1&&ot(tn,5)(gn,5),e&2){let o;x(o=S())&&(i._portalHost=o.first),x(o=S())&&(i._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(e,i){e&2&&z("inert",i._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(e,i){e&1&&(s(0,"div",1,0),zt(2,fn,0,0,"ng-template",2),l()),e&2&&I("mat-tab-body-content-left",i._position==="left")("mat-tab-body-content-right",i._position==="right")("mat-tab-body-content-can-animate",i._position==="center"||i._previousPosition==="center")},dependencies:[tn,Oe],styles:[`.mat-mdc-tab-body {
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
  transition: transform var(--mat-tab-body-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
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
`],encapsulation:2,changeDetection:1})}return n})(),on=(()=>{class n{_elementRef=c(G);_changeDetectorRef=c(xt);_ngZone=c(et);_tabsSubscription=W.EMPTY;_tabLabelSubscription=W.EMPTY;_tabBodySubscription=W.EMPTY;_diAnimationsDisabled=Tt();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new le;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=t,t&&typeof t=="object"?(this._bodyAnimationDuration=Zt(t.body),this._headerAnimationDuration=Zt(t.header)):this._headerAnimationDuration=this._bodyAnimationDuration=Zt(t)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),t&&e.add("mat-tabs-with-background",`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new D;focusChange=new D;animationDone=new D;selectedTabChange=new D(!0);_groupId;_isServer=!c(Ut).isBrowser;constructor(){let t=c(An,{optional:!0});this._groupId=c(De).getId("mat-tab-group-"),this.animationDuration=t&&t.animationDuration?t.animationDuration:"500ms",this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let i=this._tabBodyWrapper.nativeElement;i.style.minHeight=i.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((i,o)=>i.isActive=o===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((e,i)=>{e.position=i-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),i;for(let o=0;o<e.length;o++)if(e[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,i=e[o];break}!i&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(pt(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new Jt;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=dt(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+"px")}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,i){e.focusIndex=i,t.disabled||(this.selectedIndex=i)}_getTabIndex(t){let e=this._lastFocusedTabIndex??this.selectedIndex;return t===e?0:-1}_tabFocusChanged(t,e){t&&t!=="mouse"&&t!=="touch"&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,i)=>e._setActiveClass(i===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration==="0"||this._bodyAnimationDuration==="0ms"}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=h({type:n,selectors:[["mat-tab-group"]],contentQueries:function(e,i,o){if(e&1&&Ct(o,ee,5),e&2){let d;x(d=S())&&(i._allTabs=d)}},viewQuery:function(e,i){if(e&1&&ot(vn,5)(Cn,5)(Yt,5),e&2){let o;x(o=S())&&(i._tabBodyWrapper=o.first),x(o=S())&&(i._tabHeader=o.first),x(o=S())&&(i._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:13,hostBindings:function(e,i){e&2&&(z("mat-align-tabs",i.alignTabs),yt("mat-"+(i.color||"primary")),ue("--mat-tab-body-animation-duration",i._bodyAnimationDuration)("--mat-tab-header-animation-duration",i._headerAnimationDuration),I("mat-mdc-tab-group-dynamic-height",i.dynamicHeight)("mat-mdc-tab-group-inverted-header",i.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",i.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",w],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",w],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",w],selectedIndex:[2,"selectedIndex","selectedIndex",St],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",St],disablePagination:[2,"disablePagination","disablePagination",w],disableRipple:[2,"disableRipple","disableRipple",w],preserveContent:[2,"preserveContent","preserveContent",w],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[rt([{provide:nn,useExisting:n}])],ngContentSelectors:te,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(e,i){e&1&&(ft(),s(0,"mat-tab-header",3,0),M("indexFocused",function(d){return i._focusChanged(d)})("selectFocusedIndex",function(d){return i.selectedIndex=d}),f(2,Tn,8,17,"div",4,jt),l(),u(4,Mn,1,0),s(5,"div",5,1),f(7,kn,1,10,"mat-tab-body",6,jt),l()),e&2&&(p("selectedIndex",i.selectedIndex||0)("disableRipple",i.disableRipple)("disablePagination",i.disablePagination),he("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledby),r(2),v(i._tabs),r(2),g(i._isServer?4:-1),r(),I("_mat-animation-noopable",i._bodyAnimationsDisabled()),r(2),v(i._tabs))},dependencies:[Bn,an,Pe,Gt,qt,Yt],styles:[`.mdc-tab {
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
  transition: var(--mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
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
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
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
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
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
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
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
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
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
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
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
`],encapsulation:2,changeDetection:1})}return n})(),Jt=class{index;tab};function Zt(n){let a=n+"";return/^\d+$/.test(a)?n+"ms":a}function Fn(n,a){n&1&&(s(0,"div",3),m(1,"img",4),s(2,"span"),_(3),C(4,"translate"),l()(),m(5,"div",5)),n&2&&(r(3),k(" ",y(4,1,"sorts.no-sort-selectionne")))}function Nn(n,a){if(n&1&&(s(0,"div",10),_(1),m(2,"img",6),l()),n&2){let t=b(2);r(),ge(" ",t.sortSelected().PorteeMin," - ",t.sortPOMaximale()," "),r(),p("src",t.imageService.getActionIdUrl(t.IdActionsEnum.PORTEE),H)}}function Hn(n,a){n&1&&(s(0,"div",10),m(1,"img",13),l())}function zn(n,a){n&1&&(s(0,"div",10),m(1,"img",14),l())}function jn(n,a){if(n&1&&(s(0,"div",10),_(1),m(2,"img",6),l()),n&2){let t=b(2);r(),k(" ",t.sortSelected().PA," "),r(),p("src",t.imageService.getActionIdUrl(t.IdActionsEnum.PA),H)}}function Qn(n,a){if(n&1&&(s(0,"div",10),_(1),m(2,"img",6),l()),n&2){let t=b(2);r(),k(" ",t.sortSelected().PM," "),r(),p("src",t.imageService.getActionIdUrl(t.IdActionsEnum.PM),H)}}function Wn(n,a){if(n&1&&(s(0,"div",10),_(1),m(2,"img",6),l()),n&2){let t=b(2);r(),k(" ",t.sortSelected().PW," "),r(),p("src",t.imageService.getActionIdUrl(t.IdActionsEnum.PW),H)}}function Vn(n,a){if(n&1&&m(0,"span",16),n&2){let t=a.$implicit;p("innerHTML",t,ht)}}function $n(n,a){if(n&1&&m(0,"span",16),n&2){let t=a.$implicit;p("innerHTML",t,ht)}}function Un(n,a){if(n&1){let t=at();s(0,"mat-tab-group")(1,"mat-tab",15),C(2,"translate"),s(3,"div",12),f(4,Vn,1,1,"span",16,X),l()(),s(6,"mat-tab",15),C(7,"translate"),s(8,"div",12),f(9,$n,1,1,"span",16,X),l()()(),s(11,"div",17)(12,"mat-slider",18)(13,"input",19),Ce("ngModelChange",function(i){L(t);let o=b(2);return ve(o.spellLevel,i)||(o.spellLevel=i),B(i)}),M("ngModelChange",function(i){L(t);let o=b(2);return B(o.updateSpellLevel(i))}),l(),de(),l()()}if(n&2){let t=b(2);r(),p("label",Wt(y(2,6,"sorts.effet-normal"))),r(3),v(t.effetNormal()),r(2),p("label",Wt(y(7,8,"sorts.effet-critique"))),r(3),v(t.effetCritique()),r(3),p("displayWith",t.displayLevelSelector()),r(),fe("ngModel",t.spellLevel),me()}}function qn(n,a){if(n&1&&m(0,"span",16),n&2){let t=a.$implicit;p("innerHTML",t,ht)}}function Gn(n,a){if(n&1&&(s(0,"div",12),f(1,qn,1,1,"span",16,X),l()),n&2){let t=b(2);r(),v(t.effetNormal())}}function Xn(n,a){if(n&1&&(s(0,"div",3),m(1,"img",6),s(2,"div",7)(3,"span",8),_(4),l(),s(5,"span",9),u(6,Nn,3,3,"div",10),u(7,Hn,2,0,"div",10),u(8,zn,2,0,"div",10),u(9,jn,3,2,"div",10),u(10,Qn,3,2,"div",10),u(11,Wn,3,2,"div",10),l()()(),s(12,"div",5),_(13),l(),s(14,"div",11),u(15,Un,14,10)(16,Gn,3,0,"div",12),l()),n&2){let t=b();r(),p("src",t.imageService.getSortUrl(t.sortSelected().gfxId),H),r(3),O(t.getSortName(t.sortSelected())),r(2),g(t.sortSelected().PorteeMax?6:-1),r(),g(t.sortSelected()?.NotLDV?7:-1),r(),g(t.sortSelected().Ligne?8:-1),r(),g(t.sortSelected().PA?9:-1),r(),g(t.sortSelected().PM?10:-1),r(),g(t.sortSelected().PW?11:-1),r(2),O(t.getSortDescription(t.sortSelected())),r(2),g(t.effetCritique()&&t.effetCritique().length>1?15:16)}}var Lt=class n{translateService=c(Be);sanitizer=c(ye);spellEffectService=c(Ve);sortSelectionService=c(Z);recapStatsService=c($e);imageService=c(Pt);IdActionsEnum=xe;sortSelected=this.sortSelectionService.sortSelected;effectDisplay=this.sortSelectionService.effectDisplay;spellLevel=this.sortSelectionService.spellLevel;effetNormal=A(()=>(this.sortSelected(),this.getEffect("NORMAL")));effetCritique=A(()=>(this.sortSelected(),this.getEffect("CRITIQUE")));PO=j(this.recapStatsService.recap$.pipe(N(a=>a.filter(t=>t.id===160)[0]),mt(a=>a!==void 0),N(a=>a.value)),{initialValue:0});sortPOMaximale(){let a=this.sortSelected()?.PorteeMin||0,t=this.sortSelected()?.PorteeMax||0,e=this.sortSelected()?.POModifiable?this.PO():0;return Math.max(t+e,a)}getSortName(a){return a.name[this.translateService.currentLang]}getSortDescription(a){return a.description[this.translateService.currentLang]}displayLevelSelector(){return a=>`${a-1}`}getEffect(a){if(!this.sortSelected())return[];let t=this.sortSelected(),e=this.translateService.currentLang,i=this.spellLevel()-1,o=a==="NORMAL",d=o?t.effect_normal[e]:t.effect_critical[e],T=o?t.normalEffect[e]:t.criticalEffect[e];return!T||T.length===0?(d.split(`
`).map(ct=>ct.charAt(0).toUpperCase()+ct.slice(1))||[]).map(ct=>this.sanitizer.bypassSecurityTrustHtml(ct)):(this.spellEffectService.getFormattedEffect(d,T,i).split(`
`).map(F=>F.charAt(0).toUpperCase()+F.slice(1))||[]).map(F=>this.sanitizer.bypassSecurityTrustHtml(F))}setEffectDisplay(a){this.sortSelectionService.setEffectDisplay(a)}updateSpellLevel(a){this.sortSelectionService.setSpellLevel(a)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=h({type:n,selectors:[["app-selected-sort"]],decls:7,vars:4,consts:[[1,"card"],[1,"header"],[1,"description-sort"],[1,"sort-title"],["src","sorts/empty-sort.png","alt",""],[1,"description"],["alt","",3,"src"],[1,"sort-info"],[1,"sort-name"],[1,"cout-sort"],[1,"badge"],[1,"effet-sort"],[1,"effet"],["src","aptitudes/ligne_not_vu.png","alt","",1,"ligne-not-vu"],["src","aptitudes/picto_spell_line.png","alt","",1,"ligne"],[3,"label"],[3,"innerHTML"],[1,"level-select","or"],["min","2","max","246","step","1","showTickMarks","","discrete","",3,"displayWith"],["matSliderThumb","",3,"ngModelChange","ngModel"]],template:function(t,e){t&1&&(s(0,"div",0)(1,"div",1),_(2),C(3,"translate"),l(),s(4,"div",2),u(5,Fn,6,3)(6,Xn,17,10),l()()),t&2&&(r(2),k(" ",y(3,2,"sorts.sort-selectionne")," "),r(3),g(e.sortSelected()?6:5))},dependencies:[R,qe,ze,Fe,Ne,He,Ze,Ge,Xe,Ae,on,ee,E],styles:[".card[_ngcontent-%COMP%]{width:100%;padding:5px;min-width:300px;height:fit-content}.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{align-items:center;justify-content:center;padding:5px 0}.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]{margin:0 5%}.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]   .sort-title[_ngcontent-%COMP%]{display:flex}.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]   .sort-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:10px;width:56px;height:56px;cursor:pointer}.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]   .sort-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:auto 0}.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]   .sort-title[_ngcontent-%COMP%]   .sort-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;gap:8px;min-width:0}.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]   .sort-title[_ngcontent-%COMP%]   .sort-name[_ngcontent-%COMP%]{margin:0;font-size:1.25rem;font-weight:700}.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]   .sort-title[_ngcontent-%COMP%]   .cout-sort[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px;margin:0;font-size:1rem;font-weight:700}.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]   .sort-title[_ngcontent-%COMP%]   .cout-sort[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;padding:3px 12px;border-radius:999px;background:var(--color-accent);color:var(--color-text-on-accent)}.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]   .sort-title[_ngcontent-%COMP%]   .cout-sort[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0;width:18px;height:18px}.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{margin-left:66px;margin-top:12px;font-size:14px}.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]   .effet-sort[_ngcontent-%COMP%]{margin-left:66px}.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]   .effet-sort[_ngcontent-%COMP%]   .effet[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-top:10px;padding:10px;background-color:var(--color-surface-deep);border-radius:var(--panel-radius)}.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]   .effet-sort[_ngcontent-%COMP%]   .effet[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:center;text-align:start;font-size:14px;margin:0}.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]   .effet-sort[_ngcontent-%COMP%]   .effet[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 3px}.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]   .effet-sort[_ngcontent-%COMP%]   .level-select[_ngcontent-%COMP%]{width:90%}.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]   .effet-sort[_ngcontent-%COMP%]   .level-select[_ngcontent-%COMP%]   mat-slider[_ngcontent-%COMP%]{width:100%}@media screen and (max-width:850px){.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]   .sort-title[_ngcontent-%COMP%]   .cout-sort[_ngcontent-%COMP%]{flex-wrap:wrap!important;margin-left:3px!important}.card[_ngcontent-%COMP%]   .description-sort[_ngcontent-%COMP%]   .sort-title[_ngcontent-%COMP%]   .cout-sort[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-left:3px!important;width:16px!important;height:16px!important}}  .effet-sort .mat-mdc-tab-body.mat-mdc-tab-body-active{z-index:0!important}"]})};var Y=class n{imageService=c(Pt);sortService=c(Q);levelFormService=c(je);sortSelectionService=c(Z);sortFormService=c(Ot);sort=Vt.required();typeSort=Vt.required();level=j(this.levelFormService.level$,{initialValue:246});isSelected=A(()=>this.sortSelectionService.sortSelected()?.gfxId===this.sort().gfxId);getSortUrl(a){return this.imageService.getSortUrl(a)}getSortName(){return this.sort().name[this.sortService.getCurrentLang()]}isLocked(){return this.level()<this.sort().levelUnlock}onDragStart(a){this.sortSelectionService.setDragSource("list"),a.dataTransfer&&(a.dataTransfer.effectAllowed="copy",a.dataTransfer.setData("sortId",this.sort().gfxId.toString()),a.dataTransfer.setData("typeSort",this.typeSort()),a.dataTransfer.setData("source","list"))}onClick(){this.sortSelectionService.selectSort(this.sort(),this.typeSort())}onDoubleClick(){this.addSortToBuild()}onContextMenu(a){a.preventDefault(),this.addSortToBuild()}addSortToBuild(){this.typeSort()==="NEUTRE"?this.sortFormService.addSortNeutre(this.sort().gfxId):this.typeSort()==="PASSIF"&&this.sortFormService.addSortPassif(this.sort().gfxId)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=h({type:n,selectors:[["app-sort-image"]],inputs:{sort:[1,"sort"],typeSort:[1,"typeSort"]},features:[be([It])],decls:1,vars:6,consts:[["alt","","draggable","true","appActivateTrigger","dblclick",3,"dragstart","click","appActivate","contextmenu","src","matTooltip"]],template:function(t,e){t&1&&(s(0,"img",0),M("dragstart",function(o){return e.onDragStart(o)})("click",function(){return e.onClick()})("appActivate",function(){return e.onDoubleClick()})("contextmenu",function(o){return e.onContextMenu(o)}),l()),t&2&&(I("sort-locked",e.isLocked())("selected",e.isSelected()),p("src",e.getSortUrl(e.sort().gfxId),H)("matTooltip",e.getSortName()))},dependencies:[kt,Mt,wt],styles:['@charset "UTF-8";img[_ngcontent-%COMP%]{width:56px;height:56px;cursor:pointer}img[_ngcontent-%COMP%]{border-radius:12px;box-sizing:border-box}img.selected[_ngcontent-%COMP%]{border:3px solid var(--color-accent)}img[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.sort-locked[_ngcontent-%COMP%]{position:relative;filter:grayscale(100%) brightness(.5);cursor:not-allowed!important}.sort-locked[_ngcontent-%COMP%]:before{content:"\\1f512";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:32px;pointer-events:none;z-index:10;filter:none;text-shadow:0 0 5px var(--glow-lock-outer),0 0 10px var(--glow-lock-inner)}.sort-locked[_ngcontent-%COMP%]:hover{transform:none!important}@media screen and (max-width:850px){img[_ngcontent-%COMP%]{width:30px!important;height:30px!important}}']})};var J=(n,a)=>a.gfxId;function Zn(n,a){if(n&1&&m(0,"app-sort-image",4),n&2){let t=a.$implicit;p("sort",t)}}function Kn(n,a){if(n&1&&m(0,"app-sort-image",4),n&2){let t=a.$implicit;p("sort",t)}}function Yn(n,a){if(n&1&&m(0,"app-sort-image",4),n&2){let t=a.$implicit;p("sort",t)}}function Jn(n,a){if(n&1&&m(0,"app-sort-image",4),n&2){let t=a.$implicit;p("sort",t)}}function ti(n,a){if(n&1&&(f(0,Zn,1,1,"app-sort-image",4,J),f(2,Kn,1,1,"app-sort-image",4,J),f(4,Yn,1,1,"app-sort-image",4,J),f(6,Jn,1,1,"app-sort-image",4,J)),n&2){let t=b();v(t.sortService.sortsClasse().sortElementaires.feu),r(2),v(t.sortService.sortsClasse().sortElementaires.eau),r(2),v(t.sortService.sortsClasse().sortElementaires.terre),r(2),v(t.sortService.sortsClasse().sortElementaires.air)}}function ei(n,a){if(n&1&&m(0,"app-sort-image",4),n&2){let t=a.$implicit;p("sort",t)}}function ni(n,a){if(n&1&&f(0,ei,1,1,"app-sort-image",4,J),n&2){let t=b();v(t.sortService.sortsClasse().sortActifs)}}function ii(n,a){if(n&1&&m(0,"app-sort-image",5),n&2){let t=a.$implicit;p("sort",t)}}function ai(n,a){if(n&1&&f(0,ii,1,1,"app-sort-image",5,J),n&2){let t=b();v(t.sortService.sortsClasse().sortPassifs)}}var Bt=class n{sortService=c(Q);static \u0275fac=function(t){return new(t||n)};static \u0275cmp=h({type:n,selectors:[["app-sort-list"]],decls:19,vars:15,consts:[[1,"card"],[1,"header"],[1,"sorts-elementaires"],[1,"sorts-passifs"],["typeSort","NEUTRE",3,"sort"],["typeSort","PASSIF",3,"sort"]],template:function(t,e){t&1&&(s(0,"div",0)(1,"div",1),_(2),C(3,"translate"),l(),s(4,"span"),_(5),C(6,"translate"),l(),s(7,"div",2),u(8,ti,8,0),l(),s(9,"span"),_(10),C(11,"translate"),l(),s(12,"div",3),u(13,ni,2,0),l(),s(14,"span"),_(15),C(16,"translate"),l(),s(17,"div",3),u(18,ai,2,0),l()()),t&2&&(r(2),k(" ",y(3,7,"sorts.sorts-classe")," "),r(3),O(y(6,9,"sorts.sorts-elementaires")),r(3),g(e.sortService.sortsClasse()!==void 0?8:-1),r(2),O(y(11,11,"sorts.sorts-neutres")),r(3),g(e.sortService.sortsClasse()!==void 0?13:-1),r(2),O(y(16,13,"sorts.passifs")),r(3),g(e.sortService.sortsClasse()!==void 0?18:-1))},dependencies:[R,Y,E],styles:['@charset "UTF-8";.card[_ngcontent-%COMP%]{width:100%;padding:5px;min-width:300px;height:fit-content}.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{align-items:center;justify-content:center;padding:5px 0}.card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-align:center;margin:10px 0}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:56px;height:56px;cursor:pointer}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.card[_ngcontent-%COMP%]   .sorts-neutres[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .sorts-passifs[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .sorts-elementaires[_ngcontent-%COMP%]{margin:0 5%;display:grid;justify-items:center;grid-template-columns:repeat(6,1fr);grid-template-rows:repeat(2,1fr);grid-column-gap:2px;grid-row-gap:5px}.card[_ngcontent-%COMP%]   .sorts-passifs[_ngcontent-%COMP%]{grid-template-rows:repeat(1,1fr);margin-bottom:10px}.card[_ngcontent-%COMP%]   .sorts-elementaires[_ngcontent-%COMP%]{grid-template-columns:repeat(5,1fr)}.sort-locked[_ngcontent-%COMP%]{position:relative;filter:grayscale(100%) brightness(.5);cursor:not-allowed!important}.sort-locked[_ngcontent-%COMP%]:before{content:"\\1f512";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:32px;pointer-events:none;z-index:10;filter:none;text-shadow:0 0 5px var(--glow-lock-outer),0 0 10px var(--glow-lock-inner)}.sort-locked[_ngcontent-%COMP%]:hover{transform:none!important}@media screen and (max-width:850px){.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px!important;height:30px!important}.card[_ngcontent-%COMP%]   .sorts-neutres[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .sorts-passifs[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .sorts-elementaires[_ngcontent-%COMP%]{grid-column-gap:0px!important}}']})};var rn=(n,a)=>a.gfxId;function oi(n,a){n&1&&(s(0,"div",3),m(1,"div",4)(2,"div",5),l())}function ri(n,a){if(n&1&&f(0,oi,3,0,"div",3,X),n&2){let t=b();v(t.skeletonItems)}}function si(n,a){if(n&1&&(s(0,"div",3),m(1,"app-sort-image",6),s(2,"span",7),_(3),l()()),n&2){let t=a.$implicit,e=b(2);r(),p("sort",t),r(2),k(" ",e.ratioUsageSortNeutre(t)," ")}}function ci(n,a){if(n&1&&(s(0,"div",3),m(1,"app-sort-image",8),s(2,"span",7),_(3),l()()),n&2){let t=a.$implicit,e=b(2);r(),p("sort",t),r(2),k(" ",e.ratioUsageSortPassif(t)," ")}}function li(n,a){if(n&1&&(f(0,si,4,2,"div",3,rn),f(2,ci,4,2,"div",3,rn)),n&2){let t=b();v(t.sortsNeutreConseilles()),r(2),v(t.sortsPassifConseilles())}}var At=class n{classeFormService=c(Dt);sortService=c(Q);supabaseService=c(Ue);countSortNeutreConseilles=new Map;countSortPassifConseilles=new Map;nbDeckSorts=_t(0);MAX_SORTS=18;MAX_SORTS_NEUTRE=12;MAX_SORTS_PASSIF=6;loading=_t(!0);skeletonItems=Array.from({length:this.MAX_SORTS});sortsConseilles=j(this.classeFormService.classe$.pipe(U(()=>this.loading.set(!0)),bt(a=>this.supabaseService.getSortsConseillees(a)),U(()=>{this.countSortNeutreConseilles.clear(),this.countSortPassifConseilles.clear()}),U(a=>this.nbDeckSorts.set(a.length)),U(a=>this.fillCounts(a)),N(()=>this.keepBestSortsConseilles()),U(()=>this.loading.set(!1))),{initialValue:[]});sortsNeutreConseilles=A(()=>this.sortsConseilles().slice(0,this.MAX_SORTS_NEUTRE));sortsPassifConseilles=A(()=>this.sortsConseilles().slice(this.MAX_SORTS_NEUTRE,this.MAX_SORTS));ratioUsageSortNeutre(a){let t=this.countSortNeutreConseilles.get(a.gfxId.toString())||0;return this.nbDeckSorts()>0?`${Math.round(t/this.nbDeckSorts()*100)}%`:"0%"}ratioUsageSortPassif(a){let t=this.countSortPassifConseilles.get(a.gfxId.toString())||0;return this.nbDeckSorts()>0?`${Math.round(t/this.nbDeckSorts()*100)}%`:"0%"}keepBestSortsConseilles(){let a=Array.from(this.countSortNeutreConseilles.entries()).sort((e,i)=>i[1]-e[1]).map(e=>parseInt(e[0],10)).map(e=>this.sortService.getDescriptionSortNeutreByGfxId(e)).filter(e=>!!e).slice(0,this.MAX_SORTS_NEUTRE),t=Array.from(this.countSortPassifConseilles.entries()).sort((e,i)=>i[1]-e[1]).map(e=>parseInt(e[0],10)).map(e=>this.sortService.getDescriptionSortPassifByGfxId(e)).filter(e=>!!e).slice(0,this.MAX_SORTS_PASSIF);return[...a,...t]}fillCounts(a){a.forEach(t=>{let e=t.split("-");if(e.length!==this.MAX_SORTS)return;let i=e.slice(0,this.MAX_SORTS_NEUTRE),o=e.slice(this.MAX_SORTS_NEUTRE),d=new Set(i),T=new Set(o);d.forEach(P=>this.incrementCount(this.countSortNeutreConseilles,P)),T.forEach(P=>this.incrementCount(this.countSortPassifConseilles,P))})}incrementCount(a,t){if(t==="0")return;let e=a.get(t)||0;a.set(t,e+1)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=h({type:n,selectors:[["app-sorts-conseilles"]],decls:7,vars:4,consts:[[1,"card"],[1,"header"],[1,"content"],[1,"sort-conseille"],[1,"skeleton-sort"],[1,"skeleton-ratio"],["typeSort","NEUTRE",3,"sort"],[1,"ratio"],["typeSort","PASSIF",3,"sort"]],template:function(t,e){t&1&&(s(0,"div",0)(1,"div",1),_(2),C(3,"translate"),l(),s(4,"div",2),u(5,ri,2,0)(6,li,4,0),l()()),t&2&&(r(2),k(" ",y(3,2,"sorts.sort-conseille")," "),r(3),g(e.loading()?5:6))},dependencies:[Y,R,E],styles:[".skeleton-sort[_ngcontent-%COMP%], .skeleton-ratio[_ngcontent-%COMP%]{background:linear-gradient(90deg,#2b3d58 25%,#4a658a,#2b3d58 75%);background-size:220% 100%;animation:_ngcontent-%COMP%_skeleton-loading 1.3s ease-in-out infinite;border-radius:6px}.skeleton-sort[_ngcontent-%COMP%]{width:56px;height:56px}.skeleton-ratio[_ngcontent-%COMP%]{width:36px;height:16px;margin-top:4px}@keyframes _ngcontent-%COMP%_skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}@media screen and (max-width:850px){.skeleton-sort[_ngcontent-%COMP%]{width:30px;height:30px}}.card[_ngcontent-%COMP%]{width:90%;padding:5px;min-width:300px;height:fit-content;margin:0 auto 15px}.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{align-items:center;justify-content:center;padding:5px 0}.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:grid;grid-template-rows:repeat(2,auto);grid-auto-flow:column;justify-content:space-evenly;align-items:center;gap:8px 14px;overflow-x:auto}.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sort-conseille[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sort-conseille[_ngcontent-%COMP%]   .ratio[_ngcontent-%COMP%]{margin-top:6px;padding:2px 10px;border-radius:999px;background:var(--color-accent);color:var(--color-text-on-accent);font-size:1rem;font-weight:700}@media screen and (max-width:1000px){.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{grid-template-rows:none;grid-auto-flow:row;grid-template-columns:repeat(auto-fill,minmax(64px,1fr));justify-items:center;overflow-x:visible}}"]})};var Ft=class n{classeFormService=c(Dt);sortSelectionService=c(Z);constructor(){this.classeFormService.classe$.subscribe(a=>{a&&this.sortSelectionService.clearSelection()})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=h({type:n,selectors:[["app-sorts"]],decls:11,vars:3,consts:[[1,"page-title"],[1,"body"],[1,"column"]],template:function(t,e){t&1&&(s(0,"h1",0),_(1),C(2,"translate"),l(),m(3,"app-code-deck")(4,"app-sorts-conseilles"),s(5,"div",1)(6,"div",2),m(7,"app-equipped-sorts")(8,"app-selected-sort"),l(),s(9,"div",2),m(10,"app-sort-list"),l()()),t&2&&(r(),O(y(2,1,"app.sorts")))},dependencies:[R,Et,At,Ke,Lt,Bt,E],styles:[".body[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;gap:24px;width:auto;margin:0 20px}.body[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:48%;flex:1}[_nghost-%COMP%]     app-sorts-conseilles .card, [_nghost-%COMP%]     app-equipped-sorts .card, [_nghost-%COMP%]     app-selected-sort .card, [_nghost-%COMP%]     app-sort-list .card{width:auto;margin:0 20px 24px;padding:16px 20px;box-sizing:border-box}[_nghost-%COMP%]     .body .card{margin:0 0 24px}[_nghost-%COMP%]     .card>.header{justify-content:flex-start!important;text-align:left;padding:0 0 8px!important;border-bottom:0;margin-bottom:8px;font-size:.95rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--color-text-muted)}[_nghost-%COMP%]     app-sort-list .card>span, [_nghost-%COMP%]     app-equipped-sorts .card>span{text-align:left!important;margin:14px 0 8px!important;font-size:1.05rem;font-weight:600;color:var(--color-text-muted)}[_nghost-%COMP%]     app-selected-sort .card{font-size:1.05rem}[_nghost-%COMP%]     app-selected-sort .card .description, [_nghost-%COMP%]     app-selected-sort .card .description-sort, [_nghost-%COMP%]     app-selected-sort .card .effet{font-size:1rem!important}@media screen and (max-width:1300px){.body[_ngcontent-%COMP%]{flex-direction:column;align-items:center;margin:0}.body[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]{width:90%}[_nghost-%COMP%]     app-sorts-conseilles .card, [_nghost-%COMP%]     app-equipped-sorts .card, [_nghost-%COMP%]     app-selected-sort .card, [_nghost-%COMP%]     app-sort-list .card{margin:0 0 16px;padding:12px}}@media screen and (max-width:1000px){.body[_ngcontent-%COMP%]{align-items:stretch;margin:0 12px}.body[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]{width:100%;min-width:0}[_nghost-%COMP%]     app-sorts-conseilles .card{margin:0 12px 16px;min-width:0;width:auto}[_nghost-%COMP%]     app-equipped-sorts, [_nghost-%COMP%]     app-selected-sort, [_nghost-%COMP%]     app-sort-list{min-width:0}[_nghost-%COMP%]     .body app-equipped-sorts .card, [_nghost-%COMP%]     .body app-selected-sort .card, [_nghost-%COMP%]     .body app-sort-list .card{margin:0 0 16px;min-width:0}}"]})};var sn=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=h({type:n,selectors:[["app-sorts-router"]],decls:1,vars:0,template:function(t,e){t&1&&m(0,"app-sorts")},dependencies:[Ft],styles:["[_nghost-%COMP%]{display:flex}[_nghost-%COMP%]   app-sorts[_ngcontent-%COMP%]{width:100%}"]})};export{sn as SortsRouterComponent};
