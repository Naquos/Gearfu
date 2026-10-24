import{b as Mo}from"./chunk-JM6VEODD.js";import{a as j,d as Co}from"./chunk-WKN3QZNN.js";import{a as jt}from"./chunk-EMNXZWUJ.js";import{a as qe,b as xo,c as Io,d as kn,e as Qe,f as ue,g as ko,h as So,i as Sn,j as xt}from"./chunk-TPLIMRY5.js";import{e as It,f as kt,g as En}from"./chunk-5MKCGN6I.js";import{a as pn,b as In,c as Ge}from"./chunk-VCDXCGH2.js";import{c as $i,g as Mn,h as To,i as Oo}from"./chunk-RUOUGLL2.js";import{a as hn,d as Eo}from"./chunk-UD4FS7WL.js";import{a as Me,b as je}from"./chunk-ABGUGHT3.js";import{a as dn,b as un,c as bo,d as ze,e as gt,f as bn,g as ft,h as bt,i as _o,j as _t,k as _n,l as vn,m as yn,n as vt,o as yt,p as Ct,q as Cn,r as xn,u as vo,v as Oe,w as xi,x as yo,y as He}from"./chunk-WA7PH63J.js";import{a as Le,b as dt}from"./chunk-2JOSLP6L.js";import{$ as Fi,$d as Ve,Aa as k,Ab as L,Ad as Ce,Ba as Bi,C as De,Ca as a,Cb as Gi,Cd as sn,D as Di,Da as Li,Db as qi,Dd as cn,Ea as Vi,Eb as Ue,Fb as Je,Fd as _i,Ga as Zt,Gb as M,Ha as Dt,Hb as ve,Ia as Ft,Ib as g,Id as io,Jb as v,Jd as ln,K as Kt,Kb as Y,Kd as oo,La as rt,Lb as Be,Ld as ao,M as Ke,Md as ro,N as te,Nd as so,O as fe,P as Ie,Pa as b,Pb as Jt,Pc as Q,Pd as vi,Qa as $,Qb as en,Qd as yi,Ra as Ne,Rb as tn,Rc as fi,Rd as mn,S as at,Sa as ji,Sc as bi,Sd as co,T as G,Tb as me,Td as xe,U as W,Ua as zi,Ub as Qi,Uc as nn,Ud as ke,Va as Nt,Vb as d,Vc as ye,Vd as Se,W as ne,Wa as hi,Wb as u,Xa as Hi,Xb as Wi,Xc as Lt,Xd as Ee,Y as c,Yc as Ki,Yd as T,Zd as S,_b as oe,_d as Ci,a as Wt,ac as ct,ad as on,ae as R,ba as F,bd as mt,be as et,c as Pt,ca as N,cb as P,cd as Yi,ce as V,d as se,da as wt,db as C,dc as U,de as ut,e as pe,ea as Ni,eb as x,ec as gi,ed as pt,fa as Rt,fb as be,fd as ae,gb as Ut,ge as lo,hb as z,hc as X,hd as Xi,he as mo,ib as H,ie as po,j as ot,ja as q,jb as s,jd as de,ka as Yt,kb as l,kd as Zi,ke as uo,lb as m,lc as E,ld as Ji,le as ho,mb as p,mc as Bt,md as an,me as Vt,n as O,na as A,nb as Ye,o as $e,ob as Xe,pe as go,qb as K,r as $t,ra as Xt,rb as st,rd as eo,re as Te,sa as Ui,sb as _,se as gn,t as Ri,ta as Fe,td as to,ub as f,uc as lt,ue as fn,v as Re,vb as le,wa as ce,wb as ie,wd as no,x as ge,xb as Ze,xe as ht,yb as _e,yd as rn,ye as fo,zb as B}from"./chunk-WKNDPVCZ.js";import{a as Pe,b as we}from"./chunk-25N2FLV6.js";var Tn=class o extends ht{static DEFAULT_VALUE=!1;display=new pe(o.DEFAULT_VALUE);display$=this.display.asObservable();keyEnum="KEY_DISPLAY_FAVORIS";model=A({display:o.DEFAULT_VALUE});form=gn(this.model);constructor(){super(),this.init()}handleChanges(i){this.display.next(i.display)}setValue(i){this.model.set({display:this.normalizeStoredValue(i)})}setDefaultValue(){this.model.set({display:o.DEFAULT_VALUE})}normalizeStoredValue(i){if(typeof i=="boolean")return i;if(i&&typeof i=="object"){let t=i.display;if(typeof t=="boolean")return t}return o.DEFAULT_VALUE}static \u0275fac=function(e){return new(e||o)};static \u0275prov=G({token:o,factory:o.\u0275fac,providedIn:"root"})};var Po=class o{isDisplayed=new pe(!1);isDisplayed$=this.isDisplayed.asObservable();toggleDisplay(){this.isDisplayed.next(!this.isDisplayed.value)}setDisplay(i){this.isDisplayed.next(i)}static \u0275fac=function(e){return new(e||o)};static \u0275prov=G({token:o,factory:o.\u0275fac,providedIn:"root"})};var On=(()=>{class o{_animationsDisabled=xe();state="unchecked";disabled=!1;appearance="full";static \u0275fac=function(t){return new(t||o)};static \u0275cmp=b({type:o,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,n){t&2&&M("mat-pseudo-checkbox-indeterminate",n.state==="indeterminate")("mat-pseudo-checkbox-checked",n.state==="checked")("mat-pseudo-checkbox-disabled",n.disabled)("mat-pseudo-checkbox-minimal",n.appearance==="minimal")("mat-pseudo-checkbox-full",n.appearance==="full")("_mat-animation-noopable",n._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,n){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return o})();var $o=["text"],Ko=[[["mat-icon"]],"*"],Yo=["mat-icon","*"];function Xo(o,i){if(o&1&&p(0,"mat-pseudo-checkbox",1),o&2){let e=f();s("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function Zo(o,i){if(o&1&&p(0,"mat-pseudo-checkbox",3),o&2){let e=f();s("disabled",e.disabled)}}function Jo(o,i){if(o&1&&(l(0,"span",4),g(1),m()),o&2){let e=f();a(),Y("(",e.group.label,")")}}var Ht=new ne("MAT_OPTION_PARENT_COMPONENT"),Gt=new ne("MatOptgroup");var zt=class{source;isUserInput;constructor(i,e=!1){this.source=i,this.isUserInput=e}},he=(()=>{class o{_element=c(ce);_changeDetectorRef=c(X);_parent=c(Ht,{optional:!0});group=c(Gt,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=c(Ce).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=A(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new q;_text;_stateChanges=new se;constructor(){let e=c(mt);e.load(kt),e.load(Yi),this._signalDisableRipple=!!this._parent&&Ui(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let n=this._getHostElement();typeof n.focus=="function"&&n.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!de(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new zt(this,e))}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=b({type:o,selectors:[["mat-option"]],viewQuery:function(t,n){if(t&1&&_e($o,7),t&2){let r;B(r=L())&&(n._text=r.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,n){t&1&&_("click",function(){return n._selectViaInteraction()})("keydown",function(h){return n._handleKeydown(h)}),t&2&&(st("id",n.id),P("aria-selected",n.selected)("aria-disabled",n.disabled.toString()),M("mdc-list-item--selected",n.selected)("mat-mdc-option-multiple",n.multiple)("mat-mdc-option-active",n.active)("mdc-list-item--disabled",n.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",E]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Yo,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,n){t&1&&(le(Ko),C(0,Xo,1,2,"mat-pseudo-checkbox",1),ie(1),l(2,"span",2,0),ie(4,1),m(),C(5,Zo,1,1,"mat-pseudo-checkbox",3),C(6,Jo,2,1,"span",4),p(7,"div",5)),t&2&&(x(n.multiple?0:-1),a(5),x(!n.multiple&&n.selected&&!n.hideSingleSelectionIndicator?5:-1),a(),x(n.group&&n.group._inert?6:-1),a(),s("matRippleTrigger",n._getHostElement())("matRippleDisabled",n.disabled||n.disableRipple))},dependencies:[On,It],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return o})();function An(o,i,e){if(e.length){let t=i.toArray(),n=e.toArray(),r=0;for(let h=0;h<o+1;h++)t[h].group&&t[h].group===n[r]&&r++;return r}return 0}function Pn(o,i,e,t){return o<e?o:o+i>e+t?Math.max(0,o-t+i):e}var wo=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=$({type:o});static \u0275inj=W({imports:[ae]})}return o})();var Et=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=$({type:o});static \u0275inj=W({imports:[En,wo,he,ae]})}return o})();var ta=["panel"],na=["*"];function ia(o,i){if(o&1&&(Ye(0,"div",1,0),ie(2),Xe()),o&2){let e=i.id,t=f();ve(t._classList),M("mat-mdc-autocomplete-visible",t.showPanel)("mat-mdc-autocomplete-hidden",!t.showPanel)("mat-autocomplete-panel-animations-enabled",!t._animationsDisabled)("mat-primary",t._color==="primary")("mat-accent",t._color==="accent")("mat-warn",t._color==="warn"),st("id",t.id),P("aria-label",t.ariaLabel||null)("aria-labelledby",t._getPanelAriaLabelledby(e))}}var Ii=class{source;option;constructor(i,e){this.source=i,this.option=e}},Ro=new ne("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),Do=(()=>{class o{_changeDetectorRef=c(X);_elementRef=c(ce);_defaults=c(Ro);_animationsDisabled=xe();_activeOptionChanges=Wt.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new q;opened=new q;closed=new q;optionActivated=new q;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=c(Ce).getId("mat-autocomplete-");inertGroups;constructor(){let e=c(Zi);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new rn(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let t=new Ii(this,e);this.optionSelected.emit(t)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=b({type:o,selectors:[["mat-autocomplete"]],contentQueries:function(t,n,r){if(t&1&&Ze(r,he,5)(r,Gt,5),t&2){let h;B(h=L())&&(n.options=h),B(h=L())&&(n.optionGroups=h)}},viewQuery:function(t,n){if(t&1&&_e(Vi,7)(ta,5),t&2){let r;B(r=L())&&(n.template=r.first),B(r=L())&&(n.panel=r.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",E],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",E],requireSelection:[2,"requireSelection","requireSelection",E],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",E],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",E]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[me([{provide:Ht,useExisting:o}])],ngContentSelectors:na,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(t,n){t&1&&(le(),Hi(0,ia,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
  width: 100%;
  max-height: 256px;
  visibility: hidden;
  transform-origin: center top;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  position: relative;
  border-radius: var(--mat-autocomplete-container-shape, var(--mat-sys-corner-extra-small));
  box-shadow: var(--mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  background-color: var(--mat-autocomplete-background-color, var(--mat-sys-surface-container));
}
@media (forced-colors: active) {
  div.mat-mdc-autocomplete-panel {
    outline: solid 1px;
  }
}
.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transform-origin: center bottom;
}
div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible {
  visibility: visible;
}

div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden,
.cdk-overlay-pane:has(> .mat-mdc-autocomplete-hidden) {
  visibility: hidden;
  pointer-events: none;
}

@keyframes _mat-autocomplete-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.mat-autocomplete-panel-animations-enabled {
  animation: _mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}

mat-autocomplete {
  display: none;
}
`],encapsulation:2})}return o})();var oa={provide:ut,useExisting:at(()=>ki),multi:!0};var aa=new ne("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let o=c(Rt);return()=>ln(o)}}),ki=(()=>{class o{_environmentInjector=c(Fi);_element=c(ce);_injector=c(Rt);_viewContainerRef=c(rt);_zone=c(Yt);_changeDetectorRef=c(X);_dir=c(pt,{optional:!0});_formField=c(kn,{optional:!0,host:!0});_viewportRuler=c(sn);_scrollStrategy=c(aa);_renderer=c(Zt);_animationsDisabled=xe();_defaults=c(Ro,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new se;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=Wt.EMPTY;_breakpointObserver=c(to);_handsetLandscapeSubscription=Wt.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new se;_overlayPanelClass=Xi(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges())}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return Re(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(ge(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(ge(()=>this._overlayAttached)):ot()).pipe(O(e=>e instanceof zt?e:null))}optionSelections=$t(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(Ke(e),te(()=>Re(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(te(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new Pt(e=>{let t=r=>{let h=an(r),y=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,D=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&h!==this._element.nativeElement&&!this._hasFocus()&&(!y||!y.contains(h))&&(!D||!D.contains(h))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(h)&&e.next(r)},n=[this._renderer.listen("document","click",t),this._renderer.listen("document","auxclick",t),this._renderer.listen("document","touchend",t)];return()=>{n.forEach(r=>r())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let t=e,n=t.keyCode,r=de(t);if(n===27&&!r&&t.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&n===13&&this.panelOpen&&!r)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else if(this.autocomplete){let h=this.autocomplete._keyManager.activeItem,y=n===38||n===40;n===9||y&&!r&&this.panelOpen?this.autocomplete._keyManager.onKeydown(t):y&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(y||this.autocomplete._keyManager.activeItem!==h)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let t=e.target,n=t.value;if(t.type==="number"&&(n=n==""?null:parseFloat(n)),this._previousValue!==n){if(this._previousValue=n,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(n),!n)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let r=this.autocomplete.options?.find(h=>h.selected);if(r){let h=this._getDisplayValue(r.value);n!==h&&r.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let r=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(r)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return Ji()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new Pt(n=>{Li(()=>{n.next()},{injector:this._environmentInjector})}),t=this.autocomplete.options?.changes.pipe(Ie(()=>this._positionStrategy.reapplyLastPosition()),Di(0))??ot();return Re(e,t).pipe(te(()=>this._zone.run(()=>{let n=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),n!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),De(1)).subscribe(n=>this._setValueAndClose(n))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let t=this.autocomplete;return t&&t.displayWith?t.displayWith(e):e}_assignOptionValue(e){let t=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(t??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let t=this.autocomplete,n=e?e.source:this._pendingAutoselectedOption;n?(this._clearPreviousSelectedOption(n),this._assignOptionValue(n.value),this._onChange(n.value),t._emitSelectEvent(n),this._element.nativeElement.focus()):t.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,t){this.autocomplete?.options?.forEach(n=>{n!==e&&n.selected&&n.deselect(t)})}_openPanelInternal(e=this._element.nativeElement.value){this._attachOverlay(e),this._floatLabel()}_attachOverlay(e){if(!this.autocomplete)return;let t=this._overlayRef;t?(this._positionStrategy.setOrigin(this._getConnectedElement()),t.updateSize({width:this._getPanelWidth()})):(this._portal=new _i(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),t=so(this._injector,this._getOverlayConfig()),this._overlayRef=t,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&t&&t.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(co.HandsetLandscape).subscribe(r=>{r.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),t&&!t.hasAttached()&&(t.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let n=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this.panelOpen&&n!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!de(e)||e.keyCode===38&&de(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new oo({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=ao(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let t=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],n=this._aboveClass,r=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:n},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:n}],h;this.position==="above"?h=r:this.position==="below"?h=t:h=[...t,...r],e.withPositions(h)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let t=-1;for(let n=0;n<e.options.length;n++)if(!e.options.get(n).disabled){t=n;break}e._keyManager.setActiveItem(t)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let t=this.autocomplete,n=An(e,t.options,t.optionGroups);if(e===0&&n===1)t._setScrollTop(0);else if(t.panel){let r=t.options.toArray()[e];if(r){let h=r._getHostElement(),y=Pn(h.offsetTop,h.offsetHeight,t._getScrollTop(),t.panel.nativeElement.offsetHeight);t._setScrollTop(y)}}}static \u0275fac=function(t){return new(t||o)};static \u0275dir=Ne({type:o,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(t,n){t&1&&_("focusin",function(){return n._handleFocus()})("blur",function(){return n._onTouched()})("input",function(h){return n._handleInput(h)})("keydown",function(h){return n._handleKeydown(h)})("click",function(){return n._handleClick()}),t&2&&P("autocomplete",n.autocompleteAttribute)("role",n.autocompleteDisabled?null:"combobox")("aria-autocomplete",n.autocompleteDisabled?null:"list")("aria-activedescendant",n.panelOpen&&n.activeOption?n.activeOption.id:null)("aria-expanded",n.autocompleteDisabled?null:n.panelOpen.toString())("aria-controls",n.autocompleteDisabled||!n.panelOpen?null:n.autocomplete?.id)("aria-haspopup",n.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",E]},exportAs:["matAutocompleteTrigger"],features:[me([oa]),Fe]})}return o})(),Fo=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=$({type:o});static \u0275inj=W({imports:[mn,Et,cn,Et,ae]})}return o})();var sa=(o,i)=>i.id;function ca(o,i){if(o&1&&(l(0,"mat-option",5)(1,"div",6),p(2,"img",7),l(3,"span"),g(4),m()()()),o&2){let e=i.$implicit;Je("background-color",e.backgroundColor),s("value",e.label),a(2),s("src",e.imgUrl,k),a(2),v(e.displayLabel)}}function la(o,i){if(o&1){let e=K();l(0,"button",8),_("click",function(){F(e);let n=f();return N(n.searchItemNameFormService.setDefaultValue())}),l(1,"mat-icon"),g(2,"close"),m()()}}var Rn=class o{translateService=c(Ee);itemService=c(Oe);colorRarityService=c(je);searchItemNameFormService=c(yn);imageService=c(R);options=A([]);constructor(){this.itemService.itemsFilterByItemName$.pipe(te(i=>Ri(()=>this.searchItemNameFormService.searchValue().length>2,ot(i),ot([]))),O(i=>i.slice(0,10)),Ie(i=>this.options.set(i.map(e=>({id:`${e.id}`,label:this.getLabel(e),displayLabel:`${this.getLabel(e)} (${e.level})`,imgUrl:this.imageService.getItemUrl(e.idImage),backgroundColor:this.colorRarityService.mapColors.get(e.rarity)??"",value:e}))))).subscribe()}getLabel(i){return`${i.title[this.translateService.currentLang]}`}onOptionSelected(i){let e=this.options().find(t=>t.label===i.option.value);e&&this.searchItemNameFormService.setFilter(e.value)}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-search-item-name"]],decls:10,vars:6,consts:[["auto","matAutocomplete"],["matInput","",3,"formField","matAutocomplete"],["autoActiveFirstOption","",3,"optionSelected"],[3,"value","backgroundColor"],["matSuffix","","matIconButton","","aria-label","Clear",1,"close-button"],[3,"value"],[2,"display","flex","align-items","center"],["alt","image item","width","50px","height","50px","appFallback","",3,"src"],["matSuffix","","matIconButton","","aria-label","Clear",1,"close-button",3,"click"]],template:function(e,t){if(e&1&&(l(0,"mat-form-field")(1,"mat-label"),g(2),d(3,"translate"),m(),p(4,"input",1),Dt(),l(5,"mat-autocomplete",2,0),_("optionSelected",function(r){return t.onOptionSelected(r)}),z(7,ca,5,5,"mat-option",3,sa),m(),C(9,la,3,0,"button",4),m()),e&2){let n=Ue(6);a(2),v(u(3,4,"search-item-name.label")),a(2),s("formField",t.searchItemNameFormService.form.search)("matAutocomplete",n),Ft(),a(3),H(t.options()),a(2),x(t.searchItemNameFormService.form.search()?9:-1)}},dependencies:[ue,Qe,qe,xo,xt,Sn,S,Fo,Do,he,ki,fn,Me,Le,T],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%;height:58px}mat-form-field[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper{display:none}.close-button[_ngcontent-%COMP%]{border:none;background-color:transparent;box-shadow:none}"]})};var nt=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new se;constructor(i=!1,e,t=!0,n){this._multiple=i,this._emitChanges=t,this.compareWith=n,e&&e.length&&(i?e.forEach(r=>this._markSelected(r)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){this._verifyValueAssignment(i),i.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...i){this._verifyValueAssignment(i),i.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...i){this._verifyValueAssignment(i);let e=this.selected,t=new Set(i.map(r=>this._getConcreteValue(r)));i.forEach(r=>this._markSelected(r)),e.filter(r=>!t.has(this._getConcreteValue(r,t))).forEach(r=>this._unmarkSelected(r));let n=this._hasQueuedChanges();return this._emitChangeEvent(),n}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(i,t))return t;return i}else return i}};var pa=["trigger"],da=["panel"],ua=[[["mat-select-trigger"]],"*"],ha=["mat-select-trigger","*"];function ga(o,i){if(o&1&&(l(0,"span",4),g(1),m()),o&2){let e=f();a(),v(e.placeholder)}}function fa(o,i){o&1&&ie(0)}function ba(o,i){if(o&1&&(l(0,"span",11),g(1),m()),o&2){let e=f(2);a(),v(e.triggerValue)}}function _a(o,i){if(o&1&&(l(0,"span",5),C(1,fa,1,0)(2,ba,2,1,"span",11),m()),o&2){let e=f();a(),x(e.customTrigger?1:2)}}function va(o,i){if(o&1){let e=K();l(0,"div",12,1),_("keydown",function(n){F(e);let r=f();return N(r._handleKeydown(n))}),ie(2,1),m()}if(o&2){let e=f();ve(e.panelClass),M("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",e._parentFormField?.color==="primary")("mat-accent",e._parentFormField?.color==="accent")("mat-warn",e._parentFormField?.color==="warn")("mat-undefined",!e._parentFormField?.color),P("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var ya=new ne("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let o=c(Rt);return()=>ln(o)}}),Ca=new ne("MAT_SELECT_CONFIG"),No=new ne("MatSelectTrigger"),Mi=class{source;value;constructor(i,e){this.source=i,this.value=e}},Dn=(()=>{class o{_viewportRuler=c(sn);_changeDetectorRef=c(X);_elementRef=c(ce);_dir=c(pt,{optional:!0});_idGenerator=c(Ce);_renderer=c(Zt);_parentFormField=c(kn,{optional:!0});ngControl=c(po,{self:!0,optional:!0});_liveAnnouncer=c(no);_defaultOptions=c(Ca,{optional:!0});_animationsDisabled=xe();_popoverLocation;_initialized=new se;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let n=this.panel.nativeElement,r=An(e,this.options,this.optionGroups),h=t._getHostElement();e===0&&r===1?n.scrollTop=0:n.scrollTop=Pn(h.offsetTop,h.offsetHeight,n.scrollTop,n.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Mi(this,e)}_scrollStrategyFactory=c(ya);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new se;_errorStateTracker;stateChanges=new se;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=A(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(mo.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=$t(()=>{let e=this.options;return e?e.changes.pipe(Ke(e),te(()=>Re(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(te(()=>this.optionSelectionChanges))});openedChange=new q;_openedStream=this.openedChange.pipe(ge(e=>e),O(()=>{}));_closedStream=this.openedChange.pipe(ge(e=>!e),O(()=>{}));selectionChange=new q;valueChange=new q;constructor(){let e=c(ko),t=c(ho,{optional:!0}),n=c(go,{optional:!0}),r=c(new ct("tabindex"),{optional:!0}),h=c(ro,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new So(e,this.ngControl,n,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=r==null?0:parseInt(r)||0,this._popoverLocation=h?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new nt(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(fe(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(fe(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Ke(null),fe(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let n=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?n.setAttribute("aria-labelledby",e):n.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(De(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(n),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",r=>{r.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),n=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,n=t===40||t===38||t===37||t===39,r=t===13||t===32,h=this._keyManager;if(!h.isTyping()&&r&&!de(e)||(this.multiple||e.altKey)&&n)e.preventDefault(),this.open();else if(!this.multiple){let y=this.selected;h.onKeydown(e);let D=this.selected;D&&y!==D&&this._liveAnnouncer.announce(D.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,n=e.keyCode,r=n===40||n===38,h=t.isTyping();if(r&&e.altKey)e.preventDefault(),this.close();else if(!h&&(n===13||n===32)&&t.activeItem&&!de(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!h&&this._multiple&&n===65&&e.ctrlKey){e.preventDefault();let y=this.options.some(D=>!D.disabled&&!D.selected);this.options.forEach(D=>{D.disabled||(y?D.select():D.deselect())})}else{let y=t.activeItemIndex;t.onKeydown(e),this._multiple&&r&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==y&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!de(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(n=>{if(this._selectionModel.isSelected(n))return!1;try{return(n.value!=null||this.canSelectNullableOptions)&&this._compareWith(n.value,e)}catch(r){return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof vi?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new rn(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Re(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(fe(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Re(...this.options.map(t=>t._stateChanges)).pipe(fe(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let n=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(n!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),n!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,n)=>this.sortComparator?this.sortComparator(t,n,e):e.indexOf(t)-e.indexOf(n)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(n=>n.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=an(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=b({type:o,selectors:[["mat-select"]],contentQueries:function(t,n,r){if(t&1&&Ze(r,No,5)(r,he,5)(r,Gt,5),t&2){let h;B(h=L())&&(n.customTrigger=h.first),B(h=L())&&(n.options=h),B(h=L())&&(n.optionGroups=h)}},viewQuery:function(t,n){if(t&1&&_e(pa,5)(da,5)(yi,5),t&2){let r;B(r=L())&&(n.trigger=r.first),B(r=L())&&(n.panel=r.first),B(r=L())&&(n._overlayDir=r.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,n){t&1&&_("keydown",function(h){return n._handleKeydown(h)})("focus",function(){return n._onFocus()})("blur",function(){return n._onBlur()}),t&2&&(P("id",n.id)("tabindex",n.disabled?-1:n.tabIndex)("aria-controls",n.panelOpen?n.id+"-panel":null)("aria-expanded",n.panelOpen)("aria-label",n.ariaLabel||null)("aria-required",n.required.toString())("aria-disabled",n.disabled.toString())("aria-invalid",n.errorState)("aria-activedescendant",n._getAriaActiveDescendant()),M("mat-mdc-select-disabled",n.disabled)("mat-mdc-select-invalid",n.errorState)("mat-mdc-select-required",n.required)("mat-mdc-select-empty",n.empty)("mat-mdc-select-multiple",n.multiple)("mat-select-open",n.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",E],disableRipple:[2,"disableRipple","disableRipple",E],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Bt(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",E],placeholder:"placeholder",required:[2,"required","required",E],multiple:[2,"multiple","multiple",E],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",E],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Bt],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",E]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[me([{provide:Io,useExisting:o},{provide:Ht,useExisting:o}]),Fe],ngContentSelectors:ha,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,n){if(t&1&&(le(ua),l(0,"div",2,0),_("click",function(){return n.open()}),l(3,"div",3),C(4,ga,2,1,"span",4)(5,_a,3,1,"span",5),m(),l(6,"div",6)(7,"div",7),wt(),l(8,"svg",8),p(9,"path",9),m()()()(),hi(10,va,3,16,"ng-template",10),_("detach",function(){return n.close()})("backdropClick",function(){return n.close()})("overlayKeydown",function(h){return n._handleOverlayKeydown(h)})),t&2){let r=Ue(1);a(3),P("id",n._valueId),a(),x(n.empty?4:5),a(6),s("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",n._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",n._scrollStrategy)("cdkConnectedOverlayOrigin",n._preferredOverlayOrigin||r)("cdkConnectedOverlayPositions",n._positions)("cdkConnectedOverlayWidth",n._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",n._popoverLocation)}},dependencies:[vi,yi],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})}return o})(),Fn=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275dir=Ne({type:o,selectors:[["mat-select-trigger"]],features:[me([{provide:No,useExisting:o}])]})}return o})(),Nn=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=$({type:o});static \u0275inj=W({imports:[mn,Et,ae,cn,ue,Et]})}return o})();function xa(o,i){if(o&1&&(l(0,"mat-option",1),g(1),d(2,"translate"),m()),o&2){let e=i.$implicit;s("value",e),a(),v(u(2,2,"sort-choice-enum."+e.valueOf()))}}var Un=class o{sortChoiceFormService=c(bn);SortChoiceEnumList=Object.values(bo);isMobile=A(on());static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-sort-choice"]],decls:10,vars:9,consts:[[3,"selectionChange","value"],[3,"value"]],template:function(e,t){e&1&&(l(0,"mat-form-field")(1,"mat-label"),g(2),d(3,"translate"),m(),l(4,"mat-select",0),_("selectionChange",function(r){return t.sortChoiceFormService.form.sortChoice().value.set(r.value)}),l(5,"mat-select-trigger"),g(6),d(7,"translate"),m(),z(8,xa,3,4,"mat-option",1,Ut),m()()),e&2&&(M("is-not-mobile",t.isMobile()),a(2),v(u(3,5,"app.sort-item")),a(2),s("value",t.sortChoiceFormService.form.sortChoice().value()),a(2),Y(" ",u(7,7,"sort-choice-enum."+t.sortChoiceFormService.currentValue())," "),a(2),H(t.SortChoiceEnumList))},dependencies:[ue,Qe,qe,Nn,Dn,Fn,he,S,T],styles:["mat-button-toggle[_ngcontent-%COMP%]{color:var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));background-color:var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container))}mat-form-field[_ngcontent-%COMP%]{height:58px}  .mat-mdc-form-field-subscript-wrapper{display:none}@media screen and (min-width:1450px)and (max-width:1700px){.is-not-mobile[_ngcontent-%COMP%]     .mat-mdc-form-field-infix{width:125px!important}}"]})};var Bn=class o{label=U("");form=U.required();static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-input-number"]],inputs:{label:[1,"label"],form:[1,"form"]},decls:7,vars:5,consts:[["type","text","inputmode","numeric","matInput","",3,"formField"],["type","number","matInput","",3,"formField"]],template:function(e,t){e&1&&(l(0,"div")(1,"mat-form-field")(2,"mat-label"),g(3),d(4,"translate"),m(),p(5,"input",0),Dt(),p(6,"input",1),Dt(),m()()),e&2&&(a(3),v(u(4,3,t.label())),a(2),s("formField",t.form()),Ft(),a(),s("formField",t.form()),Ft())},dependencies:[fn,ue,Qe,qe,xt,Sn,S,T],styles:["div[_ngcontent-%COMP%]{display:flex;justify-content:space-between}div[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}@media screen and (min-width:700px){input[type=number][_ngcontent-%COMP%]{display:none}}@media screen and (max-width:700px){input[type=text][_ngcontent-%COMP%]{display:none}}"]})};var Ln=class o{itemLevelFormService=c(_n);noTitle=U(!1);static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-item-level"]],inputs:{noTitle:[1,"noTitle"]},decls:3,vars:6,consts:[[3,"label","form"]],template:function(e,t){e&1&&(l(0,"div"),p(1,"app-input-number",0)(2,"app-input-number",0),m()),e&2&&(M("no-title",t.noTitle()),a(),s("label","item-level.level-min")("form",t.itemLevelFormService.form.levelMin),a(),s("label","item-level.level-max")("form",t.itemLevelFormService.form.levelMax))},dependencies:[ue,xt,S,Bn],styles:["div[_ngcontent-%COMP%]{display:flex;justify-content:space-between}div[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:45%}.no-title[_ngcontent-%COMP%]{justify-content:flex-start;align-content:center}.no-title[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-right:5px;height:58px}.no-title[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper{display:none}.no-title[_ngcontent-%COMP%]     .mat-mdc-form-field-infix{width:50px}@media screen and (min-width:1000px)and (max-width:1450px){.no-title[_ngcontent-%COMP%]{flex-direction:column;margin-right:5px!important}.no-title[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%!important}.no-title[_ngcontent-%COMP%]   .no-title[_ngcontent-%COMP%]     .mat-mdc-form-field-infix{width:70px!important}}@media screen and (min-width:700px){input[type=number][_ngcontent-%COMP%]{display:none}}@media screen and (max-width:700px){input[type=text][_ngcontent-%COMP%]{display:none}}"]})};var Ia=["*"],Bo=(()=>{class o{labelPosition="after";static \u0275fac=function(t){return new(t||o)};static \u0275cmp=b({type:o,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,n){t&2&&M("mdc-form-field--align-end",n.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},ngContentSelectors:Ia,decls:1,vars:0,template:function(t,n){t&1&&(le(),ie(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})}return o})();var ka=["input"],Sa=["label"],Ea=["*"],Ai={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},Ma=new ne("mat-checkbox-default-options",{providedIn:"root",factory:()=>Ai}),J=(function(o){return o[o.Init=0]="Init",o[o.Checked=1]="Checked",o[o.Unchecked=2]="Unchecked",o[o.Indeterminate=3]="Indeterminate",o})(J||{}),Pi=class{source;checked},Ta=(()=>{class o{_elementRef=c(ce);_changeDetectorRef=c(X);_ngZone=c(Yt);_animationsDisabled=xe();_options=c(Ma,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new Pi;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new q;indeterminateChange=new q;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=J.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){c(mt).load(kt);let e=c(new ct("tabindex"),{optional:!0});this._options=this._options||Ai,this.color=this._options.color||Ai.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=c(Ce).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(J.Indeterminate):this._transitionCheckState(this.checked?J.Checked:J.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=A(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,n=this._getAnimationTargetElement();if(!(t===e||!n)&&(this._currentAnimationClass&&n.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){n.classList.add(this._currentAnimationClass);let r=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{n.classList.remove(r)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?J.Checked:J.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return"";switch(e){case J.Init:if(t===J.Checked)return this._animationClasses.uncheckedToChecked;if(t==J.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case J.Unchecked:return t===J.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case J.Checked:return t===J.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case J.Indeterminate:return t===J.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=b({type:o,selectors:[["mat-checkbox"]],viewQuery:function(t,n){if(t&1&&_e(ka,5)(Sa,5),t&2){let r;B(r=L())&&(n._inputElement=r.first),B(r=L())&&(n._labelElement=r.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(t,n){t&2&&(st("id",n.id),P("tabindex",null)("aria-label",null)("aria-labelledby",null),ve(n.color?"mat-"+n.color:"mat-accent"),M("_mat-animation-noopable",n._animationsDisabled)("mdc-checkbox--disabled",n.disabled)("mat-mdc-checkbox-disabled",n.disabled)("mat-mdc-checkbox-checked",n.checked)("mat-mdc-checkbox-disabled-interactive",n.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",E],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",E],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",E],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:Bt(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",E],checked:[2,"checked","checked",E],disabled:[2,"disabled","disabled",E],indeterminate:[2,"indeterminate","indeterminate",E]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[me([{provide:ut,useExisting:at(()=>o),multi:!0},{provide:lo,useExisting:o,multi:!0}]),Fe],ngContentSelectors:Ea,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(t,n){if(t&1&&(le(),l(0,"div",3),_("click",function(h){return n._preventBubblingFromLabel(h)}),l(1,"div",4,0)(3,"div",5),_("click",function(){return n._onTouchTargetClick()}),m(),l(4,"input",6,1),_("blur",function(){return n._onBlur()})("click",function(){return n._onInputClick()})("change",function(h){return n._onInteractionEvent(h)}),m(),p(6,"div",7),l(7,"div",8),wt(),l(8,"svg",9),p(9,"path",10),m(),Ni(),p(10,"div",11),m(),p(11,"div",12),m(),l(12,"label",13,2),ie(14),m()()),t&2){let r=Ue(2);s("labelPosition",n.labelPosition),a(4),M("mdc-checkbox--selected",n.checked),s("checked",n.checked)("indeterminate",n.indeterminate)("disabled",n.disabled&&!n.disabledInteractive)("id",n.inputId)("required",n.required)("tabIndex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex),P("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby)("aria-describedby",n.ariaDescribedby)("aria-checked",n.indeterminate?"mixed":null)("aria-controls",n.ariaControls)("aria-disabled",n.disabled&&n.disabledInteractive?!0:null)("aria-expanded",n.ariaExpanded)("aria-owns",n.ariaOwns)("name",n.name)("value",n.value),a(7),s("matRippleTrigger",r)("matRippleDisabled",n.disableRipple||n.disabled)("matRippleCentered",!0),a(),s("for",n.inputId)}},dependencies:[It,Bo],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return o})(),re=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=$({type:o});static \u0275inj=W({imports:[Ta,ae]})}return o})();function Oa(o,i){o&1&&(l(0,"h3"),g(1),d(2,"translate"),m()),o&2&&(a(),v(u(2,1,"item-types.type-item")))}var Vn=class o{itemTypeFormServices=c(gt);itemTypesServices=c(ze);itemTypes=new Map([]);ItemTypeEnum=Ve;noTitle=U(!1);static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-item-types"]],inputs:{noTitle:[1,"noTitle"]},decls:30,vars:73,consts:[[3,"tooltip","fieldControl","srcImg"]],template:function(e,t){e&1&&(C(0,Oa,3,3,"h3"),l(1,"div"),p(2,"app-button-checkbox",0),d(3,"translate"),p(4,"app-button-checkbox",0),d(5,"translate"),p(6,"app-button-checkbox",0),d(7,"translate"),p(8,"app-button-checkbox",0),d(9,"translate"),p(10,"app-button-checkbox",0),d(11,"translate"),p(12,"app-button-checkbox",0),d(13,"translate"),p(14,"app-button-checkbox",0),d(15,"translate"),p(16,"app-button-checkbox",0),d(17,"translate"),p(18,"app-button-checkbox",0),d(19,"translate"),p(20,"app-button-checkbox",0),d(21,"translate"),p(22,"app-button-checkbox",0),d(23,"translate"),p(24,"app-button-checkbox",0),d(25,"translate"),p(26,"app-button-checkbox",0),d(27,"translate"),p(28,"app-button-checkbox",0),d(29,"translate"),m()),e&2&&(x(t.noTitle()?-1:0),a(),M("no-title",t.noTitle()),a(),s("tooltip",u(3,45,"item-types.coiffe"))("fieldControl",t.itemTypeFormServices.form.casque)("srcImg",t.itemTypesServices.getLogo(t.ItemTypeEnum.CASQUE)),a(2),s("tooltip",u(5,47,"item-types.amulette"))("fieldControl",t.itemTypeFormServices.form.amulette)("srcImg",t.itemTypesServices.getLogo(t.ItemTypeEnum.AMULETTE)),a(2),s("tooltip",u(7,49,"item-types.plastron"))("fieldControl",t.itemTypeFormServices.form.plastron)("srcImg",t.itemTypesServices.getLogo(t.ItemTypeEnum.PLASTRON)),a(2),s("tooltip",u(9,51,"item-types.anneau"))("fieldControl",t.itemTypeFormServices.form.anneau)("srcImg",t.itemTypesServices.getLogo(t.ItemTypeEnum.ANNEAU)),a(2),s("tooltip",u(11,53,"item-types.bottes"))("fieldControl",t.itemTypeFormServices.form.bottes)("srcImg",t.itemTypesServices.getLogo(t.ItemTypeEnum.BOTTES)),a(2),s("tooltip",u(13,55,"item-types.cape"))("fieldControl",t.itemTypeFormServices.form.cape)("srcImg",t.itemTypesServices.getLogo(t.ItemTypeEnum.CAPE)),a(2),s("tooltip",u(15,57,"item-types.epaulettes"))("fieldControl",t.itemTypeFormServices.form.epaulettes)("srcImg",t.itemTypesServices.getLogo(t.ItemTypeEnum.EPAULETTES)),a(2),s("tooltip",u(17,59,"item-types.ceinture"))("fieldControl",t.itemTypeFormServices.form.ceinture)("srcImg",t.itemTypesServices.getLogo(t.ItemTypeEnum.CEINTURE)),a(2),s("tooltip",u(19,61,"item-types.bouclier"))("fieldControl",t.itemTypeFormServices.form.bouclier)("srcImg",t.itemTypesServices.getLogo(t.ItemTypeEnum.BOUCLIER)),a(2),s("tooltip",u(21,63,"item-types.seconde-main"))("fieldControl",t.itemTypeFormServices.form.dague)("srcImg",t.itemTypesServices.getLogo(t.ItemTypeEnum.DAGUE)),a(2),s("tooltip",u(23,65,"item-types.une-main"))("fieldControl",t.itemTypeFormServices.form.uneMain)("srcImg",t.itemTypesServices.getLogo(t.ItemTypeEnum.UNE_MAIN)),a(2),s("tooltip",u(25,67,"item-types.deux-mains"))("fieldControl",t.itemTypeFormServices.form.deuxMains)("srcImg",t.itemTypesServices.getLogo(t.ItemTypeEnum.DEUX_MAINS)),a(2),s("tooltip",u(27,69,"item-types.accessoires"))("fieldControl",t.itemTypeFormServices.form.accessoires)("srcImg",t.itemTypesServices.getLogo(t.ItemTypeEnum.ACCESSOIRES)),a(2),s("tooltip",u(29,71,"item-types.familier"))("fieldControl",t.itemTypeFormServices.form.familier)("srcImg",t.itemTypesServices.getLogo(t.ItemTypeEnum.FAMILIER)))},dependencies:[Te,re,j,S,T],styles:["[_nghost-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-content:center;height:100%}@media screen and (min-width:1450px)and (max-width:1700px){.no-title[_ngcontent-%COMP%]{display:grid!important;grid-template-columns:repeat(7,1fr)}}@media screen and (min-width:701px)and (max-width:1450px){.no-title[_ngcontent-%COMP%]{display:grid!important;grid-template-columns:repeat(5,1fr)}}"]})};var jn=class o{reverseFormService=c(Cn);static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-reverse-button"]],decls:1,vars:1,consts:[["matIcon","swap_vert",3,"fieldControl"]],template:function(e,t){e&1&&p(0,"app-button-checkbox",0),e&2&&s("fieldControl",t.reverseFormService.form.reverse)},dependencies:[j,S],encapsulation:2})};var zn=class o{obtentionFormService=c(xn);imageService=c(R);static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-obtention"]],decls:20,vars:42,consts:[[3,"tooltip","fieldControl","srcImg"],["matIcon","not_interested",3,"tooltip","fieldControl"]],template:function(e,t){e&1&&(l(0,"h3"),g(1),d(2,"translate"),m(),l(3,"div"),p(4,"app-button-checkbox",0),d(5,"translate"),p(6,"app-button-checkbox",0),d(7,"translate"),p(8,"app-button-checkbox",0),d(9,"translate"),p(10,"app-button-checkbox",0),d(11,"translate"),p(12,"app-button-checkbox",0),d(13,"translate"),p(14,"app-button-checkbox",0),d(15,"translate"),p(16,"app-button-checkbox",1),d(17,"translate"),p(18,"app-button-checkbox",0),d(19,"translate"),m()),e&2&&(a(),v(u(2,24,"obtention.cacher")),a(3),s("tooltip",u(5,26,"obtention.craftable"))("fieldControl",t.obtentionFormService.form.CRAFTABLE)("srcImg",t.imageService.getItemUrl(71919810)),a(2),s("tooltip",u(7,28,"obtention.droppable"))("fieldControl",t.obtentionFormService.form.DROP)("srcImg",t.imageService.getMonsterUrl(100200039)),a(2),s("tooltip",u(9,30,"obtention.boss"))("fieldControl",t.obtentionFormService.form.BOSS)("srcImg",t.imageService.getMonsterUrl(100200044)),a(2),s("tooltip",u(11,32,"obtention.archi"))("fieldControl",t.obtentionFormService.form.ARCHI)("srcImg",t.imageService.getAchievementUrl(5341)),a(2),s("tooltip",u(13,34,"obtention.pvp"))("fieldControl",t.obtentionFormService.form.PVP)("srcImg",t.imageService.getItemUrl(53124705)),a(2),s("tooltip",u(15,36,"obtention.elevage"))("fieldControl",t.obtentionFormService.form.ELEVAGE)("srcImg",t.imageService.getItemUrl(84933039)),a(2),s("tooltip",u(17,38,"obtention.no_obtention"))("fieldControl",t.obtentionFormService.form.NO_OBTENTION),a(2),s("tooltip",u(19,40,"obtention.croupier"))("fieldControl",t.obtentionFormService.form.CROUPIER)("srcImg","croupier.png"))},dependencies:[Te,re,j,S,T],encapsulation:2})};var Aa=["button"],Pa=["*"];function wa(o,i){if(o&1&&(l(0,"div",2),p(1,"mat-pseudo-checkbox",6),m()),o&2){let e=f();a(),s("disabled",e.disabled)}}var Lo=new ne("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),Vo=new ne("MatButtonToggleGroup"),Ra={provide:ut,useExisting:at(()=>qt),multi:!0},Hn=class{source;value;constructor(i,e){this.source=i,this.value=e}},qt=(()=>{class o{_changeDetector=c(X);_dir=c(pt,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=c(Ce).getId("mat-button-toggle-group-");vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(t=>t.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new q;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new q;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=c(Lo,{optional:!0});this.appearance=e&&e.appearance?e.appearance:"standard",this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new nt(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||de(e))return;let n=e.target.id,r=this._buttonToggles.toArray().findIndex(y=>y.buttonId===n),h=null;switch(e.keyCode){case 32:case 13:h=this._buttonToggles.get(r)||null;break;case 38:h=this._getNextButton(r,-1);break;case 37:h=this._getNextButton(r,this.dir==="ltr"?-1:1);break;case 40:h=this._getNextButton(r,1);break;case 39:h=this._getNextButton(r,this.dir==="ltr"?1:-1);break;default:return}h&&(e.preventDefault(),h._onButtonClick(),h.focus())}_emitChangeEvent(e){let t=new Hn(e,this.value);this._rawValue=t.value,this._controlValueAccessorChangeFn(t.value),this.change.emit(t)}_syncButtonToggle(e,t,n=!1,r=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?t?this._selectionModel.select(e):this._selectionModel.deselect(e):r=!0,r?Promise.resolve().then(()=>this._updateModelValue(e,n)):this._updateModelValue(e,n)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(t=>e.value!=null&&t===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let t=this._buttonToggles.get(e);if(!t.disabled){t.tabIndex=0;break}}}_getNextButton(e,t){let n=this._buttonToggles;for(let r=1;r<=n.length;r++){let h=(e+t*r+n.length)%n.length,y=n.get(h);if(y&&!y.disabled)return y}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let t=this._buttonToggles.toArray();if(this.multiple&&e?(Array.isArray(e),this._clearSelection(),e.forEach(n=>this._selectValue(n,t))):(this._clearSelection(),this._selectValue(e,t)),!this.multiple&&t.every(n=>n.tabIndex===-1)){for(let n of t)if(!n.disabled){n.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,t){for(let n of t)if(n.value===e){n.checked=!0,this._selectionModel.select(n),this.multiple||(n.tabIndex=0);break}}_updateModelValue(e,t){t&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static \u0275fac=function(t){return new(t||o)};static \u0275dir=Ne({type:o,selectors:[["mat-button-toggle-group"]],contentQueries:function(t,n,r){if(t&1&&Ze(r,Tt,5),t&2){let h;B(h=L())&&(n._buttonToggles=h)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(t,n){t&1&&_("keydown",function(h){return n._keydown(h)}),t&2&&(P("role",n.multiple?"group":"radiogroup")("aria-disabled",n.disabled),M("mat-button-toggle-vertical",n.vertical)("mat-button-toggle-group-appearance-standard",n.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",E],value:"value",multiple:[2,"multiple","multiple",E],disabled:[2,"disabled","disabled",E],disabledInteractive:[2,"disabledInteractive","disabledInteractive",E],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",E],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",E]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[me([Ra,{provide:Vo,useExisting:o}])]})}return o})(),Tt=(()=>{class o{_changeDetectorRef=c(X);_elementRef=c(ce);_focusMonitor=c(eo);_idGenerator=c(Ce);_animationDisabled=xe();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new q;constructor(){c(mt).load(kt);let e=c(Vo,{optional:!0}),t=c(new ct("tabindex"),{optional:!0})||"",n=c(Lo,{optional:!0});this._tabIndex=A(parseInt(t)||0),this.buttonToggleGroup=e,this._appearance=n&&n.appearance?n.appearance:"standard",this._disabledInteractive=n?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let t=this.buttonToggleGroup._buttonToggles.find(n=>n.tabIndex===0);t&&(t.tabIndex=-1),this.tabIndex=0}this.change.emit(new Hn(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=b({type:o,selectors:[["mat-button-toggle"]],viewQuery:function(t,n){if(t&1&&_e(Aa,5),t&2){let r;B(r=L())&&(n._buttonElement=r.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(t,n){t&1&&_("focus",function(){return n.focus()}),t&2&&(P("aria-label",null)("aria-labelledby",null)("id",n.id)("name",null),M("mat-button-toggle-standalone",!n.buttonToggleGroup)("mat-button-toggle-checked",n.checked)("mat-button-toggle-disabled",n.disabled)("mat-button-toggle-disabled-interactive",n.disabledInteractive)("mat-button-toggle-appearance-standard",n.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",E],appearance:"appearance",checked:[2,"checked","checked",E],disabled:[2,"disabled","disabled",E],disabledInteractive:[2,"disabledInteractive","disabledInteractive",E]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:Pa,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(t,n){if(t&1&&(le(),l(0,"button",1,0),_("click",function(){return n._onButtonClick()}),C(2,wa,2,1,"div",2),l(3,"span",3),ie(4),m()(),p(5,"span",4)(6,"span",5)),t&2){let r=Ue(1);s("id",n.buttonId)("disabled",n.disabled&&!n.disabledInteractive||null),P("role",n.isSingleSelector()?"radio":"button")("tabindex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex)("aria-pressed",n.isSingleSelector()?null:n.checked)("aria-checked",n.isSingleSelector()?n.checked:null)("name",n._getButtonName())("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null),a(2),x(n.buttonToggleGroup&&(!n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideSingleSelectionIndicator||n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),a(4),s("matRippleTrigger",r)("matRippleDisabled",n.disableRipple||n.disabled)}},dependencies:[It,On],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--mat-button-toggle-legacy-text-color);
  font-family: var(--mat-button-toggle-legacy-label-text-font);
  font-size: var(--mat-button-toggle-legacy-label-text-size);
  line-height: var(--mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--mat-button-toggle-legacy-label-text-tracking);
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--mat-button-toggle-legacy-disabled-state-background-color);
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-button-toggle-background-color, transparent);
  font-family: var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));
  line-height: var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-weight: var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
`],encapsulation:2})}return o})(),Gn=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=$({type:o});static \u0275inj=W({imports:[En,Tt,ae]})}return o})();var qn=class o{onlyNoSecondaryFormService=c(ft);static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-only-no-secondary"]],decls:11,vars:11,consts:[[3,"change","checked"]],template:function(e,t){e&1&&(l(0,"h3"),g(1),d(2,"translate"),m(),l(3,"section")(4,"mat-button-toggle-group")(5,"mat-button-toggle",0),_("change",function(){return t.onlyNoSecondaryFormService.setValue(!0)}),g(6),d(7,"translate"),m(),l(8,"mat-button-toggle",0),_("change",function(){return t.onlyNoSecondaryFormService.setValue(!1)}),g(9),d(10,"translate"),m()()()),e&2&&(a(),v(u(2,5,"only-no-secondary.label")),a(4),s("checked",t.onlyNoSecondaryFormService.currentValue()),a(),v(u(7,7,"only-no-secondary.oui")),a(2),s("checked",!t.onlyNoSecondaryFormService.currentValue()),a(),v(u(10,9,"only-no-secondary.non")))},dependencies:[Gn,qt,Tt,S,T],styles:["mat-button-toggle[_ngcontent-%COMP%]{color:var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));background-color:var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container))}"]})};var Qn=class o{onlyNoElemFormService=c(Ct);static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-only-no-elem"]],decls:11,vars:11,consts:[[3,"change","checked"]],template:function(e,t){e&1&&(l(0,"h3"),g(1),d(2,"translate"),m(),l(3,"section")(4,"mat-button-toggle-group")(5,"mat-button-toggle",0),_("change",function(){return t.onlyNoElemFormService.setValue(!0)}),g(6),d(7,"translate"),m(),l(8,"mat-button-toggle",0),_("change",function(){return t.onlyNoElemFormService.setValue(!1)}),g(9),d(10,"translate"),m()()()),e&2&&(a(),v(u(2,5,"only-no-elem.label")),a(4),s("checked",t.onlyNoElemFormService.currentValue()),a(),v(u(7,7,"only-no-elem.oui")),a(2),s("checked",!t.onlyNoElemFormService.currentValue()),a(),v(u(10,9,"only-no-elem.non")))},dependencies:[Gn,qt,Tt,S,T],styles:["mat-button-toggle[_ngcontent-%COMP%]{color:var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));background-color:var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container))}"]})};function Da(o,i){o&1&&g(0,", ")}function Fa(o,i){if(o&1&&(g(0),d(1,"translate"),C(2,Da,1,0)),o&2){let e=i.$implicit,t=i.$index,n=i.$count;Y(" ",u(1,2,"elem-maitrises-mecanism-enum."+e.valueOf())),a(2),x(t!==n-1?2:-1)}}function Na(o,i){if(o&1&&z(0,Fa,3,4,null,null,Ut),o&2){let e=f();H(e.modifierMecanismFormService.selectedValues())}}function Ua(o,i){if(o&1&&(l(0,"mat-option",1),d(1,"translate"),g(2),d(3,"translate"),m()),o&2){let e=i.$implicit,t=f();s("value",e)("matTooltip",u(1,3,t.mapTranslation[e])),a(2),v(u(3,5,"elem-maitrises-mecanism-enum."+e.valueOf()))}}var Wn=class o{modifierMecanismFormService=c(_t);ElemMaitrisesMecanismEnumList=Object.values(_o);mapTranslation={COEUR_HUPPERMAGE:"modifier-mecanism.coeur-huppermage",DENOUEMENT:"modifier-mecanism.denouement",DEMESURE:"modifier-mecanism.demesure",CHAOS:"modifier-mecanism.chaos"};static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-modifier-mecanism"]],decls:12,vars:8,consts:[["multiple","",3,"valueChange","value"],[3,"value","matTooltip"]],template:function(e,t){e&1&&(l(0,"h3"),g(1),d(2,"translate"),m(),l(3,"mat-form-field")(4,"mat-label"),g(5),d(6,"translate"),m(),l(7,"mat-select",0),_("valueChange",function(r){return t.modifierMecanismFormService.setValue(r)}),l(8,"mat-select-trigger"),C(9,Na,2,0),m(),z(10,Ua,4,7,"mat-option",1,Ut),m()()),e&2&&(a(),v(u(2,4,"modifier-elem-maitrises.label")),a(4),v(u(6,6,"modifier-elem-maitrises.mecaniques")),a(2),s("value",t.modifierMecanismFormService.form.mecanisms().value()),a(2),x(t.modifierMecanismFormService.selectedValues().length?9:-1),a(),H(t.ElemMaitrisesMecanismEnumList))},dependencies:[ue,Qe,qe,Nn,Dn,Fn,he,S,Se,ke,T],encapsulation:2})};var Kn=class o{resistancesFormService=c(vt);imageService=c(R);IdActionsEnum=Q;static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-filter-resistances"]],decls:9,vars:11,consts:[[1,"group"],["tooltip","filter-maitrises.feu",3,"fieldControl","srcImg"],["tooltip","filter-maitrises.eau",3,"fieldControl","srcImg"],["tooltip","filter-maitrises.terre",3,"fieldControl","srcImg"],["tooltip","filter-maitrises.air",3,"fieldControl","srcImg"]],template:function(e,t){e&1&&(l(0,"h3"),g(1),d(2,"translate"),m(),l(3,"div")(4,"div",0),p(5,"app-button-checkbox",1)(6,"app-button-checkbox",2)(7,"app-button-checkbox",3)(8,"app-button-checkbox",4),m()()),e&2&&(a(),v(u(2,9,"filter-resistances.resistances-elementaires")),a(4),s("fieldControl",t.resistancesFormService.form.feu)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.RESISTANCES_FEU)),a(),s("fieldControl",t.resistancesFormService.form.eau)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.RESISTANCES_EAU)),a(),s("fieldControl",t.resistancesFormService.form.terre)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.RESISTANCES_TERRE)),a(),s("fieldControl",t.resistancesFormService.form.air)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.RESISTANCES_AIR)))},dependencies:[re,j,S,T],encapsulation:2})};var Yn=class o{majorPresentFormService=c(bt);imageService=c(R);IdActionsEnum=Q;static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-major-present"]],decls:28,vars:63,consts:[[3,"tooltip","fieldControl","srcImg"]],template:function(e,t){e&1&&(l(0,"h3"),g(1),d(2,"translate"),m(),l(3,"div"),p(4,"app-button-checkbox",0),d(5,"translate"),p(6,"app-button-checkbox",0),d(7,"translate"),p(8,"app-button-checkbox",0),d(9,"translate"),p(10,"app-button-checkbox",0),d(11,"translate"),p(12,"app-button-checkbox",0),d(13,"translate"),p(14,"app-button-checkbox",0),d(15,"translate"),p(16,"app-button-checkbox",0),d(17,"translate"),p(18,"app-button-checkbox",0),d(19,"translate"),p(20,"app-button-checkbox",0),d(21,"translate"),p(22,"app-button-checkbox",0),d(23,"translate"),p(24,"app-button-checkbox",0),d(25,"translate"),p(26,"app-button-checkbox",0),d(27,"translate"),m()),e&2&&(a(),v(u(2,37,"major-present.label")),a(3),s("tooltip",u(5,39,"major-present.PA"))("fieldControl",t.majorPresentFormService.form.PA)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.PA)),a(2),s("tooltip",u(7,41,"major-present.PM"))("fieldControl",t.majorPresentFormService.form.PM)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.PM)),a(2),s("tooltip",u(9,43,"major-present.PW"))("fieldControl",t.majorPresentFormService.form.PW)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.PW)),a(2),s("tooltip",u(11,45,"major-present.PO"))("fieldControl",t.majorPresentFormService.form.PO)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.PORTEE)),a(2),s("tooltip",u(13,47,"major-present.armure-donnee"))("fieldControl",t.majorPresentFormService.form.ARMURE_DONNEE)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.ARMURE_DONNEE_RECUE)),a(2),s("tooltip",u(15,49,"major-present.armure-recue"))("fieldControl",t.majorPresentFormService.form.ARMURE_RECUE)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.ARMURE_DONNEE_RECUE,!0)),a(2),s("tooltip",u(17,51,"major-present.critique"))("fieldControl",t.majorPresentFormService.form.CRITIQUE)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.COUP_CRITIQUE)),a(2),s("tooltip",u(19,53,"major-present.parade"))("fieldControl",t.majorPresentFormService.form.PARADE)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.PARADE)),a(2),s("tooltip",u(21,55,"major-present.resistance-dos"))("fieldControl",t.majorPresentFormService.form.RESISTANCE_DOS)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.RESISTANCES_DOS)),a(2),s("tooltip",u(23,57,"major-present.resistance-critique"))("fieldControl",t.majorPresentFormService.form.RESISTANCE_CRITIQUE)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.RESISTANCES_CRITIQUES)),a(2),s("tooltip",u(25,59,"major-present.tacle"))("fieldControl",t.majorPresentFormService.form.TACLE)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.TACLE)),a(2),s("tooltip",u(27,61,"major-present.esquive"))("fieldControl",t.majorPresentFormService.form.ESQUIVE)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.ESQUIVE)))},dependencies:[Te,re,j,S,T],encapsulation:2})};var Xn=class o{majorPresentFormService=c(bt);imageService=c(R);IdActionsEnum=Q;static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-malus-present"]],decls:41,vars:111,consts:[[3,"tooltip","fieldControl","srcImg","crossedOut"]],template:function(e,t){e&1&&(l(0,"h3"),g(1),d(2,"translate"),m(),l(3,"div"),p(4,"app-button-checkbox",0),d(5,"translate"),p(6,"app-button-checkbox",0),d(7,"translate"),p(8,"app-button-checkbox",0),d(9,"translate"),p(10,"app-button-checkbox",0),d(11,"translate"),p(12,"app-button-checkbox",0),d(13,"translate"),p(14,"app-button-checkbox",0),d(15,"translate"),p(16,"app-button-checkbox",0),d(17,"translate"),p(18,"app-button-checkbox",0),d(19,"translate"),p(20,"app-button-checkbox",0),d(21,"translate"),p(22,"app-button-checkbox",0),d(23,"translate"),p(24,"app-button-checkbox",0),d(25,"translate"),p(26,"app-button-checkbox",0),d(27,"translate"),m(),l(28,"div"),p(29,"app-button-checkbox",0),d(30,"translate"),p(31,"app-button-checkbox",0),d(32,"translate"),p(33,"app-button-checkbox",0),d(34,"translate"),p(35,"app-button-checkbox",0),d(36,"translate"),p(37,"app-button-checkbox",0),d(38,"translate"),p(39,"app-button-checkbox",0),d(40,"translate"),m()),e&2&&(a(),v(u(2,73,"major-present.label-malus")),a(3),s("tooltip",u(5,75,"major-present.PERTE_PA"))("fieldControl",t.majorPresentFormService.form.PERTE_PA)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.PA))("crossedOut",!0),a(2),s("tooltip",u(7,77,"major-present.PERTE_PM"))("fieldControl",t.majorPresentFormService.form.PERTE_PM)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.PM))("crossedOut",!0),a(2),s("tooltip",u(9,79,"major-present.PERTE_PW"))("fieldControl",t.majorPresentFormService.form.PERTE_PW)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.PW))("crossedOut",!0),a(2),s("tooltip",u(11,81,"major-present.PERTE_PO"))("fieldControl",t.majorPresentFormService.form.PERTE_PO)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.PORTEE))("crossedOut",!0),a(2),s("tooltip",u(13,83,"major-present.PERTE_ARMURE_DONNEE"))("fieldControl",t.majorPresentFormService.form.PERTE_ARMURE_DONNEE)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.ARMURE_DONNEE_RECUE))("crossedOut",!0),a(2),s("tooltip",u(15,85,"major-present.PERTE_ARMURE_RECUE"))("fieldControl",t.majorPresentFormService.form.PERTE_ARMURE_RECUE)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.ARMURE_DONNEE_RECUE,!0))("crossedOut",!0),a(2),s("tooltip",u(17,87,"major-present.PERTE_CRITIQUE"))("fieldControl",t.majorPresentFormService.form.PERTE_CRITIQUE)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.COUP_CRITIQUE))("crossedOut",!0),a(2),s("tooltip",u(19,89,"major-present.PERTE_PARADE"))("fieldControl",t.majorPresentFormService.form.PERTE_PARADE)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.PARADE))("crossedOut",!0),a(2),s("tooltip",u(21,91,"major-present.PERTE_RESISTANCE_DOS"))("fieldControl",t.majorPresentFormService.form.PERTE_RESISTANCE_DOS)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.RESISTANCES_DOS))("crossedOut",!0),a(2),s("tooltip",u(23,93,"major-present.PERTE_RESISTANCE_CRITIQUE"))("fieldControl",t.majorPresentFormService.form.PERTE_RESISTANCE_CRITIQUE)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.RESISTANCES_CRITIQUES))("crossedOut",!0),a(2),s("tooltip",u(25,95,"major-present.PERTE_TACLE"))("fieldControl",t.majorPresentFormService.form.PERTE_TACLE)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.TACLE))("crossedOut",!0),a(2),s("tooltip",u(27,97,"major-present.PERTE_ESQUIVE"))("fieldControl",t.majorPresentFormService.form.PERTE_ESQUIVE)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.ESQUIVE))("crossedOut",!0),a(3),s("tooltip",u(30,99,"major-present.PERTE_MAITRISES_MELEE"))("fieldControl",t.majorPresentFormService.form.PERTE_MAITRISES_MELEE)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.PERTE_MAITRISES_MELEE))("crossedOut",!0),a(2),s("tooltip",u(32,101,"major-present.PERTE_MAITRISES_DISTANCE"))("fieldControl",t.majorPresentFormService.form.PERTE_MAITRISES_DISTANCE)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.PERTE_MAITRISES_DISTANCE))("crossedOut",!0),a(2),s("tooltip",u(34,103,"major-present.PERTE_MAITRISES_CRITIQUE"))("fieldControl",t.majorPresentFormService.form.PERTE_MAITRISES_CRITIQUE)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.PERTE_MAITRISES_CRITIQUE))("crossedOut",!0),a(2),s("tooltip",u(36,105,"major-present.PERTE_MAITRISES_DOS"))("fieldControl",t.majorPresentFormService.form.PERTE_MAITRISES_DOS)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.PERTE_MAITRISES_DOS))("crossedOut",!0),a(2),s("tooltip",u(38,107,"major-present.PERTE_MAITRISES_SOIN"))("fieldControl",t.majorPresentFormService.form.PERTE_MAITRISES_SOIN)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.PERTE_MAITRISES_SOIN))("crossedOut",!0),a(2),s("tooltip",u(40,109,"major-present.PERTE_MAITRISES_BERZERK"))("fieldControl",t.majorPresentFormService.form.PERTE_MAITRISES_BERZERK)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.PERTE_MAITRISES_BERZERK))("crossedOut",!0))},dependencies:[Te,re,j,S,T],encapsulation:2})};var Zn=class o{maitrisesFormServices=c(yt);imageService=c(R);IdActionsEnum=Q;static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-filter-maitrises"]],decls:16,vars:23,consts:[[1,"group"],["tooltip","filter-maitrises.feu",3,"fieldControl","srcImg"],["tooltip","filter-maitrises.eau",3,"fieldControl","srcImg"],["tooltip","filter-maitrises.terre",3,"fieldControl","srcImg"],["tooltip","filter-maitrises.air",3,"fieldControl","srcImg"],["tooltip","filter-maitrises.melee",3,"fieldControl","srcImg"],["tooltip","filter-maitrises.distance",3,"fieldControl","srcImg"],["tooltip","filter-maitrises.critique",3,"fieldControl","srcImg"],["tooltip","filter-maitrises.dos",3,"fieldControl","srcImg"],["tooltip","filter-maitrises.soin",3,"fieldControl","srcImg"],["tooltip","filter-maitrises.berzerk",3,"fieldControl","srcImg"]],template:function(e,t){e&1&&(l(0,"h3"),g(1),d(2,"translate"),m(),l(3,"div")(4,"div",0),p(5,"app-button-checkbox",1)(6,"app-button-checkbox",2)(7,"app-button-checkbox",3)(8,"app-button-checkbox",4),m(),l(9,"div",0),p(10,"app-button-checkbox",5)(11,"app-button-checkbox",6)(12,"app-button-checkbox",7)(13,"app-button-checkbox",8)(14,"app-button-checkbox",9)(15,"app-button-checkbox",10),m()()),e&2&&(a(),v(u(2,21,"filter-maitrises.maitrises-elementaires")),a(4),s("fieldControl",t.maitrisesFormServices.form.feu)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.MAITRISES_FEU)),a(),s("fieldControl",t.maitrisesFormServices.form.eau)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.MAITRISES_EAU)),a(),s("fieldControl",t.maitrisesFormServices.form.terre)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.MAITRISES_TERRE)),a(),s("fieldControl",t.maitrisesFormServices.form.air)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.MAITRISES_AIR)),a(2),s("fieldControl",t.maitrisesFormServices.form.melee)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.MAITRISES_MELEE)),a(),s("fieldControl",t.maitrisesFormServices.form.distance)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.MAITRISES_DISTANCES)),a(),s("fieldControl",t.maitrisesFormServices.form.critique)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.MAITRISES_CRITIQUES)),a(),s("fieldControl",t.maitrisesFormServices.form.dos)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.MAITRISES_DOS)),a(),s("fieldControl",t.maitrisesFormServices.form.soin)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.MAITRISES_SOIN)),a(),s("fieldControl",t.maitrisesFormServices.form.berzerk)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.MAITRISES_BERZERK)))},dependencies:[re,j,S,T],styles:["[_nghost-%COMP%]   .group[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}"]})};var Jn=class o{rareteItemFormService=c(vn);imageService=c(R);RarityItemEnum=Ci;static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-rarete-item"]],decls:18,vars:38,consts:[[3,"tooltip","fieldControl","srcImg"]],template:function(e,t){e&1&&(l(0,"h3"),g(1),d(2,"translate"),m(),l(3,"div"),p(4,"app-button-checkbox",0),d(5,"translate"),p(6,"app-button-checkbox",0),d(7,"translate"),p(8,"app-button-checkbox",0),d(9,"translate"),p(10,"app-button-checkbox",0),d(11,"translate"),p(12,"app-button-checkbox",0),d(13,"translate"),p(14,"app-button-checkbox",0),d(15,"translate"),p(16,"app-button-checkbox",0),d(17,"translate"),m()),e&2&&(a(),v(u(2,22,"rarete-item.label")),a(3),s("tooltip",u(5,24,"rarete-item.normal"))("fieldControl",t.rareteItemFormService.form.normal)("srcImg",t.imageService.mapRarityUrl.get(t.RarityItemEnum.NORMAL)??""),a(2),s("tooltip",u(7,26,"rarete-item.rare"))("fieldControl",t.rareteItemFormService.form.rare)("srcImg",t.imageService.mapRarityUrl.get(t.RarityItemEnum.RARE)??""),a(2),s("tooltip",u(9,28,"rarete-item.mythique"))("fieldControl",t.rareteItemFormService.form.mythique)("srcImg",t.imageService.mapRarityUrl.get(t.RarityItemEnum.MYTHIQUE)??""),a(2),s("tooltip",u(11,30,"rarete-item.legendaire"))("fieldControl",t.rareteItemFormService.form.legendaire)("srcImg",t.imageService.mapRarityUrl.get(t.RarityItemEnum.LEGENDAIRE)??""),a(2),s("tooltip",u(13,32,"rarete-item.souvenir"))("fieldControl",t.rareteItemFormService.form.souvenir)("srcImg",t.imageService.mapRarityUrl.get(t.RarityItemEnum.SOUVENIR)??""),a(2),s("tooltip",u(15,34,"rarete-item.epique"))("fieldControl",t.rareteItemFormService.form.epique)("srcImg",t.imageService.mapRarityUrl.get(t.RarityItemEnum.EPIQUE)??""),a(2),s("tooltip",u(17,36,"rarete-item.relique"))("fieldControl",t.rareteItemFormService.form.relique)("srcImg",t.imageService.mapRarityUrl.get(t.RarityItemEnum.RELIQUE)??""))},dependencies:[Te,re,j,S,T],styles:["[_nghost-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}"]})};var ei=class o{itemLevelFormService=c(_n);itemTypeFormServices=c(gt);maitrisesFormService=c(yt);majorPresentFormService=c(bt);modifierElemMaitrisesFormService=c(_t);onlyNoElemFormService=c(Ct);onlyNoSecondaryFormService=c(ft);rareteItemFormServices=c(vn);resistancesFormService=c(vt);searchItemNameFormService=c(yn);sortChoiceFormService=c(bn);reverseFormService=c(Cn);dropCraftableFormService=c(xn);resetAllForms(){this.itemLevelFormService.setDefaultValue(),this.itemTypeFormServices.setDefaultValue(),this.maitrisesFormService.setDefaultValue(),this.majorPresentFormService.setDefaultValue(),this.modifierElemMaitrisesFormService.setDefaultValue(),this.onlyNoElemFormService.setDefaultValue(),this.onlyNoSecondaryFormService.setDefaultValue(),this.rareteItemFormServices.setDefaultValue(),this.resistancesFormService.setDefaultValue(),this.searchItemNameFormService.setDefaultValue(),this.sortChoiceFormService.setDefaultValue(),this.reverseFormService.setDefaultValue(),this.dropCraftableFormService.setDefaultValue()}static \u0275fac=function(e){return new(e||o)};static \u0275prov=G({token:o,factory:o.\u0275fac,providedIn:"root"})};var zo=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=$({type:o});static \u0275inj=W({})}return o})();var Ho=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=$({type:o});static \u0275inj=W({imports:[zo,io,ae]})}return o})();function Ba(o,i){if(o&1&&(p(0,"app-search-item-name")(1,"app-button-checkbox",9),d(2,"translate"),p(3,"app-item-types")(4,"app-item-level"),l(5,"h2"),g(6),d(7,"translate"),m(),p(8,"app-sort-choice")),o&2){let e=f();a(),s("fieldControl",e.displayFavorisFormService.form.display)("tooltip",u(2,3,"filters.favoris")),a(5),v(u(7,5,"app.sort-item"))}}var Go=class o{resetFormService=c(ei);displayFavorisFormService=c(Tn);isMobile=A(on());openSections=A({obtention:!1,rarete:!0,maitrises:!0,major:!0,malusPresent:!1,resistances:!1,options:!1});isOpen(i){return this.openSections()[i]??!1}toggle(i){this.openSections.update(e=>we(Pe({},e),{[i]:!e[i]}))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-filters"]],decls:76,vars:59,consts:[[1,"filter-content"],[1,"filter-title"],["type","button",1,"reset",3,"click","matTooltip"],[1,"fsec"],["type","button",1,"fsec-head",3,"click"],["aria-hidden","true",3,"fontIcon"],[1,"fsec-collapse"],[1,"fsec-body"],[1,"fsec","options"],["color","rgb(207, 148, 11)","matIcon","star",3,"fieldControl","tooltip"]],template:function(e,t){e&1&&(l(0,"div",0)(1,"div",1)(2,"h2"),g(3),d(4,"translate"),m(),p(5,"app-reverse-button"),l(6,"button",2),d(7,"translate"),_("click",function(){return t.resetFormService.resetAllForms()}),g(8),d(9,"translate"),m()(),C(10,Ba,9,7),l(11,"section",3)(12,"button",4),_("click",function(){return t.toggle("rarete")}),l(13,"span"),g(14),d(15,"translate"),m(),p(16,"mat-icon",5),m(),l(17,"div",6)(18,"div",7),p(19,"app-rarete-item"),m()()(),l(20,"section",3)(21,"button",4),_("click",function(){return t.toggle("maitrises")}),l(22,"span"),g(23),d(24,"translate"),m(),p(25,"mat-icon",5),m(),l(26,"div",6)(27,"div",7),p(28,"app-filter-maitrises"),m()()(),l(29,"section",3)(30,"button",4),_("click",function(){return t.toggle("major")}),l(31,"span"),g(32),d(33,"translate"),m(),p(34,"mat-icon",5),m(),l(35,"div",6)(36,"div",7),p(37,"app-major-present"),m()()(),l(38,"section",3)(39,"button",4),_("click",function(){return t.toggle("obtention")}),l(40,"span"),g(41),d(42,"translate"),m(),p(43,"mat-icon",5),m(),l(44,"div",6)(45,"div",7),p(46,"app-obtention"),m()()(),l(47,"section",3)(48,"button",4),_("click",function(){return t.toggle("resistances")}),l(49,"span"),g(50),d(51,"translate"),m(),p(52,"mat-icon",5),m(),l(53,"div",6)(54,"div",7),p(55,"app-filter-resistances"),m()()(),l(56,"section",3)(57,"button",4),_("click",function(){return t.toggle("malusPresent")}),l(58,"span"),g(59),d(60,"translate"),m(),p(61,"mat-icon",5),m(),l(62,"div",6)(63,"div",7),p(64,"app-malus-present"),m()()(),l(65,"section",8)(66,"button",4),_("click",function(){return t.toggle("options")}),l(67,"span"),g(68),d(69,"translate"),m(),p(70,"mat-icon",5),m(),l(71,"div",6)(72,"div",7),p(73,"app-modifier-mecanism")(74,"app-only-no-elem")(75,"app-only-no-secondary"),m()()()()),e&2&&(a(3),v(u(4,39,"filters.toggle")),a(3),s("matTooltip",u(7,41,"filters.reset")),a(2),v(u(9,43,"filters.reset-short")),a(2),x(t.isMobile()?10:-1),a(2),P("aria-expanded",t.isOpen("rarete")),a(2),v(u(15,45,"rarete-item.label")),a(2),s("fontIcon",t.isOpen("rarete")?"expand_less":"expand_more"),a(),M("open",t.isOpen("rarete")),a(4),P("aria-expanded",t.isOpen("maitrises")),a(2),v(u(24,47,"filter-maitrises.maitrises-elementaires")),a(2),s("fontIcon",t.isOpen("maitrises")?"expand_less":"expand_more"),a(),M("open",t.isOpen("maitrises")),a(4),P("aria-expanded",t.isOpen("major")),a(2),v(u(33,49,"major-present.label")),a(2),s("fontIcon",t.isOpen("major")?"expand_less":"expand_more"),a(),M("open",t.isOpen("major")),a(4),P("aria-expanded",t.isOpen("obtention")),a(2),v(u(42,51,"obtention.cacher")),a(2),s("fontIcon",t.isOpen("obtention")?"expand_less":"expand_more"),a(),M("open",t.isOpen("obtention")),a(4),P("aria-expanded",t.isOpen("resistances")),a(2),v(u(51,53,"filter-resistances.resistances-elementaires")),a(2),s("fontIcon",t.isOpen("resistances")?"expand_less":"expand_more"),a(),M("open",t.isOpen("resistances")),a(4),P("aria-expanded",t.isOpen("malusPresent")),a(2),v(u(60,55,"major-present.label-malus")),a(2),s("fontIcon",t.isOpen("malusPresent")?"expand_less":"expand_more"),a(),M("open",t.isOpen("malusPresent")),a(4),P("aria-expanded",t.isOpen("options")),a(2),v(u(69,57,"filters.options")),a(2),s("fontIcon",t.isOpen("options")?"expand_less":"expand_more"),a(),M("open",t.isOpen("options")))},dependencies:[S,jn,Rn,zn,qn,Qn,Wn,Un,Kn,Yn,Zn,Jn,Ln,Vn,j,Se,ke,dt,Le,Ho,Xn,T],styles:["[_nghost-%COMP%]{background:var(--color-surface-deep);color:var(--color-text-inverse);font-weight:400}[_nghost-%COMP%]   .filter-content[_ngcontent-%COMP%]{padding:12px 14px;margin-bottom:50px;display:flex;flex-direction:column}[_nghost-%COMP%]   .filter-content[_ngcontent-%COMP%]   .filter-title[_ngcontent-%COMP%]{display:flex;align-items:center;padding-bottom:14px}[_nghost-%COMP%]   .filter-content[_ngcontent-%COMP%]   .filter-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:1.3rem}[_nghost-%COMP%]   .filter-content[_ngcontent-%COMP%]   .filter-title[_ngcontent-%COMP%]   app-reverse-button[_ngcontent-%COMP%]{margin-left:auto;margin-right:10px}[_nghost-%COMP%]   .filter-content[_ngcontent-%COMP%]   .filter-title[_ngcontent-%COMP%]   .reset[_ngcontent-%COMP%]{width:auto;height:auto;margin:0;padding:6px 4px;background:none;border:none;box-shadow:none;color:var(--color-accent);font-weight:700;text-decoration:underline;cursor:pointer}[_nghost-%COMP%]   .filter-content[_ngcontent-%COMP%]   .fsec[_ngcontent-%COMP%]{border-top:1px solid var(--color-surface-soft)}[_nghost-%COMP%]   .filter-content[_ngcontent-%COMP%]   .fsec[_ngcontent-%COMP%]   .fsec-head[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%;height:auto;margin:0;padding:14px 0;border:0;background:none;box-shadow:none;color:var(--color-text-muted);font-size:.75rem;font-weight:700;letter-spacing:.08em;text-align:left;text-transform:uppercase;cursor:pointer}[_nghost-%COMP%]   .filter-content[_ngcontent-%COMP%]   .fsec[_ngcontent-%COMP%]   .fsec-head[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--color-accent)}[_nghost-%COMP%]   .filter-content[_ngcontent-%COMP%]   .fsec[_ngcontent-%COMP%]   .fsec-head[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{flex:none;transition:transform .25s ease}[_nghost-%COMP%]   .filter-content[_ngcontent-%COMP%]   .fsec[_ngcontent-%COMP%]   .fsec-head[_ngcontent-%COMP%]   mat-icon.rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}[_nghost-%COMP%]   .filter-content[_ngcontent-%COMP%]   .fsec[_ngcontent-%COMP%]   .fsec-collapse[_ngcontent-%COMP%]{display:grid;grid-template-rows:0fr;opacity:0;transition:grid-template-rows .3s ease,opacity .25s ease}[_nghost-%COMP%]   .filter-content[_ngcontent-%COMP%]   .fsec[_ngcontent-%COMP%]   .fsec-collapse.open[_ngcontent-%COMP%]{grid-template-rows:1fr;opacity:1}[_nghost-%COMP%]   .filter-content[_ngcontent-%COMP%]   .fsec[_ngcontent-%COMP%]   .fsec-body[_ngcontent-%COMP%]{min-height:0;overflow:hidden;padding-bottom:14px}[_nghost-%COMP%]   .filter-content[_ngcontent-%COMP%]   .fsec[_ngcontent-%COMP%]:not(.options)   .fsec-body[_ngcontent-%COMP%]    >:first-child>h3:first-child{display:none}[_nghost-%COMP%]   .filter-content[_ngcontent-%COMP%]   .fsec[_ngcontent-%COMP%]   .fsec-head[_ngcontent-%COMP%]:active{transform:none;box-shadow:none;color:var(--color-text-muted);background-color:transparent}@media(prefers-reduced-motion:reduce){[_nghost-%COMP%]   .filter-content[_ngcontent-%COMP%]   .fsec-collapse[_ngcontent-%COMP%], [_nghost-%COMP%]   .filter-content[_ngcontent-%COMP%]   .fsec-head[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{transition:none}}[_nghost-%COMP%]   .filter-content[_ngcontent-%COMP%]     h3{margin:5px 0 10px;font-size:.75rem;letter-spacing:.08em;text-transform:uppercase;color:var(--color-text-muted)}"]})};var Qo=class o extends ht{static DEFAULT_VALUE=!0;open=new pe(o.DEFAULT_VALUE);open$=this.open.asObservable();keyEnum="KEY_FILTER_SIDEBAR";model=A({open:o.DEFAULT_VALUE});currentValue=oe(()=>this.model().open);constructor(){super(),this.init()}handleChanges(i){this.open.next(i.open)}setValue(i){this.model.set({open:this.normalizeStoredValue(i)})}setDefaultValue(){this.model.set({open:o.DEFAULT_VALUE})}getValue(){return this.open.getValue()}normalizeStoredValue(i){if(typeof i=="boolean")return i;if(i&&typeof i=="object"){let t=i.open;if(typeof t=="boolean")return t}return o.DEFAULT_VALUE}static \u0275fac=function(e){return new(e||o)};static \u0275prov=G({token:o,factory:o.\u0275fac,providedIn:"root"})};var Ot=class o{ankamaCdnFacade=c(un);translateService=c(Ee);actionService=c(hn);levelFormService=c(fo);static ACTION_MAITRISE_PAR_LEVEL={definition:{id:999,effect:""},description:{fr:"100% du niveau en maitrise \xE9l\xE9mentaire (${0})",en:"100% of the level in elemental mastery (${0})",es:"100% del nivel en maestr\xEDa elemental (${0})",pt:"100% do n\xEDvel em maestria elemental (${0})"}};static MAKABRANO_ZER={definition:{id:1020,effect:""},description:{fr:"Renvoie 10% des d\xE9gats",en:"Returns 10% of the damage",es:"Devuelve el 10% del da\xF1o",pt:"Retorna 10% do dano"}};transform(i){let e=this.ankamaCdnFacade.actions();if(e.length===0)return"";let t=this.findAction(e,i),n=this.getDefinitions(t);return this.getDefinitionsComplete(n,i)}getDefinitionsComplete(i,e){let t=`${i}`;return t=this.replaceValues(t,e),t=this.cleanHeaderDefinition(t),t=this.cleanRecoltEffect(t),t=this.singularOrPlurial(t,e),t=this.atLeastSixParameters(t,e),t=this.armorGivenOrReceived(t,e),t=this.deleteDoubleMinus(t),t=this.setLevel(t),t}setLevel(i){return i.replace(/\$\{0\}/g,this.levelFormService.currentValue())}deleteDoubleMinus(i){return i.replace(/--/g,"")}armorGivenOrReceived(i,e){if(e.actionId!==39&&e.actionId!==40)return i;let t=e.params[4]===120?this.translateService.instant("abstract.donnee"):this.translateService.instant("abstract.recue"),n=Math.abs(e.params[0]),r=this.actionService.isAMalus(e.actionId);return(r&&e.params[0]>0||!r&&e.params[0]<0?"-":"")+n+this.translateService.instant("abstract.armure")+t}atLeastSixParameters(i,e){let t=/{\[~3\]\?(.*):(.*)}/,n=i.match(t);return n&&(i=n[e.params.length>=6?1:2]),i}singularOrPlurial(i,e){return i=this.singularOrPlurialWithRegex(i,e,/\{\[>2\]\?([^}]){0,5}:([^}]){0,5}\}/g,2),i=this.singularOrPlurialWithRegex(i,e,/\{\[>1\]\?([^}]){0,5}:([^}]){0,5}\}/g),i}singularOrPlurialWithRegex(i,e,t,n=0){let r=[...i.matchAll(t)];if(r&&e.params.length>n){let h=r.map(y=>y[e.params[n]>=2?1:2]);for(let y=0;y<r.length;y++)i=i.replace(r[y][0],h[y]??"")}return i}cleanDefinition(i,e){let t=i.match(e);return t&&(i=i.replace(t[0],"")),i}cleanRecoltEffect(i){return this.cleanDefinition(i,/{\[~2]?.+}/g)}cleanHeaderDefinition(i){return this.cleanDefinition(i,/(\[#.*\]) /g)}replaceValues(i,e){let t=/(\[#\d\])/g,n=[...i.matchAll(t)].map(r=>r[1]);if(n)for(let r of n){let h=0;switch(r){case"[#1]":h=0;break;case"[#2]":h=2;break;case"[#3]":h=4;break}e.params.length>h&&(i=i.replace(r,e.params[h].toString()))}return i}getDefinitions(i){return i.description?i.description[this.translateService.currentLang]??"":""}findAction(i,e){return e.actionId===999?o.ACTION_MAITRISE_PAR_LEVEL:e.actionId===1020?o.MAKABRANO_ZER:i.filter(t=>t.definition.id===e.actionId)[0]}static \u0275fac=function(e){return new(e||o)};static \u0275pipe=ji({name:"actions",type:o,pure:!1})};var ti=class o{condition=new Map;compressionService=c(dn);load(){return this.compressionService.decompressGzipJson(nn+"itemConditions.json.gz").pipe(Ie(i=>i.forEach(e=>this.condition.set(e.id,e))),Kt(1),O(()=>{}))}findCondition(i){return this.condition.get(i)}static \u0275fac=function(e){return new(e||o)};static \u0275prov=G({token:o,factory:o.\u0275fac,providedIn:"root"})};var ni=class o{AnkamaCdnFacade=c(un);findStates(i){let e=this.AnkamaCdnFacade.getStatesList().find(t=>t.definition.id===i);if(e)return{id:e.definition.id,fr:e.title.fr,en:e.title.en,es:e.title.es,pt:e.title.pt}}static \u0275fac=function(e){return new(e||o)};static \u0275prov=G({token:o,factory:o.\u0275fac,providedIn:"root"})};var At=class o{translateService=c(Ee);itemTypeService=c(ze);itemChooseService=c(He);actionsService=c(hn);statesService=c(ni);imageService=c(R);destroy$=new se;resistances=0;maitrises=0;IdActionEnum=Q;Math=Math;itemChoosen$=new pe([[]]);IdActionsEnum=Q;itemChoosen=V(this.itemChoosen$);getEffectPng(i){return this.imageService.getActionIdUrl(i.actionId,i.actionId===39&&i.params[4]===121)}initItemChoosen(i){let e=this.itemTypeService.getItemType(i.itemTypeId);if(!e)return;let t=new Pt;e===13?t=this.itemChooseService.getObsItem(12).pipe(O(n=>[n])):e===1?t=$e([this.itemChooseService.getObsItem(2),this.itemChooseService.getObsItem(12)]).pipe(O(([n,r])=>[n,r])):t=this.itemChooseService.getObsItem(e).pipe(O(n=>[n])),t.pipe(fe(this.destroy$)).subscribe(n=>this.itemChoosen$.next(n))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-item"]],decls:0,vars:0,template:function(e,t){},encapsulation:2})};function Va(o,i){if(o&1&&(l(0,"div",0)(1,"span"),p(2,"img",7),g(3),d(4,"translate"),m(),l(5,"span"),p(6,"img",8),g(7),d(8,"translate"),m()()),o&2){let e=f();a(),ve(e.getBackgroundDifferentsStatsOnValue(e.maitrises)),a(),s("src",e.imageService.getActionIdUrl(e.IdActionEnum.MAITRISES_ELEMENTAIRES),k),a(),Be("",u(4,10,"item.maitrises")," ",e.Math.trunc(e.maitrises)),a(2),ve(e.getBackgroundDifferentsStatsOnValue(e.resistances)),a(),s("src",e.imageService.getActionIdUrl(e.IdActionEnum.RESISTANCES_ELEMENTAIRE),k),a(),Be("",u(8,12,"item.resistances")," ",e.resistances)}}function ja(o,i){if(o&1&&(l(0,"div",4)(1,"h3"),g(2),m(),p(3,"img",9),m()),o&2){let e=i.$implicit,t=f(2);a(2),Be("",t.getTitle(e)," (",e.level,") "),a(),s("src",t.imageService.getItemUrl(e.idImage),k)}}function za(o,i){o&1&&z(0,ja,4,3,"div",4,be),o&2&&H(i)}function Ha(o,i){if(o&1&&(p(0,"img",11),g(1),d(2,"actions")),o&2){let e=f().$implicit,t=f(2);s("src",t.getEffectPng(e),k),a(),Y(" ",u(2,2,e)," ")}}function Ga(o,i){if(o&1&&(l(0,"p"),C(1,Ha,3,4),m()),o&2){let e=i.$implicit,t=f(2);ve(t.getBackgroundDifferentsStats(e)),a(),x(e.actionId!==t.IdActionEnum.APPLIQUE_ETAT&&e.value!==0?1:-1)}}function qa(o,i){o&1&&(l(0,"div"),z(1,Ga,2,3,"p",10,be),m()),o&2&&(a(),H(i))}var ii=class o extends At{itemService=c(Oe);colorRarityService=c(je);cdr=c(X);item=U.required();indexItemChoosen=U(0);ARMURE_DONNEE_RECUE=[39,40];listDifferentsStatsItem=[];loaded=A(!1);weight=0;itemSelected$=this.itemChoosen$.pipe(ge(i=>i.length!==0),O(i=>i.map(e=>e[this.indexItemChoosen()])),O(i=>i.length>=2&&i[0]?.id===i[1]?.id?[i.find(e=>e!==void 0)]:i),O(i=>i.filter(e=>e!==void 0)));itemSelected=V(this.itemSelected$,{initialValue:[]});differentStatsItemList=V(this.itemSelected$.pipe(fe(this.destroy$),O(i=>({currentItem:this.getCurrentItem(),listItems:i})),ge(({currentItem:i})=>i!==void 0),Ie(i=>{this.listDifferentsStatsItem=[];let e=i.currentItem;e&&(this.fillListCurrentItem(e),i.listItems.forEach(t=>{t&&this.fillMapDifferentStatsItem(t,e)}))}),O(()=>this.listDifferentsStatsItem.sort((i,e)=>(ye.get(i.actionId)??999)-(ye.get(e.actionId)??999)))),{initialValue:[]});constructor(){super()}ngAfterViewInit(){let i=this.getCurrentItem();i&&(i.equipEffects=i.equipEffects.sort((e,t)=>(ye.get(e.actionId)??999)-(ye.get(t.actionId)??999)),this.itemSelected$.pipe(fe(this.destroy$)).subscribe(e=>{this.resistances=i.resistance,this.maitrises=i.maitrise,this.weight=Lt(this.resistances,this.maitrises,i.level),e.forEach(t=>{t&&(this.resistances-=t.resistance,this.maitrises-=t.maitrise,this.weight=Lt(this.resistances,this.maitrises,t.level))}),this.loaded.set(!0),this.cdr.markForCheck()}),this.initItemChoosen(i),this.cdr.detectChanges())}setItem(i){let e=this.itemTypeService.getItemType(i.itemTypeId);e&&this.itemChooseService.setItem(e,i)}getTitle(i){return i?i.title[this.translateService.currentLang]:""}getBackgroundDifferentsStatsOnValue(i){return i>0?"green":i<0?"red":""}getBackgroundDifferentsStats(i){let e=this.actionsService.isAMalus(i.actionId);return i.value>0&&!e||i.value<0&&e||i.presentOnCurrentItem&&!i.presentOnEquippedItem&&!e?"green":i.value<0&&!e||i.value>0&&e||!i.presentOnCurrentItem&&i.presentOnEquippedItem&&e?"red":""}getByActionId(i,e){return this.listDifferentsStatsItem.find(t=>t.actionId===i&&t.isArmureRecue===e)}pushSetDifferentsStatsItem(i){i&&(this.listDifferentsStatsItem=this.listDifferentsStatsItem.filter(e=>e.actionId!==i.actionId||e.isArmureRecue!==i.isArmureRecue),this.listDifferentsStatsItem.push(i))}fillListCurrentItem(i){i.equipEffects.forEach(e=>{let t=this.ARMURE_DONNEE_RECUE.includes(e.actionId)&&e.params[4]===121,n=this.getByActionId(e.actionId,t);if(n){let r=n.params;r[0]+=e.params[0],n=we(Pe({},n),{value:n.value+e.params[0],params:r,presentOnCurrentItem:!0})}else n={value:e.params[0],params:[...e.params],actionId:e.actionId,presentOnCurrentItem:!0,presentOnEquippedItem:!1,isArmureRecue:t};this.pushSetDifferentsStatsItem(n)})}fillMapDifferentStatsItem(i,e){i.equipEffects.forEach(t=>{let n=this.ARMURE_DONNEE_RECUE.includes(t.actionId)&&t.params[4]===121,r=this.getByActionId(t.actionId,n),h=e.equipEffects.find(y=>this.actionsService.isOpposed(y,t));if(h){let y=[...t.params];y[0]=h.params[0]+y[0],r={value:h.params[0]+t.params[0],params:y,actionId:h.actionId,presentOnCurrentItem:!0,presentOnEquippedItem:!0,isArmureRecue:n}}else if(r&&r.isArmureRecue===n){let y=r.params;y[0]-=t.params[0],r=we(Pe({},r),{value:r.value-t.params[0],params:y,presentOnEquippedItem:!0})}else{let y=[...t.params];y[0]=-y[0],r={value:-t.params[0],params:y,actionId:t.actionId,presentOnCurrentItem:!1,presentOnEquippedItem:!0,isArmureRecue:n}}this.pushSetDifferentsStatsItem(r)}),this.calculDifferenceResistance()}calculDifferenceResistance(){let i=this.getByActionId(80,!1),e=[82,83,85,84];i&&e.find(t=>this.getByActionId(t,!1))&&(e.forEach(t=>{let n=this.getByActionId(t,!1);n?(n.params[0]+=i.params[0],n.value+=i.params[0],n.presentOnCurrentItem=!0,n.presentOnEquippedItem=!0):n=we(Pe({},i),{actionId:t,presentOnCurrentItem:!0,presentOnEquippedItem:!0}),this.pushSetDifferentsStatsItem(n)}),this.listDifferentsStatsItem=this.listDifferentsStatsItem.filter(t=>t.actionId!==80))}getCurrentItem(){try{return this.item()}catch(i){return}}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-item-tooltip"]],inputs:{item:[1,"item"],indexItemChoosen:[1,"indexItemChoosen"]},features:[Nt],decls:14,vars:13,consts:[[1,"header"],[1,"content",3,"click"],[1,"column"],[1,"row"],[1,"title"],["appFallback","","alt","item",3,"src"],["alt","poids",3,"src"],["alt","Maitrises",3,"src"],["alt","Resistances",3,"src"],["appFallback","","alt","items",3,"src"],[3,"class"],["alt","aptitudes",3,"src"]],template:function(e,t){if(e&1&&(C(0,Va,9,14,"div",0),l(1,"div",1),_("click",function(){return t.setItem(t.item())}),l(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3"),g(6),m(),p(7,"img",5),m(),C(8,za,2,0),m(),l(9,"span"),p(10,"img",6),g(11),d(12,"translate"),m()(),C(13,qa,3,0,"div"),m()),e&2){let n,r;x(t.loaded()?0:-1),a(6),Be("",t.getTitle(t.item())," (",t.item().level,")"),a(),s("src",t.imageService.getItemUrl(t.item().idImage),k),a(),x((n=t.itemSelected())?8:-1,n),a(),ve(t.getBackgroundDifferentsStatsOnValue(t.weight)+" poids"),a(),s("src","aptitudes/poids.png",k),a(),Be("",u(12,11,"item.poids")," ",t.weight," "),a(2),x((r=t.differentStatsItemList())?13:-1,r)}},dependencies:[S,Me,lt,T,Ot],styles:["[_nghost-%COMP%]{background:var(--gradient-panel);border-radius:40px;padding:5px;height:fit-content;width:600px;display:flex;flex-direction:column;box-shadow:0 8px 8px var(--shadow-panel-color);position:relative}[_nghost-%COMP%]   span[_ngcontent-%COMP%]{border-radius:10px;width:200px;display:flex;justify-content:space-around;align-items:center;margin:2px auto}[_nghost-%COMP%]   .green[_ngcontent-%COMP%]{background:var(--gradient-positive)}[_nghost-%COMP%]   .red[_ngcontent-%COMP%]{background:var(--gradient-negative)}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;border-bottom:3px solid var(--color-surface-soft);margin-bottom:10px}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 10px}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .imgContainer[_ngcontent-%COMP%]{width:50px;height:50px}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .imgContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;cursor:pointer}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .imgContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{width:50px}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]{height:100%;display:flex;justify-content:space-around;cursor:pointer}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-around;align-items:center}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{margin-right:10px}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;max-width:30%;flex-direction:column}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;margin:auto}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80px;height:80px;margin:auto}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;align-items:center;margin:2px 0;border-radius:20px}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:10px}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .poids[_ngcontent-%COMP%]{align-items:center;display:flex}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .poids[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:22px;height:22px;margin:0 10px}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .poids[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]   .iconComparator[_ngcontent-%COMP%]{position:absolute;right:10px;bottom:10px;background-color:var(--color-surface-muted-alt);border-radius:50%;cursor:pointer;border:5px solid var(--color-surface-deepest)}@media screen and (max-width:700px){[_nghost-%COMP%]{width:300px;font-size:12px}}@media screen and (max-width:700px){  .cdk-overlay-pane{transform:none!important}}"],changeDetection:1})};function Qa(o,i){if(o&1&&p(0,"app-item-tooltip",0),o&2){let e=f().$index,t=f();s("item",t.item)("indexItemChoosen",e)}}function Wa(o,i){if(o&1&&C(0,Qa,1,2,"app-item-tooltip",0),o&2){let e=i.$index,t=f();x(t.itemsChoosen[e]!==void 0?0:-1)}}var oi=class o{item;itemsChoosen=[];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-items-tooltip"]],inputs:{item:"item",itemsChoosen:"itemsChoosen"},decls:2,vars:0,consts:[[3,"item","indexItemChoosen"]],template:function(e,t){e&1&&z(0,Wa,1,1,null,null,be),e&2&&H(t.itemsChoosen)},dependencies:[ii],encapsulation:2,changeDetection:1})};var ai=class o{stateDefinitionService=new Map;compressionService=c(dn);load(){return this.compressionService.decompressGzipJson(nn+"statesDefinition.json.gz").pipe(Ie(i=>{i.forEach(e=>this.stateDefinitionService.set(e.id,{id:e.id,description:{fr:e.description.fr,en:e.description.en,es:e.description.es,pt:e.description.pt}}))}),Kt(1),O(()=>{}))}findStatesDefinition(i){return this.stateDefinitionService.get(i)}static \u0275fac=function(e){return new(e||o)};static \u0275prov=G({token:o,factory:o.\u0275fac,providedIn:"root"})};function $a(o,i){if(o&1&&(Ye(0,"div"),g(1),Xe()),o&2){let e=f();a(),Y(" ",e.definition()," ")}}var ri=class o{statesDefinitionService=c(ai);translateService=c(Ee);statesDefinitionId=0;nameStates="";definition(){let i=this.statesDefinitionService.findStatesDefinition(this.statesDefinitionId);if(i)return i.description[this.translateService.currentLang]}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-states"]],inputs:{statesDefinitionId:"statesDefinitionId",nameStates:"nameStates"},decls:4,vars:2,consts:[[1,"header"]],template:function(e,t){e&1&&(Ye(0,"div",0)(1,"span"),g(2),Xe()(),C(3,$a,2,1,"div")),e&2&&(a(2),v(t.nameStates),a(),x(t.definition()?3:-1))},styles:["[_nghost-%COMP%]{background:var(--gradient-panel);border-radius:40px;padding:10px;color:var(--color-text-inverse);display:flex;flex-direction:column;box-shadow:0 8px 8px var(--shadow-panel-color);position:relative}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;border-bottom:3px solid var(--color-surface-soft);margin-bottom:10px}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center;margin:auto}"]})};function Ka(o,i){if(o&1&&(l(0,"div",0)(1,"div",1)(2,"span"),g(3),m(),p(4,"img",2),m(),l(5,"div",3),p(6,"app-button-checkbox",4)(7,"app-button-checkbox",4)(8,"app-button-checkbox",4)(9,"app-button-checkbox",4),m()()),o&2){let e=f();a(3),v(e.nbElements()),a(),s("src",e.imageUrl(),k),a(2),s("control",e.form.controls.feu)("srcImg",e.imageService.getActionIdUrl(e.IdActionsEnum.MAITRISES_FEU)),a(),s("control",e.form.controls.eau)("srcImg",e.imageService.getActionIdUrl(e.IdActionsEnum.MAITRISES_EAU)),a(),s("control",e.form.controls.terre)("srcImg",e.imageService.getActionIdUrl(e.IdActionsEnum.MAITRISES_TERRE)),a(),s("control",e.form.controls.air)("srcImg",e.imageService.getActionIdUrl(e.IdActionsEnum.MAITRISES_AIR))}}var si=class o{item=U();selector=U("maitrise");imageService=c(R);IdActionsEnum=Q;itemTypeService=c(ze);itemChooseService=c(He);elementSelectorService=c(yo);nbElements=oe(()=>{let i=this.item();if(!i)return 0;let t=this.selector()==="maitrise"?fi:bi;return i.equipEffects.filter(r=>r.id===t).length});mapElements=oe(()=>{let i=this.selector(),e=this.mapResistanceToActionId;return i==="maitrise"&&(e=this.mapElementMaitriseToActionId),e});imageUrl=oe(()=>this.selector()==="maitrise"?this.imageService.getActionIdUrl(1068):this.imageService.getActionIdUrl(1069));mapElementMaitriseToActionId=new Map([["feu",122],["eau",124],["terre",123],["air",125]]);mapResistanceToActionId=new Map([["feu",82],["eau",83],["terre",84],["air",85]]);form=new uo({feu:new Vt(!1),eau:new Vt(!1),air:new Vt(!1),terre:new Vt(!1)});constructor(){Xt(()=>{this.updateForm()}),this.form.valueChanges.subscribe(()=>{this.updateItemEffects()})}updateItemEffects(){let i=this.item(),e=this.nbElements(),t=this.selector();if(!i||e===0)return;let n=[...i.equipEffects],r=this.mapElements(),h=n.find(ee=>ee.id===(t==="maitrise"?fi:bi));for(let ee of r.values()){let Ae=n.findIndex(wi=>wi.actionId===ee);Ae!==-1&&n.splice(Ae,1)}let y=[],D=[];for(let[ee,Ae]of r.entries())this.form.get(ee).value?y.push({element:ee,actionId:Ae}):D.push({element:ee,actionId:Ae});let it=[...y,...D],Qt=0;for(let ee of it)if(Qt<e){let Ae=we(Pe({},h),{actionId:ee.actionId});n.push(Ae),Qt++}else break;n.sort((ee,Ae)=>(ye.get(ee.actionId)??999)-(ye.get(Ae.actionId)??999)),i.equipEffects=n,this.setItem(),this.elementSelectorService.setElementsForItem(i.id,it.slice(0,e).map(ee=>ee.actionId),t)}updateForm(){let i=this.item(),e=this.nbElements();if(!i||e===0)return;let t=this.mapElements(),n=0;for(let[r,h]of t.entries()){let y=this.form.get(r);if(n<e){let D=i.equipEffects.some(it=>it.actionId===h);y.setValue(D,{emitEvent:!1}),n+=D?1:0}else y.setValue(!1,{emitEvent:!1})}}setItem(){let i=this.itemTypeService.getItemType(this.item().itemTypeId);i&&this.itemChooseService.setItem(i,this.item(),!1)}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-element-selector"]],inputs:{item:[1,"item"],selector:[1,"selector"]},decls:1,vars:1,consts:[[1,"content"],[1,"nbElements"],["alt","Nombre variable",3,"src"],[1,"elements"],[3,"control","srcImg"]],template:function(e,t){e&1&&C(0,Ka,10,10,"div",0),e&2&&x(t.nbElements()>0?0:-1)},dependencies:[j],styles:[".content[_ngcontent-%COMP%]{display:flex;border:3px solid var(--color-border-strong);border-radius:10px;z-index:100;height:40px;background:var(--gradient-sidebar);padding:0 5px;margin:10px 0}.content[_ngcontent-%COMP%]   .nbElements[_ngcontent-%COMP%]{display:flex;font-weight:700;align-items:center;margin:auto;gap:10px}.content[_ngcontent-%COMP%]   .elements[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;margin:0 5px}.content[_ngcontent-%COMP%]   .elements[_ngcontent-%COMP%]   app-button-checkbox[_ngcontent-%COMP%]{margin:-5px}@media screen and (max-width:900px){.content[_ngcontent-%COMP%]{height:auto}.content[_ngcontent-%COMP%]   .elements[_ngcontent-%COMP%]{display:grid!important;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(2,1fr);grid-column-gap:2px;grid-row-gap:2px}}"]})};var ci=class o extends ht{static DEFAULT_VALUE=!1;minimify=new pe(o.DEFAULT_VALUE);minimify$=this.minimify.asObservable();keyEnum="KEY_MINIMIFY";model=A({minimify:o.DEFAULT_VALUE});form=gn(this.model);constructor(){super(),this.init()}currentValue(){return this.model().minimify}handleChanges(i){this.minimify.next(i.minimify)}setValue(i){this.model.set({minimify:this.normalizeStoredValue(i)})}setDefaultValue(){this.model.set({minimify:o.DEFAULT_VALUE})}normalizeStoredValue(i){if(typeof i=="boolean")return i;if(i&&typeof i=="object"){let t=i.minimify;if(typeof t=="boolean")return t}return o.DEFAULT_VALUE}static \u0275fac=function(e){return new(e||o)};static \u0275prov=G({token:o,factory:o.\u0275fac,providedIn:"root"})};var li=class o{maitrisesFormService=c(yt);modifierMecanismFormService=c(_t);resistanceFormService=c(vt);onlyNoElemFormService=c(Ct);onlyNoSecondaryFormService=c(ft);ItemsService=c(Oe);calculateMaitrises(i){return $e([this.maitrisesFormService.nbElements$,this.maitrisesFormService.idMaitrises$,this.modifierMecanismFormService.multiplicateurElem$,this.modifierMecanismFormService.denouement$,this.onlyNoElemFormService.onlyNoElem$,this.onlyNoSecondaryFormService.onlyNoSecondary$,this.modifierMecanismFormService.chaos$]).pipe(O(([e,t,n,r,h,y,D])=>this.ItemsService.calculMaitrisesForAnItem(i,e,t,n,r,h,y,D)))}calculResistances(i){return this.resistanceFormService.idResistances$.pipe(O(e=>this.ItemsService.calculResistancesForAnItem(i,e)))}calculPoids(i){return $e([this.maitrisesFormService.nbElements$,this.maitrisesFormService.idMaitrises$,this.modifierMecanismFormService.multiplicateurElem$,this.modifierMecanismFormService.denouement$,this.onlyNoElemFormService.onlyNoElem$,this.onlyNoSecondaryFormService.onlyNoSecondary$,this.modifierMecanismFormService.chaos$,this.resistanceFormService.idResistances$]).pipe(O(([e,t,n,r,h,y,D,it])=>{let Qt=this.ItemsService.calculMaitrisesForAnItem(i,e,t,n,r,h,y,D),ee=this.ItemsService.calculResistancesForAnItem(i,it);return Lt(ee,Qt,i.level)}))}static \u0275fac=function(e){return new(e||o)};static \u0275prov=G({token:o,factory:o.\u0275fac,providedIn:"root"})};var Ya=o=>({ratio:o}),Xa=(o,i)=>i.actionId;function Za(o,i){o&1&&(l(0,"span",9),g(1),d(2,"translate"),m()),o&2&&(a(),v(u(2,1,i)))}function Ja(o,i){if(o&1){let e=K();l(0,"span",27),_("appActivate",function(n){F(e);let r=f(2);return N(r.openEncyclopedie(r.item().id,n))}),p(1,"img",28),m()}}function er(o,i){o&1&&(l(0,"div",22),g(1),m()),o&2&&(a(),Y(" [ ",i," ] "))}function tr(o,i){if(o&1&&(p(0,"img",30),g(1),d(2,"actions")),o&2){let e=f().$implicit,t=f(2);s("src",t.getEffectPng(e),k),a(),Y(" ",u(2,2,e)," ")}}function nr(o,i){if(o&1){let e=K();Jt(0),l(1,"span",31),_("mouseenter",function(n){F(e);let r=tn(0),h=f(3);return N(h.openStatesTooltip(n,r?.id??0,h.getStatesTranslate(r)))})("mouseleave",function(){F(e);let n=f(3);return N(n.stateTooltipService.closeTooltip())}),g(2),m()}if(o&2){let e=f().$implicit,t=f(2),n=en(t.statesService.findStates(e.params[0]));a(2),Y(" ",t.getStatesTranslate(n)," ")}}function ir(o,i){if(o&1&&(l(0,"p"),C(1,tr,3,4)(2,nr,3,2,"span",29),m()),o&2){let e=i.$implicit,t=f(2);a(),x(e.actionId!==t.IdActionEnum.APPLIQUE_ETAT?1:2)}}function or(o,i){if(o&1){let e=K();l(0,"img",37),d(1,"translate"),_("click",function(){F(e);let n=f(3);return N(n.navigateToCraftku())}),m()}if(o&2){let e=f(3);s("src",e.imageService.getItemUrl(71919810),k)("matTooltip",u(1,2,"item.craftable"))}}function ar(o,i){if(o&1){let e=K();l(0,"img",39),d(1,"translate"),_("click",function(n){let r=F(e).$implicit,h=f(4);return N(h.openEncyclopedieForMonster(r.idMob,n))}),m()}if(o&2){let e=i.$implicit,t=f(4);s("src",t.imageService.getMonsterUrl(e.gfxId),k)("matTooltip",`${u(1,2,"item.droppable")} (${t.nameMonster(e)})`)}}function rr(o,i){if(o&1&&z(0,ar,2,4,"img",38,be),o&2){let e=f(3);H(e.item().mobDropable)}}function sr(o,i){if(o&1){let e=K();l(0,"img",41),d(1,"translate"),_("click",function(n){let r=F(e).$implicit,h=f(4);return N(h.openEncyclopedieForMonster(r.idMob,n))}),m()}if(o&2){let e=i.$implicit,t=f(4);s("src",t.imageService.getMonsterUrl(e.gfxId),k)("matTooltip",`${u(1,2,"item.boss-drop")} (${t.nameMonster(e)})`)}}function cr(o,i){if(o&1&&z(0,sr,2,4,"img",40,be),o&2){let e=f(3);H(e.item().bossDropable)}}function lr(o,i){if(o&1){let e=K();l(0,"img",43),d(1,"translate"),_("click",function(n){let r=F(e).$implicit,h=f(4);return N(h.openEncyclopedieForMonster(r.idMob,n))}),m()}if(o&2){let e=i.$implicit,t=f(4);s("src",t.imageService.getMonsterUrl(e.gfxId),k)("matTooltip",`${u(1,2,"item.archi-drop")} (${t.nameMonster(e)})`)}}function mr(o,i){if(o&1&&z(0,lr,2,4,"img",42,be),o&2){let e=f(3);H(e.item().archiDropable)}}function pr(o,i){if(o&1&&(p(0,"img",34),d(1,"translate")),o&2){let e=f(3);s("src",e.imageService.getItemUrl(53124705),k)("matTooltip",u(1,2,"item.pvp"))}}function dr(o,i){if(o&1&&(p(0,"img",35),d(1,"translate")),o&2){let e=f(3);s("src",e.imageService.getItemUrl(84933039),k)("matTooltip",u(1,2,"item.elevage"))}}function ur(o,i){o&1&&(p(0,"img",36),d(1,"translate")),o&2&&s("src","croupier.png",k)("matTooltip",u(1,2,"item.croupier"))}function hr(o,i){if(o&1&&(l(0,"div",26),C(1,or,2,4,"img",32),l(2,"div",33),C(3,rr,2,0),C(4,cr,2,0),C(5,mr,2,0),C(6,pr,2,4,"img",34),C(7,dr,2,4,"img",35),C(8,ur,2,4,"img",36),m()()),o&2){let e=f(2);a(),x(e.item().isCraftable?1:-1),a(2),x(e.item().mobDropable?3:-1),a(),x(e.item().bossDropable?4:-1),a(),x(e.item().archiDropable?5:-1),a(),x(e.item().isPvP?6:-1),a(),x(e.item().isElevage?7:-1),a(),x(e.item().isCroupier?8:-1)}}function gr(o,i){if(o&1){let e=K();l(0,"div",1),_("appActivate",function(){F(e);let n=f();return N(n.setItemChoosen())}),l(1,"div",2)(2,"div",3),p(3,"img",4),m(),l(4,"div",5)(5,"h3",6),g(6),m(),l(7,"span",7),p(8,"img",8),g(9),d(10,"translate"),m(),C(11,Za,3,3,"span",9),m(),l(12,"div",10),p(13,"app-favoris-button",11),l(14,"span",12),d(15,"translate"),_("appActivate",function(n){F(e);let r=f();return N(r.copyToClipboard(n))}),p(16,"mat-icon",13),m(),C(17,Ja,2,0,"span",14),m()(),l(18,"div",15)(19,"span",16),p(20,"img",17),g(21),m(),l(22,"span",18),p(23,"img",19),g(24),m(),l(25,"span",20),d(26,"translate"),p(27,"img",21),g(28),m()(),C(29,er,2,1,"div",22),l(30,"div",23)(31,"div",24),z(32,ir,3,1,"p",null,Xa),m(),p(34,"app-element-selector",25)(35,"app-element-selector",25),m(),C(36,hr,9,7,"div",26),m()}if(o&2){let e,t,n=f();a(3),s("src",n.imageService.getItemUrl(n.item().idImage),k),a(3),v(n.getTitle()),a(2),s("src",n.itemTypeService.getLogo(n.itemTypeService.getItemType(n.item().itemTypeId)),k),a(),Be(" ",u(10,23,"item.niveau-court")," ",n.item().level," "),a(2),x((e=n.rarityKey())?11:-1,e),a(2),s("item",n.item()),a(),s("matTooltip",u(15,25,"item.copier")),a(3),x(n.minimify()?-1:17),a(3),s("src",n.imageService.getActionIdUrl(n.IdActionEnum.MAITRISES_ELEMENTAIRES),k),a(),v(n.Math.trunc(n.maitrisesToDisplay())),a(2),s("src",n.imageService.getActionIdUrl(n.IdActionEnum.RESISTANCES_ELEMENTAIRE),k),a(),v(n.resistancesToDisplay()),a(),s("matTooltip",Wi(26,27,"item.poids-infobulle",Qi(30,Ya,n.ratioWeight())))("matTooltipShowDelay",300),a(2),s("src","aptitudes/poids.png",k),a(),v(n.poidsToDisplay()),a(),x((t=n.textCondition())?29:-1,t),a(3),H(n.item().equipEffects),a(2),s("item",n.item())("selector",n.ElementSelectorEnum.Maitrise),a(),s("item",n.item())("selector",n.ElementSelectorEnum.Resistance),a(),x(n.minimify()?-1:36)}}function fr(o,i){if(o&1){let e=K();l(0,"mat-icon",45),_("mouseenter",function(n){F(e);let r=f(2);return N(r.openTooltip(n,r.item()))})("mouseleave",function(){F(e);let n=f(2);return N(n.tooltipService.closeTooltip())}),m()}}function br(o,i){if(o&1&&C(0,fr,1,0,"mat-icon",44),o&2){let e=f();x(e.itemIsPresentAndNotChoosen(i)?0:-1)}}var _r=new Map([[1,"rarete-item.normal"],[2,"rarete-item.rare"],[3,"rarete-item.mythique"],[4,"rarete-item.legendaire"],[5,"rarete-item.relique"],[6,"rarete-item.souvenir"],[7,"rarete-item.epique"]]),vr=new Map([[8,"item-types.coiffe"],[5,"item-types.amulette"],[9,"item-types.plastron"],[3,"item-types.anneau"],[4,"item-types.bottes"],[6,"item-types.cape"],[10,"item-types.epaulettes"],[7,"item-types.ceinture"],[12,"item-types.bouclier"],[13,"item-types.seconde-main"],[2,"item-types.une-main"],[1,"item-types.deux-mains"],[11,"item-types.accessoires"],[14,"item-types.familier"]]),mi=class o extends At{viewContainerRef=c(rt);el=c(ce);minimifyDisplayFormService=c(ci);calculMaitrisesResistancesService=c(li);itemService=c(Oe);colorRarityService=c(je);tooltipService=c(jt);stateTooltipService=c(jt);cdr=c(X);itemConditionService=c(ti);ElementSelectorEnum=xi;rarityKey=oe(()=>_r.get(this.item().rarity));typeKey=oe(()=>{let i=this.itemTypeService.getItemType(this.item().itemTypeId);return i===void 0?void 0:vr.get(i)});ratioWeight=oe(()=>{let i=this.item().level;return Ki(i)});minimify=V(this.minimifyDisplayFormService.minimify$,{initialValue:!1});item=U.required();isTooltip=U(!1);maitrisesToDisplay=V(et(this.item).pipe(te(i=>this.calculMaitrisesResistancesService.calculateMaitrises(i))),{initialValue:0});resistancesToDisplay=V(et(this.item).pipe(te(i=>this.calculMaitrisesResistancesService.calculResistances(i))),{initialValue:0});poidsToDisplay=V(et(this.item).pipe(te(i=>this.calculMaitrisesResistancesService.calculPoids(i))),{initialValue:0});condition=new pe(void 0);condition$=this.condition.asObservable();textCondition=V(this.condition$.pipe(O(i=>i?.description[this.translateService.currentLang]??void 0)));constructor(){super()}navigateToCraftku(){window.open("https://craftkfu.waklab.fr/?"+this.item().id,"_blank")}setItemChoosen(){if(this.isTooltip())return;let i=this.itemTypeService.getItemType(this.item().itemTypeId);i&&this.itemChooseService.setItem(i,this.item())}itemIsPresentAndNotChoosen(i){return!!i.find(e=>e.find(t=>t!==void 0)&&!e.find(t=>t?.id===this.item().id))}ngAfterViewInit(){let i=this.item();if(i){i.equipEffects=i.equipEffects.sort((t,n)=>(ye.get(t.actionId)??999)-(ye.get(n.actionId)??999)),this.initItemChoosen(i);let e=this.itemConditionService.findCondition(i.id);e&&this.condition.next(e),this.cdr.detectChanges()}}nameMonster(i){return i.name[this.translateService.currentLang]??""}openTooltip(i,e){let t=i.pageX>window.screen.width/2;this.tooltipService.closeTooltip(),this.itemChoosen$.pipe(De(1),O(n=>n.find(r=>r.find(h=>h)))).subscribe(n=>{this.tooltipService.openTooltip(this.viewContainerRef,oi,i,{item:e,itemsChoosen:n},[{originX:t?"end":"center",originY:"bottom",overlayX:t?"end":"center",overlayY:"bottom",offsetY:0,offsetX:t?-this.el.nativeElement.offsetWidth:340}],!1)})}openEncyclopedie(i,e){e.stopPropagation(),window.open("https://www.wakfu.com/fr/mmorpg/encyclopedie/armures/"+i)}openEncyclopedieForMonster(i,e){e.stopPropagation(),window.open("https://www.wakfu.com/fr/mmorpg/encyclopedie/monstres/"+i)}copyToClipboard(i){i.stopPropagation();let e=this.item();navigator.clipboard.writeText(e.title[this.translateService.currentLang])}getStatesTranslate(i){if(!i)return"";let e=this.translateService.currentLang;return i[e].toString()??""}getTitle(){return this.item().title[this.translateService.currentLang]}openStatesTooltip(i,e,t){this.stateTooltipService.closeTooltip(),this.stateTooltipService.openTooltip(this.viewContainerRef,ri,i,{statesDefinitionId:e,nameStates:t},[{originX:"center",originY:"top",overlayX:"center",overlayY:"top",offsetY:20,offsetX:0}])}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-item"]],hostVars:2,hostBindings:function(e,t){e&2&&Je("--rarity-color",t.item()?t.colorRarityService.mapColors.get(t.item().rarity):null)},inputs:{item:[1,"item"],isTooltip:[1,"isTooltip"]},features:[Nt],decls:2,vars:2,consts:[[1,"body"],[1,"body",3,"appActivate"],[1,"head"],[1,"frame"],["alt","items","appFallback","",3,"src"],[1,"identity"],[1,"name"],[1,"sub"],["alt","item type logo",3,"src"],[1,"badge"],[1,"actions"],[3,"item"],[1,"icon-action","fileCopy",3,"appActivate","matTooltip"],["fontIcon","file_copy"],[1,"icon-action"],[1,"pills"],[1,"pill","pill-mastery"],["alt","Maitrises",3,"src"],[1,"pill","pill-resist"],["alt","R\xE9sistances",3,"src"],[1,"pill","pill-weight",3,"matTooltip","matTooltipShowDelay"],["alt","poids",3,"src"],[1,"condition"],[1,"effects"],[1,"effects-list"],[3,"item","selector"],[1,"obtention"],[1,"icon-action",3,"appActivate"],["src","aptitudes/Encyclop\xE9die.png","alt","Encyclop\xE9die"],[1,"appliqueEtat"],["alt","aptitudes",3,"src"],[1,"appliqueEtat",3,"mouseenter","mouseleave"],["alt","craftable",1,"craftable",3,"src","matTooltip"],[1,"sources"],["appFallback","","alt","pvp",3,"src","matTooltip"],["appFallback","","alt","elevage",3,"src","matTooltip"],["appFallback","","alt","croupier",3,"src","matTooltip"],["alt","craftable",1,"craftable",3,"click","src","matTooltip"],["alt","droppable","appFallback","",1,"monster",3,"src","matTooltip"],["alt","droppable","appFallback","",1,"monster",3,"click","src","matTooltip"],["alt","boss drop","appFallback","",1,"monster",3,"src","matTooltip"],["alt","boss drop","appFallback","",1,"monster",3,"click","src","matTooltip"],["alt","archi drop","appFallback","",1,"monster",3,"src","matTooltip"],["alt","archi drop","appFallback","",1,"monster",3,"click","src","matTooltip"],["fontIcon","swap_horiz",1,"iconComparator"],["fontIcon","swap_horiz",1,"iconComparator",3,"mouseenter","mouseleave"]],template:function(e,t){if(e&1&&(C(0,gr,37,32,"div",0),C(1,br,1,1)),e&2){let n;x(t.item()?0:-1),a(),x((n=t.itemChoosen())?1:-1,n)}},dependencies:[dt,Le,S,Se,ke,Me,pn,si,Ge,lt,Co,T,Ot],styles:["[_nghost-%COMP%]{--card-tint: var(--rarity-color, var(--color-surface-soft));background:linear-gradient(180deg,color-mix(in srgb,var(--card-tint) 16%,var(--color-surface-mid)) 0%,var(--color-surface-mid) 45%);border-radius:18px;border:1px solid var(--color-surface-soft);border-top:5px solid var(--card-tint);padding:16px;color:var(--color-text-inverse);height:100%;width:100%;display:flex;flex-direction:column;box-shadow:0 4px 12px var(--shadow-panel-color);position:relative;box-sizing:border-box}.body[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;height:100%;cursor:pointer}.head[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:14px}.frame[_ngcontent-%COMP%]{flex:0 0 76px;width:76px;height:76px;border-radius:14px;border:3px solid var(--card-tint);background:var(--color-surface-page);display:flex;align-items:center;justify-content:center}.frame[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:60px;height:60px;object-fit:contain}.identity[_ngcontent-%COMP%]{flex:1;min-width:0;display:flex;flex-direction:column;align-items:flex-start;gap:4px}.identity[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{margin:0;font-size:1.05rem;line-height:1.2;font-weight:var(--font-weight-title);overflow-wrap:anywhere}.identity[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;font-size:.85rem;color:var(--color-text-muted)}.identity[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:18px;height:18px}.identity[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{padding:2px 10px;border-radius:999px;font-size:.75rem;font-weight:700;background:var(--card-tint);color:#14233a}.actions[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:4px}.actions[_ngcontent-%COMP%]   .icon-action[_ngcontent-%COMP%]{display:flex;cursor:pointer}.actions[_ngcontent-%COMP%]   .icon-action[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:24px;height:24px}.actions[_ngcontent-%COMP%]   .icon-action[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:22px;height:22px;font-size:22px;color:var(--color-text-muted)}.actions[_ngcontent-%COMP%]   .icon-action[_ngcontent-%COMP%]:hover{transform:scale(1.15)}.pills[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:2px}.pills[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;padding:4px 12px;border-radius:999px;font-weight:700;font-size:.9rem;border:1px solid}.pills[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:18px;height:18px}.pills[_ngcontent-%COMP%]   .pill-mastery[_ngcontent-%COMP%]{background:#fbe3c4;color:#5a3200}.pills[_ngcontent-%COMP%]   .pill-resist[_ngcontent-%COMP%]{background:#cfe3f7;color:#0f3257}.pills[_ngcontent-%COMP%]   .pill-weight[_ngcontent-%COMP%]{background:#d6efd2;color:#174a14}.condition[_ngcontent-%COMP%]{color:var(--color-danger);font-weight:bolder}.effects[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;font-weight:var(--font-weight-text)}.effects[_ngcontent-%COMP%]   .effects-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:0px}.effects[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;align-items:center;margin:0}.effects[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:10px;width:24px;height:24px;min-width:24px}.effects[_ngcontent-%COMP%]   .appliqueEtat[_ngcontent-%COMP%]{font-weight:var(--font-weight-title);text-decoration:underline}.obtention[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:10px;border-top:1px solid var(--color-surface-soft);padding-top:6px;margin-bottom:-6px}.obtention[_ngcontent-%COMP%]   .craftable[_ngcontent-%COMP%]{width:44px;height:44px;object-fit:contain;padding:4px;border-radius:10px;background:#efe4cf;cursor:pointer}.obtention[_ngcontent-%COMP%]   .sources[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px;justify-content:flex-end;margin-left:auto;margin-right:40px}.obtention[_ngcontent-%COMP%]   .sources[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:44px;height:44px;object-fit:contain;border-radius:12px;background:var(--color-surface-page);cursor:pointer}.obtention[_ngcontent-%COMP%]   .craftable[_ngcontent-%COMP%]:hover, .obtention[_ngcontent-%COMP%]   .sources[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.iconComparator[_ngcontent-%COMP%]{position:absolute;right:10px;bottom:15px;color:var(--color-text-muted-on-dark);background-color:var(--color-surface-muted-alt);border-radius:50%;cursor:pointer;border:5px solid var(--color-surface-deepest)}@media screen and (max-width:900px){[_nghost-%COMP%]{max-width:90%;margin:auto}[_nghost-%COMP%]   .fileCopy[_ngcontent-%COMP%]{display:none!important}}@media screen and (max-width:500px){[_nghost-%COMP%]{max-width:min(320px,92%)}}"],changeDetection:1})};var yr=["weaponSlot"],Cr=["itemImage"];function xr(o,i){if(o&1){let e=K();Jt(0),l(1,"div",4,0),_("mouseenter",function(n){F(e);let r=tn(0),h=f();return N(h.openTooltip(n,r))})("mouseleave",function(){F(e);let n=f();return N(n.onMouseLeave())}),l(3,"img",5,1),_("appActivate",function(){F(e);let n=f();return N(n.setFilter())}),m(),l(5,"span",6),_("appActivate",function(){F(e);let n=f();return N(n.itemChooseService.deleteItem(n.itemType(),n.indexItem()))}),g(6,"X"),m()()}if(o&2){let e=f(),t=en(e.item());a(),Je("background-color",e.colorRarityService.mapColors.get(t.rarity)),a(2),s("src",e.imageService.getItemUrl(t.idImage),k)}}function Ir(o,i){if(o&1){let e=K();l(0,"img",7),_("mouseenter",function(){F(e);let n=f();return N(n.tooltipService.forceClose())})("appActivate",function(){F(e);let n=f();return N(n.setFilter())}),m()}if(o&2){let e=f();s("src",e.backgroundItemType(),k)}}var pi=class o{colorRarityService=c(je);itemChooseService=c(He);itemTypeFormServices=c(gt);tooltipService=c(jt);viewContainerRef=c(rt);imageService=c(R);router=c($i);animationService=c(vo);backgroundItemType=U.required();itemType=U.required();indexItem=U(0);weaponSlot=gi("weaponSlot");itemImage=gi("itemImage");item=V($e([et(this.itemType),et(this.indexItem)]).pipe(te(([i,e])=>this.itemChooseService.getObsItem(i).pipe(ge(t=>t!==void 0),O(t=>t[e]))),Ke(void 0)),{initialValue:void 0});constructor(){Xt(()=>{this.item()&&requestAnimationFrame(()=>{let e=this.itemImage(),t=this.weaponSlot();!e||!t||this.animationService.flyToTarget({source:e.nativeElement,target:t.nativeElement})})})}openTooltip(i,e){this.tooltipService.forceClose(),e&&(this.tooltipService.cancelClose(),this.tooltipService.openTooltip(this.viewContainerRef,mi,i,{item:e,isTooltip:!0},void 0,!0,!0))}onMouseLeave(){this.tooltipService.closeTooltip()}setFilter(){let i=typeof window<"u"?window.location.hash.substring(1):"",e=this.getBuildIdFromUrl(this.router.url);this.router.navigate(["/",e],{fragment:i||void 0}),this.itemType()===12?this.itemTypeFormServices.setItemType(this.itemType(),13):this.itemType()===2?this.itemTypeFormServices.setItemType(this.itemType(),1):this.itemTypeFormServices.setItemType(this.itemType())}getBuildIdFromUrl(i){return i.match(/^\/([^\/\?#]+)/)?.[1]??"local"}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-item-choose-display"]],viewQuery:function(e,t){e&1&&Gi(t.weaponSlot,yr,5)(t.itemImage,Cr,5),e&2&&qi(2)},hostAttrs:["ngSkipHydration","true"],inputs:{backgroundItemType:[1,"backgroundItemType"],itemType:[1,"itemType"],indexItem:[1,"indexItem"]},features:[zi([In])],decls:2,vars:1,consts:[["weaponSlot",""],["itemImage",""],[1,"itemPresent",3,"backgroundColor"],["alt","noItem",1,"noItem",3,"src"],[1,"itemPresent",3,"mouseenter","mouseleave"],["alt","items","appFallback","",3,"appActivate","src"],[3,"appActivate"],["alt","noItem",1,"noItem",3,"mouseenter","appActivate","src"]],template:function(e,t){e&1&&C(0,xr,7,4,"div",2)(1,Ir,1,1,"img",3),e&2&&x(t.item()!==void 0&&t.item()!==null?0:1)},dependencies:[Me,Ge,pn,lt],styles:['.noItem[_ngcontent-%COMP%]{cursor:pointer;width:56px;height:56px}.itemPresent[_ngcontent-%COMP%]{cursor:pointer;width:56px;height:56px;position:relative}.itemPresent[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:56px;height:56px;margin-right:10px}.itemPresent[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none;position:absolute;content:"X";top:0;right:5px;font-weight:bolder;color:var(--color-surface-mid);font-size:25px;text-shadow:-2px -2px 0 var(--color-black),2px -2px 0 var(--color-black),-2px 2px 0 var(--color-black),2px 2px 0 var(--color-black),-3px 0px 0 var(--color-black),3px 0px 0 var(--color-black),0px -3px 0 var(--color-black),0px 3px 0 var(--color-black)}.itemPresent[_ngcontent-%COMP%]:active, .noItem[_ngcontent-%COMP%]:active{transform:translateY(2px);box-shadow:inset 3px 2px 5px var(--color-surface-deep)}.itemPresent[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{display:block}.itemPresent[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:hover{transform:scale(1.2)}@media screen and (min-width:1001px)and (max-width:1700px){.noItem[_ngcontent-%COMP%], .itemPresent[_ngcontent-%COMP%], .itemPresent[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:36px;height:36px}}@media screen and (max-width:1000px){img[_ngcontent-%COMP%]{margin-right:0!important}}']})};var di=class o{itemService=c(Oe);itemHistoricsService=c(Mn);itemTypeServices=c(ze);imageService=c(R);translateService=c(Ee);historic=U.required();ItemTypeBuild=Oo;fullItems=V(this.itemService.fullItems$,{initialValue:[]});itemsState=oe(()=>{let i=this.fullItems(),e=new Map([["CASQUE","./aptitudes/EmplacementCoiffe.png"],["AMULETTE","./aptitudes/EmplacementAmulette.png"],["PLASTRON","./aptitudes/EmplacementPlastron.png"],["ANNEAU_DROITE","./aptitudes/EmplacementAnneauDroite.png"],["ANNEAU_GAUCHE","./aptitudes/EmplacementAnneauGauche.png"],["BOTTES","./aptitudes/EmplacementBottes.png"],["CAPE","./aptitudes/EmplacementCape.png"],["EPAULETTES","./aptitudes/EmplacementEpaulettes.png"],["CEINTURE","./aptitudes/EmplacementCeinture.png"],["SECONDE_MAIN","./aptitudes/EmplacementSecondeMain.png"],["PREMIERE_MAIN","./aptitudes/EmplacementPremi\xE8reMain.png"],["ACCESSOIRES","./aptitudes/EmplacementEmbl\xE8me.png"],["FAMILIER","./aptitudes/EmplacementFamilier.png"]]),t=new Map([["CASQUE",null],["AMULETTE",null],["PLASTRON",null],["ANNEAU_DROITE",null],["ANNEAU_GAUCHE",null],["BOTTES",null],["CAPE",null],["EPAULETTES",null],["CEINTURE",null],["SECONDE_MAIN",null],["PREMIERE_MAIN",null],["ACCESSOIRES",null],["FAMILIER",null]]),n={firstAnneau:!0};return this.historic().split(",").forEach(r=>{let h=this.itemService.getItem(parseInt(r));h&&this.getItemType(h,n).forEach(y=>{e.set(y,this.imageService.getItemUrl(h.idImage)),t.set(y,h)})}),{images:e,items:t}});mapImageItems=oe(()=>this.itemsState().images);mapItems=oe(()=>this.itemsState().items);getItemType(i,e){switch(this.itemTypeServices.getItemType(i.itemTypeId)){case 8:return["CASQUE"];case 5:return["AMULETTE"];case 9:return["PLASTRON"];case 3:return e.firstAnneau?(e.firstAnneau=!1,["ANNEAU_DROITE"]):["ANNEAU_GAUCHE"];case 4:return["BOTTES"];case 6:return["CAPE"];case 10:return["EPAULETTES"];case 7:return["CEINTURE"];case 1:return["PREMIERE_MAIN","SECONDE_MAIN"];case 2:return["PREMIERE_MAIN"];case 13:case 12:return["SECONDE_MAIN"];case 11:return["ACCESSOIRES"];case 14:return["FAMILIER"];default:return[]}}getItemName(i){let e=this.mapItems().get(i);return e?e.title[this.translateService.currentLang]:""}applyHistoric(){this.itemHistoricsService.applyHistoric(this.historic())}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-historics-piece"]],inputs:{historic:[1,"historic"]},decls:15,vars:26,consts:[[1,"content",3,"appActivate"],[1,"row"],["appFallback","","alt","image",3,"src","matTooltip"]],template:function(e,t){e&1&&(l(0,"div",0),_("appActivate",function(){return t.applyHistoric()}),l(1,"div",1),p(2,"img",2)(3,"img",2)(4,"img",2)(5,"img",2)(6,"img",2)(7,"img",2)(8,"img",2)(9,"img",2)(10,"img",2)(11,"img",2)(12,"img",2)(13,"img",2)(14,"img",2),m()()),e&2&&(a(2),s("src",t.mapImageItems().get(t.ItemTypeBuild.CASQUE),k)("matTooltip",t.getItemName(t.ItemTypeBuild.CASQUE)),a(),s("src",t.mapImageItems().get(t.ItemTypeBuild.AMULETTE),k)("matTooltip",t.getItemName(t.ItemTypeBuild.AMULETTE)),a(),s("src",t.mapImageItems().get(t.ItemTypeBuild.PLASTRON),k)("matTooltip",t.getItemName(t.ItemTypeBuild.PLASTRON)),a(),s("src",t.mapImageItems().get(t.ItemTypeBuild.ANNEAU_GAUCHE),k)("matTooltip",t.getItemName(t.ItemTypeBuild.ANNEAU_GAUCHE)),a(),s("src",t.mapImageItems().get(t.ItemTypeBuild.ANNEAU_DROITE),k)("matTooltip",t.getItemName(t.ItemTypeBuild.ANNEAU_DROITE)),a(),s("src",t.mapImageItems().get(t.ItemTypeBuild.BOTTES),k)("matTooltip",t.getItemName(t.ItemTypeBuild.BOTTES)),a(),s("src",t.mapImageItems().get(t.ItemTypeBuild.CAPE),k)("matTooltip",t.getItemName(t.ItemTypeBuild.CAPE)),a(),s("src",t.mapImageItems().get(t.ItemTypeBuild.EPAULETTES),k)("matTooltip",t.getItemName(t.ItemTypeBuild.EPAULETTES)),a(),s("src",t.mapImageItems().get(t.ItemTypeBuild.CEINTURE),k)("matTooltip",t.getItemName(t.ItemTypeBuild.CEINTURE)),a(),s("src",t.mapImageItems().get(t.ItemTypeBuild.SECONDE_MAIN),k)("matTooltip",t.getItemName(t.ItemTypeBuild.SECONDE_MAIN)),a(),s("src",t.mapImageItems().get(t.ItemTypeBuild.PREMIERE_MAIN),k)("matTooltip",t.getItemName(t.ItemTypeBuild.PREMIERE_MAIN)),a(),s("src",t.mapImageItems().get(t.ItemTypeBuild.ACCESSOIRES),k)("matTooltip",t.getItemName(t.ItemTypeBuild.ACCESSOIRES)),a(),s("src",t.mapImageItems().get(t.ItemTypeBuild.FAMILIER),k)("matTooltip",t.getItemName(t.ItemTypeBuild.FAMILIER)))},dependencies:[Se,ke,S,Me,Ge],styles:[".content[_ngcontent-%COMP%]:hover{cursor:pointer;transform:scale(1.05);transition:transform .2s}[_nghost-%COMP%]{border-radius:10px}img[_ngcontent-%COMP%]{width:56px;height:56px;margin-right:10px}@media screen and (min-width:1001px)and (max-width:1700px){img[_ngcontent-%COMP%]{width:36px;height:36px}}"]})};function kr(o,i){o&1&&(l(0,"div",1),g(1),d(2,"translate"),m()),o&2&&(a(),Y(" ",u(2,1,"historics-list.nothing")," "))}function Sr(o,i){if(o&1&&p(0,"app-historics-piece",2),o&2){let e=i.$implicit;s("historic",e)}}function Er(o,i){if(o&1&&z(0,Sr,1,1,"app-historics-piece",2,be),o&2){let e=f();H(e.historics())}}var ui=class o{itemHistoricsService=c(Mn);historics=V(this.itemHistoricsService.historics$,{initialValue:[]});static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-historics-list"]],decls:3,vars:1,consts:[[1,"content"],[1,"no-historics"],[3,"historic"]],template:function(e,t){e&1&&(l(0,"div",0),C(1,kr,3,3,"div",1)(2,Er,2,0),m()),e&2&&(a(),x(t.historics().length===0?1:2))},dependencies:[di,S,T],styles:[".content[_ngcontent-%COMP%]{padding:10px;display:flex;flex-direction:column-reverse;justify-content:space-around;background-color:var(--color-surface-mid);border-radius:10px;width:100%;min-height:200px;z-index:100000}.content[_ngcontent-%COMP%]   .no-historics[_ngcontent-%COMP%]{margin:auto;font-size:16px;font-weight:400;text-align:center;padding:20px}"]})};var Wo=class o{itemChooseService=c(He);zenithService=c(Mo);recapStatsService=c(Eo);imageService=c(R);saveBuildService=c(To);openHistory=A(!1);maitrisesTotal=V(this.recapStatsService.maitrisesTotal$,{initialValue:0});resistancesTotal=V(this.recapStatsService.resistancesTotal$,{initialValue:0});poidsTotal=V(this.recapStatsService.poidsTotal$,{initialValue:0});ItemTypeEnum=Ve;IdActionsEnum=Q;copyToClipboard(){navigator.clipboard.writeText(window.location.href).then()}navigateToCraftku(){this.itemChooseService.idItems$.pipe(De(1)).subscribe(i=>{window.open("https://craftkfu.waklab.fr/?"+i,"_blank")})}navigateToWakfuIndex(){window.open("https://efusryuga.github.io/WakfuIndex/","_blank")}navigateToWakfocus(){window.open("https://www.dropbox.com/scl/fo/12onmfink7n0g5wj96f3y/AAxeJABC7OSe3UkPsbspDkg?rlkey=h2w7w4wp4jer3l0uw3jmy8q0k&st=nrkw68lp&dl=0","_blank")}toggleHistory(i){i.stopPropagation(),this.openHistory.update(e=>!e)}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-item-choose"]],hostBindings:function(e,t){e&1&&_("click",function(){return t.openHistory.set(!1)},Bi)},decls:24,vars:19,consts:[[1,"content"],[1,"buttonGroupe"],[1,"secondLine"],["appRipple","","aria-hidden","false","fontIcon","gavel","matTooltip","Craftku","alt","craftku","id","craftkuButton",3,"appActivate","matTooltipShowDelay"],[1,"items-scroll"],[1,"items-list"],["backgroundItemType","./aptitudes/EmplacementCoiffe.png",3,"itemType"],["backgroundItemType","./aptitudes/EmplacementAmulette.png",3,"itemType"],["backgroundItemType","./aptitudes/EmplacementPlastron.png",3,"itemType"],["backgroundItemType","./aptitudes/EmplacementAnneauGauche.png",3,"itemType"],["backgroundItemType","./aptitudes/EmplacementAnneauDroite.png",3,"itemType","indexItem"],["backgroundItemType","./aptitudes/EmplacementBottes.png",3,"itemType"],["backgroundItemType","./aptitudes/EmplacementCape.png",3,"itemType"],["backgroundItemType","./aptitudes/EmplacementEpaulettes.png",3,"itemType"],["backgroundItemType","./aptitudes/EmplacementCeinture.png",3,"itemType"],["backgroundItemType","./aptitudes/EmplacementSecondeMain.png",3,"itemType"],["backgroundItemType","./aptitudes/EmplacementPremi\xE8reMain.png",3,"itemType"],["backgroundItemType","./aptitudes/EmplacementEmbl\xE8me.png",3,"itemType"],["backgroundItemType","./aptitudes/EmplacementFamilier.png",3,"itemType"],["appRipple","",1,"secondLine"],[1,"historique",3,"appActivate"],["fontIcon","history"]],template:function(e,t){e&1&&(l(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-icon",3),_("appActivate",function(){return t.navigateToCraftku()}),m()()(),l(4,"div",4)(5,"div",5),p(6,"app-item-choose-display",6)(7,"app-item-choose-display",7)(8,"app-item-choose-display",8)(9,"app-item-choose-display",9)(10,"app-item-choose-display",10)(11,"app-item-choose-display",11)(12,"app-item-choose-display",12)(13,"app-item-choose-display",13)(14,"app-item-choose-display",14)(15,"app-item-choose-display",15)(16,"app-item-choose-display",16)(17,"app-item-choose-display",17)(18,"app-item-choose-display",18),m()(),p(19,"app-historics-list"),l(20,"div",1)(21,"div",19)(22,"div",20),_("appActivate",function(r){return t.toggleHistory(r)}),p(23,"mat-icon",21),m()()()()),e&2&&(a(3),s("matTooltipShowDelay",300),a(2),M("open",t.openHistory()),a(),s("itemType",t.ItemTypeEnum.CASQUE),a(),s("itemType",t.ItemTypeEnum.AMULETTE),a(),s("itemType",t.ItemTypeEnum.PLASTRON),a(),s("itemType",t.ItemTypeEnum.ANNEAU),a(),s("itemType",t.ItemTypeEnum.ANNEAU)("indexItem",1),a(),s("itemType",t.ItemTypeEnum.BOTTES),a(),s("itemType",t.ItemTypeEnum.CAPE),a(),s("itemType",t.ItemTypeEnum.EPAULETTES),a(),s("itemType",t.ItemTypeEnum.CEINTURE),a(),s("itemType",t.ItemTypeEnum.BOUCLIER),a(),s("itemType",t.ItemTypeEnum.UNE_MAIN),a(),s("itemType",t.ItemTypeEnum.ACCESSOIRES),a(),s("itemType",t.ItemTypeEnum.FAMILIER),a(),M("open",t.openHistory()))},dependencies:[pi,dt,Le,Se,ke,S,Ge,ui,In],styles:["[_nghost-%COMP%]{display:block;overflow:visible;min-width:0}.content[_ngcontent-%COMP%]{display:flex;align-items:center;perspective:700px;perspective-origin:50% 25%;position:relative;align-content:space-between;justify-content:space-around;flex-wrap:nowrap;overflow:visible}.content[_ngcontent-%COMP%]   .nouveauBuild[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .historique[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:row;justify-content:space-around;margin-left:5px;height:30px;width:100%;color:var(--color-text-inverse);font-weight:400;font-size:16px;cursor:pointer}.content[_ngcontent-%COMP%]   .buttonGroupe[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column;width:fit-content;flex-shrink:0}.content[_ngcontent-%COMP%]   .buttonGroupe[_ngcontent-%COMP%]   .secondLine[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:row;z-index:101000;margin-bottom:5px}.content[_ngcontent-%COMP%]   .buttonGroupe[_ngcontent-%COMP%]   .secondLine[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .buttonGroupe[_ngcontent-%COMP%]   .secondLine[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background:var(--color-surface-strong);box-shadow:0 4px 6px var(--shadow-panel-color)}.content[_ngcontent-%COMP%]   .buttonGroupe[_ngcontent-%COMP%]   .secondLine[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:active, .content[_ngcontent-%COMP%]   .buttonGroupe[_ngcontent-%COMP%]   .secondLine[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:active{transform:translateY(2px)}.content[_ngcontent-%COMP%]   .buttonGroupe[_ngcontent-%COMP%]   .secondLine[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--color-text-inverse);width:30px;height:30px;text-align:center;align-content:center;padding:0 2px;cursor:pointer;margin-left:5px}.content[_ngcontent-%COMP%]   .items-scroll[_ngcontent-%COMP%]{flex:1 1 auto;min-width:0;max-width:100%;overflow-x:auto;overflow-y:hidden;scrollbar-width:thin}.content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]{display:flex;width:max-content;min-width:100%;justify-content:space-around}.content[_ngcontent-%COMP%]   .historique[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .dark-mode[_ngcontent-%COMP%]{display:contents}.content[_ngcontent-%COMP%]   .historique[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .dark-mode[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--color-text-inverse);width:30px;height:30px;text-align:center;align-content:center;cursor:pointer}.content[_ngcontent-%COMP%]   .historique[_ngcontent-%COMP%]:active, .content[_ngcontent-%COMP%]   .dark-mode[_ngcontent-%COMP%]:active{transform:translateY(2px)}.content[_ngcontent-%COMP%]   .dark-mode[_ngcontent-%COMP%]{margin-left:5px}.content[_ngcontent-%COMP%]   app-item-choose-display[_ngcontent-%COMP%]{margin-left:10px;flex-shrink:0}.content[_ngcontent-%COMP%]   app-item-choose-display[_ngcontent-%COMP%]:last-child{margin-right:10px}.content[_ngcontent-%COMP%]   app-item-choose-display[_ngcontent-%COMP%]:hover{transform:scale(1.06)}.content[_ngcontent-%COMP%]   app-historics-list[_ngcontent-%COMP%]{border-radius:10px;overflow:hidden;position:absolute;top:100%;left:130px;z-index:200;transform-origin:top center;clip-path:inset(0 0 100% 0);transform:translateY(-12px);opacity:0;pointer-events:none;transition:clip-path .4s cubic-bezier(.25,.46,.45,.94),transform .4s cubic-bezier(.25,.46,.45,.94),opacity .3s ease}.content[_ngcontent-%COMP%]   app-historics-list.open[_ngcontent-%COMP%]{clip-path:inset(0 0 0 0);transform:translateY(0);opacity:1;pointer-events:auto;transition:clip-path .45s cubic-bezier(.25,.46,.45,.94) .25s,transform .45s cubic-bezier(.25,.46,.45,.94) .25s,opacity .45s ease .25s}@media screen and (min-width:1201px){.content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]{transform-origin:top center;transform-style:preserve-3d;backface-visibility:hidden;transition:transform .7s cubic-bezier(.25,.46,.45,.94),box-shadow .7s ease-in-out;transform:rotateX(0)}.content[_ngcontent-%COMP%]   .items-list.open[_ngcontent-%COMP%]{transform:rotateX(35deg);box-shadow:0 20px 40px var(--shadow-panel-color)}}@media screen and (max-width:1200px){.content[_ngcontent-%COMP%]   .buttonGroupe[_ngcontent-%COMP%]:first-child{display:none}.content[_ngcontent-%COMP%]   .items-scroll[_ngcontent-%COMP%]{flex:1 1 auto;min-width:0}}@media screen and (max-width:1000px){.content[_ngcontent-%COMP%]{flex-wrap:wrap;height:100%}.content[_ngcontent-%COMP%]   .items-scroll[_ngcontent-%COMP%]{flex:1 1 100%;width:100%;max-width:100%}.content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]{flex-direction:column;width:100%;min-width:0}.content[_ngcontent-%COMP%]   app-item-choose-display[_ngcontent-%COMP%]{margin:0 auto!important}span[_ngcontent-%COMP%]{display:none!important}}"]})};export{ti as a,ai as b,ci as c,mi as d,Tn as e,Po as f,he as g,Do as h,ki as i,Fo as j,Rn as k,qt as l,Tt as m,Gn as n,Dn as o,Fn as p,Nn as q,Un as r,Bn as s,Ln as t,Vn as u,ei as v,Go as w,Qo as x,Wo as y};
